<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manipulación y almacenamiento
    
    .bg-full-width.bg-fondo-1
      .px-5
        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La manipulación y el almacenamiento de mercancías son actividades esenciales dentro de la gestión logística, ya que permiten preservar la calidad de los productos, optimizar el uso de los espacios y garantizar condiciones seguras durante las operaciones de recepción, conservación y despacho.
        
        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Densidad de la carga
        
        p.mb-5 Corresponde a la relación entre el peso y el volumen que ocupa una mercancía. Este factor permite optimizar el almacenamiento, seleccionar el medio de transporte adecuado y aprovechar eficientemente la capacidad disponible durante las operaciones logísticas. Las mercancías pueden presentar:

        .row.justify-content-center.mb-5
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/2.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Alta densidad
                p Hace referencia a mercancías con mucho peso en relación con el espacio que ocupan. Permiten aprovechar la capacidad de carga por peso antes que por volumen.
                p.mb-0 <b>Ejemplo</b>: barras de acero, sacos de cemento.
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/3.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Media densidad
                p Comprende mercancías con una relación equilibrada entre peso y volumen. Facilitan una distribución eficiente de la carga durante el almacenamiento, la preparación y el transporte.
                p.mb-0 <b>Ejemplo</b>: cajas de alimentos enlatados, repuestos automotrices.
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/4.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Baja densidad
                p Incluye mercancías de poco peso que ocupan un volumen considerable. Generalmente, limitan la capacidad del transporte por espacio antes que por peso.
                p.mb-0 <b>Ejemplo</b>: almohadas, muebles de plástico.

    .row.justify-content-center
      .col-lg-8
        .bg-color-2.tarjeta.mb-5.px-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/5.svg").mx-auto
            .col-lg
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fa.solid.fa-circle-check
                  h5.mb-0 Ejemplo:
              p.mb-0.ms-2 Un lote de tornillos ocupa poco espacio y posee alta densidad, mientras que productos como almohadas ocupan gran volumen y presentan baja densidad.
    
    .bg-full-width.bg-fondo-1
      .px-5
        separador
        
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.2 Técnicas de arrume
        
        img(src="@/assets/curso/tema3/6.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text El arrume corresponde a la forma en que las mercancías son organizadas y apiladas dentro de las áreas de almacenamiento con el fin de garantizar estabilidad, seguridad y aprovechamiento del espacio. Entre las principales técnicas de arrume se encuentran:
        
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-1.h-100.p-4
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema3/7.svg', alt='Texto que describa la imagen')
              h3.mb-4.text-center.bg-color-11.p-1 Arrume horizontal
              p.text-center Se colocan las cargas en una sola capa o en niveles bajos.
          .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-10.h-100.p-4
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema3/8.svg', alt='Texto que describa la imagen')
              h3.mb-4.text-center.bg-color-12.p-1 Arrume vertical
              p.text-center Se apilan las cargas una sobre otra para aprovechar la altura.
          .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-1.h-100.p-4
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema3/9.svg', alt='Texto que describa la imagen')
              h3.mb-4.text-center.bg-color-11.p-1 Arrume cruzado
              p.text-center Se alterna la orientación de cada nivel para lograr una mayor estabilidad.
          .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-10.h-100.p-4
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema3/10.svg', alt='Texto que describa la imagen')
              h3.mb-4.text-center.bg-color-12.p-1 Arrume en bloque
              p.text-center Se agrupan cargas homogéneas formando bloques compactos.
          .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-1.h-100.p-4
              .row.justify-content-center.mb-3
                .col-8
                  figure
                    img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')
              h3.mb-4.text-center.bg-color-11.p-1 Arrume sobre estibas
              p.text-center Se coloca la carga sobre estibas para facilitar su manipulación, almacenamiento y transporte.
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Rotación de mercancías
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") La rotación de mercancías son las actividades asociadas a organizar y movilizar los productos dentro del almacén siguiendo un orden que facilite su salida oportuna. Su aplicación permite conservar la calidad de la mercancía, optimizar el control de inventarios, reducir pérdidas por vencimiento, deterioro u obsolescencia y garantizar un despacho eficiente de acuerdo con las características de cada producto.
        
        .row.justify-content-center
          .col-lg-10
            p Las técnicas más utilizadas son:
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Técnicas de rotación de inventario
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr.bg-color-13
                    th Técnica
                    th Concepto
                    th Ejemplos
                tbody
                  tr.bg-color-sintesis
                    td.text-bold FIFO (<em>First in, first out</em>)<br>Primero en entrar, primero en salir
                    td Establece que las mercancías que ingresan primero al almacén son las primeras en despacharse. Este método favorece la rotación continua del inventario, reduce el riesgo de deterioro y preserva la calidad de los productos almacenados.
                    td
                      ul.lista-ul--color.ms-3
                        li.mb-3.d-flex
                          i.fas.fa-circle.fa-xs.mt-1.bg-color-14
                          | Leche y productos lácteos
                        li.mb-3.d-flex
                          i.fas.fa-circle.fa-xs.mt-1.bg-color-14
                          | Bebidas embotelladas
                  tr.bg-color-white
                    td.text-bold FEFO (<em>First expired, first out</em>)<br>Primero en vencer, primero en salir
                    td Prioriza la salida de las mercancías con la fecha de vencimiento más próxima, independientemente de su ingreso al almacén. Este método evita pérdidas por caducidad y garantiza una adecuada gestión de productos con vida útil limitada.
                    td
                      ul.lista-ul--color.ms-3
                        li.mb-3.d-flex
                          i.fas.fa-circle.fa-xs.mt-1.bg-color-14
                          | Medicamentos
                        li.mb-3.d-flex
                          i.fas.fa-circle.fa-xs.mt-1.bg-color-14
                          | Yogures y alimentos refrigerados
                  tr.bg-color-sintesis
                    td.text-bold LIFO (<em>Last in, first out</em>)<br>Último en entrar, primero en salir
                    td Determina que las mercancías de ingreso más reciente sean las primeras en despacharse. Se aplica principalmente a productos sin fecha de vencimiento, cuando las condiciones de almacenamiento permiten este sistema de rotación.
                    td
                      ul.lista-ul--color.ms-3
                        li.mb-3.d-flex
                          i.fas.fa-circle.fa-xs.mt-1.bg-color-14
                          | Arena para construcción
                        li.mb-3.d-flex
                          i.fas.fa-circle.fa-xs.mt-1.bg-color-14
                          | Carbón mineral almacenado a granel
            
        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 La adecuada rotación contribuye al control de inventarios y a la reducción de pérdidas económicas.

    .row.justify-content-center
      .col-lg-8
        .bg-color-2.tarjeta.mb-5.px-5
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/13.svg").mx-auto
            .col-lg
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fa.solid.fa-circle-check
                  h5.mb-0 Ejemplo:
              p.mb-0.ms-2 Los supermercados utilizan el método FEFO para garantizar la salida oportuna de productos con fecha de vencimiento próxima.
    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Movimiento de cargas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.col-xl-4.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-7.col-xl-5.mb-3.mb-lg-0
        .bg-color-1.p-4.px-lg-5.tarjeta 
          p.mb-0 El movimiento de cargas comprende el conjunto de actividades destinadas a trasladar mercancías de un lugar a otro dentro o fuera de un almacén. Su correcta ejecución optimiza el flujo logístico, protege la integridad de los productos, reduce los riesgos para el personal y contribuye a la eficiencia de las operaciones de almacenamiento, preparación y despacho de mercancías. 
      .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center
          .col-lg-10
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0.text-center Estas actividades pueden realizarse de manera manual o mediante equipos especializados, entre los cuales tenemos los siguientes:
        
        p.mb-5 Algunos equipos utilizados son:
        
        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/16.svg", data-aos="zoom-in")
          .col-lg-9
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-4(titulo="Montacargas")
                figure
                  img(src="@/assets/curso/tema3/17.png")
                p.mb-0 Equipo motorizado diseñado para levantar, transportar y apilar cargas pesadas sobre estibas. Facilita las operaciones de almacenamiento, cargue, descargue y despacho de mercancías de manera segura y eficiente.
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-4(titulo="Transpaletas")
                figure
                  img(src="@/assets/curso/tema3/18.png")
                p.mb-0 Equipo manual o eléctrico utilizado para movilizar mercancías sobre estibas en distancias cortas. Facilita el traslado interno de cargas y optimiza las operaciones de almacenamiento y preparación de pedidos.
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-4(titulo="Carretillas")
                figure
                  img(src="@/assets/curso/tema3/19.png")
                p.mb-0 Equipo de transporte manual empleado para desplazar mercancías livianas o de peso moderado dentro de bodegas y centros de distribución, reduciendo el esfuerzo físico del operario y mejorando la productividad.
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-4(titulo="Bandas transportadoras")
                figure
                  img(src="@/assets/curso/tema3/20.png")
                p.mb-0 Sistema mecanizado que traslada mercancías de forma continua entre diferentes áreas de trabajo. Agiliza el flujo de materiales, disminuye la manipulación manual y mejora la eficiencia de las operaciones logísticas.
              .tarjeta.color-acento-botones--borde.bg-fondo-2.p-4(titulo="Plataformas de elevación")
                figure
                  img(src="@/assets/curso/tema3/21.png")
                p.mb-0 Equipos diseñados para elevar personas o cargas hasta diferentes alturas, facilitando actividades de almacenamiento, mantenimiento y preparación de mercancías con condiciones adecuadas de seguridad y estabilidad.

        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 La correcta manipulación de las cargas contribuye a prevenir accidentes laborales, daños a los productos y afectaciones a la infraestructura. 
        
        .row.justify-content-center
          .col-lg-10
            .tarjeta.bg-color-1.p-4.mb-5
              .row.justify-content-around.align-items-center
                .col-lg-2
                  img.d-none.d-md-block(src="@/assets/curso/common/2.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4 Medios de manipulación y transporte interno de mercancías en almacenes
                      p.mb-0 A continuación, se invita al siguiente video para fortalecer los conocimientos relacionados con manipulación y almacenamiento:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=sd837L6UvmQ" target="_blank")
                        span Ir al recurso
                        i.fa-brands.fa-youtube
            
            .tarjeta.bg-color-7.p-4.mb-5
              .row.justify-content-around.align-items-center
                .col-lg-2
                  img.d-none.d-md-block(src="@/assets/curso/common/1.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4 Almacenamiento de mercancías
                      p.mb-0 Se invita al aprendiz a profundizar en manipulación y almacenamiento, a través del siguiente artículo:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="http://virtualnet2.umb.edu.co/virtualnet/archivos/open.php/245/a9a24_2045/modulo1/pdf/ModuloUno_AlmaMerca.pdf" target="_blank")
                        span Ir al recurso
                        i.fa-solid.fa-link
              

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
