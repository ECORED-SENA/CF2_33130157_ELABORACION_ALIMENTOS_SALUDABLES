<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Los nutracéuticos
    
    p.mb-4(data-aos="fade-right") Los nutracéuticos son productos naturales derivados de alimentos, diseñados para mejorar la salud y prevenir enfermedades. Descubra cómo se diferencian de los medicamentos tradicionales y su impacto en la medicina del futuro.

    figure.mb-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SqlRrZ6Aj18?si=v8jmfLACguVHGzeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Los nutracéuticos
    
    p.fw-bold.mb-4(data-aos="fade-left") A continuación, se presenta algunos productos nutracéuticos utilizados en la medicina funcional:

    .fondo-personalizado-1.f7
      .fondo-personalizado-1__contenido.py-5
        .row.align-items-center
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/65.png",style="max-width: 268px;")
          .col-lg-8
            SlyderF.slider-personalizado-2(columnas="col-lg-6 py-4",data-aos="flip-up")
              .borde-14.p-4.sombra-p-2.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/66.png",style="max-width: 92px;")
                h4.fondo-color-secundario.mb-0.text-center.mx-4.mb-4 Omega 3, 6, 9
                p.text-center Mejora la salud cardiovascular, reduce el colesterol LDL. 
              .borde-14.p-4.sombra-p-2.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/67.png",style="max-width: 92px;")
                h4.fondo-color-secundario.mb-0.text-center.mx-4.mb-4 Polifenoles
                p.text-center Acción antioxidante, mejora la salud cardiovascular.
              .borde-14.p-4.sombra-p-2.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 92px;")
                h4.fondo-color-secundario.mb-0.text-center.mx-4.mb-4 Fitoesteroles
                p.text-center Disminución de la absorción de colesterol en el intestino.
              .borde-14.p-4.sombra-p-2.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/69.png",style="max-width: 92px;")
                h4.fondo-color-secundario.mb-0.text-center.mx-4.mb-4 Pro y prebióticos
                p.text-center Mejora del sistema inmunológico y de la flora intestinal.
              .borde-14.p-4.sombra-p-2.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/70.png",style="max-width: 92px;")
                h4.fondo-color-secundario.mb-0.text-center.mx-4.mb-4 Pro y Fibra dietaria
                p.text-center Regulación del tránsito intestinal, mejora del metabolismo.

    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Principios básicos y cualidades de los nutracéuticos
    
    p.mb-5 Durante los años sesenta, los avances tecnológicos transformaron significativamente la producción, elaboración y conservación de alimentos. En esta época, los alimentos funcionales y nutracéuticos empezaron a adquirir mayor relevancia, descubriéndose nuevas sustancias y sus beneficiosos componentes.

    .fondo-personalizado-1.f2.mb-5(data-aos="flip-up")
      .fondo-personalizado-1__contenido.py-5
        .fondo-personalizado-1.no-tam-full.f3
          .fondo-personalizado-1__contenido.p-4
            SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Innovación en alimentos tradicionales
                  p.mb-0 Alimentos como los ácidos grasos omega 3, 6 y 9, presentes en frutos secos, pescados azules y aceites vegetales, son consumidos desde hace siglos en varias culturas.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/59.png",style="max-width: 412px;")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Estudios culturales y beneficios de una dieta saludable
                  p.mb-0 Investigaciones sobre la dieta japonesa demuestran que una alimentación saludable produce efectos positivos a largo plazo, mejorando la longevidad y salud general.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/60.png",style="max-width: 412px;")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Aislamiento y purificación de compuestos
                  p.mb-0 Estos estudios llevaron al aislamiento y purificación de compuestos bioactivos, que dieron origen a los nutracéuticos, con beneficios en el tratamiento de enfermedades.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/61.png",style="max-width: 412px;")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Poder terapéutico de los nutracéuticos
                  p.mb-0 Los nutracéuticos, con compuestos bioactivos, demostraron tener más poder terapéutico que nutricional, beneficiando enfermedades como anemia, osteoporosis y cáncer.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/62.png",style="max-width: 412px;")
    
    p(data-aos="fade-left") Este descubrimiento de los nutracéuticos marcó un hito en la relación entre la alimentación y la salud, destacando el potencial de ciertos alimentos para prevenir y tratar enfermedades crónicas.

</template>

<script>
export default {
  name: 'Tema2',
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
