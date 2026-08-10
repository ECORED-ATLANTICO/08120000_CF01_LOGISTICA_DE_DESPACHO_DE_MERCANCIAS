export default {
  global: {
    Name: 'Identificación y preparación de mercancías',
    Description:
      'El componente formativo Identificación y preparación de mercancías desarrolla capacidades orientadas al reconocimiento, clasificación, manipulación y acondicionamiento de mercancías conforme a procedimientos técnicos y normativas aplicables. El aprendiz identificará características de la carga, requisitos de empaque, embalaje, rotulado y almacenamiento, fortaleciendo habilidades para la preparación eficiente de mercancías destinadas al despacho, garantizando seguridad, control y calidad en las operaciones logísticas.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Mercancías y características',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de mercancía',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de mercancía',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características de la mercancía',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Naturaleza de la carga',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Empaque, embalaje y rotulado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Empaque',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Embalaje',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Rotulado',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Símbolos técnicos y pictóricos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manipulación y almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Densidad de la carga',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de arrume',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Rotación de mercancías',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Movimiento de cargas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procedimientos de almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de almacenamiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Procedimientos y guías',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Normas de seguridad',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Comunicación aplicada al despacho',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de comunicación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Herramientas de comunicación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Aplicaciones en logística',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Técnicas de comunicación',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Preparación de mercancías para despacho',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Buenas prácticas de manipulación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Separación y clasificación',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Alistamiento de mercancías',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Variables de entrega',
            hash: 't_6_4',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/08120000_CF01_DU.pdf',
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
  glosario: [
    {
      termino: 'Alistamiento de mercancías',
      significado:
        'Proceso de preparación de productos para su despacho, verificando cantidades, condiciones y documentación requerida.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'Actividad logística destinada a recibir, organizar, conservar y controlar mercancías dentro de una instalación.',
    },
    {
      termino: 'Arrume',
      significado:
        'Técnica utilizada para organizar y apilar mercancías de manera segura y eficiente en áreas de almacenamiento.',
    },
    {
      termino: 'Buenas prácticas de manipulación',
      significado:
        'Procedimientos orientados a preservar la integridad de las mercancías y prevenir riesgos durante su manejo.',
    },
    {
      termino: 'Carga',
      significado:
        'Conjunto de mercancías que requieren procesos específicos de manipulación, almacenamiento y transporte.',
    },
    {
      termino: 'Clasificación de mercancías',
      significado:
        'Proceso de organización de productos según características, destino o condiciones de manejo.',
    },
    {
      termino: 'Comunicación logística',
      significado:
        'Intercambio de información que permite coordinar actividades relacionadas con almacenamiento y despacho.',
    },
    {
      termino: 'Densidad de la carga',
      significado:
        'Relación existente entre el peso y el volumen que ocupa una mercancía.',
    },
    {
      termino: 'Despacho',
      significado:
        'Proceso de salida y entrega de mercancías hacia su destino final conforme a los requerimientos establecidos.',
    },
    {
      termino: 'Embalaje',
      significado:
        'Conjunto de materiales y técnicas utilizadas para proteger y asegurar mercancías durante su transporte y almacenamiento.',
    },
    {
      termino: 'Empaque',
      significado:
        'Material o recipiente que contiene directamente el producto para protegerlo y facilitar su manipulación.',
    },
    {
      termino: 'FEFO',
      significado:
        'Método de rotación de inventarios que prioriza la salida de los productos con fecha de vencimiento más próxima.',
    },
    {
      termino: 'FIFO',
      significado:
        'Sistema de rotación de inventarios en el que la primera mercancía en ingresar es la primera en salir.',
    },
    {
      termino: 'Herramientas de comunicación',
      significado:
        'Medios utilizados para transmitir información dentro de las operaciones logísticas.',
    },
    {
      termino: 'Inventario',
      significado:
        'Registro y control de las mercancías disponibles dentro de una organización.',
    },
    {
      termino: 'Mercancía',
      significado:
        'Bien o producto susceptible de almacenamiento, transporte, comercialización o distribución.',
    },
    {
      termino: 'Movimiento de cargas',
      significado:
        'Actividades relacionadas con el traslado, manipulación y ubicación de mercancías dentro de una operación logística.',
    },
    {
      termino: 'Naturaleza de la carga',
      significado:
        'Características y condiciones particulares que determinan los requerimientos de manejo y conservación de una mercancía.',
    },
    {
      termino: 'Normas de seguridad',
      significado:
        'Conjunto de medidas destinadas a prevenir accidentes y proteger personas, equipos y mercancías.',
    },
    {
      termino: 'Procedimientos de almacenamiento',
      significado:
        'Actividades estandarizadas para la recepción, ubicación, conservación y control de mercancías.',
    },
    {
      termino: 'Rotación de mercancías',
      significado:
        'Método utilizado para controlar el ingreso y salida de productos dentro de un inventario.',
    },
    {
      termino: 'Rotulado',
      significado:
        'Incorporación de información visual mediante etiquetas, códigos o símbolos para identificar y controlar mercancías.',
    },
    {
      termino: 'Símbolos técnicos y pictóricos',
      significado:
        'Representaciones gráficas que comunican instrucciones relacionadas con el manejo y transporte de mercancías.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para identificar y realizar seguimiento a una mercancía durante las diferentes etapas del proceso logístico.',
    },
    {
      termino: 'Variables de entrega',
      significado:
        'Factores que influyen en el cumplimiento de las condiciones pactadas para la recepción y despacho de mercancías.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ballou, R. H. (2004). <em>Logística: administración de la cadena de suministro</em> (5.ª ed.). Pearson Educación.',
      link: 'https://books.google.com.co/books?id=ii5xqLQ5VLgC&printsec=frontcover&hl=es#v=onepage&q&f=false',
    },
    {
      referencia:
        'Betancur, C. (2021). <em>Comparación de pasarelas de pago en Colombia</em>. BTODigital.',
      link: 'https://btodigital.com/comparacion-de-pasarelas-de-pago-en-colombia/',
    },
    {
      referencia:
        'Bowersox, D. J., Closs, D. J., & Cooper, M. B. (2007). <em>Administración y logística en la cadena de suministros</em> (2.ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2008). <em>Administración de la cadena de suministro: estrategia, planeación y operación</em> (3.ª ed.). Pearson Educación.',
      link: 'https://gc.scalahed.com/recursos/files/r161r/w24567w/Sunil_Chopral.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2020). <em>Normas técnicas aplicables al empaque, embalaje y rotulado de mercancías</em>.',
      link: 'https://www.icontec.org',
    },
    {
      referencia:
        'Mora García, L. A. (2023). <em>Gestión logística integral: las mejores prácticas en la cadena de abastecimiento</em> (3.ª ed.). Ecoe Ediciones.',
      link: 'https://www.ecoeediciones.com/wp-content/uploads/2023/01/9789585035676-9789585035683-Gestion-logistica-integral.-Las-mejores-practicas-en-la-cadena-de-abastecimiento-3ra-edicion-contenido.pdf',
    },
    {
      referencia:
        'Paternina Arboleda, C., Alfaro Díaz, J., & Mendoza Roca, C. (2015). <em>Manual práctico para gestión logística: envase y embalaje, transporte y cadena de frío</em>. Editorial Universidad del Norte.',
      link: '',
    },
    {
      referencia:
        'Torres Rabello, J. (2014). <em>Logística: conceptos y tendencias</em>. Editorial RIL.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Quintero Guzmán',
          cargo: 'Experto Temático Logística',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
