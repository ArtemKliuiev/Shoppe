interface dataProductLink {
  target?: string
  link: string
  iconId: string
}

export const dataProductLinks: dataProductLink[] = [
  {
    link: 'mailto:example@example.com',
    iconId: 'letter',
  },
  {
    target: '_blank',
    link: 'https://www.facebook.com/?locale=ru_RU',
    iconId: 'facebook',
  },
  {
    target: '_blank',
    link: 'https://www.instagram.com/',
    iconId: 'insta',
  },
  {
    target: '_blank',
    link: 'https://x.com/?lang=ru',
    iconId: 'twiter',
  },
]
