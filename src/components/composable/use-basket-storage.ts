export interface DataBasket {
  id: number
  count: number
}

export function useBasketStorage(){
  function set( value: DataBasket[]): void{
    localStorage.setItem('basket', JSON.stringify(value))
  }

  function get(){
    return localStorage.getItem(JSON.parse('basket'))
  }

  function del(id: number){
    const getValue = localStorage.getItem('basket')

    const oldArray: DataBasket[] = JSON.parse(getValue? getValue: '[]')

    const newArray = oldArray.filter(obj => obj.id != id)

    set(newArray)
  }

  function add(value: DataBasket) {
    const getValue = localStorage.getItem('basket')

    const oldArray: DataBasket[] = JSON.parse(getValue? getValue: '[]')

    const findCard = oldArray.find(obj => obj.id == value.id)

    if(findCard) findCard.count++

    else oldArray.push(value)

    set(oldArray)
  }

  function remove(id: number){
    const getValue = localStorage.getItem('basket')

    const oldArray: DataBasket[] = JSON.parse(getValue? getValue: '[]')

    const findCard = oldArray.find(obj => obj.id == id)

    if(findCard) findCard.count--

    else return

    if(findCard.count < 1) {
      del(id)

      return
    }

    set(oldArray)
  }

  return {
    set,
    get,
    del,
    add,
    remove
  }
}
