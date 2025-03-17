import type { DataImage } from '@/components/mixins/data-main-slider'

interface Aditional {
  weight: string
  dimentions: string
  colours: string
  material: string
}

interface Reviews {
  fullName: string
  rating: number
  date: Date
  text: string
}

export interface DataCards {
  title: string
  price: string
  id: number
  type: string
  sku: number
  like: boolean
  rating: number
  categories: string
  text: string
  description: string
  aditional: Aditional
  reviews: Reviews[]
  images: DataImage[]
}

export interface DataBasketCards extends DataCards {
  count: number
}

export const dataCards: Array<DataCards> = [
  {
    title: 'Lira Earrings',
    price: '20,00',
    id: 1,
    type: 'Black / Medium',
    sku: 12,
    like: false,
    rating: 5,
    categories: 'Fashion, Style',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    aditional: {
      weight: '0.3 kg',
      dimentions: '15 x 10 x 1 cm',
      colours: 'Black, Browns, White',
      material: 'Metal',
    },
    reviews: [
      {
        fullName: 'Scarlet withch',
        rating: 3,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
      },
      {
        fullName: 'Scarlet withch',
        rating: 4,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.',
      },
    ],
    images: [
      {
        src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/2.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/2.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/3.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/3.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/4.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/4.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/5.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/5.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/6.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/6.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
    ],
  },
  {
    title: 'Moon Necklace',
    price: '30,13',
    id: 2,
    type: 'Black / Medium',
    sku: 34,
    like: true,
    rating: 4,
    categories: 'Fashion, Style',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    aditional: {
      weight: '0.3 kg',
      dimentions: '15 x 10 x 1 cm',
      colours: 'Black, Browns, White',
      material: 'Metal',
    },
    reviews: [
      {
        fullName: 'Scarlet withch',
        rating: 3,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
      },
      {
        fullName: 'Scarlet withch',
        rating: 4,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.',
      },
    ],
    images: [
      {
        src: new URL('@/assets/images/products/2.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/2.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/3.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/3.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/4.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/4.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/5.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/5.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/6.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/6.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
    ],
  },
  {
    title: 'Star Bracelet',
    price: '15,34',
    id: 3,
    type: 'Black / Medium',
    sku: 27,
    like: false,
    rating: 5,
    categories: 'Fashion, Style',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    aditional: {
      weight: '0.3 kg',
      dimentions: '15 x 10 x 1 cm',
      colours: 'Black, Browns, White',
      material: 'Metal',
    },
    reviews: [
      {
        fullName: 'Scarlet withch',
        rating: 3,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
      },
      {
        fullName: 'Scarlet withch',
        rating: 4,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.',
      },
    ],
    images: [
      {
        src: new URL('@/assets/images/products/3.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/3.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/4.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/4.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/5.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/5.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/6.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/6.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/2.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/2.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
    ],
  },
  {
    title: 'Sun Ring',
    price: '25,87',
    id: 4,
    type: 'Black / Medium',
    sku: 81,
    like: false,
    rating: 4,
    categories: 'Fashion, Style',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    aditional: {
      weight: '0.3 kg',
      dimentions: '15 x 10 x 1 cm',
      colours: 'Black, Browns, White',
      material: 'Metal',
    },
    reviews: [
      {
        fullName: 'Scarlet withch',
        rating: 3,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
      },
      {
        fullName: 'Scarlet withch',
        rating: 4,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.',
      },
    ],
    images: [
      {
        src: new URL('@/assets/images/products/4.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/4.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/5.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/5.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/6.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/6.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/2.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/2.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/3.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/3.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
    ],
  },
  {
    title: 'Galaxy Pendant',
    price: '35,15',
    id: 5,
    type: 'Black / Medium',
    sku: 54,
    like: false,
    rating: 5,
    categories: 'Fashion, Style',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    aditional: {
      weight: '0.3 kg',
      dimentions: '15 x 10 x 1 cm',
      colours: 'Black, Browns, White',
      material: 'Metal',
    },
    reviews: [
      {
        fullName: 'Scarlet withch',
        rating: 3,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
      },
      {
        fullName: 'Scarlet withch',
        rating: 4,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.',
      },
    ],
    images: [
      {
        src: new URL('@/assets/images/products/5.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/5.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/6.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/6.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/2.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/2.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/3.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/3.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/4.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/4.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
    ],
  },
  {
    title: 'Aurora Earrings',
    price: '22,20',
    id: 6,
    type: 'Black / Medium',
    sku: 77,
    like: true,
    rating: 3,
    categories: 'Fashion, Style',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    aditional: {
      weight: '0.3 kg',
      dimentions: '15 x 10 x 1 cm',
      colours: 'Black, Browns, White',
      material: 'Metal',
    },
    reviews: [
      {
        fullName: 'Scarlet withch',
        rating: 3,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
      },
      {
        fullName: 'Scarlet withch',
        rating: 4,
        date: new Date(),
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.',
      },
    ],
    images: [
      {
        src: new URL('@/assets/images/products/6.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/6.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/2.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/2.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/3.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/3.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/4.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/4.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
      {
        src: new URL('@/assets/images/products/5.jpg', import.meta.url).href,
        srcset: new URL('@/assets/images/products/5.webp', import.meta.url).href,
        width: '700',
        height: '550',
        alt: 'product image',
      },
    ],
  },
]
