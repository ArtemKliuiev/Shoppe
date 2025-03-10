export interface DataBasket {
  id: number
  count: number
}

interface BasketStorage {
  on: (callback: (value: DataBasket[]) => void) => void
  set: (value: DataBasket[]) => void
  get: () => DataBasket[]
  del: (id: number) => void
  add: (value: DataBasket, notAdd: boolean) => void
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

  function get() {
    const getValue = localStorage.getItem('basket')

    return JSON.parse(getValue ? getValue : '[]')
  }

  function del(id: number): void {
    const getValue = localStorage.getItem('basket')

    const oldArray: DataBasket[] = JSON.parse(getValue ? getValue : '[]')

    const newArray = oldArray.filter((obj) => obj.id != id)

    set(newArray)
  }

  function add(value: DataBasket, notAdd: boolean = false): void {
    const getValue = localStorage.getItem('basket')

    const oldArray: DataBasket[] = JSON.parse(getValue ? getValue : '[]')

    const findCard = oldArray.find((obj) => obj.id == value.id)

    if (findCard && !notAdd) findCard.count++

    if (!findCard) oldArray.push(value)

    set(oldArray)
  }

  function remove(id: number): void {
    const getValue = localStorage.getItem('basket')

    const oldArray: DataBasket[] = JSON.parse(getValue ? getValue : '[]')

    const findCard = oldArray.find((obj) => obj.id == id)

    if (findCard) findCard.count--
    else return

    if (findCard.count < 1) {
      del(id)

      return
    }

    set(oldArray)
  }

  return {
    on,
    set,
    get,
    del,
    add,
    remove,
  }
}
