export interface DataBasket {
  id: number
  count: string
}

interface BasketStorage {
  on: (callback: (value: DataBasket[]) => void) => void
  set: (value: DataBasket[]) => void
  get: () => DataBasket[]
  del: (id: number) => void
  add: (value: DataBasket) => void
  change: (id: number, newValue: string) => void
  remove: (id: number) => void
}

let singelFunction: BasketStorage | null = null

export function useBasketStorage() {
  if (!singelFunction) singelFunction = basketStorage()

  return singelFunction
}

function basketStorage(): BasketStorage {
  const callbacks: ((value: DataBasket[]) => void)[] = []

  function on(callback: (value: DataBasket[]) => void) {
    callbacks.push(callback)
  }

  function set(value: DataBasket[]): void {
    localStorage.setItem('basket', JSON.stringify(value))

    callbacks.forEach((callback) => callback(value))
  }

  function getBasketData(): DataBasket[] {
    const getValue = localStorage.getItem('basket')

    return JSON.parse(getValue ? getValue : '[]')
  }

  function del(id: number): void {
    const oldArray = getBasketData()

    const newArray = oldArray.filter((obj) => obj.id != id)

    set(newArray)
  }

  function add(data: DataBasket): void {
    const oldArray = getBasketData()

    const findCard = oldArray.find((obj) => obj.id == data.id)

    if (!findCard) oldArray.push(data)

    set(oldArray)
  }

  function change(id: number, newValue: string): void {
    const oldArray = getBasketData()

    const findCard = oldArray.find((obj) => obj.id == id)

    if (findCard) findCard.count = newValue

    if (oldArray) set(oldArray)
  }

  function remove(id: number): void {
    const oldArray = getBasketData()

    const findCard = oldArray.find((obj) => obj.id == id)

    if (findCard) String(+findCard.count - 1)
    else return

    if (+findCard.count < 1) {
      del(id)

      return
    }

    set(oldArray)
  }

  return {
    add,
    change,
    del,
    get: getBasketData,
    on,
    set,
    remove,
  }
}
