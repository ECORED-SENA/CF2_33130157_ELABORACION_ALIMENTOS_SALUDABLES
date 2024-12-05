<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Tendencias alimentarias
    
    p.mb-0(data-aos="fade-right") Desde los inicios de la humanidad, las fuentes de alimentación han experimentado modificaciones significativas. La dieta humana, en un principio basada en la carne obtenida mediante la caza, se diversificó con el desarrollo de la producción animal y la agricultura, consolidándose esta última como la primera tendencia alimentaria dominante.

    .fondo-personalizado-1.f1.mb-2
      .fondo-personalizado-1__contenido.pt-4.pb-5
        p.mb-5 La evolución de la agricultura fue:

        .row.justify-content-center.mb-3
          .col-lg-2.pe-lg-0.align-content-center(data-aos="fade-right")
            figure
              img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/8.png")
              img.mx-auto.d-lg-none(src="@/assets/curso/temas/9.png")
          .col-lg-6.ps-lg-0(data-aos="fade-left")
            .fondo-color-sistema-k.h-100.align-content-center.p-4.position-relative
              h5.mb-4 Agricultura artesanal
              p.mb-0 En sus inicios, la agricultura se realizaba de forma manual y rudimentaria, sin maquinaria, siendo una actividad limitada y dependiente del esfuerzo humano.
              img.position-absolute.d-none.d-lg-block(src="@/assets/curso/temas/10.svg",style="max-width: 105px;bottom: 0;right: 0;")
      
        .row.justify-content-center.mb-3(data-aos="fade-up")
          .col-lg-2.pe-lg-0.align-content-center
            figure
              img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/11.png")
              img.mx-auto.d-lg-none(src="@/assets/curso/temas/12.png")
          .col-lg-6.ps-lg-0
            .fondo-color-sistema-k.h-100.align-content-center.p-4.position-relative
              h5.mb-4 Mecanización e industrialización
              p.mb-0 La introducción de maquinaria y técnicas industriales aumentó significativamente la productividad, permitiendo el cultivo en mayores extensiones de tierra.
              img.position-absolute.d-none.d-lg-block(src="@/assets/curso/temas/10.svg",style="max-width: 105px;bottom: 0;right: 0;")

        .row.justify-content-center(data-aos="fade-down")
          .col-lg-2.pe-lg-0.align-content-center
            figure
              img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/13.png")
              img.mx-auto.d-lg-none(src="@/assets/curso/temas/14.png")
          .col-lg-6.ps-lg-0
            .fondo-color-sistema-k.h-100.align-content-center.p-4.position-relative
              h5.mb-4 Revolución verde
              p.mb-0 Este fenómeno impulsó el monocultivo, con el uso masivo de fertilizantes y pesticidas, lo que aumentó aún más la producción, pero trajo consigo desafíos ambientales.
              img.position-absolute.d-none.d-lg-block(src="@/assets/curso/temas/10.svg",style="max-width: 105px;bottom: 0;right: 0;")
    
    .row.justify-content-center.mb-5
      .col-lg-7.pe-lg-0(data-aos="fade-right")
        .fondo-color-sistema-l.p-4.px-lg-5.h-100.align-content-center
          p.fw-bold Las consecuencias del aumento en la producción:
          ul.lista-ul.ms-lg-3
            li.d-flex
              i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
              span Acumulación de residuos químicos en los alimentos, afectando la salud de los consumidores.
            li.d-flex
              i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
              span Impacto negativo en el medio ambiente, así como en la flora y fauna circundante.

      .col-lg-3.ps-lg-0.order-first.order-lg-last.align-content-center(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/15.png")
    
    p.mb-4(data-aos="fade-down") Como respuesta a estas problemáticas, surgió la #[b agricultura ecológica], que busca ofrecer una alternativa más saludable y sostenible. Esta tendencia se enfoca en producir alimentos sin dañar el medio ambiente y evitar el uso excesivo de productos químicos.

    p.fw-bold.mb-5(data-aos="fade-down") Los cambios en los hábitos alimentarios modernos son: 

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4(data-aos="fade-up")
        .fondo-color-sistema-j.p-5.borde-23.h-100
          figure.mb-5
            img.sombra-p-1.rounded-circle.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 120px;")
          p.text-center.mb-0 El estilo de vida moderno ha reducido el tiempo dedicado a la preparación de alimentos.
      .col-lg-4.col-md-6.mb-4(data-aos="fade-down")
        .fondo-color-sistema-k.p-5.borde-23.h-100
          figure.mb-5
            img.sombra-p-1.rounded-circle.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 120px;")
          p.text-center.mb-0 La demanda de productos de fácil preparación o listos para consumir ha aumentado.
      .col-lg-4.col-md-6.mb-4(data-aos="fade-up")
        .fondo-color-sistema-k.p-5.borde-23.h-100
          figure.mb-5
            img.sombra-p-1.rounded-circle.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 120px;")
          p.text-center.mb-0 Existe un interés creciente en alimentos funcionales, que no solo sean convenientes, sino que también ofrezcan beneficios adicionales para la salud.
    
    p(data-aos="fade-left") Este cambio en las tendencias alimentarias refleja la evolución continua en la relación entre la humanidad y la producción de alimentos.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Alimento funcional
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El término #[b "alimento funcional"] surgió en el Medio Oriente como una respuesta a la necesidad de definir un producto alimenticio que ofreciera beneficios adicionales para la salud. En la década de los ochenta, en Japón, las autoridades identificaron la importancia de desarrollar alimentos que mejoraran la calidad de vida de las personas de la tercera edad, con el objetivo de reducir el riesgo de enfermedades.
    
    p.mb-4(data-aos="fade-up") La Academia Nacional de Ciencias de los Estados Unidos (NAS) define el alimento funcional como cualquier ingrediente o alimento que ofrezca beneficios superiores a los de los alimentos convencionales.

    p.fw-bold.mb-4(data-aos="fade-up") A continuación, se presentan otras definiciones relacionadas con los alimentos funcionales:

    .fondo-personalizado-1.f2.mb-2(data-aos="zoom-in-out")
      .fondo-personalizado-1__contenido.py-5
        .fondo-personalizado-1.no-tam-full.f3
          .fondo-personalizado-1__contenido.p-4
            SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Alimento funcional
                  p.mb-0 Cualquier alimento o ingrediente que proporcione un beneficio para la salud superior al que aportan los nutrientes tradicionales que contenga.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 412px;")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Nutracéutico
                  p.mb-0 Cualquier sustancia que se considere alimento, o parte de él, que proporcione beneficios médicos o para la salud, incluyendo la prevención y el tratamiento de enfermedades.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 412px;")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Fotoquímico
                  p.mb-0 Sustancia presente en frutas y verduras comestibles que los seres humanos consumen diariamente en cantidades significativas y que tienen el potencial de modular el metabolismo de forma positiva en la prevención del cáncer.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 412px;")
    
    .fondo-personalizado-1.f4.mb-5
      .fondo-personalizado-1__contenido.pt-5
        p.mb-4(data-aos="fade-right") El poder funcional de los alimentos tiene raíces antiguas, especialmente en la cultura oriental, donde se consideraban tan importantes como la medicina para curar enfermedades. En China, la relación entre alimentación y medicina es conocida desde el año 1000 a. C., y desde entonces, alimentos como el jengibre, el ajo y la menta se han utilizado por sus propiedades curativas.

        p.fw-bold.mb-5(data-aos="fade-left") Los ejemplos históricos del uso de alimentos funcionales:

        .row.justify-content-center.mb-3
          .col-lg-5.mb-4(data-aos="fade-right")
            .fondo-personalizado-2.h-100
              .row.align-items-center.h-100
                .col-md-auto
                  figure.pt-4.pt-md-0
                    img.mx-auto(src="@/assets/curso/temas/63.png",style="max-width: 130px;")
                .col
                  .p-3.ps-md-0
                    h4.mb-3 En 1831
                    p.mb-0 Un médico francés recomendó la adición de yodo a la sal de mesa para prevenir el bocio.
          .col-lg-5.mb-4(data-aos="fade-left")
            .fondo-personalizado-2.h-100
              .row.align-items-center.h-100
                .col-md-auto
                  figure.pt-4.pt-md-0
                    img.mx-auto(src="@/assets/curso/temas/64.png",style="max-width: 130px;")
                .col
                  .p-3.ps-md-0
                    h4.mb-3 En 1942
                    p.mb-0 Se utilizó caseína parcialmente hidrolizada en pacientes infantiles con desórdenes gastrointestinales.

        .row
          .col-lg-8(data-aos="fade-right")
            .fondo-color-sistema-n.p-4.h-100.align-content-center
              p.mb-0 Hoy en día, los consumidores de países industrializados, ya habiendo satisfecho sus necesidades nutricionales básicas, buscan alimentos que no solo sean nutritivos, sino que también mejoren la salud y prevengan enfermedades. Sin embargo, las nuevas formas de alimentación han generado también problemas como la obesidad, enfermedades cardiovasculares, hipertensión y malnutrición.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 400px;")
        
        .titulo-decorativo.mt-5(data-aos="fade-down")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Innovación alimentaria

    p.mb-4(data-aos="fade-down") El concepto de innovación alimentaria se refiere a la aplicación de nuevas ideas, productos, procesos y prácticas para mejorar la salud del consumidor. Un ejemplo es la identificación de sustancias como:

    .row
      .col-lg-3.col-md-6.mb-4(data-aos="fade-right")
        .d-flex.flex-column.borde-12.fondo-color-sistema-o.p-4.h-100.justify-content-between
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 251px;")
          p.mb-0.text-center.fw-bold Ácidos grasos omega 3, 6 y 9.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-up")
        .d-flex.flex-column.borde-12.fondo-color-sistema-o.p-4.h-100.justify-content-between
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 122px;")
          p.mb-0.text-center.fw-bold Antioxidantes y polifenoles.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-down")
        .d-flex.flex-column.borde-12.fondo-color-sistema-o.p-4.h-100.justify-content-between
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 179px;")
          p.mb-0.text-center.fw-bold Fitoesteroles y fibra dietaria.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-left")
        .d-flex.flex-column.borde-12.fondo-color-sistema-o.p-4.h-100.justify-content-between
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 161px;")
          p.mb-0.text-center.fw-bold Probióticos y prebióticos.
    
    p.mb-5(data-aos="fade-right") Los ejemplos de empresas innovadoras:

    .row.justify-content-center.mb-3(data-aos="fade-right")
      .col-lg-2.pe-lg-0.align-content-center
        figure
          img.mx-auto(src="@/assets/curso/temas/31.png")
      .col-lg-6.ps-lg-0
        .fondo-color-sistema-l.h-100.align-content-center.p-4.position-relative
          p.mb-0 Empresas como Colanta han añadido sustancias funcionales a sus productos. Por ejemplo, su yogur contiene Benecol, un fitoesterol utilizado en varios países para mejorar la salud.
          img.position-absolute.d-none.d-lg-block(src="@/assets/curso/temas/10.svg",style="max-width: 105px;bottom: 0;right: 0;")
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-2.pe-lg-0.align-content-center
        figure
          img.mx-auto(src="@/assets/curso/temas/32.png")
      .col-lg-6.ps-lg-0
        .fondo-color-sistema-l.h-100.align-content-center.p-4.position-relative
          p.mb-0 También se han desarrollado productos enriquecidos con vitaminas E y C, que ayudan a combatir el estrés oxidativo.
          img.position-absolute.d-none.d-lg-block(src="@/assets/curso/temas/10.svg",style="max-width: 105px;bottom: 0;right: 0;")
    
    p.mb-4(data-aos="fade-left") A lo largo de los años, la investigación sobre los alimentos funcionales ha crecido significativamente, especialmente después del año 2005, demostrando un interés creciente en la innovación para mejorar la salud de los consumidores.

    p.fw-bold.mb-4(data-aos="fade-left") Entre las preferencias de los consumidores respecto a los alimentos funcionales, se destacan los siguientes aspectos:

    .row
      .col-lg-4.mb-4(data-aos="fade-right")
        .fondo-color-sistema-j.p-4.borde-23.h-100
          figure.mb-5
            img.mx-auto(src="@/assets/curso/temas/33.png")
          p.text-center Los consumidores eligen alimentos que presentan características diferenciadas frente a los productos tradicionales.
      .col-lg-4.mb-4(data-aos="fade-down")
        .fondo-color-sistema-k.p-4.borde-23.h-100
          figure.mb-5
            img.mx-auto(src="@/assets/curso/temas/34.png")
          p.text-center Las autoridades encargadas de regular los alimentos están reconociendo los beneficios de estos productos para la salud, ya que estudios han confirmado sus propiedades.
      .col-lg-4.mb-4(data-aos="fade-left")
        .fondo-color-sistema-k.p-4.borde-23.h-100
          figure.mb-5
            img.mx-auto(src="@/assets/curso/temas/35.png")
          p.text-center Estos productos ofrecen un potencial económico para los países, ya que contribuyen a reducir el riesgo de enfermedades.
    
    .titulo-decorativo.my-5.mt-4(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 ¿Quién puede y quién debe consumir alimentos funcionales?
    
    .row.justify-content-center.mb-3(data-aos="zoom-in-out")
      .col-lg-10
        .fondo-color-sistema-n.p-4
          .row
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 263px;")
            .col-lg-8.align-content-center
              p.fw-bold.mb-4 Los alimentos funcionales pueden formar parte de la dieta de cualquier persona, incluyendo:

              ul.lista-ul.ms-lg-3
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Personas con intolerancias alimentarias.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Mujeres embarazadas.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Infantes y adolescentes.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Personas adultas y de la tercera edad.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Deportistas.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Comunidades en riesgo de padecer determinadas enfermedades.
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido.mb-0
      h2 1.2 Marco legislativo
    
    .fondo-personalizado-1.f5.mb-4
      .fondo-personalizado-1__contenido.pt-4.pb-2
        .row.mb-4(data-aos="flip-up")
          .col-lg-8
            .fondo-color-sistema-o.p-4.h-100.align-content-center
              p.mb-0 Dado el creciente uso de suplementos dietarios y el aumento de productos con características saludables en el mercado, es fundamental que las autoridades desarrollen regulaciones actualizadas que protejan a los consumidores de productos con atribuciones falsas. En Colombia, la normativa más reciente es el Decreto 3249 de 2006, que regula los suplementos dietarios, y la Resolución 333 de 2011 del INVIMA, que establece los requisitos para la producción, comercialización y etiquetado de estos productos. Esta normativa define los suplementos dietarios como productos que contienen nutrientes, extractos o compuestos con fines específicos de suplementación nutricional, y obliga a que toda publicidad y etiquetado de estos productos esté sustentada por evidencia científica que respalde sus beneficios.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
        
        p.fw-bold.mb-5 Esta normativa define como alimentos o bebidas enriquecidas aquellos que contienen:

        .row.justify-content-center.mb-4
          .col-lg-3.pe-lg-0.align-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/38.png")
          .col-lg-5.ps-lg-0
            .fondo-color-sistema-p.p-4.h-100.align-content-center.padding-start-p-1
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.c-color-primario.fs-p-1
                  span.text-white Vitaminas + minerales + proteínas + grasas.
                li.d-flex
                  i.fas.fa-check-circle.c-color-primario.fs-p-1
                  span.text-white Vitaminas + minerales.
                li.d-flex
                  i.fas.fa-check-circle.c-color-primario.fs-p-1
                  span.text-white Vitaminas + proteínas.
                li.d-flex.mb-0.pb-0
                  i.fas.fa-check-circle.c-color-primario.fs-p-1
                  span.text-white Vitaminas, minerales o proteínas de forma individual.
        
        p.mb-0(data-aos="fade-right") En cuanto a los productos de uso dietético, la normativa vigente está regulada por la Resolución 333 de 2011 del INVIMA. Esta resolución establece que los productos de uso dietético son aquellos destinados a suplir necesidades nutricionales específicas, y su consumo está indicado para personas con problemas de asimilación, alteraciones metabólicas, o que buscan obtener un efecto particular en su salud mediante su consumo.
    
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8
        .fondo-color-sistema-n.borde-11.p-4.px-md-5
          .row.align-items-center
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 72px;")
            .col
              p.mb-0 Estos productos deben ser consumidos bajo supervisión médica adecuada, y su etiquetado debe reflejar con precisión sus componentes y el propósito de su uso, además de contar con la evidencia científica que respalde sus propiedades.
    
    p.mb-5(data-aos="fade-right") También se consideran alimentos o bebidas enriquecidas aquellos productos a los que solo se les hayan añadido vitaminas A, D o C. Los alimentos o bebidas enriquecidas con vitaminas deben contener:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-7.pe-lg-0
        .fondo-color-sistema-l.p-4.px-lg-5.h-100.align-content-center
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
              span Vitaminas A.
            li.d-flex
              i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
              span Tiamina (B1).
            li.d-flex
              i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
              span Riboflavina (B2).
            li.d-flex
              i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
              span Niacina.
            li.d-flex
              i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
              span Adicionalmente, pueden contener opcionalmente las siguientes vitaminas: B6, B12, C, D, E, K, ácido fólico, ácido pantoténico y biotina.
      .col-lg-3.order-first.order-lg-last.ps-lg-0
        figure
          img.mx-auto(src="@/assets/curso/temas/40.png")
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido.mb-0(data-aos="fade-right")
      h2 1.3 Alimentos de uso dietético
    
    .fondo-personalizado-1.f6
      .fondo-personalizado-1__contenido.py-5.pb-5

        p.mb-4(data-aos="fade-right") Este grupo incluye alimentos bajos en sodio, sucedáneos de la sal, alimentos bajos en gluten, calorías, carbohidratos y productos para diabéticos.

        .row.justify-content-center
          .col-lg-4.col-md-9.mb-4(data-aos="fade-right")
            .borde-22.overflow-hidden.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/41.png")
              .fondo-color-secundario.p-4.h-100
                h4.mb-4.text-center.mx-lg-5.px-lg-4 Alimentos bajos en sodio
                p Son aquellos en los que, durante su procesamiento, se ha reducido o eliminado el contenido de sodio, o que, por sus propiedades naturales, contienen una cantidad mínima de este.
          .col-lg-4.col-md-9.mb-4(data-aos="fade-left")
            .borde-22.overflow-hidden.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/42.png")
              .fondo-color-primario.p-4.h-100
                h4.mb-4.text-center.mx-lg-5.px-lg-4 Alimentos con adición de sucedáneos de la sal
                p Estos productos son utilizados en dietas especiales y se elaboran bajo buenas prácticas de fabricación. Los sucedáneos de la sal incluyen la sal dietética baja en sodio y los compuestos que, por su sabor, se asemejan a la sal o que son libres de sodio.
        
        p.fw-bold.mb-0(data-aos="fade-down") La composición de los sucedáneos de la sal debe incluir:

    .fondo-personalizado-1.f2.mb-4
      .fondo-personalizado-1__contenido.py-5
        .fondo-personalizado-1.no-tam-full.f3(data-aos="zoom-in-out")
          .fondo-personalizado-1__contenido.p-4
            SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Sales y ácidos varios
                  p.mb-0 Sulfato potásico, sales de potasio, calcio o amonio de ácidos como adípico, glutámico, carbónico, succínico, láctico, tartárico, cítrico, acético, clorhídrico y ortofosfórico.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 291px;")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Sales de magnesio y sucedáneos
                  p.mb-0 Sales de magnesio combinadas con sucedáneos de la sal que no contengan magnesio.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 412px;")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Sales de colina y límites de fósforo y amonio
                  p.mb-0 Sales de colina con un límite del 4 % de fósforo y 3 % de amonio en la mezcla de sucedáneos de sal.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/45.png",style="max-width: 412px;")
              .row.justify-content-center.pt-2
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-4.pt-lg-5 Ácidos libres
                  p.mb-0 Ácidos libres como el adípico, glutámico, cítrico y láctico.
                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 412px;")
    
    p.mb-0(data-aos="fade-right") La etiqueta de estos productos debe indicar "sucedáneos de la sal," "sal dietética" o "bajos en sodio."

    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Alimentos bajos en carbohidratos
    
    p.mb-4(data-aos="fade-right") Son aquellos que contienen menos azúcares en comparación con los alimentos convencionales. Los productos que contienen bajas cantidades de azúcar invertido, dextrosas, disacáridos, almidones y dextrinas deben ajustar su contenido en las siguientes proporciones:

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-2.pe-lg-0.align-content-center
        figure
          img.mx-auto(src="@/assets/curso/temas/47.png")
      .col-lg-6.ps-lg-0
        .fondo-color-sistema-l.h-100.align-content-center.p-4.position-relative
          p.mb-0 En productos de panadería, pastelería, pastas y harinas, los carbohidratos deben representar al menos el 70 % del contenido total.
          img.position-absolute.d-none.d-lg-block(src="@/assets/curso/temas/10.svg",style="max-width: 105px;bottom: 0;right: 0;")
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-2.pe-lg-0.align-content-center
        figure
          img.mx-auto(src="@/assets/curso/temas/48.png")
      .col-lg-6.ps-lg-0
        .fondo-color-sistema-l.h-100.align-content-center.p-4.position-relative
          p.mb-0 En conservas, mermeladas y jaleas, los carbohidratos no deben superar el 8 %.
          img.position-absolute.d-none.d-lg-block(src="@/assets/curso/temas/10.svg",style="max-width: 105px;bottom: 0;right: 0;")
    
    .titulo-decorativo.my-5.mb-3(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Aditivos alimentarios
    
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Para reemplazar los carbohidratos, se pueden emplear edulcorantes como fructosa, manitol o sorbitol. En las etiquetas, debe especificarse "alimentos bajos en carbohidratos".
      .col-lg-4(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/49.png",style="max-width: 400px;")

    .titulo-decorativo.my-5.mb-3(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Prohibiciones
    
    .row.align-items-center.mb-3
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Las etiquetas de productos dietéticos no deben inducir a error al consumidor, como hacer suponer que ayudan a perder peso corporal.
      .col-lg-4(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 400px;")
    
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Desarrollo de alimentos funcionales
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/51.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para desarrollar nuevos alimentos con nutrientes especiales, es esencial comprender las necesidades y preferencias de la población objetivo. El objetivo de estos productos es mejorar la salud y el estado nutricional de los consumidores, por lo que deben ser atractivos para la comunidad a la que se dirigen. Aunque técnicamente se puede fortificar cualquier alimento, es necesario considerar las características químicas, las propiedades físicas y la viabilidad del proceso.
    
    p.fw-bold.mb-4(data-aos="fade-right") Al seleccionar un producto para desarrollo, se debe garantizar:

    .row(data-aos="flip-up")
      .col-lg-3.col-md-6
        .tarjeta-p-1.p-4
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/52.png",style="max-width: 120px;")
          p.text-center.mb-0 El control y la calidad óptima de los productos.
      .col-lg-3.col-md-6
        .tarjeta-p-1.p-4
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/53.png",style="max-width: 120px;")
          p.text-center.mb-0 Que las características organolépticas no presenten cambios significativos.
      .col-lg-3.col-md-6
        .tarjeta-p-1.p-4
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/54.png",style="max-width: 120px;")
          p.text-center.mb-0 Que sean económicamente viables para su procesamiento.
      .col-lg-3.col-md-6
        .tarjeta-p-1.p-4
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/55.png",style="max-width: 120px;")
          p.text-center.mb-0 Que no causen toxicidad en las dosis empleadas.
    
    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Futuro de los alimentos funcionales
    
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .fondo-color-sistema-n.p-4
          .row
            .col-lg-4
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/56.png",style="max-width: 252px;")
            .col-lg-8.align-content-center
              p.fw-bold.mb-4 Las tendencias clave para el futuro desarrollo de los alimentos funcionales están relacionadas con:

              ul.lista-ul.ms-lg-3
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Cambios en las expectativas y actitudes de los consumidores.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Creciente conocimiento sobre la relación entre la dieta y los procesos fisiológicos.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Avances en ciencia y tecnología de los alimentos.
                li.d-flex
                  i.fas.fa-check-circle.c-color-sistema-m.fs-p-1
                  span Cambios en las políticas regulatorias.
    
    .row.mb-4(data-aos="fade-left")
      .col-lg-8
        .fondo-color-sistema-o.p-4.h-100.align-content-center
          p.mb-0 Los principales desafíos tecnológicos para el desarrollo de nuevos alimentos funcionales incluyen la mejora de la estabilidad de los componentes con actividad fisiológica, la cuantificación y análisis de estos, las dosis máximas permitidas, la realización de más estudios clínicos que validen los efectos beneficiosos de los componentes y el cumplimiento de las expectativas de los consumidores, así como de los requisitos legislativos y de mercado.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/57.png",style="max-width: 400px;")
          
    .row.mb-4(data-aos="fade-left")
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 400px;")
      .col-lg-8
        .fondo-color-sistema-l.p-4.h-100.align-content-center
          p.mb-0 Las frutas, cuyo consumo fresco representa la mayor parte de su producción mundial, ofrecen una gran oportunidad para el desarrollo de productos funcionales con mayor vida útil. Enriquecer las frutas con componentes fisiológicamente activos puede ser un medio eficaz para combatir deficiencias nutricionales. Dado su alto consumo global, las frutas son un vehículo ideal para portar estos nutrientes. Si se enriquecen a niveles del consumo diario recomendado, pueden contribuir significativamente a mejorar el estado nutricional de la población.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
