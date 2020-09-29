import Productions from '@/db/productions'
export default class ProductionModel {
  public async get(id: string | number) {
    return new Promise(resolve => {
      const production = Productions.find(el => el.id === id)
      resolve({ data: production })
    })
  }
  public async getAll() {
    return new Promise(resolve => {
      resolve({ data: Productions })
    })
  }
}
