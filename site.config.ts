// Demo para Carpintería Metálica Expoaluminio A.G. (L'Hospitalet de Llobregat). Datos y fotos de su ficha de
// Google (26/11/2026); móvil y email, del propio negocio. PENDIENTE con el cliente: nombreLegal y nif (provisionales)
// y permiso para usar las fotos de su ficha antes de publicar con indexar: true.
import { defineSiteConfig } from "@andrei-leads/core";

export default defineSiteConfig({
  negocio: {
    nombre: "Expoaluminio A.G.",
    nombreLegal: "Carpintería Metálica Expoaluminio",
    nif: "B00000000", // PROVISIONAL: no aparece en registros
    sector: "Carpintería metálica y de aluminio",
    descripcionCorta: "Taller de carpintería de aluminio en L'Hospitalet: ventanas, persianas, mosquiteras, cristales a medida y escaparates.",
    logo: { src: "/fotos/logo.png", alt: "Logotipo de Expoaluminio A.G.", origen: "ficha-google" },
    tipoSchema: ["HomeAndConstructionBusiness"],
  },
  contacto: {
    telefono: "+34625495657", // móvil que dio el negocio (fijo de la ficha: 933 33 45 96)
    whatsapp: "+34625495657",
    email: "expoaluminio.ag@gmail.com",
    direccion: { calle: "Carrer de Graner, 51", cp: "08904", ciudad: "L'Hospitalet de Llobregat", provincia: "Barcelona" },
    horario: [
      { dias: ["lunes", "martes", "miercoles", "jueves"], abre: "09:00", cierra: "13:00" },
      { dias: ["lunes", "martes", "miercoles", "jueves"], abre: "15:00", cierra: "18:00" },
      { dias: ["viernes"], abre: "08:00", cierra: "13:00" },
    ],
    coordenadas: { lat: 41.37219, lng: 2.114223 },
    urgencias24h: false,
    fichaGoogle: "https://maps.google.com/?cid=18157919522080790935",
  },
  zonas: [],
  imagenesHero: [
    { src: "/fotos/tienda-expoaluminio.jpg", alt: "Fachada de la tienda Expoaluminio en la calle Graner, con el rótulo y el escaparate", origen: "ficha-google" },
    { src: "/fotos/escaparate-tienda-moda.jpg", alt: "Escaparate de aluminio y cristal de una tienda de ropa, iluminado de noche", origen: "ficha-google" },
  ],
  servicios: [
    {
      titulo: "Ventanas de aluminio", slug: "ventanas-aluminio",
      descripcion: "Ventanas a medida, correderas o practicables, fabricadas y montadas por nosotros.",
      contenido: [
        "Medimos el hueco, te enseñamos las opciones de perfil y de cristal y fabricamos la ventana a medida.",
        "Al montar las nuevas, retiramos las viejas y dejamos la ventana sellada y ajustada.",
      ],
      incluye: ["Medición", "Fabricación a medida", "Montaje y sellado", "Retirada de la ventana vieja"],
      imagenes: [{ src: "/fotos/ventana-abierta.jpg", alt: "Ventana de aluminio blanca abierta, vista desde dentro", origen: "ficha-google" }, { src: "/fotos/ventana-salon.jpg", alt: "Ventana alta de madera y cristal en un salón con techo pintado", origen: "ficha-google" }],
      preguntas: [],
    },
    {
      titulo: "Persianas", slug: "persianas",
      descripcion: "Persianas enrollables nuevas y reparación de lamas, cintas y ejes.",
      contenido: [
        "Si la persiana se ha atascado, sube torcida o se ha roto la cinta, la revisamos y te decimos si se arregla o conviene cambiarla.",
        "Las nuevas las hacemos a medida, en aluminio o PVC.",
      ],
      incluye: ["Revisión", "Cambio de lamas, cinta o eje", "Persianas nuevas a medida"],
      imagenes: [{ src: "/fotos/terraza-persiana-2.jpg", alt: "Cerramiento de terraza con la persiana enrollable bajada", origen: "ficha-google" }],
      preguntas: [],
    },
    {
      titulo: "Mosquiteras", slug: "mosquiteras",
      descripcion: "Mosquiteras a medida para ventanas y puertas: enrollables, correderas o fijas.",
      contenido: ["Tomamos medidas y te hacemos la mosquitera que mejor encaja con tu ventana o tu puerta."],
      incluye: ["Medición", "Fabricación a medida", "Montaje"],
      imagenes: [{ src: "/ejemplo/servicio-aluminio.jpg", alt: "Ventana de aluminio corredera sobre el banco del taller", origen: "ia" }],
      preguntas: [],
    },
    {
      titulo: "Cristales y mamparas", slug: "cristales",
      descripcion: "Cristales a medida para ventanas y puertas, y mamparas de baño y de ducha.",
      contenido: ["Si se te ha roto un cristal o quieres cambiarlo por uno mejor, lo cortamos a medida y lo montamos.", "También hacemos mamparas de cristal para el baño y la ducha, a la medida del hueco."],
      incluye: ["Medición", "Corte a medida", "Colocación"],
      imagenes: [{ src: "/fotos/mampara-bano.jpg", alt: "Mampara de cristal templado en un baño con bañera y ducha", origen: "ficha-google" }, { src: "/fotos/mampara-ducha.jpg", alt: "Mampara de ducha de cristal con perfil de aluminio", origen: "ficha-google" }],
      preguntas: [],
    },
    {
      titulo: "Escaparates y frentes de tienda", slug: "escaparates",
      descripcion: "Frentes de aluminio y cristal para comercios, con puerta de entrada y cierre.",
      contenido: ["Hacemos el frente de aluminio y cristal de tu local: escaparate, puerta de entrada y cierre metálico."],
      incluye: ["Medición del hueco", "Fabricación", "Montaje"],
      imagenes: [{ src: "/fotos/entrada-local-cristal.jpg", alt: "Frente de cristal con puerta de vidrio en la entrada de un local", origen: "ficha-google" }],
      preguntas: [],
    },
    {
      titulo: "Cerramientos de terraza", slug: "cerramientos-terraza",
      descripcion: "Cerramos terrazas y áticos con aluminio y cristal, con correderas y persiana.",
      contenido: ["Cerramos la terraza con perfiles de aluminio y cristal para que la puedas usar todo el año.", "Puede llevar puertas correderas y persiana enrollable en el mismo cerramiento."],
      incluye: ["Medición", "Fabricación a medida", "Montaje"],
      imagenes: [{ src: "/fotos/terraza-corredera.jpg", alt: "Cerramiento de terraza en un ático, con puertas correderas de aluminio oscuro", origen: "ficha-google" }],
      preguntas: [],
    },
    {
      titulo: "Reparaciones", slug: "reparaciones",
      descripcion: "Persianas atascadas, cristales rotos, cerraduras y ventanas que no cierran en el barrio.",
      contenido: ["Atendemos reparaciones de carpintería de aluminio en L'Hospitalet. Llámanos y te decimos cuándo podemos pasar."],
      incluye: ["Visita", "Presupuesto antes de tocar nada", "Reparación"],
      imagenes: [{ src: "/ejemplo/taller-manos.jpg", alt: "Manos ajustando una lama de persiana en el banco de trabajo", origen: "ia" }],
      preguntas: [],
    },
  ],
  trabajos: [
    {
      titulo: "Escaparate de una tienda de ropa", slug: "escaparate-tienda-ropa", servicio: "escaparates",
      descripcion: "Frente de aluminio negro y cristal para una tienda de moda: escaparate de suelo a techo y puerta de entrada.",
      imagenes: [{ src: "/fotos/escaparate-tienda-moda.jpg", alt: "Escaparate de aluminio y cristal de una tienda de ropa, iluminado de noche", origen: "ficha-google" }],
    },
    {
      titulo: "Cerramiento de terraza en un ático", slug: "cerramiento-terraza-atico", servicio: "cerramientos-terraza",
      descripcion: "Terraza cerrada con perfiles de aluminio oscuro, puertas correderas y persianas enrollables.",
      imagenes: [{ src: "/fotos/terraza-corredera.jpg", alt: "Cerramiento de terraza en un ático, con puertas correderas de aluminio oscuro", origen: "ficha-google" }, { src: "/fotos/terraza-persiana.jpg", alt: "Cerramiento de la terraza con la persiana bajada, visto desde la barandilla", origen: "ficha-google" }, { src: "/fotos/terraza-persiana-2.jpg", alt: "Cerramiento de terraza con la persiana enrollable bajada", origen: "ficha-google" }],
    },
    {
      titulo: "Frente de una oficina en esquina", slug: "frente-oficina-esquina", servicio: "escaparates",
      descripcion: "Escaparates y puerta de aluminio en una oficina a pie de calle, en chaflán.",
      imagenes: [{ src: "/fotos/oficina-esquina.jpg", alt: "Oficina a pie de calle en esquina con escaparates y puerta de aluminio", origen: "ficha-google" }],
    },
    {
      titulo: "Fachada de un estudio de impresión", slug: "fachada-estudio-impresion", servicio: "escaparates",
      descripcion: "Frente acristalado con puerta de aluminio para un local de impresión.",
      imagenes: [{ src: "/fotos/estudio-impresion.jpg", alt: "Frente acristalado con puerta de aluminio de un estudio de impresión", origen: "ficha-google" }],
    },
    {
      titulo: "Entrada de un centro de estética", slug: "entrada-centro-estetica", servicio: "escaparates",
      descripcion: "Puerta y escaparate de aluminio blanco para un centro de estética.",
      imagenes: [{ src: "/fotos/centro-estetica.jpg", alt: "Entrada de un centro de estética con puerta y escaparate de aluminio blanco", origen: "ficha-google" }],
    },
    {
      titulo: "Entrada acristalada de un local", slug: "entrada-acristalada-local", servicio: "escaparates",
      descripcion: "Frente de cristal con puerta de vidrio para un local comercial.",
      imagenes: [{ src: "/fotos/entrada-local-cristal.jpg", alt: "Frente de cristal con puerta de vidrio en la entrada de un local", origen: "ficha-google" }],
    },
    {
      titulo: "Mamparas de baño", slug: "mamparas-bano", servicio: "cristales",
      descripcion: "Mamparas de cristal templado para baño y ducha, a medida.",
      imagenes: [{ src: "/fotos/mampara-bano.jpg", alt: "Mampara de cristal templado en un baño con bañera y ducha", origen: "ficha-google" }, { src: "/fotos/mampara-ducha.jpg", alt: "Mampara de ducha de cristal con perfil de aluminio", origen: "ficha-google" }],
    },
    {
      titulo: "Ventanas de aluminio", slug: "ventanas-aluminio-obra", servicio: "ventanas-aluminio",
      descripcion: "Ventanas practicables de aluminio en un piso.",
      imagenes: [{ src: "/fotos/ventana-abierta.jpg", alt: "Ventana de aluminio blanca abierta, vista desde dentro", origen: "ficha-google" }, { src: "/fotos/ventana-perfil.jpg", alt: "Ventana de aluminio marrón cerrada, vista de canto desde el balcón", origen: "ficha-google" }],
    },
  ],
  resenas: [
    { autor: "Magalí Paramio", puntuacion: 5, fecha: "2026-08", fuente: "google", texto: "Qualitat i professionalitat. M'han posat totes les finestres i a la meva mare i a la meva germana. I les mosquiteres i persianes." },
    { autor: "Julieta G", puntuacion: 5, fuente: "google", texto: "Super amables, muy buen servicio, mejor carpintero de la zona" },
    { autor: "Monica Marquez", puntuacion: 5, fuente: "google", texto: "Buenos profesionales, todo genial" },
    { autor: "Raul Kingtai", puntuacion: 5, fuente: "google", texto: "Muy amables y profesionales" },
    { autor: "Felix Manuel Belzunce Martin", puntuacion: 4, fuente: "google", texto: "He encarregat una finestra i treball ben realitzat i bé de preu." },
  ],
  proceso: [],
  acreditaciones: [],
  garantias: [],
  marcas: [],
  empresa: {
    historia: [
      "Expoaluminio A.G. es un taller de carpintería de aluminio, cristalería y cerrajería en la calle Graner de L'Hospitalet.",
      "Hacemos ventanas, persianas, mosquiteras, mamparas, cerramientos y frentes de tienda a medida, y atendemos reparaciones en el barrio.",
    ],
    imagenes: [{ src: "/fotos/tienda-expoaluminio.jpg", alt: "Fachada de la tienda Expoaluminio en la calle Graner", origen: "ficha-google" }, { src: "/fotos/boceto-taller.jpg", alt: "Boceto a mano de una ventana con sus medidas, antes de fabricarla", origen: "ficha-google" }, { src: "/fotos/tienda-cierre.jpg", alt: "La tienda Expoaluminio con el cierre metálico bajado", origen: "ficha-google" }],
    equipo: [],
  },
  galeria: [],
  preguntas: [],
  redes: {},
  seo: {
    titulo: "Carpintería de aluminio en L'Hospitalet | Expoaluminio",
    descripcion: "Ventanas de aluminio, persianas, mosquiteras, cristales a medida y escaparates en L'Hospitalet de Llobregat.",
    url: "https://web-expoaluminio.vercel.app",
  },
  analitica: { vercel: true },
});
