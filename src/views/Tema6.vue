<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Preparación de mercancías para despacho
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.col-xl-4.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
      .col-lg-7.col-xl-5.mb-3.mb-lg-0
        .bg-color-1.p-3.p-lg-5.px-lg-5.tarjeta 
          p.mb-0 La preparación de mercancías para despacho comprende el conjunto de actividades orientadas a verificar, acondicionar y alistar los productos antes de su entrega al transportador o cliente final. 
      .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema6/2.svg", data-aos="zoom-in")


    .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
      p.mb-0 Este proceso garantiza que las mercancías cumplan las condiciones de calidad, seguridad y documentación requeridas para su movilización. 
    
    separador
    
    .bg-full-width.bg-fondo-1
      .px-5
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.1 Buenas prácticas de manipulación
        
        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema6/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las buenas prácticas de manipulación son el conjunto de procedimientos y recomendaciones orientados a garantizar el manejo seguro y adecuado de las mercancías durante su recepción, almacenamiento, preparación, movilización y despacho. Su aplicación permite prevenir daños en los productos, proteger la integridad del personal, optimizar las operaciones logísticas y asegurar el cumplimiento de las condiciones de calidad, seguridad y trazabilidad establecidas por la organización y la normatividad vigente. Entre los principales se encuentran:
        
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 4.
              span Buenas prácticas de manipulación
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).  
                thead
                  tr.bg-color-13
                    th Buena práctica
                    th Definición
                    th Ejemplo
                tbody
                  tr.bg-color-sintesis
                    td.text-bold Manipular la mercancía según sus características
                    td Adapta las técnicas de manipulación al tipo de mercancía, considerando su peso, fragilidad, dimensiones y condiciones de conservación para evitar daños y garantizar un manejo seguro.
                    td Transportar productos frágiles con mayor precaución
                  tr.bg-color-white
                    td.text-bold Utilizar elementos de protección personal
                    td Emplea los elementos de protección personal requeridos para disminuir los riesgos laborales y proteger al trabajador durante las operaciones logísticas.
                    td Usar casco, guantes y botas de seguridad
                  tr.bg-color-sintesis
                    td.text-bold Evitar golpes y caídas
                    td Manipula y moviliza la mercancía con cuidado para prevenir impactos, caídas o movimientos bruscos que puedan afectar su integridad o funcionamiento.
                    td Bajar una caja lentamente desde una estantería
                  tr.bg-color-white
                    td.text-bold Respetar los límites de carga
                    td Cumple la capacidad máxima de equipos, estanterías y ayudas mecánicas para preservar la estabilidad de la carga y prevenir accidentes.
                    td No exceder la capacidad de un montacargas
                  tr.bg-color-sintesis
                    td.text-bold Mantener áreas de trabajo limpias y organizadas
                    td Conserva los espacios libres de obstáculos, residuos y materiales innecesarios para facilitar la circulación y desarrollar operaciones seguras y eficientes.
                    td Mantener despejados los pasillos de la bodega
                  tr.bg-color-white
                    td.text-bold Aplicar protocolos de seguridad
                    td Ejecuta los procedimientos de seguridad establecidos por la organización para prevenir incidentes y responder adecuadamente ante situaciones de riesgo durante las operaciones logísticas.
                    td Seguir el procedimiento establecido para atender un derrame

        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 La aplicación de estas prácticas reduce riesgos de accidentes y pérdidas de mercancías.

        .row.justify-content-center
          .col-lg-8
            .bg-color-2.tarjeta.mb-5.px-5
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema6/4.svg").mx-auto
                .col-lg
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.fa.solid.fa-circle-check
                      h5.mb-0 Ejemplo:
                  p.mb-0.ms-2 Los productos frágiles deben manipularse cuidadosamente para evitar daños durante su preparación y despacho.
    
    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Separación y clasificación 
    
    .bg-full-width.bg-fondo-1
      .px-5
        img(src="@/assets/curso/tema6/5.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text La separación y clasificación consisten en organizar las mercancías de acuerdo con criterios previamente establecidos para facilitar su identificación y despacho. Los criterios más utilizados son:
        
        .bg-fondo-slider.tarjeta.mb-5
          .p-4.p-lg-5
            SlyderA(tipo="b").bg-color-white.p-4.tarjeta
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/6.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Tipo de producto
                  p Diferencia las mercancías según su naturaleza, composición o categoría para facilitar su manipulación, almacenamiento y despacho, evitando incompatibilidades entre los productos.
                  p.mb-0 <b>Ejemplo</b>: separar alimentos de productos químicos.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/7.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Destino
                  p Distribuye las mercancías de acuerdo con la ciudad, región o punto de entrega, optimizando la preparación de pedidos y la planificación del despacho.
                  p.mb-0 <b>Ejemplo</b>: clasificar pedidos con destino a Medellín.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/8.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Cliente
                  p Identifica las mercancías según el cliente o destinatario para garantizar la correcta preparación, verificación y entrega de cada pedido.
                  p.mb-0 <b>Ejemplo</b>: reunir los pedidos de un supermercado
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/9.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Prioridad de entrega
                  p Ordena las mercancías según su nivel de urgencia o fecha programada de despacho, favoreciendo el cumplimiento de los tiempos de entrega establecidos.
                  p.mb-0 <b>Ejemplo</b>: atender primero un pedido con entrega el mismo día.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/10.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Condiciones de almacenamiento
                  p Determina la ubicación de las mercancías considerando los requisitos de temperatura, humedad, ventilación o seguridad necesarios para conservar su calidad.
                  p.mb-0 <b>Ejemplo</b>: ubicar productos refrigerados en una cámara de frío.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/11.png', alt='Imagen de acompañamiento')
                .col-lg-8.mb-4.mb-md-0
                  h4 Características de la carga
                  p Establece la separación de las mercancías según su peso, volumen, fragilidad, dimensiones o nivel de riesgo, favoreciendo un manejo seguro durante las operaciones logísticas.
                  p.mb-0 <b>Ejemplo</b>: separar mercancía frágil de carga pesada.

        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 Una adecuada clasificación permite optimizar tiempos y disminuir errores operativos.
        
        separador
        
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.3 Alistamiento de mercancías 

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/12.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") El alistamiento corresponde al proceso mediante el cual se preparan las mercancías para su entrega, verificando cantidades, condiciones físicas y documentación requerida.  
        p.mb-0 Dentro de esta actividad se incluyen:
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Secuencia de alistamiento de mercancía
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema6/13.png", alt="La figura presenta la secuencia del alistamiento de la mercancía para su despacho en una bodega. El proceso incluye la verificación de pedidos, revisión de cantidades, empaque y embalaje, rotulado, organización para cargue, confirmación de documentos y despacho. Cada etapa se muestra con personal realizando la actividad correspondiente, destacando el flujo ordenado de las operaciones logísticas hasta la salida de la mercancía hacia su destino.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema6/13-1.png", alt="La figura presenta la secuencia del alistamiento de la mercancía para su despacho en una bodega. El proceso incluye la verificación de pedidos, revisión de cantidades, empaque y embalaje, rotulado, organización para cargue, confirmación de documentos y despacho. Cada etapa se muestra con personal realizando la actividad correspondiente, destacando el flujo ordenado de las operaciones logísticas hasta la salida de la mercancía hacia su destino.")
        figcaption Nota. SENA, (2026).
    
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
          p.mb-0 El alistamiento adecuado contribuye a la eficiencia de las operaciones y al cumplimiento de los requerimientos del cliente.
    
    separador
    
    .bg-full-width.bg-fondo-1
      .px-5
        #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.4 Variables de entrega
        
        .row.align-items-center
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema6/14.svg").mx-auto
          .col-lg
            p.mb-0 Las variables de entrega son los factores que influyen en el cumplimiento de las condiciones establecidas para la distribución y recepción de las mercancías. Su adecuada gestión permite garantizar entregas oportunas, seguras y conformes con los requisitos del cliente, optimizando la calidad del servicio y la eficiencia de las operaciones logísticas.
        
        p.mb-5 Entre las principales variables se encuentran:

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 5.
              span Variables de entrega
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr.bg-color-13
                    th Variable de entrega
                    th Definición
                    th Ejemplo
                tbody
                  tr.bg-color-sintesis
                    td.text-bold Tiempo de entrega
                    td Establece el plazo acordado para que la mercancía llegue al destino, permitiendo planificar las operaciones logísticas y cumplir los compromisos con el cliente.
                    td Entrega programada en 24 horas
                  tr.bg-color-white
                    td.text-bold Destino
                    td Determina el lugar donde debe entregarse la mercancía, facilitando la planificación de rutas, la asignación del transporte y la coordinación del despacho.
                    td Centro de distribución en Barranquilla
                  tr.bg-color-sintesis
                    td.text-bold Condiciones de transporte
                    td Define los requisitos necesarios para movilizar la mercancía de forma segura, considerando aspectos como temperatura, protección, estabilidad y tipo de vehículo.
                    td Transporte refrigerado para alimentos
                  tr.bg-color-white
                    td.text-bold Tipo de mercancía
                    td Identifica las características de la carga para seleccionar el método de manipulación, almacenamiento y transporte más adecuado durante el despacho.
                    td Medicamentos de cadena de frío
                  tr.bg-color-sintesis
                    td.text-bold Requerimientos del cliente
                    td Especifica las condiciones particulares que deben cumplirse durante la entrega para satisfacer las necesidades acordadas con el cliente.
                    td Entrega en horario establecido
                  tr.bg-color-white
                    td.text-bold Documentación de soporte
                    td Reúne los documentos que respaldan el despacho y la entrega de la mercancía, garantizando la trazabilidad y el cumplimiento de los requisitos logísticos.
                    td Guía de transporte y factura  
    
        .row.justify-content-center
          .col-lg-8
            .cajon.color-acento-contenido.bg-color-3.p-4.mb-5
              p.mb-0 El análisis de estas variables permite planificar adecuadamente las operaciones de despacho y garantizar la satisfacción del cliente.
        
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-1.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-2
              img.d-none.d-md-block(src="@/assets/curso/common/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Módulo 3 - Procesos Logísticos En La Recepción, Almacenamiento Y Despacho De Mercancías
                  p.mb-0 A continuación, se invita al siguiente video para fortalecer los conocimientos relacionados con preparación de mercancías para despacho:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=78Wm3RHqXIg" target="_blank")
                    span Ir al recurso
                    i.fa-brands.fa-youtube
        
        .tarjeta.bg-color-7.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-2
              img.d-none.d-md-block(src="@/assets/curso/common/1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Despacho de mercancías: fases y claves para el éxito
                  p.mb-0 Se invita al aprendiz a profundizar en protección de transacciones financieras y cumplimiento normativo, a través del siguiente artículo:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.mecalux.com.mx/blog/despacho-mercancias" target="_blank")
                    span Ir al recurso
                    i.fa-solid.fa-link
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/15.png", data-aos="zoom-in")
      .col-lg-8
        .row.bg-color-8.tarjeta.px-5.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/common/3.svg", data-aos="zoom-in")
          .col-lg-7
            h2(data-aos="fade-left").mb-4 A continuación, se invita a ir al siguiente pódcast:
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Del alistamiento al despacho: preparación de mercancías para cumplir con el cliente"
              tiempo
              :audio="require_src('../assets/curso/podcast/podcast1.mp3')"
            )


        
</template>

<script>
export default {
  name: 'Tema6',
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
