import { SetupContext, reactive, toRefs } from '@vue/composition-api'
import { Production } from '@/types'
import ProductionModel from '@/models/local/ProductionModel'

export default ({ root }: SetupContext) => {
  const state = reactive({
    production: {} as Production,
    productions: [] as Production[],
    loading: false
  })

  async function get(id: string | number) {
    if (state.loading) return
    state.loading = true
    return new ProductionModel()
      .get(id)
      .then((res: any) => {
        state.production = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }

  async function getAll() {
    if (state.loading) return
    state.loading = true
    return new ProductionModel()
      .getAll()
      .then((res: any) => {
        state.productions = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }

  return {
    ...toRefs(state),
    get,
    getAll
  }
}
