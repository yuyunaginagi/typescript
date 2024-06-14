// インターフェイスを定義
interface Product{
  genre: string,
  name:  string,
  price: number
}

class Store{
 display_food = (product: Product): void => {
   console.log(product.name)
 }
 display_price = (product: Product): void => {
   console.log(product.name)
 }
}

const product: Product = {
 genre: "食べ物",
 name: "肉まん",
 price: 170
}

const store = new Store()
store.display_food(product)
store.display_price(product)