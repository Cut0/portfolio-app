import { SetupContext, reactive, toRefs } from '@vue/composition-api'
import { Memo } from '@/types'
import MemoModel from '@/models/local/MemoModel'
import dayjs from 'dayjs'

export default ({ root }: SetupContext) => {
  const state = reactive({
    memos: { Yet: [], Now: [], Complated: [] } as {
      Yet: Memo[]
      Now: Memo[]
      Complated: Memo[]
    },
    loading: false
  })
  async function getAll() {
    if (state.loading) return
    state.loading = true
    return new MemoModel()
      .getAll()
      .then((res: any) => {
        res.data.map((el: any) => {
          const memo = {
            title: el.title,
            content: el.content,
            startTime: dayjs(el.startTime).format('YYYY/M/D HH:mm'),
            endTime: dayjs(el.endTime).format('YYYY/M/D HH:mm')
          }
          const now = new Date().getTime()
          if (el.startTime > now) state.memos.Yet.push(memo)
          else if (el.endTime < now) state.memos.Complated.push(memo)
          else state.memos.Now.push(memo)
        })
      })
      .finally(() => {
        state.loading = false
      })
  }

  async function getYet(params: { limit: number; offset: number; time: Date }) {
    if (state.loading) return
    state.loading = true
    return new MemoModel()
      .getYet(params)
      .then((res: any) => {
        state.memos.Yet = res.data.map((el: any) => {
          el.startTime = dayjs(el.startTime).format('YYYY/M/D HH:mm')
          el.endTime = dayjs(el.endTime).format('YYYY/M/D HH:mm')
        })
      })
      .finally(() => {
        state.loading = false
      })
  }

  async function getNow(params: { limit: number; offset: number; time: Date }) {
    if (state.loading) return
    state.loading = true
    return new MemoModel()
      .getNow(params)
      .then((res: any) => {
        state.memos.Now = res.data.map((el: any) => {
          el.startTime = dayjs(el.startTime).format('YYYY/M/D HH:mm')
          el.endTime = dayjs(el.endTime).format('YYYY/M/D HH:mm')
        })
      })
      .finally(() => {
        state.loading = false
      })
  }

  async function getComplated(params: {
    limit: number
    offset: number
    time: Date
  }) {
    if (state.loading) return
    state.loading = true
    return new MemoModel()
      .getComplated(params)
      .then((res: any) => {
        state.memos.Complated = res.data.map((el: any) => {
          el.startTime = dayjs(el.startTime).format('YYYY/M/D HH:mm')
          el.endTime = dayjs(el.endTime).format('YYYY/M/D HH:mm')
        })
      })
      .finally(() => {
        state.loading = false
      })
  }

  return {
    ...toRefs(state),
    // get,
    getAll,
    getYet,
    getNow,
    getComplated
  }
}
