// ==================================================
// ESTADO GLOBAL
// ==================================================
let usuario = null;
let sonidoActivado = true;
let pantallaActual = 1;
let origenPdf = 2;
let modoSeleccionado = null;
let temariosSeleccionados = [];
let preguntasExamen = [];
let respuestasUsuario = {};
let tiempoInicio = 0;
let tiempoTranscurrido = 0;
let cronometroInterval = null;

// ==================================================
// MAPA DE IMÁGENES POR ID
// ==================================================
const RUTA_IMG = 'assets/img/senales/';
const MAPA_IMAGENES = {
  15:  'b-pare.png',
  20:  'semaforo-vertical-amarillo.png',
  21:  'a-curva-der.png',
  29:  'a-ninos.png',
  38:  'semaforo-vertical-verde.png',
  39:  'semaforo-vertical.png',
  52:  'a-curva-der.png',
  60:  'b-ceda-paso.png',
  68:  'c-prohibido-giro-u.png',
  70:  'a-paso-peatones.png',
  72:  'a-curva-der.png',
  73:  'a-desvio.png',
  78:  'semaforo-rojo-intermitente.png',
  79:  'semaforo-flecha-izq.png',
  80:  'semaforo-carril.png',
  85:  'c-prohibido-tunel.png',
  91:  'semaforo-paso-nivel-amarillo.png',
  96:  'semaforo-contador.png',
  104: 'c-prohibido-adelantar.png',
  123: 'agente-alto-brazos.png',
  124: 'agente-luz-roja.png',
  125: 'bandera-roja-policia.png',
  126: 'bandera-amarilla-policia.png',
  133: 'c-prohibido-traccion-animal.png',
  136: 'b-pare.png',
  139: 'a-paso-nivel-sin-proteccion.png',
  140: 'a-paso-peatones.png',
  145: 'c-prohibido-giro-u.png',
  160: 'c-prohibido-adelantar.png',
  161: 'c-prohibido-peatones.png',
  173: 'c-prohibido-ciclos.png',
  180: 'c-prohibido-tunel.png'
};

function obtenerImagen(idPregunta) {
  const archivo = MAPA_IMAGENES[idPregunta];
  return archivo ? RUTA_IMG + archivo : null;
}

// ==================================================
// AUDIOS
// ==================================================
const sonidos = {
  click:      new Audio('assets/audio/sfx/click.mp3'),
  correcto:   new Audio('assets/audio/sfx/correcto.mp3'),
  incorrecto: new Audio('assets/audio/sfx/incorrecto.mp3'),
  finalizar:  new Audio('assets/audio/sfx/finalizar.mp3')
};

sonidos.click.volume      = 0.3;
sonidos.correcto.volume   = 0.5;
sonidos.incorrecto.volume = 0.5;
sonidos.finalizar.volume  = 0.6;

Object.values(sonidos).forEach(a => { a.preload = 'auto'; a.load(); });

function reproducirSonido(tipo) {
  if (!sonidoActivado) return;
  const audio = sonidos[tipo];
  if (!audio) return;
  try {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch (e) {}
}

function toggleSound() {
  sonidoActivado = !sonidoActivado;
  localStorage.setItem('sonido', sonidoActivado ? 'on' : 'off');
  document.getElementById('btn-sound').innerText = sonidoActivado ? "🔊 ON" : "🔇 OFF";
}

// ==================================================
// TEMA
// ==================================================
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('tema', isDark ? 'dark' : 'light');
  document.getElementById('btn-theme').innerText = isDark ? '☀️ Claro' : '🌙 Oscuro';
}

function cargarTema() {
  if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('btn-theme').innerText = '☀️ Claro';
  }
  if (localStorage.getItem('sonido') === 'off') {
    sonidoActivado = false;
    document.getElementById('btn-sound').innerText = '🔇 OFF';
  }
}

// ==================================================
// NAVEGACIÓN
// ==================================================
function navegar(numeroPantalla) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  const destino = document.getElementById('pantalla-' + numeroPantalla);
  if (destino) {
    destino.classList.add('activa');
    pantallaActual = numeroPantalla;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Aplicar fondo solo en la pantalla de login
  if (numeroPantalla === 1) {
    document.body.classList.add('pantalla-login');
  } else {
    document.body.classList.remove('pantalla-login');
  }

  if (numeroPantalla === 2) actualizarPrincipal();
}

// ==================================================
// VALIDACIÓN
// ==================================================
function esSoloLetras(texto) {
  return /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(texto);
}

// ==================================================
// LOGIN
// ==================================================
function continuarLogin() {
  const inputNombre = document.getElementById('input-nombre');
  const inputApellido = document.getElementById('input-apellido');
  const selectLicencia = document.getElementById('select-licencia');
  const errorMsg = document.getElementById('error-login');

  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const licencia = selectLicencia.value;

  inputNombre.classList.remove('error');
  inputApellido.classList.remove('error');
  selectLicencia.classList.remove('error');
  errorMsg.innerText = '';

  if (!nombre) {
    inputNombre.classList.add('error');
    errorMsg.innerText = '⚠️ Escribe tu nombre.';
    reproducirSonido('incorrecto');
    return;
  }
  if (!esSoloLetras(nombre)) {
    inputNombre.classList.add('error');
    errorMsg.innerText = '⚠️ El nombre solo puede tener letras.';
    reproducirSonido('incorrecto');
    return;
  }
  if (!apellido) {
    inputApellido.classList.add('error');
    errorMsg.innerText = '⚠️ Escribe tu apellido.';
    reproducirSonido('incorrecto');
    return;
  }
  if (!esSoloLetras(apellido)) {
    inputApellido.classList.add('error');
    errorMsg.innerText = '⚠️ El apellido solo puede tener letras.';
    reproducirSonido('incorrecto');
    return;
  }
  if (!licencia) {
    selectLicencia.classList.add('error');
    errorMsg.innerText = '⚠️ Selecciona una licencia.';
    reproducirSonido('incorrecto');
    return;
  }

  usuario = { nombre, apellido, licencia };
  localStorage.setItem('usuario', JSON.stringify(usuario));

  reproducirSonido('correcto');
  navegar(2);
}

