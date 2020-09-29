import Memos from '@/db/memos'
export default class MemoModel {
  /*
  public async get(id: string | number) {
    return new Promise(resolve => {
      const memo = Memos.find(el => el.id === id)
      resolve({ data: memo })
    })
  }
  */
  public async getAll() {
    return new Promise(resolve => {
      resolve({ data: Memos })
    })
  }
}
