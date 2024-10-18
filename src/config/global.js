export default {
  global: {
    componenteFormativo: 'Alimentos funcionales',
    descripcionCurso:
      'El componente formativo aborda tendencias alimentarias y alimentos funcionales, explicando su origen, beneficios para la salud y regulación en Colombia. Se destacan los nutracéuticos, sustancias naturales que previenen y tratan enfermedades. Además, se analiza el desarrollo de productos con componentes saludables y los retos tecnológicos relacionados con su producción y comercialización, para mejorar la salud pública.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tendencias alimentarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Alimento funcional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Marco legislativo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Alimentos de uso dietético',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Desarrollo de alimentos funcionales',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Los nutracéuticos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tendencias alimentarias',
      referencia:
        'DW Documental (2022). Comida para todos - El futuro de la alimentación | DW Documental. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oOn_rTintBk',
    },
    {
      tema: 'Alimento funcional',
      referencia:
        'Universidad de Burgos. (2016). Alimentos funcionales. Concepto. Grupo TECNOFOOD. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_d6sZodPeKY',
    },
    {
      tema: 'Marco legislativo',
      referencia:
        'Ministerio de Salud y Protección Social. (2023). <em>Resolución 254 de 2023 (21 de febrero), por la cual se corrige un yerro en la Resolución 2492 de 2022, modificatoria de la Resolución 810 de 2021</em>. Diario Oficial No. 52318.',
      tipo: 'Resolución',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?dt=S&i=138678',
    },
    {
      tema: 'Alimentos de uso dietético',
      referencia:
        'Manu Echeverri. (2023).15 MEJORES ALIMENTOS PARA LA DIABETES | COME ESTO PARA CONTROLAR TU DIABETES | Manu Echeverri. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=E5jmPPpCmxE',
    },
    {
      tema: 'Los nutracéuticos',
      referencia:
        'Ximena Bedoya. (2018). LOS NUTRACEUTICOS. SANKI. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=chs3l5H2aak',
    },
  ],
  glosario: [
    {
      termino: 'Agricultura ecológica',
      significado:
        'sistema de producción agrícola que evita el uso de pesticidas y fertilizantes químicos, promoviendo alimentos más saludables.',
    },
    {
      termino: 'Alimentos funcionales',
      significado:
        'alimentos que, además de nutrir, proporcionan beneficios adicionales a la salud, ayudando a prevenir enfermedades.',
    },
    {
      termino: 'Fitoesteroles',
      significado:
        'compuestos vegetales que reducen la absorción del colesterol en el intestino, contribuyendo a la salud cardiovascular.',
    },
    {
      termino: 'Innovación alimentaria',
      significado:
        'proceso de introducir nuevos productos o modificar alimentos existentes para mejorar la salud o la productividad.',
    },
    {
      termino: 'Nutracéuticos',
      significado:
        'ciencia que estudia la relación entre los genes y los nutrientes, permitiendo diseñar dietas personalizadas según las predisposiciones genéticas.',
    },
    {
      termino: 'Omega 3',
      significado:
        'ácido graso presente en alimentos como el pescado y las semillas, que ayuda a mejorar la salud cardiovascular.',
    },
    {
      termino: 'Probióticos',
      significado:
        'microorganismos vivos que, consumidos en cantidades adecuadas, proporcionan beneficios para la flora intestinal y el sistema inmunológico.',
    },
    {
      termino: 'Tendencias alimentarias',
      significado:
        'cambios en los hábitos alimentarios a lo largo del tiempo, influenciados por la producción agrícola y el estilo de vida moderno.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilera, C. Barberá, J. et al.  (2007). <em>Alimentos funcionales. Aproximidad a buena alimentación</em>. Madrid, España: Editores Dirección General de Salud Pública y Alimentación.',
      link: 'http://www.madrid.org/bvirtual/BVCM009703.pdf',
    },
    {
      referencia:
        'Coral, S., Gómez, C., López, C. y Royo, M. (2011). <em>Nutrición, salud y alimentos funcionales</em>. Madrid: UNED.',
      link:
        'https://www.google.com.co/books/edition/Nutrici%C3%B3n_salud_y_alimentos_funcionales/hfQMXBIiydgC?hl=es&gbpv=1&printsec=frontcover',
    },
    {
      referencia:
        'Cortez, M. (2005). <em>Alimentos funcionales</em>. Medellín, Colombia: Viate, revista de la Facultad de Química Farmacéutica, Universidad de Antioquia.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0121-40042005000100001',
    },
    {
      referencia:
        'Jeffrey, L. y Mechanick, M. (2003). <em>El uso clínico de los suplementos dietéticos y nutracéuticos</em>. Nueva York: Asociación Americana de Endocrinólogos Clínicos (AACE).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
