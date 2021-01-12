const HttpError = require('../models/http-error');

const DUMMY_PHONES = [
  {
    id: 'p1',
    title: 'Iphone 12',
    description: 'El mejor iphone the apple hasta la fecha',
    imageUrl:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604343704000',
    color: 'Azul',
    price: 899.99,
    especificaciones: [
      {
        name: 'Memoria RAM',
        value: '4GB',
      },
      {
        name: 'Pantalla',
        value: 'OLED Retina 2.532 x 1.170 píxeles ',
      },
      {
        name: 'Procesador',
        value: 'Apple A14 Bionic, 5nm',
      },
      {
        name: 'Peso',
        value: '162g',
      },
    ],
  },
  {
    id: 'p2',
    title: 'Samsung Note 20',
    description: 'Tu mejor compañero de trabajo',
    imageUrl: 'https://cdn.phonemore.com/content/2020/jpg/14378.jpg',
    color: 'Rosa',
    price: 776.5,
    especificaciones: [
      {
        name: 'Memoria RAM',
        value: '8GB',
      },
      {
        name: 'Pantalla',
        value: '6.7 pulgadas, HDR+, 60Hz (Dynamic AMOLED 2X)',
      },
      {
        name: 'Procesador',
        value: 'Snapdragon 865 Plus',
      },
      {
        name: 'Peso',
        value: '194g',
      },
    ],
  },
  {
    id: 'p3',
    title: 'Xiaomi Mi Note 10',
    description: 'Mejor movil calidad precio del mercado',
    imageUrl:
      'https://miaparato.es/wp-content/uploads/2020/02/xiaomi-mi-note-10-pro.jpg',
    color: 'Verde',
    price: 550.0,
    especificaciones: [
      {
        name: 'Memoria RAM',
        value: '6GB',
      },
      {
        name: 'Pantalla',
        value: 'Pantalla curva AMOLED 6.47″ 3D',
      },
      {
        name: 'Procesador',
        value:
          'Octa Core, Qualcomm Snapdragon 730G 2x 2.2 GHz Kryo 470, 6x 1.8 GHz GHz Kryo 470',
      },
      {
        name: 'Peso',
        value: '208g',
      },
    ],
  },
  {
    id: 'p4',
    title: 'OnePlus 8T',
    description: 'Eres estudiante? Este es tu telefono',
    imageUrl:
      'https://wowmovil.es/wp-content/uploads/2020/11/1-m00-1a-a5-rb8bwl9wnqeaysdxaagf8mrumno189_840_840.png',
    color: 'Verde lila',
    price: 599.0,
    especificaciones: [
      {
        name: 'Memoria RAM',
        value: '12GB',
      },
      {
        name: 'Pantalla',
        value:
          'Fluid AMOLED 120Hz6,55 pulgadas FullHD+ 2.400 x 1.080, 402 ppp (20:9) sRGB Display 3',
      },
      {
        name: 'Procesador',
        value: 'Snapdragon 865 + módem X55 GPU Adreno 650',
      },
      {
        name: 'Peso',
        value: '188g',
      },
    ],
  },
];

const getPhones = (req, res, next) => {
  res.json(DUMMY_PHONES);
};

const getPhoneById = (req, res, next) => {
  const phoneId = req.params.phoneId;
  const phone = DUMMY_PHONES.find((p) => p.id === phoneId);
  if (!phone) {
    return next(new HttpError('No se pudo encontar el telefono seleccionado'));
  }
  res.json(phone);
};

exports.getPhones = getPhones;
exports.getPhoneById = getPhoneById;
