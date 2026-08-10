<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Comunicación aplicada al despacho
    
    .bg-full-width.bg-fondo-1
      .px-5
        img(src="@/assets/curso/tema5/1.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text La comunicación desempeña un papel fundamental en las operaciones logísticas, ya que facilita el intercambio de información entre las diferentes áreas involucradas en los procesos de almacenamiento, preparación y despacho de mercancías. Una comunicación efectiva contribuye a la coordinación de actividades, la reducción de errores y el cumplimiento de los requerimientos del cliente.
        
        separador
        
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.1 Concepto de comunicación
        
        .row.justify-content-center.align-items-center.mb-5
          .col-md-8.col-lg-4.col-xl-4.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
          .col-lg-7.col-xl-5.mb-3.mb-lg-0
            .bg-color-1.p-3.p-lg-5.px-lg-5.tarjeta 
              p.mb-0 Es el proceso de intercambio oportuno, claro y preciso de información entre las áreas involucradas en la preparación, verificación, transporte y entrega de los productos. 
          .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema5/3.svg", data-aos="zoom-in")
    
    
        .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
          p.mb-0 Su finalidad es coordinar las operaciones logísticas, garantizar la trazabilidad de la mercancía, reducir errores, facilitar la toma de decisiones y asegurar que el despacho se realice conforme a los tiempos, requisitos documentales y condiciones establecidas por la organización y el cliente. Los elementos básicos de la comunicación son:
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/4.png", data-aos="zoom-in")
          .col-lg-7
            .bg-fondo-slider.tarjeta
              .p-4
                SlyderA(tipo="b").bg-color-white.p-4.tarjeta
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-2.mb-3.mb-lg-0.order-2
                      figure
                        img(src='@/assets/curso/tema5/5.svg', alt='Imagen de acompañamiento')
                    .col-lg-10.mb-4.mb-md-0.order-1
                      h4 Emisor
                      p Persona o área que genera y transmite la información necesaria para coordinar una actividad o proceso logístico de manera clara y oportuna.
                      p.mb-0 <b>Ejemplo</b>: auxiliar de despacho.
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-2.mb-3.mb-lg-0.order-2
                      figure
                        img(src='@/assets/curso/tema5/6.svg', alt='Imagen de acompañamiento')
                    .col-lg-10.mb-4.mb-md-0.order-1
                      h4 Receptor
                      p Persona o área que recibe, interpreta y utiliza la información para ejecutar una actividad dentro del proceso logístico.
                      p.mb-0 <b>Ejemplo</b>: conductor de transporte.
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-2.mb-3.mb-lg-0.order-2
                      figure
                        img(src='@/assets/curso/tema5/7.svg', alt='Imagen de acompañamiento')
                    .col-lg-10.mb-4.mb-md-0.order-1
                      h4 Mensaje
                      p Información que se transmite para comunicar instrucciones, datos o novedades relacionadas con la preparación, despacho o entrega de mercancías.
                      p.mb-0 <b>Ejemplo</b>: pedido listo para despacho.
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-2.mb-3.mb-lg-0.order-2
                      figure
                        img(src='@/assets/curso/tema5/8.svg', alt='Imagen de acompañamiento')
                    .col-lg-10.mb-4.mb-md-0.order-1
                      h4 Canal
                      p Medio utilizado para transmitir la información entre los participantes del proceso logístico, garantizando una comunicación efectiva y oportuna.
                      p.mb-0 <b>Ejemplo</b>: correo electrónico o radio.
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-2.mb-3.mb-lg-0.order-2
                      figure
                        img(src='@/assets/curso/tema5/9.svg', alt='Imagen de acompañamiento')
                    .col-lg-10.mb-4.mb-md-0.order-1
                      h4 Retroalimentación
                      p Respuesta del receptor que confirma la recepción, comprensión o ejecución de la información, permitiendo verificar que la comunicación fue efectiva.
                      p.mb-0 <b>Ejemplo</b>: confirmación de entrega del pedido.
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Herramientas de comunicación
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema5/10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Son los medios físicos y digitales que facilitan el intercambio de información entre las personas y áreas involucradas en el despacho de mercancías. Su utilización permite coordinar actividades, transmitir instrucciones, informar novedades, realizar seguimiento a los pedidos y fortalecer la trazabilidad, contribuyendo al desarrollo eficiente, seguro y oportuno de las operaciones logísticas. Entre las más utilizadas en logística se encuentran:
        
        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema5/11.svg", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-3.p-lg-5(titulo="Correo electrónico")
                figure
                  img(src="@/assets/curso/tema5/12.png")
                p.mb-0 Medio digital utilizado para enviar y recibir información, documentos y confirmaciones relacionadas con las operaciones logísticas, garantizando el registro y la trazabilidad de las comunicaciones.
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-3.p-lg-5(titulo="Teléfono")
                figure
                  img(src="@/assets/curso/tema5/13.png")
                p.mb-0 Herramienta de comunicación inmediata que facilita la coordinación de actividades, la atención de novedades y la resolución oportuna de situaciones durante el despacho de mercancías.
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-3.p-lg-5(titulo="Aplicaciones de mensajería")
                figure
                  img(src="@/assets/curso/tema5/14.png")
                p.mb-0 Plataformas digitales que permiten intercambiar mensajes, imágenes, documentos y ubicaciones en tiempo real, favoreciendo la coordinación ágil entre los actores de la operación logística.
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-3.p-lg-5(titulo="Sistemas de información")
                figure
                  img(src="@/assets/curso/tema5/15.png")
                p.mb-0 Aplicaciones informáticas que integran, registran y gestionan datos relacionados con inventarios, pedidos, despachos y trazabilidad, apoyando la toma de decisiones logísticas.
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-3.p-lg-5(titulo="Plataformas colaborativas")
                figure
                  img(src="@/assets/curso/tema5/16.png")
                p.mb-0 Herramientas digitales que facilitan el trabajo conjunto, el intercambio de información y el seguimiento de actividades entre las diferentes áreas involucradas en la operación logística.
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-3.p-lg-5(titulo="Radios de comunicación")
                figure
                  img(src="@/assets/curso/tema5/17.png")
                p.mb-0 Equipos de comunicación inalámbrica que permiten transmitir instrucciones y coordinar actividades de manera inmediata, especialmente en bodegas, patios y centros de distribución con alta operación.  

        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 Estas herramientas facilitan la coordinación de actividades y el seguimiento de las operaciones logísticas.

        .row.justify-content-center
          .col-lg-8
            .bg-color-2.tarjeta.mb-5.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/18.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 Un operador logístico utiliza una aplicación móvil para informar el estado de una entrega en tiempo real. 

    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Aplicaciones en logística

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/19.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") Son herramientas tecnológicas diseñadas para apoyar la planificación, ejecución, control y seguimiento de las operaciones logísticas. Su implementación facilita la gestión de inventarios, la preparación y el despacho de mercancías, el monitoreo del transporte y la trazabilidad de los productos, permitiendo optimizar recursos, mejorar la comunicación entre los actores de la cadena de suministro y fortalecer la eficiencia, la productividad y la toma de decisiones basada en información. Entre las más utilizadas con mayor frecuencia en empresas de logística, operadores 3PL, centros de distribución y comercio electrónico, se encuentran:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Aplicaciones más utilizadas en logística
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).    
            thead
              tr.bg-color-13
                th Aplicación
                th Definición
                th Ejemplo
            tbody
              tr.bg-color-sintesis
                td.text-bold WMS (<em>Warehouse Management System</em>)
                td Sistema que administra la recepción, almacenamiento, preparación de pedidos y despacho de mercancías, optimizando la trazabilidad y el control de inventarios.
                td SAP EWM, Oracle WMS
              tr.bg-color-white
                td.text-bold TMS (<em>Transportation Management System</em>)
                td Plataforma que planifica, controla y monitorea el transporte de mercancías, optimizando rutas, tiempos de entrega y costos operativos.
                td SAP TM, Oracle Transportation Management
              tr.bg-color-sintesis
                td.text-bold ERP (<em>Enterprise Resource Planning</em>)
                td Sistema que integra los procesos administrativos, comerciales y logísticos, facilitando la gestión de inventarios, pedidos y despachos desde una única plataforma.
                td SAP S/4HANA, Microsoft Dynamics 365
              tr.bg-color-white
                td.text-bold Aplicaciones de rastreo GPS
                td Herramientas que permiten monitorear en tiempo real la ubicación de vehículos y mercancías, fortaleciendo la trazabilidad y el seguimiento de las entregas.
                td Samsara, Geotab
              tr.bg-color-sintesis
                td.text-bold Aplicaciones de prueba de entrega (POD)
                td Soluciones móviles que registran la entrega mediante firma, fotografía o geolocalización, proporcionando evidencia digital y trazabilidad del despacho.
                td DispatchTrack, Track-POD  
    
    .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
      p.mb-0 La información oportuna permite tomar decisiones rápidas y mejorar el desempeño de las operaciones. En la siguiente figura, se muestra un ejemplo de la trazabilidad a la entrega de una mercancía por medio de una aplicación de logística:
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Trazabilidad de entrega de mercancía
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema5/20.png", alt="La figura muestra la trazabilidad del despacho de una mercancía mediante una línea de tiempo con las principales etapas del proceso logístico: recepción en terminal de origen, transporte, llegada a terminal de destino, reparto y entrega final. También muestra el historial cronológico de cada evento con fechas y horas, evidenciando el seguimiento continuo del pedido y el control de su estado durante toda la operación logística. ")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema5/20-1.png", alt="La figura muestra la trazabilidad del despacho de una mercancía mediante una línea de tiempo con las principales etapas del proceso logístico: recepción en terminal de origen, transporte, llegada a terminal de destino, reparto y entrega final. También muestra el historial cronológico de cada evento con fechas y horas, evidenciando el seguimiento continuo del pedido y el control de su estado durante toda la operación logística. ")
        figcaption Nota. SENA, (2026).

    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Técnicas de comunicación
    
    .bg-full-width.bg-fondo-1
      .px-5
        img(src="@/assets/curso/tema5/21.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Las técnicas de comunicación son estrategias y prácticas que facilitan el intercambio claro, oportuno y efectivo de información entre las personas involucradas en las operaciones logísticas. Su aplicación favorece la coordinación de actividades, reduce errores en el despacho de mercancías, fortalece el trabajo en equipo y asegura que las instrucciones, novedades y confirmaciones sean comprendidas y ejecutadas correctamente durante todo el proceso logístico. Algunas técnicas utilizadas son:
        
        .bg-fondo-slider.tarjeta.mb-5
          .p-4.p-lg-5
            SlyderA(tipo="b").bg-color-white.p-4.tarjeta
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/22.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Escucha activa
                  p Favorece la comprensión del mensaje mediante atención, concentración y verificación de la información recibida, reduciendo errores durante la coordinación de las operaciones logísticas.
                  p.mb-0 <b>Ejemplo</b>: escuchar y confirmar un cambio de ruta.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/23.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Comunicación asertiva
                  p Transmite información de forma clara, respetuosa y objetiva, facilitando la coordinación de actividades y la solución de situaciones durante el despacho de mercancías.
                  p.mb-0 <b>Ejemplo</b>: informar un retraso de entrega con claridad.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/24.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Retroalimentación efectiva
                  p Permite confirmar la comprensión del mensaje mediante respuestas oportunas que aclaran dudas y verifican el cumplimiento de las instrucciones recibidas.
                  p.mb-0 <b>Ejemplo</b>: confirmar que el pedido fue despachado correctamente.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/25.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Confirmación de instrucciones
                  p Verifica que las indicaciones recibidas fueron comprendidas antes de ejecutar una actividad, disminuyendo errores durante las operaciones logísticas.
                  p.mb-0 <b>Ejemplo</b>: repetir la dirección de entrega antes de salir.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/26.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Registro de información
                  p Documenta datos relevantes de las operaciones logísticas para facilitar el seguimiento, la trazabilidad y la consulta de información durante el despacho de mercancías.
                  p.mb-0 <b>Ejemplo</b>: registrar la hora de salida del vehículo.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/27.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Comunicación escrita formal
                  p Utiliza documentos o medios digitales con lenguaje claro y estructurado para transmitir información oficial, garantizando su validez, consulta y trazabilidad.
                  p.mb-0 <b>Ejemplo</b>: enviar por correo la confirmación del despacho.

        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 La aplicación de estas técnicas contribuye a minimizar errores y fortalecer la coordinación entre los participantes del proceso logístico.
        
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-1.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-2
              img.d-none.d-md-block(src="@/assets/curso/common/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Clase 1 logística y comunicación
                  p.mb-0 A continuación, se invita al siguiente video para fortalecer los conocimientos relacionados con comunicación aplicada al despacho:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=3_3r4WwtgO8" target="_blank")
                    span Ir al recurso
                    i.fa-brands.fa-youtube
        
        .tarjeta.bg-color-7.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-2
              img.d-none.d-md-block(src="@/assets/curso/common/1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 La comunicación efectiva como clave para la resolución de problemas en la gestión logística
                  p.mb-0 Se invita al aprendiz a profundizar en comunicación aplicada al despacho, a través del artículo:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://facs.ort.edu.uy/blog/la-comunicacion-efectiva-como-clave-para-la-resolucion-de-problemas-en-la-gestion-logistica" target="_blank")
                    span Ir al recurso
                    i.fa-solid.fa-link

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
