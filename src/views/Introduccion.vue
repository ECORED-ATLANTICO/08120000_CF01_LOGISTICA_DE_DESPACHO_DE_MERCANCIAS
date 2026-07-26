<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/2.png", data-aos="zoom-in")
      .col-lg-8
        p El componente formativo Identificación y preparación de mercancías aborda los fundamentos técnicos relacionados con el reconocimiento, clasificación y acondicionamiento de mercancías dentro de los procesos logísticos. Su estudio permite comprender las actividades necesarias para garantizar la adecuada manipulación, almacenamiento y preparación de los productos destinados al despacho. 
        p.mb-0(data-aos="fade-right") Su importancia radica en que facilita la aplicación de procedimientos orientados a preservar la calidad, seguridad e integridad de las mercancías durante las diferentes etapas de la operación logística. Asimismo, contribuye al cumplimiento de los requerimientos operativos y a la optimización de los recursos utilizados en la cadena de suministro.
    
    .cajon.color-acento-contenido.bg-color-1.p-4
      p.mb-0 El tema se desarrollará de manera progresiva, iniciando con el análisis de las mercancías, sus características y naturaleza de la carga. Posteriormente, se abordarán aspectos relacionados con el empaque, embalaje, rotulado, almacenamiento y comunicación logística. Finalmente, se estudiarán las actividades de alistamiento y preparación para despacho, integrando criterios de calidad, seguridad y eficiencia operativa.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