function cerrarSesion() {
  if (!confirm('¿Seguro que quieres cerrar sesión? Se borrarán tus datos guardados.')) return;
  localStorage.removeItem('usuario');
  localStorage.removeItem('historial');
  localStorage.removeItem('preguntaStats');
  usuario = null;
  document.getElementById('input-nombre').value = '';
  document.getElementById('input-apellido').value = '';
  document.getElementById('select-licencia').value = '';
  navegar(1);
}

function cargarUsuario() {
  const guardado = localStorage.getItem('usuario');
  if (guardado) {
    try { usuario = JSON.parse(guardado); } catch (e) { usuario = null; }
  }
}

// ==================================================
// PANTALLA 2: PRINCIPAL
// ==================================================
function actualizarPrincipal() {
  if (!usuario) return;

  const saludo = document.getElementById('saludo-usuario');
  if (saludo) {
    saludo.innerHTML = `Hola, <strong>${usuario.nombre} ${usuario.apellido}</strong> 👋`;
  }

  const historial = JSON.parse(localStorage.getItem('historial') || '[]');

  const record = historial.length ? Math.max(...historial.map(h => h.porcentaje)) : 0;
  const dominio = historial.length
    ? Math.round(historial.reduce((s, h) => s + h.porcentaje, 0) / historial.length)
    : 0;

  document.getElementById('stat-record').innerText = record + '%';
  document.getElementById('stat-dominio').innerText = dominio + '%';
  document.getElementById('stat-intentos').innerText = historial.length;

  // Mejor tiempo: de todos los exámenes con tiempo registrado
const conTiempo = historial.filter(h => h.tiempo && h.tiempo > 0);
if (conTiempo.length) {
  const mejor = Math.min(...conTiempo.map(h => h.tiempo));
  document.getElementById('stat-tiempo').innerText = formatearTiempo(mejor);
} else {
  document.getElementById('stat-tiempo').innerText = '--:--';
}

  mostrarFallos();
  actualizarGamificacionUI();
}

function formatearTiempo(segundos) {
  const m = Math.floor(segundos / 60);
  const s = segundos % 60;
  return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}

function mostrarFallos() {
  const contenedor = document.getElementById('fallos-container');
  if (!contenedor) return;

  if (typeof preguntas === 'undefined' || !Array.isArray(preguntas)) {
    contenedor.innerHTML = '<p class="fallos-vacio">Error al cargar las preguntas.</p>';
    return;
  }

  const stats = JSON.parse(localStorage.getItem('preguntaStats') || '{}');

  const fallos = Object.entries(stats)
    .map(([id, datos]) => ({ id: parseInt(id, 10), ...datos }))
    .filter(f => f.fallos > 0)
    .sort((a, b) => b.fallos - a.fallos);

  if (fallos.length === 0) {
    contenedor.innerHTML = '<p class="fallos-vacio">Aún no has cometido errores. ¡Bien hecho! 🎉</p>';
    return;
  }

  contenedor.innerHTML = '';
  fallos.forEach(f => {
    const pregunta = preguntas.find(p => p.id === f.id);
    if (!pregunta) return;

    const div = document.createElement('div');
    div.className = 'fallo-item';
    div.innerHTML = `
      <div><span class="fallo-contador">❌ ${f.fallos} ${f.fallos === 1 ? 'vez' : 'veces'}</span></div>
      <div class="fallo-texto">${pregunta.pregunta}</div>
    `;
    contenedor.appendChild(div);
  });
}

// ==================================================
// SELECCIÓN DE TEMARIOS
// ==================================================
function continuarSeleccion(modo) {
  const checkboxes = document.querySelectorAll(`input[name="temario-${modo}"]:checked`);
  const seleccionados = Array.from(checkboxes).map(cb => cb.value);

  if (seleccionados.length === 0) {
    reproducirSonido('incorrecto');
    alert('Selecciona al menos un temario para continuar.');
    return;
  }

  modoSeleccionado = modo;
  temariosSeleccionados = seleccionados;
  reproducirSonido('correcto');

  prepararExamen(modo);
}

// ==================================================
// PREPARAR EXAMEN
// ==================================================
function prepararExamen(modo) {
  if (typeof preguntas === 'undefined' || !Array.isArray(preguntas)) {
    alert('Error: no se cargaron las preguntas. Revisa preguntas.js');
    return;
  }

  let fuente = preguntas.filter(p => temariosSeleccionados.includes(p.categoria));
  if (fuente.length === 0) fuente = [...preguntas];

  preguntasExamen = mezclarArray(fuente).slice(0, 20);
  respuestasUsuario = {};

  if (modo === 'evaluacion') {
    iniciarCronometro();
    renderizarPreguntas('evaluacion');
    navegar(6);
  } else {
    renderizarPreguntas('practica');
    navegar(5);
  }
}

