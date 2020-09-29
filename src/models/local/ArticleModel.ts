import Articles from '@/db/articles'
export default class ProductionModel {
  /*
  public async get(id: string | number) {
    return new Promise(resolve => {
      const article = Articles.find(el => el.id === id)
      resolve({ data: article })
    })
  }
  */
  public async getAll() {
    return new Promise(resolve => {
      resolve({ data: Articles })
    })
  }
}
