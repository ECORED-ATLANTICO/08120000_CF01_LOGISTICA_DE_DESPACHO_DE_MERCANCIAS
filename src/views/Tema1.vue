<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mercancías y características
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La identificación de mercancías constituye una actividad fundamental dentro de los procesos logísticos, ya que permite determinar las condiciones de manipulación, almacenamiento, transporte y despacho requeridas para cada producto. El conocimiento de sus características facilita la toma de decisiones operativas, reduce riesgos y contribuye al cumplimiento de los estándares de calidad y seguridad establecidos por las organizaciones.
  
        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Concepto de mercancía
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") La mercancía corresponde a cualquier bien o producto susceptible de ser almacenado, transportado, comercializado o distribuido dentro de una cadena logística. Su gestión requiere procedimientos específicos que garanticen la conservación de sus características físicas, químicas y comerciales durante las diferentes etapas del proceso logístico. Desde la perspectiva operativa, las mercancías representan el elemento central de las actividades de almacenamiento, manipulación, control de inventarios y distribución, por lo que su adecuada identificación permite optimizar recursos y minimizar pérdidas.
        
        .row.justify-content-center
          .col-lg-8
            .bg-color-2.tarjeta.mb-5.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema1/3.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 Los alimentos procesados, electrodomésticos, medicamentos, materiales de construcción y productos textiles son considerados mercancías dentro de los procesos de abastecimiento y distribución.

        separador
        
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Tipos de mercancía
        
    img(src="@/assets/curso/tema1/4.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Las mercancías pueden clasificarse según su naturaleza, características físicas, condiciones de conservación y requerimientos de transporte. Entre los tipos más comunes se encuentran:
    
    TabsC.color-acento-botones(data-aos="zoom-in").mb-5
      .p-3.p-md-4(titulo="Mercancía perecedera")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Mercancía perecedera
            p Corresponde a productos que se deterioran rápidamente por el paso del tiempo o las condiciones ambientales. Requieren manipulación cuidadosa, almacenamiento adecuado y despacho oportuno para conservar su calidad, inocuidad y condiciones de consumo.
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fa.solid.fa-circle-check
                p.mb-0 <b>Ejemplo</b>: frutas frescas, productos lácteos.
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure
              img(src='@/assets/curso/tema1/5.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Mercancía no perecedera")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Mercancía no perecedera
            p Comprende productos que conservan sus características durante largos periodos cuando se almacenan en condiciones apropiadas. Su manejo logístico prioriza la organización, el control de inventarios y la protección frente a daños físicos o contaminación.
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fa.solid.fa-circle-check
                p.mb-0 <b>Ejemplo</b>: arroz, productos de aseo.
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure
              img(src='@/assets/curso/tema1/6.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Mercancía frágil")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Mercancía frágil
            p Incluye artículos susceptibles a romperse, deformarse o sufrir daños por golpes, vibraciones o caídas. Su preparación exige embalajes protectores, señalización visible y manipulación cuidadosa durante el almacenamiento, transporte y despacho.
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fa.solid.fa-circle-check
                p.mb-0 <b>Ejemplo</b>: cristalería, televisores.
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure
              img(src='@/assets/curso/tema1/7.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Mercancía peligrosa")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Mercancía peligrosa
            p Agrupa sustancias o materiales que representan riesgos para las personas, las instalaciones o el ambiente. Su manipulación requiere cumplir protocolos de seguridad, identificación, almacenamiento y transporte establecidos por la normatividad vigente.
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fa.solid.fa-circle-check
                p.mb-0 <b>Ejemplo</b>: pinturas inflamables, cilindros de gas.
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure
              img(src='@/assets/curso/tema1/8.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Mercancía refrigerada")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Mercancía refrigerada
            p Está conformada por productos que deben mantenerse dentro de rangos específicos de temperatura para preservar sus propiedades. Requiere mantener la cadena de frío durante el almacenamiento, la preparación de pedidos y el transporte.
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fa.solid.fa-circle-check
                p.mb-0 <b>Ejemplo</b>: carne refrigerada, vacunas.
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure
              img(src='@/assets/curso/tema1/9.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Mercancía de alto valor")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Mercancía de alto valor
            p Son aquellos productos cuyo costo económico o comercial exige controles especiales de seguridad, trazabilidad y acceso restringido. Su preparación y despacho demandan procedimientos que reduzcan riesgos de pérdida, daño o hurto.
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fa.solid.fa-circle-check
                p.mb-0 <b>Ejemplo</b>: joyas, teléfonos celulares.
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure
              img(src='@/assets/curso/tema1/10.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Mercancía a granel")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Mercancía a granel
            p Corresponde a materiales transportados sin envases individuales, cargados directamente en contenedores, tolvas o cisternas. Su manipulación requiere equipos especializados que faciliten el cargue, descargue y control de las cantidades movilizadas.
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fa.solid.fa-circle-check
                p.mb-0 <b>Ejemplo</b>: cemento, maíz.
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure
              img(src='@/assets/curso/tema1/11.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Mercancía contenerizada")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Mercancía contenerizada
            p Se refiere a mercancías agrupadas y transportadas dentro de contenedores estandarizados que facilitan su manipulación, almacenamiento y movilización entre diferentes medios de transporte, mejorando la seguridad, la trazabilidad y la eficiencia logística.
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fa.solid.fa-circle-check
                p.mb-0 <b>Ejemplo</b>: electrodomésticos en contenedor, prendas de vestir para exportación.
          .col-lg-4.mb-3.mb-lg-0.order-1
            figure
              img(src='@/assets/curso/tema1/12.png', alt='Imagen de acompañamiento')

    .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
      p.mb-0 La clasificación adecuada permite establecer procedimientos específicos de almacenamiento, manipulación y despacho, garantizando la integridad del producto y la seguridad de la operación.
      
    .row.justify-content-center
      .col-lg-8
        .bg-color-2.tarjeta.mb-5.px-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/13.svg").mx-auto
            .col-lg
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fa.solid.fa-circle-check
                  h5.mb-0 Ejemplo:
              p.mb-0.ms-2 Los productos farmacéuticos requieren condiciones especiales de temperatura y control, mientras que los materiales de construcción demandan procedimientos de manipulación diferentes.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Características de la mercancía
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.bg-color-4.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/14.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las características de la mercancía son el conjunto de propiedades físicas, químicas, comerciales y operativas que permiten identificar las condiciones de manipulación, almacenamiento, conservación, preparación y transporte de un producto. Su análisis facilita la selección de los procedimientos, equipos y recursos adecuados para garantizar la seguridad, la calidad de la mercancía y la eficiencia de las operaciones logísticas a lo largo de la cadena de suministro.
        
        p.mb-5 Entre las principales características se destacan:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.order-lg-2
            SlyderF(columnas="col-12 col-lg-6").p-4
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Peso
                p.text-center Corresponde a la masa de la mercancía y determina los equipos, ayudas mecánicas y métodos de manipulación necesarios para realizar el cargue, almacenamiento y despacho de forma segura, evitando sobrecargas y reduciendo el riesgo de accidentes.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Volumen
                p.text-center Hace referencia al espacio físico que ocupa la mercancía. Esta característica facilita la planificación del almacenamiento, la distribución de las cargas y el aprovechamiento eficiente de la capacidad disponible en estanterías, vehículos y unidades de transporte.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Dimensiones
                p.text-center Son  las medidas de largo, ancho y alto de la mercancía o de su embalaje. Su identificación permite seleccionar el espacio adecuado, optimizar la ubicación de los productos y prevenir dificultades durante la manipulación y el transporte.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Fragilidad
                p.text-center Indica el grado de sensibilidad de la mercancía frente a golpes, vibraciones, caídas o presión. Su identificación permite aplicar medidas de protección, utilizar embalajes adecuados y realizar una manipulación cuidadosa durante toda la operación logística.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Valor comercial
                p.text-center Representa la importancia económica de la mercancía para la organización. Los productos de mayor valor requieren controles adicionales de seguridad, trazabilidad, almacenamiento restringido y procedimientos específicos que reduzcan el riesgo de pérdidas o hurtos.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Condiciones de conservación
                p.text-center Pertenecen a los requisitos ambientales necesarios para mantener la calidad e integridad de la mercancía, como temperatura, humedad, ventilación, iluminación o protección contra contaminantes durante el almacenamiento y el transporte.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Nivel de riesgo
                p.text-center Identifica los posibles peligros asociados con la manipulación, almacenamiento o transporte de la mercancía. Esta característica permite establecer medidas preventivas, elementos de protección y protocolos que garanticen la seguridad de las personas, las instalaciones y el ambiente.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema1/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Vida útil
                p.text-center Es el periodo durante el cual la mercancía conserva sus condiciones de calidad y funcionalidad. Su control facilita la rotación adecuada de inventarios y evita pérdidas ocasionadas por vencimiento, deterioro u obsolescencia de los productos.
          .col-md-8.col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/15.png', alt='Descripción de la imagen')
    
        .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
          p.mb-0 El análisis de estas variables permite seleccionar adecuadamente equipos, métodos de almacenamiento, materiales de empaque y medios de transporte.
    
        .row.justify-content-center
          .col-lg-8
            .bg-color-2.tarjeta.mb-5.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema1/24.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 Un televisor requiere protección contra golpes y vibraciones, mientras que un producto alimenticio necesita condiciones específicas de conservación.
    
    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Naturaleza de la carga

    img(src="@/assets/curso/tema1/25.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La naturaleza de la carga corresponde al conjunto de características y propiedades físicas, químicas y operativas que determinan los requisitos para su manipulación, almacenamiento, preparación y transporte. Su identificación permite definir las condiciones de conservación, los equipos y materiales de apoyo, las medidas de seguridad y los procedimientos logísticos más adecuados, con el propósito de preservar la integridad de la mercancía, proteger al personal y garantizar la eficiencia y la trazabilidad durante las operaciones de despacho.

    .row.justify-content-center
      .col-lg-5
        .bg-color-3.p-3.d-inline-flex.m-auto
          p.mb-0 De acuerdo con su naturaleza, las cargas pueden requerir:
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bg-fondo-slider.tarjeta.mb-5
          .p-4.p-lg-5
            SlyderA(tipo="b").bg-color-white.p-4.tarjeta
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/26.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Control de temperatura
                  p.mb-0 Algunas mercancías requieren mantenerse dentro de rangos específicos de temperatura para conservar sus propiedades físicas, químicas o biológicas. El control permanente evita alteraciones en la calidad del producto y garantiza que llegue al destino en condiciones óptimas.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/27.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Protección contra humedad
                  p.mb-0 Determinadas mercancías son sensibles a la humedad, ya que esta puede ocasionar corrosión, deformación, deterioro o pérdida de calidad. Por ello, deben almacenarse y transportarse en ambientes secos o con sistemas que controlen las condiciones ambientales.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/28.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Manipulación especializada
                  p.mb-0 Existen mercancías que, por sus características, requieren procedimientos específicos durante el cargue, descargue, almacenamiento y preparación. Su manipulación debe realizarse por personal capacitado, aplicando técnicas que prevengan daños al producto y reduzcan riesgos operativos.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/29.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Equipos específicos de movilización
                  p.mb-0 El peso, las dimensiones, la forma o la naturaleza de algunas mercancías hacen necesario utilizar equipos especializados para su desplazamiento. Entre ellos se encuentran montacargas, transpaletas, grúas, bandas transportadoras u otros dispositivos que facilitan una manipulación segura y eficiente.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/30.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Medidas de seguridad especiales
                  p.mb-0 Algunas mercancías representan riesgos para las personas, las instalaciones o el ambiente, o poseen un alto valor comercial. En estos casos, es necesario implementar controles específicos, señalización, elementos de protección, restricciones de acceso y procedimientos que minimicen los riesgos durante la operación logística.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/31.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Condiciones particulares de almacenamiento
                  p.mb-0 Según su naturaleza, ciertas mercancías requieren condiciones específicas de almacenamiento relacionadas con la temperatura, la ventilación, la iluminación, la humedad, el tipo de estantería o la segregación de productos. Estas medidas contribuyen a preservar su calidad, facilitar su conservación y garantizar una operación logística segura.

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/32.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-right") La identificación de la naturaleza de la carga permite prevenir daños, reducir riesgos operativos y garantizar el cumplimiento de la normativa aplicable a cada tipo de mercancía.

            .bg-color-2.tarjeta.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema1/33.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 Los productos químicos requieren protocolos especiales de seguridad, señalización y transporte para evitar afectaciones a las personas, la infraestructura y el medio ambiente.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-1.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-2
              img.d-none.d-md-block(src="@/assets/curso/common/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Tipos de mercancía
                  p.mb-0 Se invita al siguiente video para fortalecer los conocimientos relacionados con mercancía y características:  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=olKk-3Ci4go" target="_blank")
                    span Ir al recurso
                    i.fa-brands.fa-youtube
        
        .tarjeta.bg-color-7.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-2
              img.d-none.d-md-block(src="@/assets/curso/common/1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Empresa Coordinadora
                  p.mb-0 Se invita al aprendiz a profundizar en mercancías y características, a través del siguiente artículo:  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://coordinadora.com/blog/que-es-una-carga-en-logistica/" target="_blank")
                    span Ir al recurso
                    i.fa-solid.fa-link
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/34.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .row.bg-color-8.tarjeta.px-5.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/common/3.svg", data-aos="zoom-in")
          .col-lg-7
            h2(data-aos="fade-left").mb-4 A continuación, se invita al siguiente pódcast: 
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="La mercancía correcta, el despacho correcto: claves para una operación logística eficiente"
              tiempo
              :audio="require_src('../assets/curso/podcast/podcast1.mp3')"
            )

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