function mezclarArray(arr) {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// ==================================================
// CRONÓMETRO
// ==================================================
function iniciarCronometro() {
  detenerCronometro();
  tiempoInicio = Date.now();
  tiempoTranscurrido = 0;

  const display = document.getElementById('cronometro-display');
  if (display) display.innerText = '⏱️ 00:00';

  cronometroInterval = setInterval(() => {
    tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
    const d = document.getElementById('cronometro-display');
    if (d) d.innerText = '⏱️ ' + formatearTiempo(tiempoTranscurrido);
  }, 1000);
}

function detenerCronometro() {
  if (cronometroInterval) {
    clearInterval(cronometroInterval);
    cronometroInterval = null;
  }
}

// ==================================================
// RENDERIZAR PREGUNTAS
// ==================================================
function renderizarPreguntas(modo) {
  const contenedorId = modo === 'practica' ? 'practica-preguntas' : 'evaluacion-preguntas';
  const contenedor = document.getElementById(contenedorId);
  const progresoId = modo === 'practica' ? 'practica-progreso' : 'evaluacion-progreso';
  const progreso = document.getElementById(progresoId);

  if (!contenedor) return;

  contenedor.innerHTML = '';
  if (progreso) progreso.innerText = `Pregunta 0 de ${preguntasExamen.length}`;

  function actualizarProgreso() {
    const respondidas = Object.keys(respuestasUsuario).length;
    if (progreso) progreso.innerText = `Pregunta ${respondidas} de ${preguntasExamen.length}`;
  }

  preguntasExamen.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `card-${modo}-${index}`;

    const title = document.createElement('div');
    title.className = 'question-title';
    title.innerText = `${index + 1}. ${q.pregunta}`;
    card.appendChild(title);

    const imgSrc = obtenerImagen(q.id);
    if (imgSrc) {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = 'Imagen de la pregunta';
      img.className = 'question-image';
      img.onerror = function() { this.style.display = 'none'; };
      card.appendChild(img);
    }

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    const opcionesComoObjetos = q.opciones.map((texto, i) => ({
      texto,
      esCorrecta: i === q.respuesta
    }));
    const opcionesMezcladas = mezclarArray(opcionesComoObjetos);

    opcionesMezcladas.forEach((opcion, opIndex) => {
      const label = document.createElement('label');
      label.className = 'option-label';
      label.id = `label-${modo}-${index}-${opIndex}`;

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `pregunta-${modo}-${index}`;
      radio.value = opcion.esCorrecta ? 'true' : 'false';
      radio.dataset.texto = opcion.texto;

      radio.addEventListener('change', () => {
        respuestasUsuario[index] = {
          id: q.id,
          textoElegido: opcion.texto,
          esCorrecta: opcion.esCorrecta,
          categoria: q.categoria
        };

        reproducirSonido('click');
        actualizarProgreso();

        if (modo === 'practica') {
          document.querySelectorAll(`input[name="pregunta-practica-${index}"]`)
            .forEach(r => r.disabled = true);

          opcionesMezcladas.forEach((op, oIdx) => {
            const lbl = document.getElementById(`label-practica-${index}-${oIdx}`);
            if (op.esCorrecta) lbl.classList.add('correct-answer');
          });

          if (!opcion.esCorrecta) {
            label.classList.add('incorrect-answer');
            reproducirSonido('incorrecto');
          } else {
            reproducirSonido('correcto');
          }

          const expl = document.getElementById(`expl-practica-${index}`);
          if (expl) {
            const userSpan = expl.querySelector('.expl-user-text');
            if (userSpan) userSpan.textContent = `"${opcion.texto}"`;
            const lineaUser = expl.querySelector('.expl-user');
            if (lineaUser) {
              lineaUser.classList.add(opcion.esCorrecta ? 'expl-user-ok' : 'expl-user-error');
            }
            expl.style.display = 'block';
          }
        }
      });

      label.appendChild(radio);
      label.appendChild(document.createTextNode(' ' + opcion.texto));
      optionsDiv.appendChild(label);
    });

    card.appendChild(optionsDiv);

    const explDiv = document.createElement('div');
    explDiv.className = 'explicacion';
    explDiv.id = `expl-${modo}-${index}`;

    const textoCorrecto = q.opciones[q.respuesta];
    const textoExpl = q.explicacion || 'Sin explicación disponible.';
    explDiv.innerHTML = `
      <div class="expl-line expl-user">
        <strong>❌ Tu respuesta:</strong> <span class="expl-user-text">—</span>
      </div>
      <div class="expl-line expl-correct">
        <strong>✅ Correcta:</strong> ${textoCorrecto}
      </div>
      <div class="expl-line expl-text">
        💡 ${textoExpl}
      </div>
    `;
    card.appendChild(explDiv);

    contenedor.appendChild(card);
  });
}

// ==================================================
// SALIR DEL EXAMEN
// ==================================================
function salirExamen(pantallaRegreso) {
  if (!confirm('¿Seguro que quieres salir? Perderás las respuestas actuales.')) return;
  detenerCronometro();
  reproducirSonido('click');
  navegar(pantallaRegreso);
}

