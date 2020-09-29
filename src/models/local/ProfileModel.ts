import Profile from '@/db/profile'
export default class ProfileModel {
  public async get() {
    return new Promise(resolve => {
      resolve({ data: Profile })
    })
  }
}
