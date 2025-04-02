export interface DataPruductReviews {
  name: string
  date: Date
  rating: number
  text: string
}

export const dataPruductReviews: DataPruductReviews[] = [
  {
    name: 'Scarlet withch',
    date: new Date('6 May, 2020'),
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
  },
  {
    name: 'Scarlet withch',
    date: new Date('6 May, 2020'),
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.',
  },
]
