<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de identificación y preparación de mercancías.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de los conceptos de identificación y preparación de mercancías',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué se entiende por mercancía dentro de una operación logística?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recurso financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Bien o producto susceptible de almacenamiento, transporte y comercialización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Documento administrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medio de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La mercancía corresponde a cualquier bien o producto que puede ser almacenado, transportado y comercializado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes corresponde a una mercancía perecedera?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cemento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Televisor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Frutas frescas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tornillos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las frutas frescas tienen una vida útil limitada y requieren condiciones especiales de conservación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes es una característica de la mercancía?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Peso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Nómina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presupuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El peso es una característica fundamental para la manipulación y transporte de mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué aspecto determina la naturaleza de la carga?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las vacaciones del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El plan de mercadeo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las condiciones de manipulación, almacenamiento y transporte.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La naturaleza de la carga determina los requerimientos para su manejo seguro.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál es la función principal del empaque?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger y contener directamente el producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar facturas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar compras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El empaque protege y conserva el producto durante su almacenamiento y comercialización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué función cumple el embalaje?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agrupar y proteger mercancías durante el transporte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar pedidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gestionar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar nómina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El embalaje protege la mercancía durante el transporte y almacenamiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué información puede encontrarse en un rotulado logístico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salario del operario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fecha de vacaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nombre del producto y código de identificación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organigrama empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El rotulado facilita la identificación y trazabilidad de las mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué indica el símbolo pictórico de una copa rota?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Material inflamable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener congelado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producto frágil.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este símbolo indica que la mercancía requiere manipulación cuidadosa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué representa la densidad de una carga?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costo del transporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Relación entre peso y volumen.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Valor comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tiempo de entrega.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La densidad permite optimizar almacenamiento y transporte.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es una técnica de arrume utilizada en almacenamiento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arrume cruzado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Arrume financiero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Arrume contable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Arrume administrativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El arrume cruzado mejora la estabilidad de las mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué significa el método <em>FIFO</em>?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Primero en vencer, primero en salir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Último en entrar, primero en salir.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Último en vencer, último en salir.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Primero en entrar, primero en salir.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El método <em>FIFO</em> facilita la adecuada rotación de mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de los siguientes equipos se utiliza para el movimiento de cargas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impresora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escáner.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Montacargas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Archivador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El montacargas permite movilizar mercancías de forma segura y eficiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué objetivo tiene el almacenamiento dentro de la logística?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conservar y controlar mercancías hasta su utilización o despacho.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contratar personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar presupuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El almacenamiento garantiza la disponibilidad y conservación de los productos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es un tipo de almacenamiento utilizado en logística?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Refrigerado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Financiero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Jurídico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El almacenamiento refrigerado se utiliza para productos que requieren control de temperatura.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué actividad forma parte de los procedimientos de almacenamiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaboración de contratos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseño publicitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gestión tributaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recepción e inspección de mercancías.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La recepción e inspección son actividades fundamentales del almacenamiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es una herramienta de comunicación utilizada en logística?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estantería.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Montacargas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Correo electrónico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Embalaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El correo electrónico facilita el intercambio de información logística.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué técnica favorece una comunicación efectiva en las operaciones logísticas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escucha activa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Improvisación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suposición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omisión de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La escucha activa favorece la comprensión y coordinación de actividades.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué actividad hace parte de la preparación de mercancías para despacho?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alistamiento de mercancías.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaboración de nómina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contratación de personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El alistamiento garantiza que la mercancía cumpla las condiciones requeridas para el despacho.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué criterio puede utilizarse para clasificar mercancías antes del despacho?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cargo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Destino.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El destino es uno de los criterios más utilizados para clasificar mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es una variable de entrega que debe considerarse antes del despacho?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color corporativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseño de oficinas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tiempo de entrega.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Número de empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El tiempo de entrega es una variable clave para garantizar el cumplimiento de los compromisos con el cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