// ==================================================
// ENVIAR EXAMEN
// ==================================================
function enviarExamen(modo) {
  const respondidas = Object.keys(respuestasUsuario).length;
  const total = preguntasExamen.length;

  if (respondidas < total) {
    if (!confirm(`Te faltan ${total - respondidas} preguntas sin responder. ¿Enviar igual?`)) return;
  }

  if (modo === 'evaluacion') {
    detenerCronometro();
    tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
  }

  reproducirSonido('finalizar');

  // Calcular aciertos PRIMERO
  let aciertos = 0;
  const detalle = [];

  preguntasExamen.forEach((q, index) => {
    const resp = respuestasUsuario[index];
    const esCorrecta = resp && resp.esCorrecta;

    if (esCorrecta) aciertos++;

    actualizarStatsPregunta(q.id, esCorrecta);

    detalle.push({
      index,
      id: q.id,
      pregunta: q.pregunta,
      textoElegido: resp ? resp.textoElegido : '(no respondiste)',
      textoCorrecto: q.opciones[q.respuesta],
      esCorrecta: esCorrecta,
      explicacion: q.explicacion || '',
      categoria: q.categoria
    });
  });

  const porcentaje = Math.round((aciertos / total) * 100);

  // Ahora sí, guardar y procesar gamificación
  if (modo === 'evaluacion') {
    guardarEnHistorial(aciertos, total, porcentaje, tiempoTranscurrido);
    const temariosDelExamen = [...new Set(preguntasExamen.map(p => p.categoria))];
    procesarGamificacion(aciertos, total, porcentaje, modo, temariosDelExamen);
  }

  if (porcentaje >= 70) reproducirSonido('correcto');
  else reproducirSonido('incorrecto');

  mostrarResultados(aciertos, total, porcentaje, detalle, modo);
  navegar(7);
}
function actualizarStatsPregunta(idPregunta, esCorrecta) {
  const stats = JSON.parse(localStorage.getItem('preguntaStats') || '{}');
  const clave = String(idPregunta);

  if (!stats[clave]) stats[clave] = { aciertos: 0, fallos: 0 };

  if (esCorrecta) stats[clave].aciertos++;
  else stats[clave].fallos++;

  localStorage.setItem('preguntaStats', JSON.stringify(stats));
}

function guardarEnHistorial(aciertos, total, porcentaje, tiempo) {
  const historial = JSON.parse(localStorage.getItem('historial') || '[]');
  historial.push({
    fecha: new Date().toLocaleString(),
    aciertos,
    total,
    porcentaje,
    tiempo
  });
  localStorage.setItem('historial', JSON.stringify(historial));
}

// ==================================================
// MOSTRAR RESULTADOS
// ==================================================
function mostrarResultados(aciertos, total, porcentaje, detalle, modo) {
  const emoji = document.getElementById('resultado-emoji');
  const titulo = document.getElementById('resultado-titulo');
  const aprobado = porcentaje >= 70;

  if (aprobado) {
    emoji.innerText = '🎉';
    titulo.innerText = '¡Aprobaste!';
    titulo.style.color = 'var(--success-color)';
  } else {
    emoji.innerText = '⚠️';
    titulo.innerText = 'Necesitas repasar más';
    titulo.style.color = 'var(--error-color)';
  }

  if (modo === 'practica') {
    titulo.innerText += ' (Modo Práctica)';
  }

  document.getElementById('resultado-aciertos').innerText = `${aciertos}/${total}`;
  document.getElementById('resultado-porcentaje').innerText = `${porcentaje}%`;

  const tiempoEl = document.getElementById('resultado-tiempo');
  if (modo === 'evaluacion') {
    tiempoEl.innerText = formatearTiempo(tiempoTranscurrido);
  } else {
    tiempoEl.innerText = '—';
  }

  const temariosUnicos = [...new Set(preguntasExamen.map(p => p.categoria))];
  const nombresTemarios = {
    'vialidad': '🛣️ Vialidad y Señalización',
    'circulacion': '🚗 Circulación y Maniobras',
    'prohibiciones': '⛔ Prohibiciones y Velocidad',
    'vehiculos': '🔧 Vehículos y Documentación',
    'licencias': '📄 Licencias y Sanciones'
  };

  const listaTemarios = document.getElementById('resultado-lista-temarios');
  listaTemarios.innerHTML = temariosUnicos
    .map(t => `<span>${nombresTemarios[t] || t}</span>`)
    .join('');

  const detalleCont = document.getElementById('resultado-detalle');
  detalleCont.innerHTML = '';

  detalle.forEach(d => {
    const div = document.createElement('div');
    div.className = 'detalle-item ' + (d.esCorrecta ? 'ok' : 'fail');

    const numero = d.index + 1;
    let html = `<div class="detalle-pregunta">${numero}. ${d.pregunta}</div>`;
    html += `<div class="detalle-respuesta">👤 Tu respuesta: <strong class="${d.esCorrecta ? 'ok' : 'fail'}">${d.textoElegido}</strong></div>`;
    if (!d.esCorrecta) {
      html += `<div class="detalle-respuesta">✅ Correcta: <strong class="ok">${d.textoCorrecto}</strong></div>`;
    }

    const articulo = extraerArticulo(d.pregunta) || extraerArticulo(d.explicacion);
    if (articulo) {
      html += `<div class="detalle-articulo">
        📄 <a href="#" onclick="irAPdfArticulo(${articulo}); return false;">
          Ver Artículo ${articulo} en el PDF
        </a>
      </div>`;
    }

    div.innerHTML = html;
    detalleCont.appendChild(div);
  });
}

