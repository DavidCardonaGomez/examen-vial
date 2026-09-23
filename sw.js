// ==================================================
// SERVICE WORKER - Examen Vial Cuba
// ==================================================
const CACHE_NAME = 'examen-vial-v8';

// Archivos que se guardan en caché al instalar
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './preguntas.js',
  './manifest.json',
  './libs/pdfjs/pdf.min.js',
  './libs/pdfjs/pdf.worker.min.js',
  './assets/pdf/ley109.pdf',
  './assets/audio/sfx/click.mp3',
  './assets/audio/sfx/correcto.mp3',
  './assets/audio/sfx/incorrecto.mp3',
  './assets/audio/sfx/finalizar.mp3',
  './assets/img/icons/icon-192.png',
  './assets/img/icons/icon-512.png'
  
  // Las señales se cargan bajo demanda, no hace falta listarlas todas
];

// Instalar: guardar en caché
self.addEventListener('install', event => {
  console.log('🔧 SW: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 SW: Guardando archivos en caché');
        // addAll falla si algún archivo no existe; usamos add individual tolerante
        return Promise.all(
          ASSETS.map(url =>
            cache.add(url).catch(err => console.warn('⚠️ No se pudo cachear:', url, err))
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activar: eliminar cachés antiguas
self.addEventListener('activate', event => {
  console.log('🚀 SW: Activado');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('🗑️ SW: Eliminando caché antigua:', k);
          return caches.delete(k);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: servir desde caché, o red si no está
self.addEventListener('fetch', event => {
  // Ignorar peticiones que no sean GET
  if (event.request.method !== 'GET') return;

  // Ignorar peticiones al CDN de fuentes (Google Fonts) — van siempre a red
  if (event.request.url.includes('fonts.googleapis.com') ||
      event.request.url.includes('fonts.gstatic.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Si no está en caché, buscar en red y cachear (excepto PDF.js worker)
      return fetch(event.request).then(response => {
        // Solo cachear respuestas válidas
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });

        return response;
      }).catch(() => {
        // Si falla la red y es HTML, devolver el index.html (modo SPA)
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});