<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-4
      .col-lg-10.col-md-9(data-aos="fade-right")
        p.mb-0 Los alimentos funcionales han surgido como una respuesta a la necesidad de mejorar la salud mediante la alimentación. Estos productos, además de nutrir, ofrecen beneficios adicionales que contribuyen a la prevención de enfermedades y al bienestar general. En los últimos años, han ganado popularidad debido a la creciente preocupación por una vida más saludable.
      .col-lg-2.col-md-3.order-first.order-md-last(data-aos="fade-left")
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/1.svg")
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/2.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El término #[b "alimento funcional"] nació en Japón en los años 80, como una iniciativa para mejorar la calidad de vida de la población envejecida. Posteriormente, este concepto se ha expandido a nivel mundial, siendo adoptado por diferentes industrias alimentarias que buscan innovar y ofrecer productos con propiedades que favorezcan la salud.
    
    .row
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
        p.mb-1 En Colombia, la legislación ha regulado el desarrollo y comercialización de alimentos funcionales, asegurando que cumplan con los requisitos necesarios para ser considerados beneficiosos. Además, se han impulsado investigaciones para potenciar estos productos y adaptarlos a las necesidades de los consumidores, generando un impacto positivo en la salud pública.

        .fondo-color-sistema-j.d-inline-flex.p-2.borde-5.me-3.mt-3
          figure
            img.mx-auto(src="@/assets/curso/temas/4.svg",style="max-width: 63px;")
        .fondo-color-sistema-j.d-inline-flex.p-2.borde-5.me-3.mt-3
          figure
            img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 63px;")
        .fondo-color-sistema-j.d-inline-flex.p-2.borde-5.me-3.mt-3
          figure
            img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 63px;")
        .fondo-color-sistema-j.d-inline-flex.p-2.borde-5.me-3.mt-3
          figure
            img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 63px;")
    
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