function extraerArticulo(texto) {
  if (!texto) return null;
  const match = texto.match(/Art[íi]culo\s+(\d+)/i);
  return match ? parseInt(match[1], 10) : null;
}

// ==================================================
// PDF (placeholder)
// ==================================================
async function irAPdf(pantallaOrigen) {
  origenPdf = pantallaOrigen;
  navegar(8);
  if (!pdfDoc) {
    await cargarPdf();
  }
}

async function irAPdfArticulo(numeroArticulo) {
  origenPdf = 7;
  navegar(8);
  await cargarPdf();
  await irAArticulo(numeroArticulo);
}
// ==================================================
// PDF CON PDF.JS
// ==================================================
const RUTA_PDF = 'assets/pdf/ley109.pdf';

let pdfDoc = null;
let pdfPaginaActual = 1;
let pdfEscala = 1.0;
let pdfRenderTask = null;
let pdfCargando = false;

// Configurar worker de PDF.js
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'libs/pdfjs/pdf.worker.min.js';
}

async function cargarPdf() {
  if (pdfDoc || pdfCargando) return pdfDoc;
  if (typeof pdfjsLib === 'undefined') {
    console.error('PDF.js no está cargado');
    return null;
  }

  pdfCargando = true;
  const loading = document.getElementById('pdf-loading');

  try {
    const loadingTask = pdfjsLib.getDocument(RUTA_PDF);
    pdfDoc = await loadingTask.promise;
    pdfCargando = false;

    if (loading) loading.classList.add('oculto');
    actualizarInfoPdf();
    await renderizarPagina(pdfPaginaActual);
    return pdfDoc;
  } catch (error) {
    pdfCargando = false;
    console.error('Error cargando PDF:', error);
    if (loading) loading.innerHTML = '❌ No se pudo cargar el PDF. Verifica que exista en:<br><code>assets/pdf/ley109.pdf</code>';
    return null;
  }
}

async function renderizarPagina(numeroPagina) {
  if (!pdfDoc) return;

  // Cancelar render anterior si existe
  if (pdfRenderTask) {
    try { pdfRenderTask.cancel(); } catch(e) {}
    pdfRenderTask = null;
  }

  const page = await pdfDoc.getPage(numeroPagina);
  const canvas = document.getElementById('pdf-canvas');
  const context = canvas.getContext('2d');

  // Ajustar resolución según DPI del dispositivo
  const dpr = window.devicePixelRatio || 1;
  const viewport = page.getViewport({ scale: pdfEscala });

  canvas.width = viewport.width * dpr;
  canvas.height = viewport.height * dpr;
  canvas.style.width = viewport.width + 'px';
  canvas.style.height = viewport.height + 'px';

  context.setTransform(dpr, 0, 0, dpr, 0, 0);

  const renderContext = {
    canvasContext: context,
    viewport: viewport
  };

  pdfRenderTask = page.render(renderContext);
  try {
    await pdfRenderTask.promise;
  } catch (e) {
    // Render cancelado, ignorar
  }

  actualizarInfoPdf();
}

function actualizarInfoPdf() {
  const info = document.getElementById('pdf-pagina-info');
  if (info && pdfDoc) {
    info.innerText = `Página ${pdfPaginaActual} de ${pdfDoc.numPages}`;
  }

  const zoomInfo = document.getElementById('pdf-zoom-info');
  if (zoomInfo) {
    zoomInfo.innerText = Math.round(pdfEscala * 100) + '%';
  }
}

async function pdfAnterior() {
  if (!pdfDoc || pdfPaginaActual <= 1) return;
  pdfPaginaActual--;
  await renderizarPagina(pdfPaginaActual);
}

async function pdfSiguiente() {
  if (!pdfDoc || pdfPaginaActual >= pdfDoc.numPages) return;
  pdfPaginaActual++;
  await renderizarPagina(pdfPaginaActual);
}

async function pdfZoom(direccion) {
  if (!pdfDoc) return;
  const nuevaEscala = pdfEscala + (direccion * 0.25);
  if (nuevaEscala < 0.5 || nuevaEscala > 3) return;
  pdfEscala = nuevaEscala;
  await renderizarPagina(pdfPaginaActual);
}

async function pdfAjustarAncho() {
  if (!pdfDoc) return;
  const page = await pdfDoc.getPage(pdfPaginaActual);
  const viewport = page.getViewport({ scale: 1 });
  const viewer = document.getElementById('pdf-viewer');
  const anchoDisponible = viewer.clientWidth - 40;
  pdfEscala = anchoDisponible / viewport.width;
  await renderizarPagina(pdfPaginaActual);
}

// Buscar artículo en el PDF
async function buscarArticuloPdf() {
  const input = document.getElementById('pdf-buscar-articulo');
  const numero = parseInt(input.value.trim(), 10);

  if (isNaN(numero) || numero < 1) {
    alert('Escribe un número de artículo válido (ej: 5)');
    return;
  }

  await irAArticulo(numero);
}

