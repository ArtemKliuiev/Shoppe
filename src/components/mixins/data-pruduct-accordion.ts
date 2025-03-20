export interface ProductAccordionTitle {
  text: string
  name: string
  count?: number
}

export const dataPruductAccordion: Record<string, ProductAccordionTitle> = {
  first: {
    text: 'Description',
    name: 'first',
  },

  second: {
    text: 'Additional information',
    name: 'second',
  },

  third: {
    text: 'Reviews',
    name: 'third',
    count: 2,
  },
}
