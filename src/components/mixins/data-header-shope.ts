interface DataLink {
  name: string
  link: string
}

interface DataHeaderShope {
  title: string
  list: Array<DataLink>
}

export const dataBurgerMenu: Array<DataLink> = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Shop',
    link: '/shope',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Help',
    link: '/404',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'Search',
    link: '/404',
  },
]

export const dataHeaderMenu: Array<DataHeaderShope> = [
  {
    title: 'SHOP TYPES',
    list: [
      {
        name: 'Shop full width',
        link: '/shope',
      },
      {
        name: 'Shop With sidebar',
        link: '/shope',
      },
      {
        name: 'Shop category',
        link: '/shope',
      },
      {
        name: 'Shop carousel',
        link: '/shope',
      },
      {
        name: 'Masonry grid',
        link: '/shope',
      },
    ],
  },
  {
    title: 'SINGLE PRODUCT',
    list: [
      {
        name: 'Standard product',
        link: '',
      },
      {
        name: 'Variable product',
        link: '',
      },
      {
        name: 'On sale product',
        link: '',
      },
      {
        name: 'Out of stock product',
        link: '',
      },
      {
        name: 'New! Product',
        link: '',
      },
    ],
  },
  {
    title: 'SHOP PAGES',
    list: [
      {
        name: 'Cart',
        link: '',
      },
      {
        name: 'Checkout',
        link: '',
      },
      {
        name: 'My account',
        link: '',
      },
      {
        name: 'Wishlist',
        link: '',
      },
      {
        name: 'Order tracking',
        link: '',
      },
    ],
  },
]
//todo
export const dataHeaderPages = [
  {
    text: 'Blog',
    namePages: 'blog',
    link: '/blog',
  },
  {
    text: 'Our Story',
    namePages: 'story',
    link: '/story',
  },
]
