import { SetupContext, reactive, toRefs } from '@vue/composition-api'
import { Memo } from '@/types'
import MemoModel from '@/models/local/MemoModel'

export default ({ root }: SetupContext) => {
  const state = reactive({
    memo: {} as Memo,
    memos: [] as Memo[],
    loading: false
  })
  /*
  async function get(id: string | number) {
    if (state.loading) return
    state.loading = true
    return new MemoModel()
      .get(id)
      .then((res: any) => {
        state.memo = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }
  */
  async function getAll() {
    if (state.loading) return
    state.loading = true
    return new MemoModel()
      .getAll()
      .then((res: any) => {
        state.memos = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }

  return {
    ...toRefs(state),
    // get,
    getAll
  }
}
