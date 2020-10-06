import Products from '@/db/products'
export default class ProductModel {
  public async get(id: string | number) {
    return new Promise(resolve => {
      const product = Products.find(el => el.id === id)
      resolve({ data: product })
    })
  }
  public async getAll() {
    return new Promise(resolve => {
      resolve({ data: Products })
    })
  }
}
