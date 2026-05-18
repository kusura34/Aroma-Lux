import { Product } from "../../shared/models/product/product.interface";


export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    brand: 'Byredo',
    name: "Bal d'Afrique",
    description: 'Теплый, романтичный и сложный аромат, вдохновленный Парижем конца 20-х годов и его увлечением африканской культурой, искусством и музыкой.',
    gender: 'unisex',
    family: ['древесные', 'восточные'],
    notes: {
      top: ['Бергамот', 'Лимон', 'Нероли', 'Африканская календула'],
      heart: ['Фиалка', 'Лепестки жасмина', 'Цикламен'],
      base: ['Черная амбра', 'Мускус', 'Ветивер', 'Марокканский кедр']
    },
    images: ['/images/megaerica_Carbonated_perfume_in_a_bottle.png'],
    variants: [
      { size: 5, price: 1500, stock: 10 },
      { size: 10, price: 2800, stock: 15 },
      { size: 50, price: 12500, stock: 3 },
      { size: 100, price: 19000, stock: 2 }
    ],
    isHit: true
  },
  {
    id: '2',
    brand: 'Tom Ford',
    name: 'Lost Cherry',
    description: 'Насыщенный аромат, открывающий двери в некогда запретный мир. Его спелая вишня, дополненная ликером и горьким миндалем, никого не оставляет равнодушным.',
    gender: 'female',
    family: ['гурманские', 'фруктовые'],
    notes: {
      top: ['Вишня', 'Вишневый ликер', 'Горький миндаль'],
      heart: ['Вишня', 'Турецкая роза', 'Жасмин самбак'],
      base: ['Перуанский бальзам', 'Обжаренные бобы тонка', 'Сандал', 'Ветивер', 'Кедр']
    },
    images: ['/images/megaerica_Carbonated_perfume_in_a_bottle.png'],
    variants: [
      { size: 5, price: 2200, stock: 5 },
      { size: 10, price: 4100, stock: 8 },
      { size: 50, price: 22000, stock: 1 }
    ],
    isNew: true
  },
  {
    id: '3',
    brand: 'Marc-Antoine Barrois',
    name: 'Ganymede',
    description: 'Космический, минеральный аромат нового поколения. Уникальное сочетание замши, глянцевого журнала и бессмертника создают невероятный шлейф.',
    gender: 'unisex',
    family: ['кожаные', 'минеральные'],
    notes: {
      top: ['Мандарин', 'Шафран'],
      heart: ['Фиалка', 'Абсолют османтуса'],
      base: ['Акигалавуд', 'Бессмертник']
    },
    images: ['/images/megaerica_Carbonated_perfume_in_a_bottle.png'],
    variants: [
      { size: 5, price: 1800, stock: 12 },
      { size: 10, price: 3300, stock: 20 },
      { size: 100, price: 16500, stock: 4 }
    ],
    isHit: true
  },
  {
    id: '4',
    brand: 'Ex Nihilo',
    name: 'Fleur Narcotique',
    description: 'Настоящий наркотический цветок. Манящий, взрывной и утонченный аромат, который раскрывается сочным персиком и пионом на мускусной подложке.',
    gender: 'female',
    family: ['цветочные', 'фруктовые'],
    notes: {
      top: ['Бергамот', 'Личи', 'Персик'],
      heart: ['Жасмин', 'Пион', 'Цветок апельсина'],
      base: ['Древесные ноты', 'Мох', 'Мускус']
    },
    images: ['/images/megaerica_Carbonated_perfume_in_a_bottle.png'],
    variants: [
      { size: 5, price: 1600, stock: 0 }, // Нет в наличии для теста UI
      { size: 10, price: 3000, stock: 7 },
      { size: 100, price: 18500, stock: 2 }
    ]
  },
  {
    id: '5',
    brand: 'Creed',
    name: 'Aventus',
    description: 'Легендарный мужской парфюм, символизирующий силу, успех и мужественность. Композиция открывается сочным ананасом и благородным березовым дегтем.',
    gender: 'male',
    family: ['шипровые', 'фруктовые'],
    notes: {
      top: ['Ананас', 'Бергамот', 'Черная смородина', 'Яблоко'],
      heart: ['Береза', 'Пачули', 'Марокканский жасмин', 'Роза'],
      base: ['Мускус', 'Дубовый мох', 'Серая амбра', 'Ваниль']
    },
    images: ['/images/megaerica_Carbonated_perfume_in_a_bottle.png'],
    variants: [
      { size: 5, price: 2000, stock: 6 },
      { size: 10, price: 3800, stock: 11 },
      { size: 50, price: 19500, stock: 0 },
      { size: 100, price: 27000, stock: 1 }
    ],
    isHit: true
  }
];