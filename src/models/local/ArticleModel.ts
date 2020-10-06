export default class ArticleModel {
  /*
  public async get(id: string | number) {
    return new Promise(resolve => {
      const article = Articles.find(el => el.id === id)
      resolve({ data: article })
    })
  }
  */
  public async getAll() {
    const Articles = await import('@/db/articles')
    return new Promise(resolve => {
      resolve({ data: Articles })
    })
  }
}