async function irAArticulo(numeroArticulo) {
  if (!pdfDoc) {
    await cargarPdf();
  }
  if (!pdfDoc) return;

  const loading = document.getElementById('pdf-loading');
  if (loading) {
    loading.classList.remove('oculto');
    loading.innerText = `🔍 Buscando Artículo ${numeroArticulo}...`;
  }

  // Buscar en el texto de cada página
  const patrones = [
    `ARTÍCULO ${numeroArticulo}.-`,
    `ARTÍCULO ${numeroArticulo} .-`,
    `ARTÍCULO ${numeroArticulo}.`,
    `ARTÍCULO ${numeroArticulo} `
  ];

  let paginaEncontrada = null;

  for (let i = 1; i <= pdfDoc.numPages; i++) {
    try {
      const page = await pdfDoc.getPage(i);
      const textContent = await page.getTextContent();
      const texto = textContent.items.map(item => item.str).join(' ');

      for (const patron of patrones) {
        if (texto.includes(patron)) {
          paginaEncontrada = i;
          break;
        }
      }

      if (paginaEncontrada) break;
    } catch (e) {
      console.warn('Error procesando página', i, e);
    }
  }

  if (loading) loading.classList.add('oculto');

  if (paginaEncontrada) {
    pdfPaginaActual = paginaEncontrada;
    await renderizarPagina(pdfPaginaActual);

    // Efecto visual de "encontrado"
    const canvas = document.getElementById('pdf-canvas');
    if (canvas) {
      canvas.classList.add('pulso');
      setTimeout(() => canvas.classList.remove('pulso'), 2500);
    }

    // Scroll al visor
    const viewer = document.getElementById('pdf-viewer');
    if (viewer) viewer.scrollTop = 0;
  } else {
    alert(`No se encontró el Artículo ${numeroArticulo} en el PDF.`);
  }
}
// ==================================================
// SERVICE WORKER (PWA offline)
// ==================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('✅ SW registrado:', reg.scope))
      .catch(err => console.warn('⚠️ SW no registrado:', err));
  });
}
// ==================================================
// GAMIFICACIÓN: XP, NIVELES Y MEDALLAS
// ==================================================

// Definición de niveles
const NIVELES = [
  { nivel: 1, nombre: 'Novato',      emoji: '🌱', xpMin: 0,    xpMax: 99 },
  { nivel: 2, nombre: 'Aprendiz',    emoji: '📗', xpMin: 100,  xpMax: 249 },
  { nivel: 3, nombre: 'Conductor',   emoji: '🚗', xpMin: 250,  xpMax: 499 },
  { nivel: 4, nombre: 'Experto',     emoji: '🏎️', xpMin: 500,  xpMax: 999 },
  { nivel: 5, nombre: 'Maestro',     emoji: '🏆', xpMin: 1000, xpMax: 9999 }
];

// Definición de medallas
const MEDALLAS = [
  { id: 'primer_examen',  emoji: '🎓', nombre: 'Primer Paso',   desc: 'Completa tu primer examen' },
  { id: 'primer_aprobado', emoji: '🏆', nombre: 'Aprobado',     desc: 'Aprueba un examen por primera vez' },
  { id: 'perfecto',       emoji: '💯', nombre: 'Perfecto',      desc: 'Obtén 100% en un examen' },
  { id: 'racha_3',        emoji: '🔥', nombre: 'En Racha',      desc: '3 aprobados seguidos' },
  { id: 'racha_5',        emoji: '⚡', nombre: 'Imparable',     desc: '5 aprobados seguidos' },
  { id: 'racha_10',       emoji: '🚀', nombre: 'Legendario',    desc: '10 aprobados seguidos' },
  { id: 'examenes_10',    emoji: '📚', nombre: 'Estudiante',    desc: '10 exámenes completados' },
  { id: 'examenes_25',    emoji: '🎯', nombre: 'Dedicado',      desc: '25 exámenes completados' },
  { id: 'examenes_50',    emoji: '🧠', nombre: 'Sabio',         desc: '50 exámenes completados' },
  { id: 'vialidad_80',    emoji: '🛣️', nombre: 'Vialidad',      desc: '80%+ en Vialidad' },
  { id: 'circulacion_80', emoji: '🚗', nombre: 'Circulación',   desc: '80%+ en Circulación' },
  { id: 'prohibiciones_80', emoji: '⛔', nombre: 'Prohibiciones', desc: '80%+ en Prohibiciones' },
  { id: 'vehiculos_80',   emoji: '🔧', nombre: 'Vehículos',     desc: '80%+ en Vehículos' },
  { id: 'licencias_80',   emoji: '📄', nombre: 'Licencias',     desc: '80%+ en Licencias' },
  { id: 'maestro_total',  emoji: '👑', nombre: 'Maestro Total', desc: '100% en los 5 temarios' }
];

// Estado del usuario (guardado en localStorage)
function obtenerEstadoUsuario() {
  const estado = localStorage.getItem('estadoGamificacion');
  if (estado) {
    try { return JSON.parse(estado); } catch (e) {}
  }
  return {
    xp: 0,
    nivel: 1,
    medallas: [],          // IDs de medallas desbloqueadas
    rachaActual: 0,        // Aprobados seguidos
    mejorRacha: 0,
    mejorPuntaje: {},      // Por temario: { vialidad: 85, ... }
    totalExamenes: 0
  };
}

function guardarEstadoUsuario(estado) {
  localStorage.setItem('estadoGamificacion', JSON.stringify(estado));
}

function calcularNivel(xp) {
  for (let i = NIVELES.length - 1; i >= 0; i--) {
    if (xp >= NIVELES[i].xpMin) return NIVELES[i];
  }
  return NIVELES[0];
}

