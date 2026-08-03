<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procedimientos de almacenamiento
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") Los procedimientos de almacenamiento comprenden el conjunto de actividades técnicas orientadas a la recepción, ubicación, conservación, control y disposición de mercancías dentro de una instalación logística. Su correcta aplicación permite optimizar espacios, proteger los productos y garantizar la disponibilidad de la mercancía para las operaciones de despacho.
        
        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Concepto
        
        img(src="@/assets/curso/tema4/2.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text El almacenamiento es el proceso mediante el cual las mercancías son recibidas, organizadas y conservadas temporalmente bajo condiciones adecuadas que permitan mantener sus características físicas y funcionales hasta el momento de su utilización o despacho. Esta actividad constituye un eslabón fundamental dentro de la cadena logística, ya que facilita el control de inventarios y la continuidad de las operaciones comerciales.
        
        .row.justify-content-center
          .col-lg-8
            .bg-color-2.tarjeta.mb-5.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema4/3.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 Una empresa distribuidora de alimentos almacena sus productos en bodegas acondicionadas antes de realizar el despacho hacia los diferentes puntos de venta.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos de almacenamiento

    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-md-8.col-lg-4.col-xl-4.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
          .col-lg-7.col-xl-5.mb-3.mb-lg-0
            .bg-color-1.p-3.p-lg-5.px-lg-5.tarjeta 
              p.mb-0 Corresponden a las diferentes formas de organizar y conservar las mercancías dentro de una bodega o centro de distribución, de acuerdo con sus características y necesidades logísticas.  
          .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema4/5.svg", data-aos="zoom-in")
    
    
        .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
          p.mb-0 Su adecuada selección facilita el aprovechamiento del espacio, optimiza la manipulación de los productos, mejora el control de inventarios y contribuye a garantizar la seguridad, la calidad y la eficiencia en las operaciones de almacenamiento y despacho. Entre los tipos más utilizados se encuentran:
        
        .bg-fondo-slider.tarjeta.mb-5
          .p-4.p-lg-5
            SlyderA(tipo="b").bg-color-white.p-4.tarjeta
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/6.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Almacenamiento convencional
                  p Organiza las mercancías en áreas de piso o estanterías de fácil acceso. Se caracteriza por su flexibilidad y por facilitar las operaciones de almacenamiento, control y despacho.
                  p.mb-0 <b>Ejemplo</b>: bodega de un supermercado, centro de distribución de una ferretería.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/7.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Almacenamiento en estanterías
                  p Ubica las mercancías en estructuras metálicas organizadas por niveles, optimizando el espacio disponible y facilitando el acceso, la clasificación y el control de inventarios.
                  p.mb-0 <b>Ejemplo</b>: bodega de una droguería, almacén de repuestos industriales.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/8.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Almacenamiento en bloque
                  p Agrupa las mercancías sobre el piso formando bloques compactos. Se utiliza cuando los productos son homogéneos, resistentes y presentan alta rotación.
                  p.mb-0 <b>Ejemplo</b>: patio de materiales para construcción, bodega de bebidas paletizadas.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/9.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Almacenamiento refrigerado
                  p Conserva las mercancías en cámaras o áreas con temperatura controlada para mantener sus condiciones de calidad durante el almacenamiento y la distribución.
                  p.mb-0 <b>Ejemplo</b>: cuarto frío de un supermercado, centro de distribución de alimentos refrigerados.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/10.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Almacenamiento automatizado
                  p Emplea equipos y sistemas automatizados para almacenar y recuperar mercancías, incrementando la precisión, la trazabilidad y la eficiencia de las operaciones logísticas.
                  p.mb-0 <b>Ejemplo</b>: centro logístico automatizado, bodega automatizada de una empresa farmacéutica.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/11.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Almacenamiento temporal
                  p Mantiene las mercancías durante un periodo corto antes de su despacho, distribución o traslado, asegurando su disponibilidad dentro del flujo operativo.
                  p.mb-0 <b>Ejemplo</b>: zona de predespacho, área de consolidación de pedidos.

        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 La selección del tipo de almacenamiento debe garantizar seguridad, accesibilidad y eficiencia en la manipulación de los productos.

        .row.justify-content-center
          .col-lg-8
            .bg-color-2.tarjeta.mb-5.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema4/12.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 Los medicamentos requieren almacenamiento controlado bajo condiciones específicas de temperatura y humedad.
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Procedimientos y guías
    
    .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los procedimientos de almacenamiento establecen las actividades, responsabilidades y criterios técnicos que orientan la recepción, almacenamiento, manipulación, preparación y despacho de mercancías. Su aplicación estandariza las operaciones logísticas, facilita el cumplimiento de los procesos, reduce errores operativos y contribuye a garantizar la seguridad, la calidad y la trazabilidad de la mercancía durante toda la cadena logística; entre los más comunes tenemos:
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              span Procedimientos en almacenamiento
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr.bg-color-13
                    th Procedimiento
                    th Definición
                    th Ejemplo
                tbody
                  tr.bg-color-sintesis
                    td.text-bold Recepción de mercancías
                    td Corresponde al proceso de recibir las mercancías, verificando su estado, cantidad y conformidad con la orden de compra antes de autorizar su ingreso al almacén.
                    td Recepción de un pedido de alimentos proveniente de un proveedor.
                  tr.bg-color-white
                    td.text-bold Verificación documental
                    td Permite comprobar que la documentación de la mercancía coincida con el pedido recibido, garantizando la trazabilidad y el cumplimiento de los requisitos administrativos y logísticos.
                    td Comparar la factura y la remisión con la orden de compra.
                  tr.bg-color-sintesis
                    td.text-bold Inspección física
                    td Incluye la revisión visual y funcional de la mercancía para identificar daños, faltantes o anomalías antes de su almacenamiento, distribución o despacho.
                    td Verificar que las cajas no presenten golpes, humedad o rupturas.
                  tr.bg-color-white
                    td.text-bold Clasificación de productos
                    td Organiza las mercancías según sus características, naturaleza, rotación o condiciones de conservación, facilitando su ubicación, control y preparación para el despacho.
                    td Separar productos perecederos, peligrosos y de alto valor.
                  tr.bg-color-sintesis
                    td.text-bold Ubicación en áreas asignadas
                    td Establece la disposición de las mercancías en espacios previamente definidos, considerando su tipo, rotación y condiciones de almacenamiento para optimizar las operaciones logísticas.
                    td Ubicar productos refrigerados en la cámara de frío correspondiente.
                  tr.bg-color-white
                    td.text-bold Control de inventarios
                    td Permite registrar, verificar y actualizar las existencias de mercancías, asegurando información confiable para la planeación, el abastecimiento y la toma de decisiones logísticas.
                    td Realizar un conteo cíclico semanal de las existencias almacenadas.
                  tr.bg-color-sintesis
                    td.text-bold Seguimiento de condiciones de almacenamiento
                    td Supervisa permanentemente las condiciones de temperatura, humedad, orden, limpieza y seguridad para preservar la calidad, la integridad y la disponibilidad de las mercancías.
                    td Registrar diariamente la temperatura de una cámara de refrigeración.

        .row.justify-content-center
          .col-lg-8
            .bg-color-2.tarjeta.mb-5.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema4/14.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 Antes de almacenar una mercancía, el operario verifica cantidades, condiciones físicas y documentación de soporte.
    
    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Normas de seguridad
    
    img(src="@/assets/curso/tema4/15.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Son el conjunto de disposiciones, procedimientos y medidas preventivas orientadas a proteger la integridad de las personas, las mercancías, los equipos y las instalaciones durante las operaciones logísticas. Su aplicación permite prevenir accidentes, reducir riesgos laborales, garantizar el manejo seguro de las cargas y promover el cumplimiento de la normatividad vigente en seguridad y salud en el trabajo, contribuyendo al desarrollo de operaciones eficientes y seguras dentro de la cadena logística. Algunas medidas de seguridad son:
    
    .bg-full-width.bg-fondo-1
      .px-5
        .row.mb-5.align-items-center.justify-content-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/16.png", data-aos="zoom-in")
          .col-lg-8
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
              div(titulo="Utilización de los EPP")
                p.ms-lg-5 Exige el uso adecuado de equipos de protección personal para disminuir el riesgo de accidentes y proteger al trabajador durante las operaciones de almacenamiento, manipulación y movilización de mercancías.
                p.ms-lg-5 <b>Ejemplo</b>: utilizar casco, guantes, botas de seguridad y chaleco reflectivo durante la operación logística. 
              div(titulo="Señalización de áreas de almacenamiento")
                p.ms-lg-5 Identifica zonas de circulación, almacenamiento, riesgo y evacuación mediante señales visibles que orientan las operaciones y fortalecen la seguridad dentro de la bodega.
                p.ms-lg-5 Ejemplo: delimitar con señalización los pasillos peatonales y las rutas de montacargas.
              div(titulo="Control de cargas máximas permitidas")
                p.ms-lg-5 Establece los límites de peso que pueden soportar estanterías, estibas y equipos de movilización para prevenir sobrecargas, deformaciones y accidentes.
                p.ms-lg-5 <b>Ejemplo</b>: respetar la capacidad máxima indicada en una estantería metálica o en un montacargas.
              div(titulo="Correcta manipulación de mercancías")
                p.ms-lg-5 Promueve técnicas seguras para levantar, transportar y ubicar mercancías, evitando daños en los productos y reduciendo el riesgo de lesiones para el personal.
                p.ms-lg-5 <b>Ejemplo</b>: levantar una caja utilizando la fuerza de las piernas y no la espalda.
              div(titulo="Inspección periódica de equipos y estanterías")
                p.ms-lg-5 Permite verificar el estado de equipos, estanterías y elementos de almacenamiento para detectar fallas oportunamente y garantizar operaciones seguras.
                p.ms-lg-5 <b>Ejemplo</b>: revisar diariamente el estado de un montacargas y las estanterías antes de iniciar la jornada.
              div(titulo="Cumplimiento de protocolos de emergencia")
                p.ms-lg-5 Define las acciones que deben seguirse ante incendios, derrames, sismos u otras emergencias para proteger a las personas, las mercancías y las instalaciones.
                p.ms-lg-5 <b>Ejemplo</b>: evacuar la bodega siguiendo las rutas señalizadas durante un simulacro de emergencia.

        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 La aplicación de estas normas contribuye a reducir riesgos laborales y pérdidas asociadas al manejo inadecuado de los productos.

        .row.justify-content-center
          .col-lg-8
            .bg-color-2.tarjeta.mb-5.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema4/17.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 En una bodega, las zonas de circulación deben mantenerse libres de obstáculos para facilitar el desplazamiento seguro de personas y equipos.

        .row.justify-content-center
          .col-lg-10
            .tarjeta.bg-color-1.p-4.mb-5
              .row.justify-content-around.align-items-center
                .col-lg-2
                  img.d-none.d-md-block(src="@/assets/curso/common/2.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4 Sistemas de almacenamiento convencional, compacto, dinámico, móvil, rotativo y automático
                      p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con procedimientos de almacenamiento:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=Ogwws5JWQOQ&t=41s" target="_blank")
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
                      p.mb-0 Se invita al aprendiz a profundizar en procedimientos de almacenamiento, tal como se muestra en el siguiente artículo:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://israelarroyos.wordpress.com/wp-content/uploads/2014/05/sistemas-de-almacenamiento.pdf" target="_blank")
                        span Ir al recurso
                        i.fa-solid.fa-link
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
