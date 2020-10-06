import { SetupContext, reactive, toRefs } from '@vue/composition-api'
import { Product } from '@/types'
import ProductModel from '@/models/local/ProductModel'

export default ({ root }: SetupContext) => {
  const state = reactive({
    product: {} as Product,
    products: [] as Product[],
    loading: false
  })

  async function get(id: string | number) {
    if (state.loading) return
    state.loading = true
    return new ProductModel()
      .get(id)
      .then((res: any) => {
        state.product = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }

  async function getAll() {
    if (state.loading) return
    state.loading = true
    return new ProductModel()
      .getAll()
      .then((res: any) => {
        state.products = res.data
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
