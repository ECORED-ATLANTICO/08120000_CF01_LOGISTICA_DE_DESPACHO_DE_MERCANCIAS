<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-10
        p.mb-0(data-aos="fade-right") El componente formativo Identificación y preparación de mercancías aborda los fundamentos para la gestión logística de mercancías desde su identificación hasta su preparación para despacho. Desarrolla conocimientos relacionados con las características y naturaleza de la carga, empaque, embalaje, rotulado, símbolos técnicos y pictóricos, manipulación, almacenamiento, densidad, arrume y movimiento de mercancías. Asimismo, fortalece habilidades para aplicar procedimientos de almacenamiento, herramientas de comunicación logística, buenas prácticas de manipulación, clasificación, alistamiento y control de variables de entrega, garantizando operaciones seguras, eficientes y acordes con los requerimientos del proceso logístico.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La estructura jerárquica muestra el componente formativo “Identificación y preparación de mercancías”, organizado en seis ejes temáticos: mercancías y características; empaque, embalaje y rotulado; manipulación y almacenamiento; procedimientos de almacenamiento; comunicación aplicada al despacho; y preparación de mercancías para despacho. Cada eje incluye sus principales temas, como tipos y características de mercancías, naturaleza de la carga, arrume, rotación, movimiento de cargas, almacenamiento, normas de seguridad, herramientas y técnicas de comunicación, alistamiento, buenas prácticas de manipulación y variables de entrega. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
