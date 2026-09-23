const preguntas = [
    {
        "id": 1,
        "categoria": "vialidad",
        "pregunta": "¿Cómo se denomina oficialmente la Ley No. 109 aprobada por la Asamblea Nacional del Poder Popular?",
        "opciones": [
            "Código de Seguridad Vial",
            "Ley de Tránsito y Transporte",
            "Código Vial de Cuba",
            "Ley de Vialidad Nacional"
        ],
        "respuesta": 0,
        "explicacion": "La Ley No. 109 se denomina oficialmente Código de Seguridad Vial."
    },
    {
        "id": 2,
        "categoria": "vialidad",
        "pregunta": "¿Qué organismos son definidos como los organismos rectores de la actividad vial y del tránsito?",
        "opciones": [
            "Ministerio de la Construcción y Ministerio del Transporte",
            "Ministerio del Transporte y Ministerio del Interior",
            "Ministerio del Interior y Ministerio de Justicia",
            "Ministerio de las Fuerzas Armadas Revolucionarias y Ministerio del Transporte"
        ],
        "respuesta": 1,
        "explicacion": "El Ministerio del Transporte y el Ministerio del Interior son los organismos rectores."
    },
    {
        "id": 3,
        "categoria": "vialidad",
        "pregunta": "¿Cómo se clasifican las vías atendiendo a su ubicación?",
        "opciones": [
            "Nacionales y provinciales",
            "Urbanas y rurales",
            "Públicas y privadas",
            "Principales y secundarias"
        ],
        "respuesta": 1,
        "explicacion": "Atendiendo a su ubicación, las vías se clasifican en urbanas y rurales."
    },
    {
        "id": 4,
        "categoria": "vialidad",
        "pregunta": "¿A qué organismo corresponde determinar las vías de interés nacional?",
        "opciones": [
            "Al Ministerio del Interior",
            "A los Consejos de la Administración Provincial",
            "Al Ministerio del Transporte",
            "Al Ministerio de la Construcción"
        ],
        "respuesta": 2,
        "explicacion": "Corresponde al Ministerio del Transporte determinar las vías de interés nacional."
    },
    {
        "id": 5,
        "categoria": "vialidad",
        "pregunta": "¿Cuál es la faja de terreno destinada a la construcción y posterior conservación de una vía, dentro de la cual no puede haber edificaciones u obstáculos?",
        "opciones": [
            "Verdadero, se establece en vías urbanas y rurales",
            "Falso, solo aplica para vías férreas",
            "Solo aplica para autopistas nacionales",
            "No está regulado por la ley"
        ],
        "respuesta": 0,
        "explicacion": "La faja de emplazamiento se establece tanto en vías urbanas como rurales."
    },
    {
        "id": 6,
        "categoria": "vialidad",
        "pregunta": "¿Qué organismo es el órgano rector autorizado a entregar la licencia ambiental para obras viales?",
        "opciones": [
            "Ministerio de Salud Pública",
            "Ministerio de Ciencia, Tecnología y Medio Ambiente (CITMA)",
            "Ministerio del Transporte",
            "Ministerio de la Construcción"
        ],
        "respuesta": 1,
        "explicacion": "El CITMA es el órgano rector autorizado a entregar la licencia ambiental para obras viales."
    },
    {
        "id": 7,
        "categoria": "vialidad",
        "pregunta": "¿Qué actividad de conservación vial tiene como objetivo el cuidado sistemático y preventivo de las estructuras viales sin modificar el pavimento?",
        "opciones": [
            "Reconstrucción",
            "Reparación capital",
            "Mantenimiento",
            "Reordenamiento"
        ],
        "respuesta": 2,
        "explicacion": "El mantenimiento es el cuidado sistemático y preventivo sin modificar el pavimento."
    },
    {
        "id": 8,
        "categoria": "vialidad",
        "pregunta": "¿Qué organismo dirige la actividad de la ingeniería de tránsito, normando, ejecutando y controlando la señalización vial?",
        "opciones": [
            "Ministerio del Transporte",
            "Ministerio del Interior",
            "Ministerio de Comunicaciones",
            "Ministerio de la Construcción"
        ],
        "respuesta": 1,
        "explicacion": "El Ministerio del Interior dirige la ingeniería de tránsito y controla la señalización vial."
    },
    {
        "id": 9,
        "categoria": "vialidad",
        "pregunta": "¿Cómo se clasifican los dispositivos de señalización vial según el artículo 58?",
        "opciones": [
            "Luminosas, mecánicas, manuales y acústicas",
            "Mediante luces, verticales, horizontales y sonoras",
            "Principales, secundarias, provisionales y permanentes",
            "De peligro, de obligación, de información y de prohibición"
        ],
        "respuesta": 1,
        "explicacion": "Los dispositivos de señalización se clasifican en: mediante luces, verticales, horizontales y sonoras."
    },
    {
        "id": 10,
        "categoria": "circulacion",
        "pregunta": "Cuando un agente de la autoridad levanta el brazo verticalmente, ¿qué significado tiene la señal de 'Atención, alto'?",
        "opciones": [
            "Que solo los vehículos deben detenerse",
            "Que todos los usuarios de la vía deben detenerse de inmediato",
            "Que se debe aumentar la velocidad",
            "Que los peatones pueden cruzar libremente"
        ],
        "respuesta": 1,
        "explicacion": "El brazo levantado verticalmente indica a todos los usuarios que deben detenerse."
    },
    {
        "id": 11,
        "categoria": "circulacion",
        "pregunta": "En las vías de doble sentido de dirección, ¿por dónde está obligado el conductor a transitar?",
        "opciones": [
            "Por el centro de la calzada",
            "Por el lado izquierdo del eje central",
            "Por el lado derecho del eje central de la vía",
            "Por el arcén o paseo"
        ],
        "respuesta": 2,
        "explicacion": "En vías de doble sentido se transita por el lado derecho del eje central de la vía."
    },
    {
        "id": 12,
        "categoria": "circulacion",
        "pregunta": "En las vías rurales de más de dos carriles para el mismo sentido, ¿por qué carril deben transitar los vehículos a velocidades inferiores a 60 km/h?",
        "opciones": [
            "Por el carril de la extrema izquierda",
            "Por el carril central",
            "Por el carril de su extrema derecha",
            "Por cualquiera de los carriles"
        ],
        "respuesta": 2,
        "explicacion": "Los vehículos que circulan a menos de 60 km/h deben hacerlo por el carril de la extrema derecha."
    },
    {
        "id": 13,
        "categoria": "circulacion",
        "pregunta": "¿Qué edad mínima debe haber cumplido una persona para conducir vehículos de tracción animal?",
        "opciones": [
            "14 años",
            "16 años",
            "18 años",
            "21 años"
        ],
        "respuesta": 1,
        "explicacion": "La edad mínima para conducir vehículos de tracción animal es de 16 años."
    },
    {
        "id": 14,
        "categoria": "circulacion",
        "pregunta": "Para indicar que va a doblar o cambiar de carril a la derecha utilizando señales de brazo, ¿cómo debe colocarse el brazo?",
        "opciones": [
            "Inclinado hacia abajo",
            "En posición horizontal",
            "En posición vertical hacia arriba",
            "Extendidos ambos brazos"
        ],
        "respuesta": 2,
        "explicacion": "Para indicar giro a la derecha con el brazo, este se coloca en posición vertical hacia arriba."
    },
    {
        "id": 15,
        "categoria": "circulacion",
        "pregunta": "Ante una señal de 'Pare', ¿qué está obligado a hacer el conductor?",
        "opciones": [
            "Disminuir la velocidad y continuar si no ve peligro",
            "Detener la marcha cualesquiera que sean las circunstancias, dando prioridad a la vía transversal",
            "Tocar el claxon y cruzar con precaución",
            "Ceder el paso únicamente a los vehículos pesados"
        ],
        "respuesta": 1,
        "explicacion": "Ante un 'Pare' el conductor debe detenerse totalmente y ceder el paso a la vía transversal."
    },
    {
        "id": 16,
        "categoria": "circulacion",
        "pregunta": "¿A qué distancia mínima del carril de la vía férrea más cercano debe detenerse un conductor al aproximarse a un paso a nivel sin señalización?",
        "opciones": [
            "A 1 metro",
            "A 3 metros",
            "A 5 metros",
            "A 10 metros"
        ],
        "respuesta": 1,
        "explicacion": "Debe detenerse a 3 metros del carril de la vía férrea más cercano."
    },
    {
        "id": 17,
        "categoria": "prohibiciones",
        "pregunta": "¿Es obligatorio el uso del cinturón de seguridad para el conductor de un vehículo de motor y sus pasajeros?",
        "opciones": [
            "Solo para el conductor en vías rurales",
            "Sí, el conductor está obligado a utilizarlo y exigir su uso a los pasajeros",
            "Es opcional según el tipo de vehículo",
            "Solo es obligatorio en autopistas"
        ],
        "respuesta": 1,
        "explicacion": "El conductor está obligado a usar el cinturón y a exigir su uso a los pasajeros."
    },
    {
        "id": 18,
        "categoria": "prohibiciones",
        "pregunta": "¿Cuál es la velocidad máxima permitida para automóviles de hasta 3,500 kg y ómnibus en autopistas?",
        "opciones": [
            "80 km/h",
            "90 km/h",
            "100 km/h",
            "120 km/h"
        ],
        "respuesta": 2,
        "explicacion": "En autopistas, los automóviles de hasta 3,500 kg y ómnibus pueden circular a un máximo de 100 km/h."
    },
    {
        "id": 19,
        "categoria": "prohibiciones",
        "pregunta": "¿Cuál es el límite general de velocidad en vías urbanas para todos los vehículos de motor, salvo señalamiento contrario?",
        "opciones": [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "70 km/h"
        ],
        "respuesta": 1,
        "explicacion": "El límite general en vías urbanas es de 50 km/h, salvo señalamiento contrario."
    },
    {
        "id": 20,
        "categoria": "vialidad",
        "pregunta": "¿Qué indica la luz amarilla continua en un semáforo?",
        "opciones": [
            "Que se puede cruzar con aceleración",
            "Que los conductores deben detenerse en la línea de 'Pare' a menos que estén tan cerca que no puedan hacerlo con seguridad",
            "Que el semáforo está roto",
            "Que solo los peatones pueden cruzar"
        ],
        "respuesta": 1,
        "explicacion": "La luz amarilla continua indica detenerse, salvo si ya se está tan cerca que no se puede parar con seguridad."
    },
    {
        "id": 21,
        "categoria": "vialidad",
        "pregunta": "¿Qué forma geométrica y colores caracterizan a las señales de peligro o precaución (Grupo A)?",
        "opciones": [
            "Circulares con fondo blanco y borde rojo",
            "Triangulares con el vértice hacia arriba, fondo amarillo, orla roja y símbolo negro",
            "Rectangulares con fondo azul",
            "Octagonales con fondo rojo"
        ],
        "respuesta": 1,
        "explicacion": "Las señales de peligro son triangulares con vértice hacia arriba, fondo amarillo, orla roja y símbolo negro."
    },
    {
        "id": 22,
        "categoria": "prohibiciones",
        "pregunta": "Se prohíbe conducir con menores de cuántos años en el asiento delantero de un vehículo?",
        "opciones": [
            "Menores de 10 años",
            "Menores de 12 años",
            "Menores de 14 años",
            "Menores de 7 años"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe llevar menores de 12 años en el asiento delantero."
    },
    {
        "id": 23,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitido utilizar teléfonos u otros medios de comunicación manuales mientras el vehículo está en marcha?",
        "opciones": [
            "Sí, si se conduce con una sola mano",
            "Sí, mediante manos libres únicamente",
            "No, está totalmente prohibido utilizar teléfonos u otros medios de comunicación mientras el vehículo está en marcha",
            "Solo en zonas rurales"
        ],
        "respuesta": 2,
        "explicacion": "Está totalmente prohibido usar el teléfono u otros medios de comunicación manual mientras se conduce."
    },
    {
        "id": 24,
        "categoria": "vehiculos",
        "pregunta": "¿Cuál es la longitud máxima permitida para un vehículo rígido según el artículo 103?",
        "opciones": [
            "12 metros",
            "15 metros",
            "18 metros",
            "20 metros"
        ],
        "respuesta": 1,
        "explicacion": "La longitud máxima para un vehículo rígido es de 15 metros."
    },
    {
        "id": 25,
        "categoria": "vehiculos",
        "pregunta": "¿Cuál es la longitud máxima para vehículos articulados o conjunto de vehículos?",
        "opciones": [
            "15 metros",
            "18 metros",
            "22 metros",
            "25 metros"
        ],
        "respuesta": 1,
        "explicacion": "La longitud máxima para vehículos articulados es de 18 metros."
    },
    {
        "id": 26,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitida la circulación de vehículos con el timón a la derecha en Cuba?",
        "opciones": [
            "Sí, sin restricciones",
            "Solo para vehículos importados de turismo",
            "No, se prohíbe la circulación de vehículos que tengan instalado el timón a la derecha",
            "Sí, previa autorización del Ministerio del Transporte"
        ],
        "respuesta": 2,
        "explicacion": "Se prohíbe la circulación de vehículos con el timón a la derecha."
    },
    {
        "id": 27,
        "categoria": "prohibiciones",
        "pregunta": "A los menores de qué edad se les prohíbe la conducción de ciclos fuera de zonas de recreación?",
        "opciones": [
            "Menores de 10 años",
            "Menores de 12 años",
            "Menores de 14 años",
            "Menores de 16 años"
        ],
        "respuesta": 1,
        "explicacion": "Los menores de 12 años no pueden conducir ciclos fuera de zonas de recreación."
    },
    {
        "id": 28,
        "categoria": "prohibiciones",
        "pregunta": "¿Cuál es la velocidad máxima permitida en caminos de tierra o terraplenes?",
        "opciones": [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        "respuesta": 2,
        "explicacion": "En caminos de tierra o terraplenes la velocidad máxima es de 60 km/h."
    },
    {
        "id": 29,
        "categoria": "prohibiciones",
        "pregunta": "En zonas escolares o de niños, ¿cuál es la velocidad máxima permitida en zona urbana?",
        "opciones": [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "50 km/h"
        ],
        "respuesta": 2,
        "explicacion": "En zonas escolares o de niños, la velocidad máxima en zona urbana es de 40 km/h."
    },
    {
        "id": 30,
        "categoria": "vehiculos",
        "pregunta": "¿Cuál es la altura mínima reglamentaria que deben tener las barandas de los vehículos de carga adaptados para el transporte masivo de personas?",
        "opciones": [
            "Al menos 30 centímetros",
            "Al menos 40 centímetros",
            "Al menos 60 centímetros",
            "Al menos 100 centímetros"
        ],
        "respuesta": 1,
        "explicacion": "Las barandas deben tener al menos 40 centímetros de altura."
    },
    {
        "id": 31,
        "categoria": "vehiculos",
        "pregunta": "En el transporte masivo de personas en vehículos de carga, ¿cuál es la velocidad máxima permitida en zona urbana?",
        "opciones": [
            "30 km/h",
            "40 km/h",
            "50 km/h",
            "60 km/h"
        ],
        "respuesta": 1,
        "explicacion": "El transporte masivo de personas en vehículos de carga no puede exceder 40 km/h en zona urbana."
    },
    {
        "id": 32,
        "categoria": "prohibiciones",
        "pregunta": "¿A qué distancia máxima de la acera o borde de la calzada deben quedar las ruedas de un vehículo al estacionarlo correctamente?",
        "opciones": [
            "5 centímetros",
            "10 centímetros",
            "20 centímetros",
            "30 centímetros"
        ],
        "respuesta": 1,
        "explicacion": "Las ruedas deben quedar a un máximo de 10 centímetros de la acera."
    },
    {
        "id": 33,
        "categoria": "prohibiciones",
        "pregunta": "Cuando un vehículo queda estacionado en pendiente ascendente (cuesta arriba), ¿cómo deben girarse las ruedas del timón respecto al contén?",
        "opciones": [
            "Hacia el contén",
            "En sentido contrario al contén",
            "Totalmente rectas",
            "No importa la dirección"
        ],
        "respuesta": 1,
        "explicacion": "En pendiente ascendente las ruedas se giran en sentido contrario al contén."
    },
    {
        "id": 34,
        "categoria": "prohibiciones",
        "pregunta": "¿A qué distancia mínima de una señal oficial de parada de ómnibus se prohíbe estacionar hacia atrás?",
        "opciones": [
            "10 metros",
            "20 metros",
            "30 metros",
            "40 metros"
        ],
        "respuesta": 3,
        "explicacion": "Se prohíbe estacionar a menos de 40 metros por detrás de una señal oficial de parada de ómnibus."
    },
    {
        "id": 35,
        "categoria": "prohibiciones",
        "pregunta": "En las vías urbanas e intersecciones no semaforizadas, ¿a qué distancia de los accesos se prohíbe el estacionamiento?",
        "opciones": [
            "5 metros",
            "10 metros",
            "15 metros",
            "20 metros"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe estacionar a menos de 10 metros de los accesos a las intersecciones no semaforizadas."
    },
    {
        "id": 36,
        "categoria": "prohibiciones",
        "pregunta": "Cuando ocurre una rotura en una vía rural que obliga a estacionar en la parte de circulación, ¿a qué distancia por detrás del vehículo debe colocarse el triángulo?",
        "opciones": [
            "10 metros",
            "20 metros",
            "30 metros",
            "50 metros"
        ],
        "respuesta": 2,
        "explicacion": "El triángulo debe colocarse a 30 metros por detrás del vehículo."
    },
    {
        "id": 37,
        "categoria": "circulacion",
        "pregunta": "Fuera de los perímetros urbanos, cuando no existen paseos o aceras, ¿por qué lado de la vía debe caminar el peatón?",
        "opciones": [
            "Por el lado derecho, en el mismo sentido del tránsito",
            "Por el lado izquierdo, de frente a la circulación de los vehículos",
            "Por el centro de la vía",
            "Por cualquier lado indistintamente"
        ],
        "respuesta": 1,
        "explicacion": "Fuera del perímetro urbano y sin aceras, el peatón camina por el lado izquierdo, de frente a la circulación."
    },
    {
        "id": 38,
        "categoria": "vialidad",
        "pregunta": "¿Qué indica la luz verde en un semáforo para vehículos?",
        "opciones": [
            "Obligación exclusiva de girar a la izquierda",
            "Que los conductores pueden continuar la marcha, girar a la derecha o izquierda con precaución si no está prohibido",
            "Que se debe ceder el paso a todo el mundo",
            "Que el carril está cerrado"
        ],
        "respuesta": 1,
        "explicacion": "La luz verde permite continuar la marcha y girar con precaución si no está prohibido."
    },
    {
        "id": 39,
        "categoria": "vialidad",
        "pregunta": "¿Qué orden ocupan las secciones de luz en un semáforo vertical tradicional de arriba hacia abajo?",
        "opciones": [
            "Verde, amarilla, roja",
            "Roja, amarilla, verde",
            "Amarilla, roja, verde",
            "Roja, verde, amarilla"
        ],
        "respuesta": 1,
        "explicacion": "En un semáforo vertical, de arriba hacia abajo el orden es: roja, amarilla, verde."
    },
    {
        "id": 40,
        "categoria": "licencias",
        "pregunta": "Si un conductor es requerido para una segunda prueba de alcoholemia por aire espirado, ¿tiene derecho a ella?",
        "opciones": [
            "No, la primera prueba es definitiva",
            "Sí, se le debe realizar una segunda prueba",
            "Solo si paga una tasa adicional",
            "Solo si lo autoriza el jefe de la unidad"
        ],
        "respuesta": 1,
        "explicacion": "El conductor tiene derecho a una segunda prueba de alcoholemia por aire espirado."
    },
    {
        "id": 41,
        "categoria": "licencias",
        "pregunta": "¿Cuál es la sanción administrativa cuando un conductor comete una infracción bajo los efectos del alcohol?",
        "opciones": [
            "Se le reduce la multa a la mitad",
            "Se le duplica la multa",
            "Se le retira el vehículo permanentemente",
            "No hay recargo en la multa"
        ],
        "respuesta": 1,
        "explicacion": "Conducir bajo los efectos del alcohol implica el duplicado de la multa."
    },
    {
        "id": 42,
        "categoria": "prohibiciones",
        "pregunta": "Está terminantemente prohibido fumar en los vehículos cuando:",
        "opciones": [
            "Se conduce con la familia",
            "Se conduce un transporte público o colectivo de pasajeros, o se transportan materiales inflamables o explosivos",
            "Se viaja en una autopista",
            "Se circula en horarios nocturnos"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe fumar en transporte público o al transportar materiales inflamables o explosivos."
    },
    {
        "id": 43,
        "categoria": "prohibiciones",
        "pregunta": "En vías montañosas o con pendientes pronunciadas, ¿está permitido bajar con el motor apagado o en neutro?",
        "opciones": [
            "Sí, para ahorrar combustible",
            "No, está prohibido bajar con el motor apagado, en neutro o con velocidad inadecuada",
            "Sí, si el conductor es experto",
            "Solo en horario diurno"
        ],
        "respuesta": 1,
        "explicacion": "Está prohibido bajar pendientes con el motor apagado, en neutro o con velocidad inadecuada."
    },
    {
        "id": 44,
        "categoria": "vehiculos",
        "pregunta": "¿Cuál es la velocidad máxima de arrastre permitida al remolcar un vehículo averiado en zona urbana?",
        "opciones": [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "50 km/h"
        ],
        "respuesta": 1,
        "explicacion": "En zona urbana, la velocidad máxima de arrastre es de 30 km/h."
    },
    {
        "id": 45,
        "categoria": "vehiculos",
        "pregunta": "¿Cuál es la velocidad máxima de arrastre permitida al remolcar un vehículo averiado en zona rural?",
        "opciones": [
            "30 km/h",
            "40 km/h",
            "50 km/h",
            "60 km/h"
        ],
        "respuesta": 1,
        "explicacion": "En zona rural, la velocidad máxima de arrastre es de 40 km/h."
    },
    {
        "id": 46,
        "categoria": "vehiculos",
        "pregunta": "Si se utiliza una cuerda o cable para remolcar un vehículo, ¿cuál es la longitud máxima permitida?",
        "opciones": [
            "Hasta 5 metros",
            "Hasta 8 metros",
            "Hasta 10 metros",
            "Hasta 15 metros"
        ],
        "respuesta": 1,
        "explicacion": "La cuerda o cable de remolque no debe exceder los 8 metros."
    },
    {
        "id": 47,
        "categoria": "vehiculos",
        "pregunta": "¿Se permite el uso de cable o cuerda para remolcar si el sistema de frenos del vehículo remolcado no funciona adecuadamente?",
        "opciones": [
            "Sí, con precaución",
            "No, se prohíbe; debe emplearse barra fija",
            "Sí, si se viaja a menos de 20 km/h",
            "Está permitido en vías secundarias"
        ],
        "respuesta": 1,
        "explicacion": "Si falla el sistema de frenos del remolcado, se debe usar barra fija, no cable ni cuerda."
    },
    {
        "id": 48,
        "categoria": "prohibiciones",
        "pregunta": "¿Qué límite general de velocidad se establece en carreteras para los automóviles con remolque, grúas y similares?",
        "opciones": [
            "60 km/h",
            "70 km/h",
            "80 km/h",
            "90 km/h"
        ],
        "respuesta": 1,
        "explicacion": "En carreteras, los automóviles con remolque o grúas no deben exceder 70 km/h."
    },
    {
        "id": 49,
        "categoria": "prohibiciones",
        "pregunta": "¿Qué límite general de velocidad se establece en autopistas para los automóviles de carga rígidos y articulados?",
        "opciones": [
            "80 km/h",
            "90 km/h",
            "100 km/h",
            "110 km/h"
        ],
        "respuesta": 1,
        "explicacion": "En autopistas, los automóviles de carga rígidos y articulados circulan a un máximo de 90 km/h."
    },
    {
        "id": 50,
        "categoria": "prohibiciones",
        "pregunta": "¿Qué velocidad máxima se fija para los equipos especializados de la construcción, industriales y tractores?",
        "opciones": [
            "10 km/h",
            "20 km/h",
            "30 km/h",
            "40 km/h"
        ],
        "respuesta": 1,
        "explicacion": "Los equipos especializados y tractores tienen una velocidad máxima de 20 km/h."
    },
    {
        "id": 51,
        "categoria": "prohibiciones",
        "pregunta": "En los túneles, ¿cuál es la velocidad mínima obligatoria establecida?",
        "opciones": [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        "respuesta": 2,
        "explicacion": "En los túneles la velocidad mínima obligatoria es de 60 km/h."
    },
    {
        "id": 52,
        "categoria": "circulacion",
        "pregunta": "¿Está permitido adelantar a otro vehículo en una curva de visibilidad reducida o cambio de rasante?",
        "opciones": [
            "Sí, si viene despacio",
            "No, está prohibido adelantar en curvas de visibilidad reducida y cambios de rasante",
            "Solo si la vía tiene dos carriles",
            "Sí, tocando el claxon"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe adelantar en curvas de visibilidad reducida y cambios de rasante."
    },
    {
        "id": 53,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitido establecer competencias de velocidad en la vía pública?",
        "opciones": [
            "Sí, en cualquier momento",
            "No, salvo en los casos expresamente autorizados por el Ministerio del Interior",
            "Sí, en carreteras rurales de noche",
            "Solo para vehículos deportivos"
        ],
        "respuesta": 1,
        "explicacion": "Solo se permiten competencias de velocidad expresamente autorizadas por el MININT."
    },
    {
        "id": 54,
        "categoria": "circulacion",
        "pregunta": "Los conductores de motocicletas y ciclomotores, ¿están obligados a usar casco protector correctamente abrochado?",
        "opciones": [
            "Solo en autopistas",
            "Sí, tanto el conductor como los pasajeros",
            "Es opcional para los pasajeros",
            "Solo en horario nocturno"
        ],
        "respuesta": 1,
        "explicacion": "Conductor y pasajeros de motos y ciclomotores deben usar casco correctamente abrochado."
    },
    {
        "id": 55,
        "categoria": "circulacion",
        "pregunta": "¿Qué edad mínima debe tener un niño para ser transportado en motocicleta (en sidecar y con persona de 14 o más años)?",
        "opciones": [
            "Menor de 5 años",
            "Menor de 7 años",
            "Menor de 10 años",
            "Menor de 12 años"
        ],
        "respuesta": 1,
        "explicacion": "No se permite transportar a menores de 7 años en motocicleta, salvo en sidecar y con otra persona de 14 o más años."
    },
    {
        "id": 56,
        "categoria": "vehiculos",
        "pregunta": "Cuando se transportan bultos o cargas en motocicletas, ¿cuánto como máximo pueden sobresalir de las dimensiones del vehículo?",
        "opciones": [
            "20 centímetros",
            "30 centímetros",
            "50 centímetros",
            "1 metro"
        ],
        "respuesta": 2,
        "explicacion": "La carga en motocicleta puede sobresalir hasta 50 centímetros como máximo."
    },
    {
        "id": 57,
        "categoria": "prohibiciones",
        "pregunta": "¿Se permite realizar acrobacias en motocicletas, ciclomotores o ciclos en la vía pública?",
        "opciones": [
            "Sí, en zonas residenciales",
            "No, está prohibido realizar acrobacias",
            "Solo los fines de semana",
            "Sí, si se lleva casco"
        ],
        "respuesta": 1,
        "explicacion": "Está prohibido realizar acrobacias con motos, ciclomotores o ciclos en la vía pública."
    },
    {
        "id": 58,
        "categoria": "prohibiciones",
        "pregunta": "En las vías de un solo sentido de dirección, ¿cómo debe efectuarse el estacionamiento junto a la acera o borde izquierdo?",
        "opciones": [
            "En sentido contrario al tránsito",
            "Paralelo a la dirección de la circulación y en el sentido del tránsito",
            "En forma diagonal obligatoria",
            "En cualquier posición"
        ],
        "respuesta": 1,
        "explicacion": "En vías de un solo sentido, el estacionamiento junto al borde izquierdo se hace paralelo y en sentido del tránsito."
    },
    {
        "id": 59,
        "categoria": "vehiculos",
        "pregunta": "¿Qué documentos está obligado a llevar consigo y mostrar el conductor de un vehículo de motor a requerimiento de la autoridad?",
        "opciones": [
            "Solo el carné de identidad",
            "La licencia o permiso de conducción, permiso de circulación del vehículo y demás documentos reglamentarios",
            "Únicamente el comprobante de pago de impuestos",
            "Ninguno si es dueño del auto"
        ],
        "respuesta": 1,
        "explicacion": "El conductor debe llevar licencia, permiso de circulación y demás documentos reglamentarios."
    },
    {
        "id": 60,
        "categoria": "circulacion",
        "pregunta": "Ante una señal horizontal o vertical de 'Ceda el Paso', ¿qué debe hacer el conductor?",
        "opciones": [
            "Pasar sin mirar",
            "Disminuir la velocidad y parar si fuera necesario para permitir el paso a los vehículos de la vía transversal",
            "Detenerse obligatoriamente siempre durante 3 segundos",
            "Acelerar para ganar el paso"
        ],
        "respuesta": 1,
        "explicacion": "Ante 'Ceda el Paso' se debe reducir velocidad y detenerse si es necesario para ceder a la vía transversal."
    },
    {
        "id": 61,
        "categoria": "circulacion",
        "pregunta": "Si un conductor va a realizar un viraje a la izquierda en una intersección de doble sentido, ¿a quién debe ceder el paso?",
        "opciones": [
            "A los peatones únicamente",
            "A los vehículos que se aproximan en sentido opuesto por la misma vía",
            "A nadie, el giro a la izquierda tiene total prioridad",
            "A los vehículos que vienen detrás"
        ],
        "respuesta": 1,
        "explicacion": "Al girar a la izquierda en doble sentido, se debe ceder el paso a los vehículos que vienen en sentido opuesto."
    },
    {
        "id": 62,
        "categoria": "circulacion",
        "pregunta": "¿Qué distancia mínima por cada 15 km/h de velocidad debe mantener un vehículo respecto al que circula delante?",
        "opciones": [
            "3 metros",
            "5 metros",
            "10 metros",
            "15 metros"
        ],
        "respuesta": 1,
        "explicacion": "Se debe mantener una distancia mínima de 5 metros por cada 15 km/h de velocidad."
    },
    {
        "id": 63,
        "categoria": "vehiculos",
        "pregunta": "¿Está permitido el transporte de pasajeros en la cama o caja de un vehículo de carga sin barandas adecuadas?",
        "opciones": [
            "Sí, si el viaje es corto",
            "No, los vehículos de carga para trasladar pasajeros deben estar provistos de barandas posteriores y laterales resistentes",
            "Sí, en zonas rurales",
            "Está permitido si van de pie"
        ],
        "respuesta": 1,
        "explicacion": "Para transportar pasajeros en vehículos de carga se requieren barandas resistentes posteriores y laterales."
    },
    {
        "id": 64,
        "categoria": "vehiculos",
        "pregunta": "¿Cuál es la altura máxima permitida para la carga o vehículos en general para circular sin autorizaciones especiales?",
        "opciones": [
            "3.50 metros",
            "4.00 metros",
            "4.50 metros",
            "5.00 metros"
        ],
        "respuesta": 1,
        "explicacion": "La altura máxima sin autorización especial es de 4.00 metros."
    },
    {
        "id": 65,
        "categoria": "vehiculos",
        "pregunta": "¿Cuál es el ancho máximo permitido para la circulación de vehículos sin autorizaciones especiales?",
        "opciones": [
            "2.20 metros",
            "2.40 metros",
            "2.60 metros",
            "3.00 metros"
        ],
        "respuesta": 2,
        "explicacion": "El ancho máximo permitido sin autorización especial es de 2.60 metros."
    },
    {
        "id": 66,
        "categoria": "vehiculos",
        "pregunta": "Cuando una carga sobresale más de un metro por delante o por detrás, ¿cómo debe señalizarse de noche?",
        "opciones": [
            "Con banderas rojas de 30x30 cm",
            "Con luz blanca o reflectante blanco delante, y luz roja o reflectante rojo detrás",
            "Con ramas de árboles",
            "No necesita señalización de noche"
        ],
        "respuesta": 1,
        "explicacion": "De noche, la carga que sobresale se señaliza con luz blanca delante y roja detrás."
    },
    {
        "id": 67,
        "categoria": "vehiculos",
        "pregunta": "De día, ¿con qué se deben señalizar las cargas que sobresalen más de un metro por los extremos del vehículo?",
        "opciones": [
            "Con luces intermitentes",
            "Con dos banderas de color rojo de 30 por 30 centímetros",
            "Con pintura blanca",
            "Con un pañuelo negro"
        ],
        "respuesta": 1,
        "explicacion": "De día, las cargas que sobresalen se señalizan con dos banderas rojas de 30x30 cm."
    },
    {
        "id": 68,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitido realizar marcha atrás en un túnel, intersección, paso a nivel o curva de visibilidad reducida?",
        "opciones": [
            "Sí, si se encienden las luces de emergencia",
            "No, está prohibido realizar marcha atrás en dichos lugares",
            "Solo si hay un agente guiando",
            "Sí, a menos de 10 km/h"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe la marcha atrás en túneles, intersecciones, pasos a nivel y curvas de visibilidad reducida."
    },
    {
        "id": 69,
        "categoria": "circulacion",
        "pregunta": "¿Cuál es la distancia máxima permitida para recorrer en marcha atrás cuando las circunstancias lo exijan?",
        "opciones": [
            "10 metros",
            "20 metros",
            "50 metros",
            "100 metros"
        ],
        "respuesta": 1,
        "explicacion": "La marcha atrás no debe exceder los 20 metros."
    },
    {
        "id": 70,
        "categoria": "circulacion",
        "pregunta": "Al aproximarse a un paso para peatones con marcas tipo cebra donde hay peatones cruzando, ¿qué debe hacer el conductor?",
        "opciones": [
            "Acelerar para pasar antes",
            "Detener el vehículo y ceder el paso",
            "Tocar el claxon para que se apuren",
            "Pasar por el lado izquierdo"
        ],
        "respuesta": 1,
        "explicacion": "En un paso de cebra con peatones cruzando, el conductor debe detenerse y cederles el paso."
    },
    {
        "id": 71,
        "categoria": "circulacion",
        "pregunta": "¿Qué obligación tiene el conductor de un vehículo implicado en un accidente con personas muertas o lesionadas?",
        "opciones": [
            "Abandonar el lugar rápidamente por miedo",
            "Dar cuenta de inmediato a la PNR y mantener el vehículo en la posición que resulte del accidente para preservar huellas y evidencias",
            "Mover el auto a un taller cercano",
            "Esperar a que se vaya la multitud y retirarse"
        ],
        "respuesta": 1,
        "explicacion": "En accidentes con muertos o heridos, se debe avisar a la PNR y no mover el vehículo para preservar evidencias."
    },
    {
        "id": 72,
        "categoria": "vialidad",
        "pregunta": "¿Cómo se denominan las señales verticales que advierten al usuario la existencia de peligros y su naturaleza?",
        "opciones": [
            "Señales de prohibición",
            "Señales de peligro o precaución (Grupo A)",
            "Señales de orientación",
            "Señales de obligación"
        ],
        "respuesta": 1,
        "explicacion": "Las señales que advierten peligros se denominan de peligro o precaución (Grupo A)."
    },
    {
        "id": 73,
        "categoria": "vialidad",
        "pregunta": "¿A qué distancia aproximada se colocan las señales de peligro (Grupo A) antes del tramo peligroso fuera de las poblaciones?",
        "opciones": [
            "A no menos de 50 metros",
            "A no menos de 100 metros",
            "A exactamente 500 metros",
            "A 10 metros"
        ],
        "respuesta": 1,
        "explicacion": "Fuera de poblaciones, las señales de peligro se colocan a no menos de 100 metros del tramo peligroso."
    },
    {
        "id": 74,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitida la circulación de tractores y equipos especializados por autopistas y vías expresas?",
        "opciones": [
            "Sí, en horario nocturno",
            "No, se prohíbe su circulación por autopistas y vías expresas o multicarriles de interés nacional",
            "Sí, si llevan luces parpadeantes",
            "Solo con autorización verbal"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe la circulación de tractores y equipos especializados por autopistas y vías expresas."
    },
    {
        "id": 75,
        "categoria": "prohibiciones",
        "pregunta": "¿Se permite la circulación de vehículos de carga de más de 10,000 kg de capacidad nominal en zonas urbanas sin autorización?",
        "opciones": [
            "Sí, a cualquier hora",
            "No, requiere la autorización de la dependencia correspondiente del Ministerio del Interior",
            "Solo los domingos",
            "Sí, si pagan un impuesto"
        ],
        "respuesta": 1,
        "explicacion": "Requieren autorización del MININT los vehículos de carga de más de 10,000 kg en zona urbana."
    },
    {
        "id": 76,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitido transitar por la vía utilizando patines, carriolas o artefactos similares fuera de zonas de recreación?",
        "opciones": [
            "Sí, por las aceras",
            "No, se prohíbe excepto en vías cerradas o zonas de recreación",
            "Sí, durante el día",
            "Solo por el borde derecho"
        ],
        "respuesta": 1,
        "explicacion": "Patines y carriolas solo se permiten en vías cerradas o zonas de recreación."
    },
    {
        "id": 77,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitido llevar personas encimadas o que impidan la adecuada seguridad o visibilidad al conducir?",
        "opciones": [
            "Sí, en trayectos cortos",
            "No, está prohibido llevar personas encimadas que impidan la seguridad o visibilidad",
            "Solo en vehículos estatales",
            "Sí, si son familiares"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe llevar personas encimadas que impidan la seguridad o visibilidad del conductor."
    },
    {
        "id": 78,
        "categoria": "vialidad",
        "pregunta": "¿Qué indica una luz roja intermitente en un semáforo?",
        "opciones": [
            "Que se puede pasar con velocidad moderada",
            "Que los conductores deben detenerse obligatoriamente y continuar cediendo el paso a la vía transversal o peatones",
            "Que el semáforo está descompuesto sin regla",
            "Que solo avanzan los ómnibus"
        ],
        "respuesta": 1,
        "explicacion": "La luz roja intermitente obliga a detenerse y ceder el paso a la vía transversal o a los peatones."
    },
    {
        "id": 79,
        "categoria": "vialidad",
        "pregunta": "En vías de doble sentido, con luz verde y flecha a la izquierda, ¿se permite el giro en 'U' si no se contraviene otra norma?",
        "opciones": [
            "No, nunca",
            "Sí, siempre y cuando no contravenga lo dispuesto en el artículo 89",
            "Solo para motocicletas",
            "Solo de noche"
        ],
        "respuesta": 1,
        "explicacion": "Con luz verde de flecha a la izquierda se permite el giro en U si no contraviene el artículo 89."
    },
    {
        "id": 80,
        "categoria": "vialidad",
        "pregunta": "¿Qué función tienen los semáforos de ocupación de carril?",
        "opciones": [
            "Regular la velocidad máxima en las curvas",
            "Regular exclusivamente el uso de los carriles sobre los que están ubicados mediante luces rojas, verdes o flechas",
            "Indicar el nivel de combustible",
            "Avisar la presencia de policía"
        ],
        "respuesta": 1,
        "explicacion": "Los semáforos de ocupación de carril regulan el uso del carril sobre el que están ubicados."
    },
    {
        "id": 81,
        "categoria": "prohibiciones",
        "pregunta": "¿A qué velocidad máxima pueden circular los vehículos en la salida de garajes, edificios o accesos a parqueos interiores?",
        "opciones": [
            "10 km/h",
            "20 km/h",
            "30 km/h",
            "40 km/h"
        ],
        "respuesta": 1,
        "explicacion": "La velocidad máxima en salidas de garajes o accesos a parqueos es de 20 km/h."
    },
    {
        "id": 82,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitido reparar vehículos en la vía pública?",
        "opciones": [
            "Sí, en cualquier momento y lugar",
            "No, excepto en casos de fuerza mayor o reparaciones ligeras en vías secundarias de poco tránsito",
            "Sí, si se colocan herramientas alrededor",
            "Está totalmente prohibido bajo cualquier circunstancia"
        ],
        "respuesta": 1,
        "explicacion": "Solo se permite reparar en la vía por fuerza mayor o reparaciones ligeras en vías secundarias."
    },
    {
        "id": 83,
        "categoria": "circulacion",
        "pregunta": "¿Qué deben hacer los usuarios de la vía al escuchar la sirena o ver la luz de baliza de un vehículo de emergencia?",
        "opciones": [
            "Acelerar para alejarse",
            "Arrimar y detener el vehículo al borde derecho (o retornar a la acera si es peatón)",
            "Continuar marcha normal",
            "Tocar el claxon en respuesta"
        ],
        "respuesta": 1,
        "explicacion": "Ante un vehículo de emergencia, se debe arrimar al borde derecho y detenerse."
    },
    {
        "id": 84,
        "categoria": "circulacion",
        "pregunta": "¿Qué regulaciones debe cumplir un conductor al realizar un viraje a la derecha?",
        "opciones": [
            "Hacerlo desde el carril de la extrema derecha hacia la calzada correspondiente sin interferir a otros",
            "Hacerlo desde el carril central obligatoriamente",
            "Invadir el sentido contrario para abrirse",
            "No necesita señalizar"
        ],
        "respuesta": 0,
        "explicacion": "El viraje a la derecha se realiza desde el carril de la extrema derecha, sin interferir a otros."
    },
    {
        "id": 85,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitida la circulación de vehículos que transportan materias tóxicas o explosivas por los túneles?",
        "opciones": [
            "Sí, con autorización verbal",
            "No, se prohíbe la circulación de estos vehículos por los túneles (salvo autorización extrema)",
            "Sí, en horario nocturno exclusivamente",
            "Está permitido sin restricciones"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe circular por túneles con materias tóxicas, inflamables o explosivas, salvo autorización extrema."
    },
    {
        "id": 86,
        "categoria": "prohibiciones",
        "pregunta": "¿Qué se prohíbe en relación con los animales en las vías pavimentadas?",
        "opciones": [
            "Conducir ganado a pastar o abrevar y permitir su permanencia en la faja de la vía",
            "Pintar los animales",
            "Llevarlos en vehículos de carga",
            "Usar herraduras de goma"
        ],
        "respuesta": 0,
        "explicacion": "Se prohíbe conducir ganado a pastar o abrevar y permitir su permanencia en la faja de la vía."
    },
    {
        "id": 87,
        "categoria": "circulacion",
        "pregunta": "Cuando se cruza ganado por una vía pavimentada, ¿cómo debe realizarse si es un rebaño?",
        "opciones": [
            "Sin ningún tipo de precaución",
            "Con un conductor con banderas rojas a 100 metros a cada lado (delante y detrás)",
            "Atados al centro de la calzada",
            "Solo corriendo"
        ],
        "respuesta": 1,
        "explicacion": "Al cruzar un rebaño, debe haber conductores con banderas rojas a 100 metros delante y detrás."
    },
    {
        "id": 88,
        "categoria": "licencias",
        "pregunta": "Los agentes de la PNR pueden inmovilizar un vehículo y trasladarlo si su conductor se niega a las pruebas de alcoholemia.",
        "opciones": [
            "Falso",
            "Verdadero, está contemplado en las causas de inmovilización",
            "Solo si ocurre en zonas rurales",
            "Únicamente si hay un accidente grave"
        ],
        "respuesta": 1,
        "explicacion": "Es verdadero: negarse a las pruebas de alcoholemia es causa de inmovilización y traslado del vehículo."
    },
    {
        "id": 89,
        "categoria": "vehiculos",
        "pregunta": "¿Qué entidad crea las condiciones para el depósito, custodia y cuidado de los vehículos trasladados e inmovilizados?",
        "opciones": [
            "Los Consejos de la Administración Provincial del Poder Popular y del municipio especial Isla de la Juventud",
            "Las estaciones de gasolina",
            "Los talleres de mecánica estatal",
            "El Ministerio de Cultura"
        ],
        "respuesta": 0,
        "explicacion": "Los Consejos de la Administración Provincial garantizan el depósito y custodia de vehículos inmovilizados."
    },
    {
        "id": 90,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitido el trasbordo de mercancías de un vehículo a otro en la vía pública cuando obstruye la circulación?",
        "opciones": [
            "Sí, siempre que sea de día",
            "No, se prohíbe salvo en casos de accidente, rotura o desperfecto técnico",
            "Sí, con permiso de un transeúnte",
            "Está permitido para cargas ligeras"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe el trasbordo de mercancías en la vía pública, salvo por accidente o desperfecto técnico."
    },
    {
        "id": 91,
        "categoria": "vialidad",
        "pregunta": "En los pasos a nivel, ¿qué indica la señal lumínica intermitente de color amarillo?",
        "opciones": [
            "Prohibición total de cruzar",
            "Permite cruzar el paso a nivel con velocidad moderada",
            "Que viene un tren bala",
            "Que el paso está clausurado"
        ],
        "respuesta": 1,
        "explicacion": "La luz amarilla intermitente en un paso a nivel permite cruzar con velocidad moderada."
    },
    {
        "id": 92,
        "categoria": "circulacion",
        "pregunta": "¿Cuál es la norma para los peatones al cruzar una calzada en intersecciones urbanas sin marcado ni semáforo?",
        "opciones": [
            "Cruzar en diagonal obligatoriamente",
            "Hacerlo en línea recta de acera a acera, por la trayectoria más corta y cediendo el paso a los vehículos",
            "Esperar que un agente los cruce de la mano",
            "Correr a toda velocidad"
        ],
        "respuesta": 1,
        "explicacion": "El peatón cruza en línea recta, por la trayectoria más corta, cediendo el paso a los vehículos."
    },
    {
        "id": 93,
        "categoria": "circulacion",
        "pregunta": "¿Se prohíbe a los peatones cruzar una vía por delante o por detrás de un vehículo parqueado o detenido?",
        "opciones": [
            "Sí, está prohibido",
            "No, se puede hacer libremente",
            "Solo si el auto está encendido",
            "Solo en zonas rurales"
        ],
        "respuesta": 0,
        "explicacion": "Está prohibido que los peatones crucen por delante o por detrás de vehículos parqueados o detenidos."
    },
    {
        "id": 94,
        "categoria": "circulacion",
        "pregunta": "¿Tienen los peatones discapacitados derecho de paso preferencial una vez iniciado el cruce en intersecciones sin semáforos?",
        "opciones": [
            "No tienen preferencia",
            "Sí, tienen derecho de paso preferencial",
            "Solo si llevan un bastón blanco brillante",
            "Depende de la hora del día"
        ],
        "respuesta": 1,
        "explicacion": "Los peatones discapacitados que ya iniciaron el cruce tienen derecho de paso preferencial."
    },
    {
        "id": 95,
        "categoria": "circulacion",
        "pregunta": "¿Qué obligación tienen los pasajeros al descender de un vehículo de transporte?",
        "opciones": [
            "Saltar rápidamente hacia el centro de la calle",
            "Hacerlo con el vehículo totalmente detenido y por el lado de la acera, paseo o borde de la calzada",
            "Abrir la puerta con el auto en marcha lenta",
            "Descender por el lado izquierdo en cualquier vía"
        ],
        "respuesta": 1,
        "explicacion": "Los pasajeros deben descender con el vehículo detenido y por el lado de la acera o borde de la calzada."
    },
    {
        "id": 96,
        "categoria": "vialidad",
        "pregunta": "¿Qué significan los contadores digitales que a veces acompañan a los semáforos?",
        "opciones": [
            "Permiten conocer el tiempo restante de cada luz, sin sustituir sus significados ni determinar prioridades",
            "Indican la velocidad a la que debe circular el auto",
            "Muestran la temperatura ambiental",
            "Son adornos sin validez legal"
        ],
        "respuesta": 0,
        "explicacion": "Los contadores digitales solo informan el tiempo restante de cada luz; no cambian su significado."
    },
    {
        "id": 97,
        "categoria": "prohibiciones",
        "pregunta": "¿Se permite instalar anuncios, vallas, carteles o letreros particulares en cualquier vía sin previa autorización?",
        "opciones": [
            "Sí, si son pequeños",
            "No, requiere la previa aprobación y autorización del Ministerio del Interior",
            "Sí, en zonas rurales",
            "Solo si promocionan comercios locales"
        ],
        "respuesta": 1,
        "explicacion": "Instalar anuncios o vallas en vías públicas requiere autorización previa del MININT."
    },
    {
        "id": 98,
        "categoria": "licencias",
        "pregunta": "Cuando un conductor de transporte colectivo o de carga infringe bajo los efectos del alcohol, además de duplicársele la multa, ¿qué otra medida se aplica?",
        "opciones": [
            "Una felicitación institucional",
            "Se le suspende la licencia de conducción por el órgano correspondiente del Ministerio del Interior",
            "Se le cambia de categoría de vehículo obligatoriamente",
            "Ninguna otra medida"
        ],
        "respuesta": 1,
        "explicacion": "Además del duplicado de la multa, se le suspende la licencia de conducción."
    },
    {
        "id": 99,
        "categoria": "prohibiciones",
        "pregunta": "¿Está permitido llevar animales sueltos en zonas aledañas en condiciones que les permitan penetrar a la vía por sí solos?",
        "opciones": [
            "Sí, es habitual en el campo",
            "No, se prohíbe tener ganado en la vía o zonas aledañas en condiciones que permitan su penetración libre",
            "Sí, si llevan collar",
            "Solo durante la noche"
        ],
        "respuesta": 1,
        "explicacion": "Se prohíbe tener ganado en la vía o zonas aledañas en condiciones que permitan su libre penetración."
    },
    {
        "id": 100,
        "categoria": "vialidad",
        "pregunta": "Según los principios de la Ley 109, ¿cuál es la premisa fundamental sobre la cual descansa la prevención y protección de la vida humana en el tránsito?",
        "opciones": [
            "Que los accidentes ocurren por pura mala suerte",
            "Que 'todo accidente es potencialmente evitable'",
            "Que las vías nunca deben repararse",
            "Que la velocidad soluciona los problemas de movilidad"
        ],
        "respuesta": 1,
        "explicacion": "La premisa fundamental es que 'todo accidente es potencialmente evitable'."
    },
        {
        "id": 101,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 5, ¿a qué organismo corresponde la elaboración y actualización del Esquema Vial del país?",
        "opciones": [
            "Al Ministerio de la Construcción",
            "Al Ministerio del Interior",
            "Al Ministerio del Transporte",
            "A los Consejos de la Administración Provincial"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 5 establece que la elaboración y actualización del Esquema Vial corresponde al Ministerio del Transporte."
    },
    {
        "id": 102,
        "categoria": "vialidad",
        "pregunta": "¿Cómo se clasifican las vías atendiendo al interés socioeconómico según el Artículo 9?",
        "opciones": [
            "Urbanas y rurales",
            "Nacionales, provinciales, municipales y de interés específico",
            "Principales, secundarias y terciarias",
            "Públicas, privadas y mixtas"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 9 clasifica las vías por interés socioeconómico en nacionales, provinciales, municipales y de interés específico."
    },
    {
        "id": 103,
        "categoria": "vialidad",
        "pregunta": "¿Qué artículo establece que la autoridad administrativa tiene la obligación de proteger y mantener en buen estado las vías que le han sido asignadas?",
        "opciones": [
            "Artículo 10",
            "Artículo 11",
            "Artículo 12",
            "Artículo 13"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 12 establece la obligación de la autoridad administrativa de proteger y mantener en buen estado las vías asignadas."
    },
    {
        "id": 104,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 16, ¿a partir de qué se elabora el proyecto para la construcción vial?",
        "opciones": [
            "De la voluntad del inversionista",
            "De la tarea de proyección según el reglamento del proceso inversionista",
            "De un sorteo entre las empresas constructoras",
            "De las directrices del Ministerio de la Construcción únicamente"
        ],
        "respuesta": 1,
        "explicacion": "El proyecto de construcción vial se elabora a partir de la tarea de proyección de acuerdo con el reglamento del proceso inversionista."
    },
    {
        "id": 105,
        "categoria": "vialidad",
        "pregunta": "¿Quién es el inversionista de la construcción de nuevas vías de interés nacional según el Artículo 18?",
        "opciones": [
            "El Ministerio del Interior",
            "El Ministerio del Transporte",
            "El Ministerio de la Construcción",
            "Las empresas privadas"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 18 establece que el Ministerio del Transporte es el inversionista en las vías de interés nacional."
    },
    {
        "id": 106,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 20, ¿cuándo se aplica una obra de reconstrucción vial?",
        "opciones": [
            "Cuando se necesita pintar la vía",
            "Cuando varía la composición o aumenta la intensidad del tránsito superando los límites de la categoría de la vía",
            "Cuando hay que reparar baches menores",
            "Cuando se instalan nuevas señales"
        ],
        "respuesta": 1,
        "explicacion": "La reconstrucción se aplica como consecuencia de la variación en la composición o aumento de la intensidad del tránsito."
    },
    {
        "id": 107,
        "categoria": "vialidad",
        "pregunta": "¿Qué organismo es el encargado de entregar la licencia ambiental para las obras viales según el Artículo 24?",
        "opciones": [
            "Ministerio de Salud Pública",
            "Ministerio de Ciencia, Tecnología y Medio Ambiente (CITMA)",
            "Ministerio de la Construcción",
            "Ministerio del Transporte"
        ],
        "respuesta": 1,
        "explicacion": "El CITMA es el organismo autorizado a entregar la licencia ambiental de las obras viales."
    },
    {
        "id": 108,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 26, ¿qué es la reparación como obra de conservación vial?",
        "opciones": [
            "El cuidado sistemático preventivo de las estructuras viales",
            "La obra que subsana las destrucciones ocurridas en la vía durante su explotación",
            "La modificación total del pavimento",
            "La construcción de nuevas vías"
        ],
        "respuesta": 1,
        "explicacion": "La reparación subsana las destrucciones ocurridas en la vía durante el proceso de explotación."
    },
    {
        "id": 109,
        "categoria": "vialidad",
        "pregunta": "¿En qué se subdivide la reparación según el Artículo 27?",
        "opciones": [
            "En urgente y programada",
            "En capital, media y corriente",
            "En pública y privada",
            "En preventiva y correctiva"
        ],
        "respuesta": 1,
        "explicacion": "La reparación se subdivide en capital, media y corriente."
    },
    {
        "id": 110,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 32, ¿qué es la faja de emplazamiento?",
        "opciones": [
            "El área destinada al estacionamiento de vehículos",
            "La franja de terreno destinada a la construcción y conservación de la vía, sin edificaciones u obstáculos",
            "La zona donde se ubican las señales de tránsito",
            "El carril exclusivo para ómnibus"
        ],
        "respuesta": 1,
        "explicacion": "La faja de emplazamiento es la franja de terreno destinada a la construcción y conservación de la vía, sin edificaciones ni obstáculos."
    },
    {
        "id": 111,
        "categoria": "vialidad",
        "pregunta": "¿Qué se establece sobre las franjas de terrenos laterales de las vías rurales según el Artículo 34?",
        "opciones": [
            "Se prohíbe cualquier uso",
            "Se establecen servidumbres para instalación de redes técnicas",
            "Se destinan a agricultura",
            "Se usan para estacionamiento"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 34 establece servidumbres sobre las franjas laterales de las vías rurales para instalaciones de redes técnicas."
    },
    {
        "id": 112,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 39, cuando se produce una interrupción en la circulación y hay que restablecerla de inmediato por seguridad nacional, ¿quién puede autorizar el cruce provisional por otro terreno?",
        "opciones": [
            "El Ministerio del Transporte",
            "El Consejo de la Administración Municipal del Poder Popular",
            "El Ministerio del Interior",
            "La Asamblea Nacional"
        ],
        "respuesta": 1,
        "explicacion": "El Consejo de la Administración Municipal del Poder Popular puede autorizar el cruce provisional por otro terreno, bajo su responsabilidad."
    },
    {
        "id": 113,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 42, ¿quién elimina todo aquello que afecte la vía o impida su visibilidad?",
        "opciones": [
            "El propietario del terreno colindante",
            "La autoridad administrativa, con gastos a cargo del que ocasiona la afectación",
            "La Policía Nacional Revolucionaria",
            "El Ministerio de la Construcción"
        ],
        "respuesta": 1,
        "explicacion": "La autoridad administrativa elimina lo que afecte la vía, y los gastos corresponden al que ocasiona la afectación."
    },
    {
        "id": 114,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 43, ¿a qué distancia mínima del borde exterior de la vía se prohíbe abrir canales, zanjas o hacer excavaciones en los terrenos limítrofes?",
        "opciones": [
            "A menos de 1 metro",
            "A menos de 2 metros",
            "A menos de 3 metros",
            "A menos de 5 metros"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 43 prohíbe abrir canales, zanjas o excavaciones a menos de 3 metros del borde exterior de la vía."
    },
    {
        "id": 115,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 44, ¿se permite instalar anuncios, avisos o advertencias mediante vallas o carteles en cualquier vía sin autorización?",
        "opciones": [
            "Sí, si son pequeños",
            "Sí, en zonas rurales",
            "No, se requiere previa aprobación del Ministerio del Interior",
            "Solo si promocionan comercios locales"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 44 prohíbe instalar anuncios o vallas sin previa autorización del Ministerio del Interior."
    },
    {
        "id": 116,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 48, ¿qué obligación tienen las personas naturales o jurídicas respecto a peligros derivados del mal estado de edificaciones?",
        "opciones": [
            "Ninguna, es responsabilidad del gobierno",
            "Comunicar a la autoridad administrativa cualquier peligro para la seguridad del tránsito",
            "Demoler la edificación de inmediato",
            "Pagar una multa"
        ],
        "respuesta": 1,
        "explicacion": "Las personas están obligadas a comunicar a la autoridad administrativa cualquier peligro derivado del mal estado de las edificaciones."
    },
    {
        "id": 117,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 49, ¿qué comprende la ingeniería de tránsito?",
        "opciones": [
            "Solo la construcción de vías",
            "Los estudios sistemáticos y la señalización vial",
            "Únicamente la instalación de semáforos",
            "La educación vial de los conductores"
        ],
        "respuesta": 1,
        "explicacion": "La ingeniería de tránsito comprende los estudios sistemáticos y la señalización vial."
    },
    {
        "id": 118,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 51, ¿cuáles son algunos de los estudios sistemáticos en ingeniería de tránsito?",
        "opciones": [
            "Estudios de mercado y publicidad",
            "Estudios de velocidad, volúmenes de tránsito, demoras en intersecciones y capacidad",
            "Estudios geológicos y climáticos",
            "Estudios económicos y financieros"
        ],
        "respuesta": 1,
        "explicacion": "Los estudios sistemáticos incluyen velocidad, volúmenes de tránsito, demoras en intersecciones, capacidad, seguridad, entre otros."
    },
    {
        "id": 119,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 55, ¿qué se requiere para que otras entidades realicen estudios sistemáticos con fines de investigación científica?",
        "opciones": [
            "Nada, es libre",
            "Autorización del Ministerio del Interior",
            "Autorización del Ministerio de Educación",
            "Pago de una tasa"
        ],
        "respuesta": 1,
        "explicacion": "Otras entidades requieren autorización del Ministerio del Interior para realizar estudios sistemáticos con fines de investigación científica."
    },
    {
        "id": 120,
        "categoria": "vialidad",
        "pregunta": "Según el Artículo 59, ¿quién elabora el estudio y proyecto para la instalación de un semáforo?",
        "opciones": [
            "El Ministerio de la Construcción",
            "El órgano especializado en ingeniería de tránsito",
            "La empresa privada contratada",
            "La Asamblea Municipal"
        ],
        "respuesta": 1,
        "explicacion": "El órgano especializado en ingeniería de tránsito elabora el estudio y proyecto para la instalación de semáforos."
    },
    {
        "id": 121,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 60, ¿qué derecho tiene un conductor cuando es detenido por un agente de la autoridad?",
        "opciones": [
            "A no ser detenido nunca",
            "A que el agente se dirija hasta él y lo imponga de los motivos de su detención",
            "A continuar la marcha sin detenerse",
            "A exigir una indemnización"
        ],
        "respuesta": 1,
        "explicacion": "El conductor tiene derecho a que el agente se dirija hasta él y le informe los motivos de su detención."
    },
    {
        "id": 122,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 62, ¿cuál es el orden de prioridad de las señales en el tránsito?",
        "opciones": [
            "Señales horizontales, verticales, semáforos y agentes",
            "Señales de los agentes, señales de régimen provisional, semáforos, señales verticales y horizontales",
            "Semáforos, agentes, señales verticales y horizontales",
            "Señales verticales, horizontales, semáforos y agentes"
        ],
        "respuesta": 1,
        "explicacion": "El orden de prioridad es: señales de los agentes, señales de régimen provisional, señales mediante luces, señales verticales y horizontales."
    },
    {
        "id": 123,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 63, ¿qué significa la señal del agente 'Alto' con uno o los dos brazos extendidos horizontalmente?",
        "opciones": [
            "Que todos deben detenerse",
            "Que los que están de frente o a su espalda deben detenerse, y los que están en igual sentido del brazo pueden continuar",
            "Que solo los peatones pueden pasar",
            "Que se debe aumentar la velocidad"
        ],
        "respuesta": 1,
        "explicacion": "La señal 'Alto' con brazos extendidos indica que se detienen los que están de frente o a la espalda, y continúan los que están en igual sentido del brazo."
    },
    {
        "id": 124,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 63, ¿qué significa el balanceo manual de una luz roja?",
        "opciones": [
            "Que se puede pasar con precaución",
            "Que los usuarios hacia los cuales está dirigida la luz deben detenerse",
            "Que el semáforo está en verde",
            "Que se debe acelerar"
        ],
        "respuesta": 1,
        "explicacion": "El balanceo manual de una luz roja significa que los usuarios hacia los cuales está dirigida deben detenerse."
    },
    {
        "id": 125,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 63, ¿qué significa la bandera roja empleada desde un vehículo policial?",
        "opciones": [
            "Que la vía está abierta",
            "Que a partir del paso del vehículo que la porta, la calzada queda temporalmente cerrada",
            "Que hay un peligro",
            "Que se debe ceder el paso"
        ],
        "respuesta": 1,
        "explicacion": "La bandera roja indica que, a partir del paso del vehículo que la porta, la calzada queda temporalmente cerrada a la circulación."
    },
    {
        "id": 126,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 63, ¿qué significa la bandera amarilla empleada desde un vehículo policial?",
        "opciones": [
            "Que la vía está cerrada",
            "Que la vía está abierta",
            "Que hay proximidad de un peligro y se debe extremar la atención",
            "Que se debe detener el vehículo"
        ],
        "respuesta": 2,
        "explicacion": "La bandera amarilla indica a los usuarios la proximidad de un peligro y la necesidad de extremar la atención."
    },
    {
        "id": 127,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 65, ¿por qué lado debe transitar el conductor en vías de doble sentido de dirección?",
        "opciones": [
            "Por el centro de la calzada",
            "Por el lado izquierdo del eje central",
            "Por el lado derecho del eje central de la vía",
            "Por el arcén"
        ],
        "respuesta": 2,
        "explicacion": "En vías de doble sentido, el conductor debe transitar por el lado derecho del eje central de la vía."
    },
    {
        "id": 128,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 66, en vías rurales de más de dos carriles, ¿por qué carril deben circular los vehículos a velocidades inferiores a 60 km/h?",
        "opciones": [
            "Por el carril de la extrema izquierda",
            "Por el carril central",
            "Por el carril de su extrema derecha",
            "Por cualquier carril"
        ],
        "respuesta": 2,
        "explicacion": "Los vehículos que transitan a velocidades inferiores a 60 km/h deben hacerlo por el carril de su extrema derecha."
    },
    {
        "id": 129,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 67, ¿qué debe hacer un peatón al escuchar la sirena de un vehículo con prioridad?",
        "opciones": [
            "Correr hacia el centro de la vía",
            "Alcanzar o retornar rápidamente a la acera o situarse en una zona de seguridad",
            "Ignorar el sonido",
            "Detenerse en el lugar"
        ],
        "respuesta": 1,
        "explicacion": "El peatón debe alcanzar o retornar rápidamente a la acera o situarse en una zona de seguridad."
    },
    {
        "id": 130,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 69, ¿qué debe hacer el conductor de un vehículo implicado en un accidente con personas muertas o lesionadas?",
        "opciones": [
            "Abandonar el lugar rápidamente",
            "Dar cuenta de inmediato a la PNR y mantener el vehículo en la posición del accidente",
            "Mover el auto a un taller",
            "Esperar a que se retire la multitud"
        ],
        "respuesta": 1,
        "explicacion": "El conductor debe dar cuenta de inmediato a la PNR y mantener el vehículo en la posición que resulte del accidente para preservar evidencias."
    },
    {
        "id": 131,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 72, ¿qué distancia máxima pueden sobresalir los bultos o cargas en motocicletas de las dimensiones del vehículo?",
        "opciones": [
            "30 centímetros",
            "50 centímetros",
            "1 metro",
            "No pueden sobresalir"
        ],
        "respuesta": 1,
        "explicacion": "Las cargas en motocicletas no deben sobresalir más de 50 centímetros de las dimensiones del vehículo."
    },
    {
        "id": 132,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 73, ¿qué edad mínima debe tener un conductor de vehículo de tracción animal?",
        "opciones": [
            "14 años",
            "16 años",
            "18 años",
            "21 años"
        ],
        "respuesta": 1,
        "explicacion": "El conductor de vehículo de tracción animal debe haber cumplido 16 años de edad."
    },
    {
        "id": 133,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 73, ¿pueden circular los vehículos de tracción animal por autopistas?",
        "opciones": [
            "Sí, sin restricciones",
            "Solo de día",
            "No, se prohíbe su circulación por autopistas",
            "Solo con autorización"
        ],
        "respuesta": 2,
        "explicacion": "Los vehículos de tracción animal no pueden circular por autopistas."
    },
    {
        "id": 134,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 75, si un conductor de vehículo de tracción animal reincide en infracciones, ¿qué puede disponer el jefe provincial de la PNR?",
        "opciones": [
            "Una multa menor",
            "El decomiso del vehículo y del animal de tiro",
            "Una advertencia verbal",
            "Nada"
        ],
        "respuesta": 1,
        "explicacion": "El jefe provincial de la PNR puede disponer el decomiso del vehículo y del animal de tiro en caso de reincidencia."
    },
    {
        "id": 135,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 77, ¿cómo se indica con el brazo que se va a doblar o cambiar de carril a la derecha?",
        "opciones": [
            "Brazo inclinado hacia abajo",
            "Brazo en posición horizontal",
            "Brazo en posición vertical hacia arriba",
            "Ambos brazos extendidos"
        ],
        "respuesta": 2,
        "explicacion": "Para indicar giro a la derecha con el brazo, este se coloca en posición vertical hacia arriba."
    },
    {
        "id": 136,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 78, ante una señal de 'Pare', ¿qué debe hacer el conductor?",
        "opciones": [
            "Disminuir la velocidad y continuar",
            "Detener la marcha cualesquiera que sean las circunstancias, dando prioridad a la vía transversal",
            "Tocar el claxon y cruzar",
            "Ceder el paso solo a vehículos pesados"
        ],
        "respuesta": 1,
        "explicacion": "Ante una señal de 'Pare', el conductor debe detener la marcha y dar prioridad a los vehículos de la vía transversal."
    },
    {
        "id": 137,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 79, en una intersección sin señales de prioridad en vías de igual categoría, ¿a quién se debe ceder el paso?",
        "opciones": [
            "Al vehículo que se aproxima por la izquierda",
            "Al vehículo que se aproxima por la derecha",
            "Al vehículo más grande",
            "Al que toque el claxon primero"
        ],
        "respuesta": 1,
        "explicacion": "En vías de igual categoría sin señales, se cede el paso al vehículo que se aproxima por el lado derecho."
    },
    {
        "id": 138,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 79, al circular por una vía no pavimentada e incorporarse a una pavimentada, ¿qué debe hacer el conductor?",
        "opciones": [
            "Tiene prioridad",
            "Ceder el paso a los vehículos que se aproximan por la vía pavimentada",
            "Acelerar para incorporarse rápido",
            "Tocar el claxon"
        ],
        "respuesta": 1,
        "explicacion": "El conductor que circula por vía no pavimentada debe ceder el paso a los vehículos que se aproximan por una vía pavimentada."
    },
    {
        "id": 139,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 80, ¿a qué distancia mínima del carril de la vía férrea más cercano debe detenerse en un paso a nivel sin señalización?",
        "opciones": [
            "1 metro",
            "3 metros",
            "5 metros",
            "10 metros"
        ],
        "respuesta": 1,
        "explicacion": "En un paso a nivel sin señalización, se debe detener la marcha a no menos de 3 metros del carril de la vía férrea más cercano."
    },
    {
        "id": 140,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 82, ¿qué debe hacer el conductor al observar peatones cruzando por marcas tipo cebra?",
        "opciones": [
            "Acelerar para pasar antes",
            "Detener el vehículo y ceder el paso",
            "Tocar el claxon",
            "Pasar por el lado izquierdo"
        ],
        "respuesta": 1,
        "explicacion": "El conductor debe detener el vehículo y ceder el paso a los peatones que cruzan por marcas tipo cebra."
    },
    {
        "id": 141,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 83, al tomar o dejar pasajeros, ¿cuándo debe el conductor abrir las puertas?",
        "opciones": [
            "Antes de detenerse completamente",
            "Solo cuando el vehículo se encuentre completamente detenido",
            "Con el vehículo en marcha lenta",
            "No importa el momento"
        ],
        "respuesta": 1,
        "explicacion": "El conductor no debe abrir las puertas hasta que el vehículo se encuentre completamente detenido."
    },
    {
        "id": 142,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 85, al adelantar a otro vehículo en vías de dos o tres carriles, ¿por qué lado debe efectuarse el adelantamiento?",
        "opciones": [
            "Por la derecha",
            "Por la izquierda",
            "Por cualquier lado",
            "Por el arcén"
        ],
        "respuesta": 1,
        "explicacion": "El adelantamiento debe efectuarse por la senda izquierda."
    },
    {
        "id": 143,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 86, ¿qué está obligado a hacer el conductor del vehículo que va a ser adelantado?",
        "opciones": [
            "Acelerar para no ser adelantado",
            "No aumentar la velocidad ni efectuar maniobras que impidan el adelantamiento",
            "Cambiar de carril bruscamente",
            "Tocar el claxon"
        ],
        "respuesta": 1,
        "explicacion": "El conductor adelantado no debe aumentar la velocidad ni efectuar maniobras que impidan o dificulten el adelantamiento."
    },
    {
        "id": 144,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 87, al incorporarse a una vía, ¿qué carril debe utilizar el conductor si existe?",
        "opciones": [
            "El carril de desaceleración",
            "El carril de aceleración",
            "El carril central",
            "Cualquier carril"
        ],
        "respuesta": 1,
        "explicacion": "Al incorporarse a una vía, el conductor debe utilizar el carril de aceleración si existe."
    },
    {
        "id": 145,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 91, ¿a qué distancia de una curva de visibilidad reducida se prohíbe realizar media vuelta o giro en 'U'?",
        "opciones": [
            "A menos de 50 metros",
            "A menos de 100 metros",
            "A menos de 150 metros anteriores a la entrada o posteriores a la salida",
            "A menos de 200 metros"
        ],
        "respuesta": 2,
        "explicacion": "Se prohíbe la media vuelta a menos de 150 metros anteriores a la entrada o posteriores a la salida de una curva de visibilidad reducida."
    },
    {
        "id": 146,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 92, ¿cuál es la distancia máxima permitida para recorrer en marcha atrás?",
        "opciones": [
            "10 metros",
            "20 metros",
            "50 metros",
            "100 metros"
        ],
        "respuesta": 1,
        "explicacion": "La maniobra de marcha atrás no debe exceder los 20 metros de recorrido."
    },
    {
        "id": 147,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 92, ¿cuál es la velocidad máxima permitida al realizar marcha atrás?",
        "opciones": [
            "10 km/h",
            "20 km/h",
            "30 km/h",
            "40 km/h"
        ],
        "respuesta": 1,
        "explicacion": "La velocidad al realizar marcha atrás no debe ser superior a 20 km/h."
    },
    {
        "id": 148,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 93, ¿se permite conducir un vehículo de uso personal bajo los efectos del alcohol?",
        "opciones": [
            "Sí, si es en pequeñas cantidades",
            "Sí, solo de noche",
            "No, se prohíbe en niveles que pongan en riesgo o afecten la capacidad para conducir",
            "Solo en zonas rurales"
        ],
        "respuesta": 2,
        "explicacion": "Se prohíbe conducir un vehículo de uso personal bajo los efectos del alcohol en niveles que pongan en riesgo la capacidad para conducir."
    },
    {
        "id": 149,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 93, ¿se permite conducir bajo los efectos de drogas tóxicas o sustancias alucinógenas?",
        "opciones": [
            "Sí, con receta médica",
            "Sí, si son medicamentos",
            "No, se prohíbe bajo los efectos de drogas, sustancias alucinógenas, hipnóticas o estupefacientes",
            "Solo en casos de emergencia"
        ],
        "respuesta": 2,
        "explicacion": "Se prohíbe conducir bajo los efectos de drogas tóxicas, sustancias alucinógenas, hipnóticas, estupefacientes u otras de efectos similares."
    },
    {
        "id": 150,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 95, ¿se prohíbe ingerir bebidas alcohólicas en los vehículos?",
        "opciones": [
            "No, está permitido",
            "Sí, se prohíbe ingerir bebidas alcohólicas en los vehículos",
            "Solo en transporte público",
            "Solo en horario nocturno"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 95 prohíbe ingerir bebidas alcohólicas en los vehículos y su transportación cuando es evidente que se está consumiendo."
    },
    {
        "id": 151,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 96, ¿cuál es una causa de inmovilización del vehículo relativa al conductor?",
        "opciones": [
            "Que el conductor tenga licencia vencida",
            "Que no sea titular de licencia de conducción de la categoría para el tipo de vehículo que conduce",
            "Que el vehículo esté sucio",
            "Que no tenga seguro"
        ],
        "respuesta": 1,
        "explicacion": "Es causa de inmovilización que el conductor no sea titular de licencia de conducción de la categoría para el tipo de vehículo que conduce."
    },
    {
        "id": 152,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 96, ¿cuál es una causa de inmovilización del vehículo relativa al vehículo?",
        "opciones": [
            "Que el vehículo esté sucio",
            "Que no reúna los requisitos técnicos establecidos",
            "Que tenga más de 10 años de fabricado",
            "Que no tenga aire acondicionado"
        ],
        "respuesta": 1,
        "explicacion": "Es causa de inmovilización que el vehículo no reúna los requisitos técnicos establecidos en el Código."
    },
    {
        "id": 153,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 100, ¿quién crea las condiciones para garantizar el depósito, custodia y cuidado de los vehículos trasladados e inmovilizados?",
        "opciones": [
            "El Ministerio del Transporte",
            "Los Consejos de la Administración Provincial del Poder Popular y del municipio especial Isla de la Juventud",
            "El Ministerio de la Construcción",
            "Las empresas privadas"
        ],
        "respuesta": 1,
        "explicacion": "Los Consejos de la Administración Provincial y del municipio especial Isla de la Juventud crean las condiciones para el depósito y custodia de vehículos."
    },
    {
        "id": 154,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 102, ¿se permite conducir con menores de 12 años en el asiento delantero?",
        "opciones": [
            "Sí, si van acompañados",
            "Sí, en trayectos cortos",
            "No, se prohíbe conducir con menores de 12 años en el asiento delantero",
            "Solo en autopistas"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 102 prohíbe conducir con menores de 12 años de edad en el asiento delantero."
    },
    {
        "id": 155,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 102, ¿se permite usar teléfonos u otros medios de comunicación mientras el vehículo está en marcha?",
        "opciones": [
            "Sí, con manos libres",
            "No, está prohibido usar teléfonos u otros medios de comunicación mientras el vehículo está en marcha",
            "Solo en zonas rurales",
            "Solo si la llamada es urgente"
        ],
        "respuesta": 1,
                "explicacion": "El Artículo 102 prohíbe utilizar teléfonos u otros medios de comunicación mientras el vehículo está en marcha."
    },
    {
        "id": 156,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 103, ¿cuál es la altura máxima permitida para que un vehículo circule sin autorización especial?",
        "opciones": [
            "3.50 metros",
            "4.00 metros",
            "4.50 metros",
            "5.00 metros"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 103 establece que la altura máxima es de 4 metros."
    },
    {
        "id": 157,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 103, ¿cuál es el ancho máximo permitido para la circulación de vehículos sin autorización especial?",
        "opciones": [
            "2.20 metros",
            "2.40 metros",
            "2.60 metros",
            "3.00 metros"
        ],
        "respuesta": 2,
        "explicacion": "El ancho máximo permitido es de 2,60 metros."
    },
    {
        "id": 158,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 103, ¿cuál es la longitud máxima permitida para vehículos rígidos?",
        "opciones": [
            "12 metros",
            "15 metros",
            "18 metros",
            "20 metros"
        ],
        "respuesta": 1,
        "explicacion": "La longitud máxima para vehículos rígidos es de 15 metros."
    },
    {
        "id": 159,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 103, ¿cuál es la longitud máxima permitida para vehículos articulados o conjunto de vehículos?",
        "opciones": [
            "15 metros",
            "18 metros",
            "22 metros",
            "25 metros"
        ],
        "respuesta": 1,
        "explicacion": "La longitud máxima para vehículos articulados es de 18 metros."
    },
    {
        "id": 160,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 104, ¿en cuál de estos lugares se prohíbe adelantar a otro vehículo?",
        "opciones": [
            "En rectas con visibilidad",
            "En curvas de visibilidad reducida, cambios de rasante, pasos a nivel, túneles y pasos peatonales",
            "En autopistas de varios carriles",
            "En vías de un solo carril"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 104 prohíbe adelantar en curvas de visibilidad reducida, cambios de rasante, pasos a nivel, túneles y pasos peatonales."
    },
    {
        "id": 161,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 106, ¿se permite la circulación de vehículos por las aceras, paseos o separador central?",
        "opciones": [
            "Sí, con precaución",
            "Sí, si no hay peatones",
            "No, se prohíbe la circulación por aceras, paseos, separador central o cualquier componente de la vía no construido para tales fines",
            "Solo en casos de emergencia"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 106 prohíbe la circulación por aceras, paseos, separador central o cualquier componente no construido para tales fines."
    },
    {
        "id": 162,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 107, ¿se prohíbe al conductor de un vehículo en marcha realizar su detención de manera rápida o violenta?",
        "opciones": [
            "No, está permitido siempre",
            "Sí, excepto en caso de fuerza mayor y haciendo la señal adecuada",
            "Solo en autopistas",
            "Solo si hay pasajeros"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 107 prohíbe la detención rápida o violenta, excepto en caso de fuerza mayor y haciendo la señal adecuada."
    },
    {
        "id": 163,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 109, ¿se puede interrumpir el tránsito de una vía en cualquier forma y por cualquier tiempo?",
        "opciones": [
            "Sí, sin restricciones",
            "No, se requiere permiso o autorización de la unidad correspondiente del Ministerio del Interior y situar previamente las señales adecuadas",
            "Solo los domingos",
            "Solo con autorización verbal"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 109 prohíbe interrumpir el tránsito sin permiso del MININT y sin situar previamente las señales adecuadas."
    },
    {
        "id": 164,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 110, ¿se prohíbe el trasbordo de mercancías de un vehículo a otro en la vía pública?",
        "opciones": [
            "No, está permitido",
            "Sí, cuando obstruya la circulación, excepto en casos de accidente, rotura o desperfecto técnico",
            "Solo en zonas rurales",
            "Solo de noche"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 110 prohíbe el trasbordo cuando obstruya la circulación, salvo en casos de accidente, rotura o desperfecto técnico."
    },
    {
        "id": 165,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 111, ¿se prohíbe el cruce de vehículos por una intersección cuando la vía por donde pretende circular está obstaculizada más allá de dicha intersección?",
        "opciones": [
            "No, está permitido",
            "Sí, se prohíbe",
            "Solo si hay semáforo",
            "Solo si hay un agente"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 111 prohíbe cruzar una intersección cuando la vía de destino está obstaculizada más allá de ella."
    },
    {
        "id": 166,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 112, ¿a qué edad se prohíbe la conducción de ciclos fuera de zonas de recreación?",
        "opciones": [
            "Menores de 10 años",
            "Menores de 12 años",
            "Menores de 14 años",
            "Menores de 16 años"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 112 prohíbe la conducción de ciclos a menores de 12 años fuera de zonas de recreación."
    },
    {
        "id": 167,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 112, ¿a qué distancia máxima del contén debe circular un ciclo?",
        "opciones": [
            "A más de un metro",
            "A no más de un metro del contén de la acera o borde derecho",
            "A 2 metros",
            "No hay límite"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 112 establece que los ciclos deben circular a no más de un metro del contén o borde derecho."
    },
    {
        "id": 168,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 112, ¿se permite a los ciclistas circular en marcha paralela a otro ciclo?",
        "opciones": [
            "Sí, siempre",
            "No, excepto en el pase o adelantamiento",
            "Solo de día",
            "Solo en zonas rurales"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 112 prohíbe circular en marcha paralela a otro ciclo, excepto en el pase o adelantamiento."
    },
    {
        "id": 169,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 112, ¿se permite a los ciclistas circular sin timbre, fotuto o corneta?",
        "opciones": [
            "Sí, es opcional",
            "No, se prohíbe circular cuando no posean timbre, fotuto o corneta",
            "Solo en zonas rurales",
            "Solo de noche"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 112 prohíbe la circulación de ciclos sin timbre, fotuto o corneta."
    },
    {
        "id": 170,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 112, ¿se permite a los ciclistas circular entre el anochecer y el amanecer sin la debida iluminación?",
        "opciones": [
            "Sí, es opcional",
            "No, se prohíbe circular sin la debida iluminación que lo haga visible",
            "Solo en autopistas",
            "Solo en zonas urbanas"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 112 prohíbe la circulación de ciclos entre el anochecer y el amanecer sin la debida iluminación."
    },
    {
        "id": 171,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 113, si un ciclista reincide en infracciones, ¿qué puede disponer el jefe de la PNR?",
        "opciones": [
            "Una multa menor",
            "La retención temporal del ciclo por un término entre uno y seis meses",
            "Una advertencia verbal",
            "Nada"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 113 faculta al jefe de la PNR a disponer la retención temporal del ciclo entre 1 y 6 meses en caso de reincidencia."
    },
    {
        "id": 172,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 114, ¿quiénes son responsables de las infracciones que cometan los conductores de ciclos?",
        "opciones": [
            "Los padres",
            "Los propios conductores o su representante legal",
            "El dueño del ciclo",
            "Nadie"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 114 establece que los conductores de ciclos son responsables personalmente o su representante legal."
    },
    {
        "id": 173,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 117, ¿se permite la circulación por la vía utilizando patines, carriolas o artefactos similares?",
        "opciones": [
            "Sí, siempre",
            "No, excepto en vía cerrada a tal efecto o en zona de recreación",
            "Solo de día",
            "Solo en zonas rurales"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 117 prohíbe la circulación con patines o carriolas, excepto en vía cerrada o zona de recreación."
    },
    {
        "id": 174,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 118, ¿en qué horario se permite excepcionalmente la circulación de ganado por vías pavimentadas?",
        "opciones": [
            "Entre el anochecer y el amanecer",
            "Entre el amanecer y el anochecer",
            "Solo de noche",
            "A cualquier hora"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 118 permite excepcionalmente el cruce de ganado entre el amanecer y el anochecer."
    },
    {
        "id": 175,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 118, cuando se trata de un rebaño que cruza la vía, ¿cuántos conductores con banderas rojas se requieren?",
        "opciones": [
            "Uno solo",
            "Un conductor a 100 metros a cada lado (delante y detrás)",
            "Tres conductores",
            "Ninguno"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 118 exige un conductor con bandera roja a 100 metros delante y otro a 100 metros detrás del rebaño."
    },
    {
        "id": 176,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 119, ¿qué se prohíbe en relación con el ganado en la vía o zonas aledañas?",
        "opciones": [
            "Tenerlo en corrales",
            "Tener ganado en la vía o zonas aledañas en condiciones que le permitan trasladarse hacia esta por sí solo",
            "Transportarlo en vehículos",
            "Vacunarlo"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 119 prohíbe tener ganado en la vía o zonas aledañas en condiciones que le permitan trasladarse hacia esta por sí solo."
    },
    {
        "id": 177,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 120, ¿se permite a los conductores de vehículos de carga transportar pasajeros?",
        "opciones": [
            "Sí, sin restricciones",
            "No, salvo lo dispuesto en los artículos 135 y 136 del Código",
            "Solo de día",
            "Solo en zonas rurales"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 120 prohíbe a los conductores de vehículos de carga transportar pasajeros, salvo lo dispuesto en los artículos 135 y 136."
    },
    {
        "id": 178,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 121, ¿se permite bajar con el motor apagado, en neutro o con velocidad inadecuada en vías montañosas?",
        "opciones": [
            "Sí, para ahorrar combustible",
            "No, se prohíbe",
            "Solo de día",
            "Solo con autorización"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 121 prohíbe bajar con el motor apagado, en neutro o con velocidad inadecuada en vías montañosas."
    },
    {
        "id": 179,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 122, cuando dos vehículos no pueden cruzarse en un tramo de vía estrecho, ¿quién debe ceder el paso?",
        "opciones": [
            "El que circula cuesta arriba",
            "El que circula por la bajada o declive",
            "El vehículo más grande",
            "El que toque el claxon primero"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 122 establece que el conductor que circula por la bajada o declive debe ceder el paso."
    },
    {
        "id": 180,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 123, ¿qué vehículos tienen prohibida la circulación por los túneles?",
        "opciones": [
            "Los vehículos ligeros",
            "Los que transportan materias tóxicas, inflamables o explosivas y los que no pueden mantener 60 km/h",
            "Las motocicletas",
            "Los ómnibus"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 123 prohíbe la circulación por túneles a vehículos con materias tóxicas o explosivas y a los que no pueden mantener 60 km/h."
    },
    {
        "id": 181,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 124, ¿en qué caso se prohíbe fumar en los vehículos?",
        "opciones": [
            "Siempre",
            "Cuando se conduce transporte público, se transportan materiales inflamables o explosivos, o se circula como ayudante",
            "Solo de noche",
            "Solo en autopistas"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 124 prohíbe fumar en transporte público, al transportar materiales inflamables o explosivos, y como ayudante o pasajero."
    },
    {
        "id": 182,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 125, ¿se permite la reparación de vehículos en la vía?",
        "opciones": [
            "Sí, siempre",
            "No, excepto en casos de fuerza mayor o reparaciones ligeras en vías secundarias de poco tránsito",
            "Solo de día",
            "Solo con autorización"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 125 prohíbe la reparación en la vía, excepto por fuerza mayor o reparaciones ligeras en vías secundarias."
    },
    {
        "id": 183,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 126, ¿cuál es el límite general de velocidad en vías urbanas para todos los vehículos de motor?",
        "opciones": [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "70 km/h"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 126 establece 50 km/h como límite general en vías urbanas."
    },
    {
        "id": 184,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 127, ¿cuál es la velocidad máxima permitida en caminos de tierra o terraplén?",
        "opciones": [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 127 establece 60 km/h como velocidad máxima en caminos de tierra o terraplén."
    },
    {
        "id": 185,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 127, ¿cuál es la velocidad mínima obligatoria en los túneles?",
        "opciones": [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 127 establece 60 km/h como velocidad mínima obligatoria en túneles."
    },
    {
        "id": 186,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 127, en zonas de niños, ¿cuál es la velocidad máxima en zona urbana?",
        "opciones": [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "50 km/h"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 127 establece 40 km/h como velocidad máxima en zonas de niños en zona urbana."
    },
    {
        "id": 187,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 128, ¿qué debe hacer el conductor ante la presencia de un peatón discapacitado?",
        "opciones": [
            "Tocar el claxon",
            "Moderar la marcha y detenerse si es preciso",
            "Acelerar para pasar rápido",
            "Ignorarlo"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 128 obliga a moderar la marcha y detenerse si es preciso ante la presencia de un peatón discapacitado."
    },
    {
        "id": 188,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 130, ¿qué documentos debe portar el conductor de un vehículo de motor para el transporte de carga?",
        "opciones": [
            "Solo el carné de identidad",
            "La hoja de ruta y cuantos documentos estén establecidos",
            "Ninguno",
            "Solo la licencia de conducción"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 130 obliga a portar la hoja de ruta y cuantos documentos estén establecidos."
    },
    {
        "id": 189,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 132, ¿cuál es la altura máxima de la carga sobre el pavimento?",
        "opciones": [
            "3 metros",
            "4 metros",
            "5 metros",
            "6 metros"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 132 establece 4 metros como altura máxima de la carga sobre el pavimento."
    },
    {
        "id": 190,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 132, ¿cuánto puede sobresalir la carga por los extremos delantero y trasero de la cama o caja?",
        "opciones": [
            "1 metro",
            "2 metros",
            "3 metros",
            "No puede sobresalir"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 132 permite que la carga sobresalga hasta 2 metros por los extremos delantero y trasero."
    },
    {
        "id": 191,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 134, ¿con qué se deben señalizar las cargas que sobresalen más de un metro de día?",
        "opciones": [
            "Con luces intermitentes",
            "Con dos banderas de color rojo de 30x30 centímetros",
            "Con pintura blanca",
            "Con un pañuelo negro"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 134 establece dos banderas rojas de 30x30 cm para señalizar cargas que sobresalen de día."
    },
    {
        "id": 192,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 134, ¿a qué distancia mínima deben ser visibles las luces o banderas que señalizan la carga que sobresale?",
        "opciones": [
            "A 50 metros",
            "A 100 metros",
            "A 150 metros",
            "A 200 metros"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 134 exige que las luces o banderas sean visibles a una distancia mínima de 100 metros."
    },
    {
        "id": 193,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 135, ¿cuál es la velocidad máxima permitida en zona urbana para vehículos de carga que transportan personas?",
        "opciones": [
            "30 km/h",
            "40 km/h",
            "50 km/h",
            "60 km/h"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 135 establece 40 km/h como velocidad máxima en zona urbana para vehículos de carga con pasajeros."
    },
    {
        "id": 194,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 135, ¿cuál es la altura mínima de las barandas en vehículos de carga para transportar personas?",
        "opciones": [
            "30 centímetros",
            "40 centímetros",
            "60 centímetros",
            "100 centímetros"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 135 establece que las barandas no deben ser inferiores a 40 centímetros de altura."
    },
    {
        "id": 195,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 135, ¿cuántas personas como máximo pueden ir por metro cuadrado en la cama o caja de un vehículo de carga?",
        "opciones": [
            "2 personas",
            "3 personas",
            "4 personas",
            "5 personas"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 135 establece que no pueden exceder de cuatro personas por metro cuadrado."
    },
    {
        "id": 196,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 137, ¿cómo debe estacionarse un vehículo en vías de dos sentidos de circulación?",
        "opciones": [
            "En diagonal",
            "Paralelo a la dirección de la circulación y junto a la acera o borde derecho",
            "En cualquier posición",
            "Sobre la acera"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 137 establece que el estacionamiento debe ser paralelo a la dirección de la circulación y junto a la acera o borde derecho."
    },
    {
        "id": 197,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 139, ¿a qué distancia mínima de un hidrante se prohíbe estacionar?",
        "opciones": [
            "A menos de 2 metros",
            "A menos de 4 metros anteriores y posteriores",
            "A menos de 10 metros",
            "A menos de 20 metros"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 139 prohíbe estacionar frente o a una distancia menor que 4 metros, anterior y posterior, de un hidrante."
    },
    {
        "id": 198,
        "categoria": "prohibiciones",
        "pregunta": "Según el Artículo 139, ¿a qué distancia mínima de una parada de ómnibus se prohíbe estacionar?",
        "opciones": [
            "10 metros",
            "20 metros",
            "30 metros",
            "40 metros"
        ],
        "respuesta": 3,
        "explicacion": "El Artículo 139 prohíbe estacionar en el espacio de 40 metros hacia atrás y 10 metros hacia delante de la señal oficial de parada de ómnibus."
    },
    {
        "id": 199,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 144, ¿por qué lado debe caminar el peatón dentro de los perímetros urbanos?",
        "opciones": [
            "Por el lado izquierdo",
            "Por el lado derecho del sentido en que transite",
            "Por el centro",
            "Por cualquier lado"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 144 establece que el peatón debe caminar por el lado derecho del sentido en que transite dentro de los perímetros urbanos."
    },
    {
        "id": 200,
        "categoria": "circulacion",
        "pregunta": "Según el Artículo 145, ¿cómo debe cruzar el peatón una calzada en intersecciones urbanas sin señal ni marcado?",
        "opciones": [
            "En diagonal",
            "En línea recta de acera a acera, por la trayectoria más corta y cediendo el paso a los vehículos",
            "Corriendo",
            "Por donde quiera"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 145 establece que el peatón debe cruzar en línea recta de acera a acera, por la trayectoria más corta y cediendo el paso a los vehículos."
    },
    {
        "id": 201,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 264, ¿qué categoría de licencia de conducción autoriza a conducir ciclomotores?",
        "opciones": [
            "Categoría A",
            "Subcategoría A-1",
            "Categoría B",
            "Subcategoría B-1"
        ],
        "respuesta": 1,
        "explicacion": "La subcategoría A-1 autoriza a conducir ciclomotores según el Artículo 264 del Código."
    },
    {
        "id": 202,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 278, ¿cuál es la edad mínima para obtener la licencia de conducción especial militar?",
        "opciones": [
            "16 años",
            "17 años",
            "18 años",
            "21 años"
        ],
        "respuesta": 1,
        "explicacion": "La licencia especial militar puede otorgarse a partir de los 17 años de edad."
    },
    {
        "id": 203,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 278, ¿a partir de qué edad se puede obtener la subcategoría A-1 de la licencia de conducción?",
        "opciones": [
            "14 años",
            "16 años",
            "18 años",
            "21 años"
        ],
        "respuesta": 1,
        "explicacion": "La subcategoría A-1 puede otorgarse a partir de los 16 años de edad."
    },
    {
        "id": 204,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 286, ¿a qué edad los titulares de licencia de conducción están obligados a someterse a examen médico por primera vez?",
        "opciones": [
            "A los 55 años",
            "A los 60 años",
            "A los 65 años",
            "A los 70 años"
        ],
        "respuesta": 2,
        "explicacion": "Al cumplir 65 años, los titulares deben presentarse a examen médico obligatorio."
    },
    {
        "id": 205,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 286, a partir de los 70 años, ¿cada cuánto tiempo el titular debe someterse al examen médico obligatorio?",
        "opciones": [
            "Cada 6 meses",
            "Cada año",
            "Cada 2 años",
            "Cada 3 años"
        ],
        "respuesta": 2,
        "explicacion": "A partir de los 70 años, la obligación de examen médico se establece cada 2 años."
    },
    {
        "id": 206,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 301, ¿con qué frecuencia es obligatoria la recalificación de los conductores profesionales?",
        "opciones": [
            "Cada año",
            "Cada 2 años",
            "Cada 3 años",
            "Cada 5 años"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 301 establece la recalificación obligatoria de los conductores profesionales cada 2 años."
    },
    {
        "id": 207,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 3 del Decreto 287, ¿cuántos puntos como máximo puede acumular un conductor novel en un año natural?",
        "opciones": [
            "12 puntos",
            "24 puntos",
            "36 puntos",
            "48 puntos"
        ],
        "respuesta": 1,
        "explicacion": "Los conductores noveles pueden acumular como máximo 24 puntos en un año natural."
    },
    {
        "id": 208,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 3 del Decreto 287, ¿cuántos puntos como máximo puede acumular un titular de licencia en un año natural?",
        "opciones": [
            "24 puntos",
            "36 puntos",
            "48 puntos",
            "60 puntos"
        ],
        "respuesta": 1,
        "explicacion": "Los titulares de licencia de conducción pueden acumular como máximo 36 puntos en un año natural."
    },
    {
        "id": 209,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 264, ¿qué categoría autoriza a conducir vehículos de hasta 3,500 kg con un máximo de 8 asientos?",
        "opciones": [
            "Categoría A",
            "Categoría B",
            "Categoría C",
            "Categoría D"
        ],
        "respuesta": 1,
        "explicacion": "La Categoría B autoriza a conducir vehículos de hasta 3,500 kg y un máximo de 8 asientos sin contar el del conductor."
    },
    {
        "id": 210,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 265, ¿cuántos años de experiencia se requieren como mínimo en la categoría B para obtener la categoría C o D?",
        "opciones": [
            "1 año",
            "2 años",
            "3 años",
            "5 años"
        ],
        "respuesta": 1,
        "explicacion": "Se requieren 2 años de experiencia mínima en la categoría inferior B para obtener C o D."
    },
    {
        "id": 211,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 279, ¿quiénes NO pueden obtener la licencia de conducción?",
        "opciones": [
            "Los mayores de 65 años",
            "Los alcohólicos, habituales al uso de sustancias tóxicas o inhabilitados judicialmente",
            "Los que no tengan vehículo propio",
            "Los que vivan en zonas rurales"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 279 prohíbe otorgar licencia a alcohólicos, toxicómanos e inhabilitados por tribunales o funcionarios competentes."
    },
    {
        "id": 212,
        "categoria": "licencias",
        "pregunta": "Según el Artículo 264, ¿qué autoriza la categoría E de la licencia de conducción?",
        "opciones": [
            "Solo vehículos ligeros",
            "Conjunto de vehículos y ómnibus articulados",
            "Vehículos agrícolas",
            "Motocicletas"
        ],
        "respuesta": 1,
        "explicacion": "La Categoría E autoriza a conducir conjuntos de vehículos y ómnibus articulados según el Artículo 264."
    },
    {
        "id": 213,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 210, ¿qué es la revisión técnica de los vehículos?",
        "opciones": [
            "Una inspección visual únicamente",
            "La verificación para detectar cualquier defecto que constituya un riesgo para la circulación vial",
            "Un cambio de aceite obligatorio",
            "Una reparación preventiva"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 210 define la revisión técnica como la verificación para detectar defectos que constituyan un riesgo para la circulación."
    },
    {
        "id": 214,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 211, ¿qué organismo está a cargo de la revisión técnica de los vehículos?",
        "opciones": [
            "El Ministerio del Interior",
            "El Ministerio del Transporte",
            "El Ministerio de la Construcción",
            "El Ministerio de Salud Pública"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 211 establece que la revisión técnica está a cargo del Ministerio del Transporte."
    },
    {
        "id": 215,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 215, ¿qué organismo está a cargo del Registro de Vehículos?",
        "opciones": [
            "El Ministerio del Transporte",
            "El Ministerio del Interior",
            "El Ministerio de la Construcción",
            "El Ministerio de Justicia"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 215 establece que la actividad registral de vehículos está a cargo del Ministerio del Interior."
    },
    {
        "id": 216,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 182, ¿cuándo el freno de servicio se considera deficiente?",
        "opciones": [
            "Cuando funciona normalmente",
            "Cuando no acciona uniformemente en todas las ruedas",
            "Cuando está nuevo",
            "Cuando tiene poco uso"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 182 considera deficiente el freno de servicio cuando no acciona uniformemente en todas las ruedas."
    },
    {
        "id": 217,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 182, ¿qué holgura o juego máximo puede tener el timón antes de considerarse deficiente?",
        "opciones": [
            "15 grados",
            "20 grados",
            "25 grados",
            "30 grados"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 182 establece que una holgura o juego libre de más de 25 grados en el timón es una deficiencia técnica."
    },
    {
        "id": 218,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 182, ¿qué se considera una deficiencia relacionada con los neumáticos?",
        "opciones": [
            "Que estén nuevos",
            "Que presenten el desgaste máximo normado por los fabricantes",
            "Que estén inflados",
            "Que sean de diferente marca"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 182 considera deficiencia cuando la superficie de los neumáticos presenta el desgaste máximo normado por los fabricantes."
    },
    {
        "id": 219,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 184, ¿a qué distancia mínima deben iluminar las luces de cruce o cortas?",
        "opciones": [
            "20 metros por delante",
            "40 metros por delante",
            "60 metros por delante",
            "100 metros por delante"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 184 establece que las luces de cruce o cortas deben alumbrar la vía con eficacia hasta una distancia de 40 metros por delante del vehículo."
    },
    {
        "id": 220,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 184, ¿a qué distancia mínima deben iluminar las luces de carretera o largas?",
        "opciones": [
            "40 metros por delante",
            "60 metros por delante",
            "80 metros por delante",
            "100 metros por delante"
        ],
        "respuesta": 3,
        "explicacion": "Las luces de carretera o largas deben alumbrar la vía con eficacia hasta una distancia de al menos 100 metros por delante del vehículo."
    },
    {
        "id": 221,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 184, ¿de qué color deben ser las luces de posición traseras?",
        "opciones": [
            "Blancas",
            "Amarillas",
            "Rojas",
            "Azules"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 184 establece que las luces de posición traseras deben ser de color rojo."
    },
    {
        "id": 222,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 184, ¿de qué color deben ser las luces intermitentes indicadoras de dirección?",
        "opciones": [
            "Rojas",
            "Amarillas",
            "Blancas",
            "Verdes"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 184 establece que las luces intermitentes indicadoras de dirección deben ser de color amarillo."
    },
    {
        "id": 223,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 184, ¿qué vehículos están obligados a tener un dispositivo reflectante trasero en forma de triángulo equilátero?",
        "opciones": [
            "Los automóviles ligeros",
            "Los remolques y semirremolques",
            "Las motocicletas",
            "Los ómnibus"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 184 establece que los dispositivos reflectantes de los remolques y semirremolques deben tener forma de triángulo equilátero."
    },
    {
        "id": 224,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 186, ¿qué luces debe utilizar el conductor dentro del perímetro urbano cuando la vía tiene iluminación suficiente?",
        "opciones": [
            "Luces largas",
            "Luces de cruce o cortas o las de posición",
            "Solo las luces de emergencia",
            "Ninguna luz"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 186 establece que dentro del perímetro urbano con iluminación suficiente se deben usar luces de cruce o cortas o las de posición."
    },
    {
        "id": 225,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 186, ¿cuándo debe sustituir el conductor las luces largas por las cortas en zona rural?",
        "opciones": [
            "Solo cuando llueva",
            "Tan pronto se aprecie la posibilidad de deslumbramiento a conductores que circulan en sentido contrario",
            "Solo de día",
            "Nunca"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 186 obliga a sustituir las luces largas por las cortas tan pronto se aprecie la posibilidad de deslumbrar a otros conductores."
    },
    {
        "id": 226,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 189, ¿se permite la instalación de luces o reflectores especiales (giratorios o intermitentes) en vehículos de motor?",
        "opciones": [
            "Sí, sin restricciones",
            "Sí, solo en autopistas",
            "No, se prohíbe su instalación salvo autorización de los ministerios del Interior y de las FAR",
            "Solo los fines de semana"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 189 prohíbe la instalación de luces o reflectores especiales, salvo autorización de los ministerios del Interior y de las FAR."
    },
    {
        "id": 227,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 191, ¿en qué lugares se prohíbe el uso del claxon?",
        "opciones": [
            "En autopistas",
            "Dentro de las poblaciones y zonas de silencio",
            "En zonas rurales",
            "En túneles"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 191 prohíbe usar el claxon dentro de las poblaciones y zonas de silencio, salvo en casos de peligro o emergencia."
    },
    {
        "id": 228,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 193, ¿a qué distancia mínima deben permitir ver los espejos retrovisores?",
        "opciones": [
            "20 metros en vía recta y llana",
            "30 metros en vía recta y llana",
            "50 metros en vía recta y llana",
            "100 metros en vía recta y llana"
        ],
        "respuesta": 2,
        "explicacion": "El Artículo 193 establece que los espejos retrovisores deben permitir ver a una distancia mínima de 50 metros en vía recta y llana."
    },
    {
        "id": 229,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 199, ¿qué vehículos deben estar provistos de un botiquín con medicamentos para primeros auxilios?",
        "opciones": [
            "Solo los automóviles ligeros",
            "Los ómnibus y vehículos de transporte de carga cuando circulan por vías rurales",
            "Solo las motocicletas",
            "Todos los vehículos sin excepción"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 199 establece que los ómnibus y vehículos de transporte de carga deben llevar botiquín cuando circulan por vías rurales."
    },
   {
        "id": 230,
        "categoria": "vehiculos",
        "pregunta": "Según el Artículo 201, ¿cómo debe ser la señal de peligro que todo conductor está obligado a llevar?",
        "opciones": [
            "Circular con lados de 30 cm",
            "Triangular con lados de 45 centímetros y de material reflectante",
            "Rectangular con lados de 50 cm",
            "Cuadrada con lados de 40 cm"
        ],
        "respuesta": 1,
        "explicacion": "El Artículo 201 establece que la señal de peligro debe ser triangular, con lados de 45 centímetros y de material reflectante."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = preguntas;
}