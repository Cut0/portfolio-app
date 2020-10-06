import { SetupContext, reactive, toRefs } from '@vue/composition-api'
import { Memo } from '@/types'
import MemoModel from '@/models/local/MemoModel'

export default ({ root }: SetupContext) => {
  const state = reactive({
    memosNotStarted: [] as Memo[],
    memosInProgress: [] as Memo[],
    memosComplated: [] as Memo[],
    loading: false
  })
  async function getAll() {
    if (state.loading) return
    state.loading = true
    return new MemoModel()
      .getAll()
      .then((res: any) => {
        res.data.map((el: any) => {
          const now = new Date().getTime()
          if (el.startTime > now) state.memosNotStarted.push(el)
          else if (el.endTime < now) state.memosComplated.push(el)
          else state.memosInProgress.push(el)
        })
      })
      .finally(() => {
        state.loading = false
      })
  }

  async function getNotStarted(params: {
    limit: number
    offset: number
    time: Date
  }) {
    if (state.loading) return
    state.loading = true
    return new MemoModel()
      .getNotStarted(params)
      .then((res: any) => {
        state.memosNotStarted = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }

  async function getInProgress(params: {
    limit: number
    offset: number
    time: Date
  }) {
    if (state.loading) return
    state.loading = true
    return new MemoModel()
      .getInProgress(params)
      .then((res: any) => {
        state.memosInProgress = res.data
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
        state.memosComplated = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }

  return {
    ...toRefs(state),
    // get,
    getAll,
    getNotStarted,
    getInProgress,
    getComplated
  }
}
