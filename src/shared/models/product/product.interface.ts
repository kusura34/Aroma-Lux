export interface ProductVariant {
  size: number; // например: 5, 10, 30, 100 (в мл)
  price: number;
  stock: number; // остаток на складе
}

export interface Product {
  id: string;
  brand: string;      // например: "Byredo"
  name: string;       // например: "Bal d'Afrique"
  description: string;
  gender: 'male' | 'female' | 'unisex';
  family: string[];   // ["древесные", "восточные"]
  notes: {
    top: string[];    // верхние ноты
    heart: string[];  // средние
    base: string[];   // базовые
  };
  images: string[];   // ссылки на фото в Firebase Storage
  variants: ProductVariant[]; // массив объемов и цен
  isNew?: boolean;
  isHit?: boolean;
}