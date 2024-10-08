<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.p-4.p-lg-5.borde-20
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis  presenta una clasificación en cuatro categorías principales: nutracéuticos, tendencias alimentarias, desafíos tecnológicos y nutrigenómica. Bajo el concepto de nutracéuticos, se destacan aspectos como su definición, beneficios para la salud y las diferencias con los medicamentos. En tendencias alimentarias, se abordan la evolución histórica, la agricultura ecológica y la innovación alimentaria. Los desafíos tecnológicos incluyen la estabilidad de componentes, el análisis y cuantificación, y los estudios clínicos. Finalmente, la nutrigenómica resalta la relación genoma-nutrientes, la personalización de dietas y el impacto en la prevención de enfermedades.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