function otorgarXP(cantidad) {
  const estado = obtenerEstadoUsuario();
  const nivelAnterior = calcularNivel(estado.xp);
  estado.xp += cantidad;
  const nivelNuevo = calcularNivel(estado.xp);
  estado.nivel = nivelNuevo.nivel;
  guardarEstadoUsuario(estado);

  // ¿Subió de nivel?
  if (nivelNuevo.nivel > nivelAnterior.nivel) {
    mostrarNotificacion('🎉', '¡Nivel ' + nivelNuevo.nivel + '!', 'Ahora eres ' + nivelNuevo.nombre);
  }
}

function desbloquearMedalla(idMedalla) {
  const estado = obtenerEstadoUsuario();
  if (estado.medallas.includes(idMedalla)) return false;

  estado.medallas.push(idMedalla);
  guardarEstadoUsuario(estado);

  const medalla = MEDALLAS.find(m => m.id === idMedalla);
  if (medalla) {
    mostrarNotificacion('🏅', '¡Logro desbloqueado!', medalla.emoji + ' ' + medalla.nombre);
    reproducirSonido('correcto');
  }
  return true;
}

function mostrarNotificacion(emoji, titulo, desc) {
  const notif = document.getElementById('notif-logro');
  if (!notif) return;

  document.getElementById('notif-emoji').innerText = emoji;
  document.getElementById('notif-titulo').innerText = titulo;
  document.getElementById('notif-desc').innerText = desc;

  notif.classList.add('visible');
  setTimeout(() => notif.classList.remove('visible'), 4000);
}

function actualizarGamificacionUI() {
  const estado = obtenerEstadoUsuario();
  const nivel = calcularNivel(estado.xp);

  const badge = document.getElementById('nivel-badge');
  const nombre = document.getElementById('nivel-nombre');
  const xpTexto = document.getElementById('nivel-xp');
  const xpBarra = document.getElementById('xp-barra');
  const xpSig = document.getElementById('xp-siguiente');

  if (badge) badge.innerText = nivel.emoji;
  if (nombre) nombre.innerText = nivel.nombre;
  if (xpTexto) xpTexto.innerText = estado.xp + ' XP';

  // Barra de progreso
  if (nivel.nivel < 5) {
    const rango = nivel.xpMax - nivel.xpMin + 1;
    const progreso = ((estado.xp - nivel.xpMin) / rango) * 100;
    if (xpBarra) xpBarra.style.width = Math.min(progreso, 100) + '%';

    const siguienteNivel = NIVELES[nivel.nivel]; // el siguiente en el array
    const faltan = siguienteNivel.xpMin - estado.xp;
    if (xpSig) xpSig.innerText = faltan + ' XP para ' + siguienteNivel.nombre;
  } else {
    if (xpBarra) xpBarra.style.width = '100%';
    if (xpSig) xpSig.innerText = '¡Nivel máximo alcanzado! 👑';
  }

  renderizarMedallas(estado);
}

function renderizarMedallas(estado) {
  const contenedor = document.getElementById('medallas-container');
  if (!contenedor) return;

  contenedor.innerHTML = '';
  MEDALLAS.forEach(m => {
    const desbloqueada = estado.medallas.includes(m.id);
    const div = document.createElement('div');
    div.className = 'medalla ' + (desbloqueada ? 'desbloqueada' : 'bloqueada');
    div.title = m.desc;
    div.innerHTML = `
      <span class="medalla-emoji">${desbloqueada ? m.emoji : '🔒'}</span>
      <span class="medalla-nombre">${m.nombre}</span>
    `;
    contenedor.appendChild(div);
  });
}

// Procesar resultados al finalizar un examen
function procesarGamificacion(aciertos, total, porcentaje, modo, temariosEvaluados) {
  if (modo !== 'evaluacion') return;

  const estado = obtenerEstadoUsuario();
  const aprobado = porcentaje >= 70;

  // XP
  let xpGanada = 10; // completar examen
  xpGanada += aciertos * 2; // por acierto
  if (aprobado) xpGanada += 20;
  if (porcentaje === 100) xpGanada += 50;

  otorgarXP(xpGanada);

  // Actualizar contador de exámenes
  estado.totalExamenes = (estado.totalExamenes || 0) + 1;
  guardarEstadoUsuario(estado);

  // Medallas de cantidad de exámenes
  if (estado.totalExamenes >= 1)  desbloquearMedalla('primer_examen');
  if (estado.totalExamenes >= 10) desbloquearMedalla('examenes_10');
  if (estado.totalExamenes >= 25) desbloquearMedalla('examenes_25');
  if (estado.totalExamenes >= 50) desbloquearMedalla('examenes_50');

  // Medallas de aprobación
  if (aprobado) {
    desbloquearMedalla('primer_aprobado');

    const estadoActual = obtenerEstadoUsuario();
    estadoActual.rachaActual = (estadoActual.rachaActual || 0) + 1;
    if (estadoActual.rachaActual > (estadoActual.mejorRacha || 0)) {
      estadoActual.mejorRacha = estadoActual.rachaActual;
    }
    guardarEstadoUsuario(estadoActual);

    if (estadoActual.rachaActual >= 3)  desbloquearMedalla('racha_3');
    if (estadoActual.rachaActual >= 5)  desbloquearMedalla('racha_5');
    if (estadoActual.rachaActual >= 10) desbloquearMedalla('racha_10');
  } else {
    // Resetear racha si suspende
    estado.rachaActual = 0;
    guardarEstadoUsuario(estado);
  }

  // Medalla de 100%
  if (porcentaje === 100) {
    desbloquearMedalla('perfecto');
  }

  // Medallas por temario (80%+)
  const estadoFinal = obtenerEstadoUsuario();
  if (!estadoFinal.mejorPuntaje) estadoFinal.mejorPuntaje = {};

  temariosEvaluados.forEach(t => {
    if (!estadoFinal.mejorPuntaje[t] || porcentaje > estadoFinal.mejorPuntaje[t]) {
      estadoFinal.mejorPuntaje[t] = porcentaje;
    }
  });

  // Revisar cada temario
  const temarios80 = {
    'vialidad': 'vialidad_80',
    'circulacion': 'circulacion_80',
    'prohibiciones': 'prohibiciones_80',
    'vehiculos': 'vehiculos_80',
    'licencias': 'licencias_80'
  };

  Object.keys(temarios80).forEach(t => {
    if ((estadoFinal.mejorPuntaje[t] || 0) >= 80) {
      desbloquearMedalla(temarios80[t]);
    }
  });

  // Maestro total: 100% en todos los 5 temarios
  const todosPerfectos = ['vialidad', 'circulacion', 'prohibiciones', 'vehiculos', 'licencias']
    .every(t => (estadoFinal.mejorPuntaje[t] || 0) === 100);

  if (todosPerfectos) {
    desbloquearMedalla('maestro_total');
  }

  guardarEstadoUsuario(estadoFinal);
  actualizarGamificacionUI();
}
// ==================================================
// 🎨 EFECTOS MODERNOS - RIPPLE Y CONFETI
// ==================================================

