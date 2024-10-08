<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Alimentos funcionales y nutracéuticos.',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los conceptos clave relacionados con los alimentos funcionales, nutracéuticos y su regulación en Colombia.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el objetivo principal de los alimentos funcionales?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar el sabor de los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aportar beneficios adicionales a la salud.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la producción agrícola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el costo de los alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué sustancia se le adiciona al yogur en Colombia como fitoesterol?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Omega 3.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vitamina C.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Benecol.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calcio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es una característica de los nutracéuticos?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Son completamente sintéticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No tienen beneficios para la salud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo se encuentran en medicamentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son de origen natural y tienen propiedades terapéuticas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes es un ejemplo de un ácido graso presente en alimentos funcionales?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Vitamina C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Omega 3.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sodio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de alimentos se enriquecen para combatir deficiencias nutricionales?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Alimentos funcionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Alimentos ultraprocesados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alimentos congelados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alimentos deshidratados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Los alimentos funcionales solo se consumen para satisfacer las necesidades nutricionales mínimas.',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'La innovación alimentaria busca mejorar tanto la productividad como la salud del consumidor.',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Los alimentos bajos en sodio contienen altas cantidades de potasio.',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Los productos nutracéuticos pueden ser considerados medicamentos.',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '<b>La legislación colombiana permite la adición de vitaminas en productos dietéticos.<b/>',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
