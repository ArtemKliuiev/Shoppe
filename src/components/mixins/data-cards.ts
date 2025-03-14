import type { DataImage } from '@/components/mixins/data-main-slider'

export interface DataCards {
  title: string
  price: string
  image: DataImage
  id: number
  type: string
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
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Moon Necklace',
    price: '30,13',
    id: 2,
    type: 'Black / Medium',
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Star Bracelet',
    price: '15,34',
    id: 3,
    type: 'Black / Medium',
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Sun Ring',
    price: '25,87',
    id: 4,
    type: 'Black / Medium',
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Galaxy Pendant',
    price: '35,15',
    id: 5,
    type: 'Black / Medium',
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Aurora Earrings',
    price: '22,20',
    id: 6,
    type: 'Black / Medium',
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
]