// RIPPLE EFFECT en todos los botones
document.addEventListener('click', function(e) {
  const boton = e.target.closest('.btn-submit, .btn-ayuda, .btn-modo, .btn-pdf, .btn-pdf-buscar');

  if (!boton) return;

  const rect = boton.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  boton.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});

// CONFETI al aprobar un examen
function lanzarConfeti() {
  const colores = ['#4361ee', '#10b981', '#f59e0b', '#ef4444', '#a78bfa', '#60a5fa', '#fbbf24'];
  const cantidad = 80;

  for (let i = 0; i < cantidad; i++) {
    setTimeout(() => {
      const confeti = document.createElement('div');
      confeti.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${Math.random() * 100}vw;
        width: ${8 + Math.random() * 8}px;
        height: ${8 + Math.random() * 8}px;
        background: ${colores[Math.floor(Math.random() * colores.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        z-index: 9999;
        pointer-events: none;
        transform: rotate(${Math.random() * 360}deg);
        opacity: 1;
      `;

      document.body.appendChild(confeti);

      const duracion = 2500 + Math.random() * 1500;
      const desplazamientoX = (Math.random() - 0.5) * 300;
      const rotacionFinal = Math.random() * 720 - 360;

      confeti.animate([
        {
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 1
        },
        {
          transform: `translate(${desplazamientoX}px, 100vh) rotate(${rotacionFinal}deg)`,
          opacity: 0
        }
      ], {
        duration: duracion,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }).onfinish = () => confeti.remove();
    }, i * 20);
  }
}

// Detectar cuando se muestra la pantalla de resultados con aprobación
const observerResultado = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.target.id === 'pantalla-7' && mutation.target.classList.contains('activa')) {
      const porcentaje = document.getElementById('resultado-porcentaje');
      if (porcentaje && parseInt(porcentaje.innerText) >= 70) {
        setTimeout(lanzarConfeti, 300);
      }
    }
  });
});

// Iniciar el observer cuando cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const pantallaResultado = document.getElementById('pantalla-7');
  if (pantallaResultado) {
    observerResultado.observe(pantallaResultado, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
});

// MEJORA: Timer con aviso cuando queda poco (últimos 60 segundos)
// Se integra con el cronómetro existente
const cronometroObserver = setInterval(() => {
  const timer = document.getElementById('cronometro-display');
  if (!timer) return;

  const texto = timer.innerText;
  const match = texto.match(/(\d+):(\d+)/);
  if (!match) return;

  const minutos = parseInt(match[1], 10);
  const segundos = parseInt(match[2], 10);
  const totalSegundos = minutos * 60 + segundos;

  // Si es un cronómetro, no tiene mucho sentido, pero por si acaso
  // Aquí podrías añadir lógica si cambias a temporizador en algún momento
}, 1000);

// Animación suave al cambiar de pantalla
function animarTransicionPantalla() {
  const pantallaActiva = document.querySelector('.pantalla.activa');
  if (!pantallaActiva) return;

  pantallaActiva.style.animation = 'none';
  void pantallaActiva.offsetWidth; // Reflow para reiniciar la animación
  pantallaActiva.style.animation = 'screenIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
}

// Sobrescribir navegar para añadir animación suave
const navegarOriginal = navegar;
navegar = function(numeroPantalla) {
  navegarOriginal(numeroPantalla);
  setTimeout(animarTransicionPantalla, 10);
};

console.log('✨ Efectos modernos cargados');
// ==================================================
// INICIALIZACIÓN
// ==================================================
window.onload = () => {
  try {
    cargarTema();
    cargarUsuario();

    if (usuario) navegar(2);
    else navegar(1);
  } catch (error) {
    console.error('Error al inicializar:', error);
    alert('Error al iniciar la app. Revisa la consola.');
  }
};