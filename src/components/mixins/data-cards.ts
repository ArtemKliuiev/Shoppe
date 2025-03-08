import type { DataImage } from '@/components/mixins/data-main-slider'

export interface DataCards {
  title: string
  price: string
  image: DataImage
  id: number
}

export const dataCards: Array<DataCards> = [
  {
    title: 'Lira Earrings',
    price: '20,00',
    id: 1,
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Moon Necklace',
    price: '30,00',
    id: 2,
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Star Bracelet',
    price: '15,00',
    id: 3,
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Sun Ring',
    price: '25,00',
    id: 4,
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Galaxy Pendant',
    price: '35,00',
    id: 5,
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
  {
    title: 'Aurora Earrings',
    price: '22,00',
    id: 6,
    image: {
      src: new URL('@/assets/images/products/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/products/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
  },
]
