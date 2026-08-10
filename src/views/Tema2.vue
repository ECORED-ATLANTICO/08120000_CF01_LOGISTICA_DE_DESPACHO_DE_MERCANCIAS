<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Empaque, embalaje y rotulado

    .bg-full-width.bg-fondo-1
      .px-5
        img(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text El empaque, embalaje y rotulado constituyen procesos fundamentales para la protección, identificación y conservación de las mercancías durante las actividades de almacenamiento, manipulación, transporte y despacho. Su adecuada aplicación permite reducir riesgos operativos, prevenir daños y facilitar el control de los productos dentro de la cadena logística.
        
        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Empaque
        
        .row.mb-5.justify-content-center.align-items-center
          .col-auto.mb-lg-0
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
          .col-lg
            p.mb-0(data-aos="fade-right") El empaque corresponde al material o recipiente que contiene directamente el producto con el propósito de protegerlo, conservarlo y facilitar su manipulación. Su función principal es preservar las características físicas y funcionales de la mercancía durante su almacenamiento, comercialización y distribución. Entre los materiales más utilizados se encuentran:
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
          .col-lg-7
            .bg-fondo-slider.tarjeta
              .p-4
                SlyderA(tipo="b").bg-color-white.p-4.tarjeta
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-4.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema2/4.png', alt='Imagen de acompañamiento')
                    .col-lg-8.mb-4.mb-md-0
                      h4 Cartón
                      p.mb-0 Material liviano y resistente utilizado para proteger, agrupar y transportar mercancías. Facilita el almacenamiento, el apilamiento y el reciclaje en las operaciones logísticas.
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-4.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema2/7.png', alt='Imagen de acompañamiento')
                    .col-lg-8.mb-4.mb-md-0
                      h4 Papel
                      p.mb-0 Material flexible empleado para envolver, separar o proteger productos livianos. También se utiliza como relleno para reducir movimientos y prevenir daños durante el transporte.
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-4.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema2/5.png', alt='Imagen de acompañamiento')
                    .col-lg-8.mb-4.mb-md-0
                      h4 Plástico
                      p.mb-0 Material versátil, resistente a la humedad y de bajo peso. Se utiliza en bolsas, películas, envases y envolturas para proteger mercancías durante el almacenamiento y el despacho.
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-4.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema2/8.png', alt='Imagen de acompañamiento')
                    .col-lg-8.mb-4.mb-md-0
                      h4 Vidrio
                      p.mb-0 Material rígido utilizado principalmente en envases para alimentos, bebidas y productos farmacéuticos. Requiere manipulación cuidadosa y protección adicional para evitar roturas durante la operación logística.
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-4.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema2/6.png', alt='Imagen de acompañamiento')
                    .col-lg-8.mb-4.mb-md-0
                      h4 Metal
                      p.mb-0 Material de alta resistencia empleado en latas, tambores y recipientes industriales. Protege eficazmente la mercancía frente a impactos, humedad y contaminación durante su almacenamiento y transporte.
                  .row.justify-content-center.align-items-center.p-3.p-lg-4
                    .col-lg-4.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema2/9.png', alt='Imagen de acompañamiento')
                    .col-lg-8.mb-4.mb-md-0
                      h4 Materiales biodegradables
                      p.mb-0 Materiales elaborados con recursos naturales o renovables que se descomponen de forma natural. Constituyen una alternativa sostenible para reducir el impacto ambiental de los empaques logísticos.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Embalaje
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-right") El embalaje corresponde al conjunto de materiales, técnicas y elementos utilizados para agrupar, proteger y asegurar uno o varios productos durante su transporte y almacenamiento. Su objetivo es minimizar los riesgos asociados a golpes, vibraciones, humedad, contaminación o deterioro durante la operación logística.
            p.mb-0 Algunos tipos de embalaje son:

        .row.mb-5.align-items-center.justify-content-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0.order-2
            figure
              img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
          .col-lg-8.order-1
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
              div(titulo="Cajas de cartón corrugado")
                p.ms-5 Empaques fabricados con cartón de varias capas que brindan resistencia y protección a la mercancía. Facilitan el almacenamiento, el apilamiento, la manipulación y el transporte seguro de diferentes productos.
              div(titulo="Estibas o <em>pallets</em>")
                p.ms-5 Plataformas utilizadas para agrupar y soportar mercancías durante su almacenamiento y transporte. Facilitan la manipulación con montacargas o transpaletas, optimizando las operaciones logísticas y el aprovechamiento del espacio.
              div(titulo="Guacales de madera")
                p.ms-5 Estructuras de madera diseñadas para proteger mercancías pesadas, voluminosas o frágiles. Proporcionan estabilidad durante la manipulación, el almacenamiento y el transporte, especialmente en operaciones nacionales e internacionales.
              div(titulo="Contenedores plásticos")
                p.ms-5 Recipientes reutilizables fabricados en plástico de alta resistencia para almacenar, transportar y organizar mercancías. Protegen los productos de golpes, humedad y contaminación, facilitando su manipulación y trazabilidad.
              div(titulo="Películas termo encogibles")
                p.ms-5 Material plástico que, al aplicar calor, se ajusta firmemente alrededor de la mercancía. Proporciona estabilidad a las cargas, protege contra polvo y humedad, y facilita su transporte y almacenamiento.
              div(titulo="Protectores internos")
                p.ms-5 Elementos de espuma, cartón, plástico u otros materiales que amortiguan impactos y evitan el movimiento de la mercancía dentro del empaque, reduciendo el riesgo de daños durante su manipulación y transporte.

        .row.justify-content-center
          .col-lg-8
            .bg-color-2.tarjeta.mb-5.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/12.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 Un televisor empacado en su caja original puede ser embalado adicionalmente sobre una estiba para facilitar su movilización y despacho.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Rotulado

    .bg-full-width.bg-fondo-1
      .px-5
        img(src="@/assets/curso/tema2/13.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text El rotulado consiste en la incorporación de información visual sobre la mercancía mediante etiquetas, códigos, textos o símbolos que facilitan su identificación y control. La información incluida en el rotulado puede contener:
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 1.
              span Ejemplo de rotulado de mercancía
            img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/14.png", alt="La figura muestra una caja de cartón en una bodega de almacenamiento. La mercancía presenta un rótulo con la información necesaria para su identificación, control y manipulación, además de pictogramas de seguridad que orientan su manejo durante las actividades de almacenamiento, preparación y despacho logístico.")
            img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/14-1.png", alt="La figura muestra una caja de cartón en una bodega de almacenamiento. La mercancía presenta un rótulo con la información necesaria para su identificación, control y manipulación, además de pictogramas de seguridad que orientan su manejo durante las actividades de almacenamiento, preparación y despacho logístico.")
            figcaption Nota. SENA, (2026).
        
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
          p.mb-0 Un rotulado adecuado facilita la trazabilidad de la mercancía y reduce errores durante los procesos logísticos.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Símbolos técnicos y pictóricos 

    .bg-full-width.bg-fondo-1
      .px-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") Los símbolos técnicos y pictóricos son representaciones gráficas utilizadas para comunicar instrucciones específicas relacionadas con el manejo, almacenamiento y transporte de mercancías. Su utilización permite transmitir información de manera rápida y estandarizada, independientemente del idioma utilizado por los operadores logísticos. Entre los símbolos más utilizados se encuentran:
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.order-lg-2
            SlyderF(columnas="col-12 col-lg-6").p-4
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Frágil
                p.text-center Indica que la mercancía puede dañarse fácilmente por golpes, caídas o presión. Debe manipularse con cuidado durante el almacenamiento, transporte y despacho.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Mantener seco
                p.text-center Señala que la mercancía debe protegerse de la humedad y del contacto con agua para evitar deterioro, pérdida de calidad o daños en el producto.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Este lado arriba
                p.text-center Muestra la posición correcta de la mercancía durante su manipulación, almacenamiento y transporte para evitar daños o alteraciones en su contenido.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 No apilar
                p.text-center Advierte que no deben colocarse otras cargas sobre la mercancía, ya que el peso adicional puede ocasionar deformaciones, daños o pérdida de estabilidad.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Material inflamable 
                p.text-center Identifica mercancías que pueden incendiarse fácilmente. Requieren mantenerse alejadas de fuentes de calor, chispas, llamas y materiales combustibles.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Material corrosivo
                p.text-center Señala sustancias capaces de deteriorar materiales o causar lesiones por contacto. Su manipulación exige medidas de protección y almacenamiento especializado.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Proteger del calor
                p.text-center Enseña que la mercancía debe mantenerse alejada de altas temperaturas o radiación solar para evitar alteraciones en sus propiedades o deterioro.
              .bg-color-6.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.bg-color-5.p-3.mb-4 Manipular con cuidado
                p.text-center Advierte que la mercancía requiere una manipulación cuidadosa para prevenir golpes, caídas, vibraciones o cualquier acción que pueda afectar su integridad.
          .col-md-8.col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema2/16.png', alt='Descripción de la imagen')

        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 El conocimiento e interpretación de estos símbolos contribuye a la seguridad de las operaciones y a la conservación de los productos durante su distribución.
        
        .row.justify-content-center
          .col-lg-10
            .tarjeta.bg-color-1.p-4.mb-5
              .row.justify-content-around.align-items-center
                .col-lg-2
                  img.d-none.d-md-block(src="@/assets/curso/common/2.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4 Empaque y Embalaje: Pasos claves para el envío de tu mercancía
                      p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con empaque, embalaje y rotulado:  
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=vtyVQewx0L8" target="_blank")
                        span Ir al recurso
                        i.fa-brands.fa-youtube
            
            .tarjeta.bg-color-7.p-4.mb-5
              .row.justify-content-around.align-items-center
                .col-lg-2
                  img.d-none.d-md-block(src="@/assets/curso/common/1.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4 Etiqueta, envase, empaque y embalaje
                      p.mb-0 Se invita al aprendiz a profundizar en lo relacionado a empaque, embalaje y rotulado, a través del siguiente artículo: 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://bibliotecadigital.ccb.org.co/server/api/core/bitstreams/6085da43-6e23-4592-89d5-9badfba14f2e/content" target="_blank")
                        span Ir al recurso
                        i.fa-solid.fa-link


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
