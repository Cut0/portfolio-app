import * as firebase from 'firebase/app'
import 'firebase/firestore'

export default class MemoModel {
  db: firebase.firestore.Firestore
  constructor() {
    this.db = firebase.firestore()
  }

  public async getAll() {
    const memos: firebase.firestore.DocumentData = []
    await this.db
      .collection('memos')
      .get()
      .then(el => {
        el.forEach(doc => {
          const memo = doc.data()
          memo.startTime = memo.startTime.toDate()
          memo.endTime = memo.endTime.toDate()
          memos.push(memo)
        })
      })
    return new Promise(resolve => {
      resolve({ data: memos })
    })
  }
  public async getNotStarted({
    limit = 20,
    offset = 0,
    time = new Date()
  }: {
    limit: number
    offset: number
    time: Date
  }) {
    const memos: firebase.firestore.DocumentData = []
    await this.db
      .collection('memos')
      .where('startTime', '>', time)
      .startAt(offset)
      .limit(limit)
      .get()
      .then(el => {
        el.forEach(doc => {
          const memo = doc.data()
          memo.startTime = memo.startTime.toDate()
          memo.endTime = memo.endTime.toDate()
          memos.push(memo)
        })
      })
    return new Promise(resolve => {
      resolve({ data: memos })
    })
  }

  public async getInProgress({
    limit = 20,
    offset = 0,
    time = new Date()
  }: {
    limit: number
    offset: number
    time: Date
  }) {
    const memos: firebase.firestore.DocumentData = []
    await this.db
      .collection('memos')
      .where('startTime', '<=', time)
      .where('endTime', '>=', time)
      .startAt(offset)
      .limit(limit)
      .get()
      .then(el => {
        el.forEach(doc => {
          const memo = doc.data()
          memo.startTime = memo.startTime.toDate()
          memo.endTime = memo.endTime.toDate()
          memos.push(memo)
        })
      })
    return new Promise(resolve => {
      resolve({ data: memos })
    })
  }

  public async getComplated({
    limit = 20,
    offset = 0,
    time = new Date()
  }: {
    limit: number
    offset: number
    time: Date
  }) {
    const memos: firebase.firestore.DocumentData = []
    await this.db
      .collection('memos')
      .where('endTime', '<', time)
      .startAt(offset)
      .limit(limit)
      .get()
      .then(el => {
        el.forEach(doc => {
          const memo = doc.data()
          memo.startTime = memo.startTime.toDate()
          memo.endTime = memo.endTime.toDate()
          memos.push(memo)
        })
      })
    return new Promise(resolve => {
      memos.startTIme = resolve({ data: memos })
    })
  }
}
