interface DataImage {
  src: string
  srcset: string
  width: string
  height: string
}

export interface DataSlide {
  image: DataImage
  title: string
  price: string
  link: string
}

export const dataMainSlider: Array<DataSlide> = [
  {
    image: {
      src: new URL('@/assets/images/main-slider/1.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/main-slider/1.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
    title: 'Gold big hoops',
    price: '68,00',
    link: '/404',
  },
  {
    image: {
      src: new URL('@/assets/images/main-slider/2.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/main-slider/2.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
    title: 'Silver small hoops',
    price: '45,00',
    link: '/404',
  },
  {
    image: {
      src: new URL('@/assets/images/main-slider/3.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/main-slider/3.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
    title: 'Platinum studs',
    price: '120,00',
    link: '/404',
  },
  {
    image: {
      src: new URL('@/assets/images/main-slider/4.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/main-slider/4.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
    title: 'Rose gold earrings',
    price: '80,00',
    link: '/404',
  },
  {
    image: {
      src: new URL('@/assets/images/main-slider/5.jpg', import.meta.url).href,
      srcset: new URL('@/assets/images/main-slider/5.webp', import.meta.url).href,
      width: '850',
      height: '550',
    },
    title: 'Diamond drop earrings',
    price: '250,00',
    link: '/404',
  },
]
