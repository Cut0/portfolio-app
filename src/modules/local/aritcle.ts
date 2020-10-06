import { SetupContext, reactive, toRefs } from '@vue/composition-api'
import { Article } from '@/types'
import ArticleModel from '@/models/local/ArticleModel'

export default ({ root }: SetupContext) => {
  const state = reactive({
    article: {} as Article,
    articles: [] as Article[],
    loading: false
  })
  /*
  async function get(id: string | number) {
    if (state.loading) return
    state.loading = true
    return new ArticleModel()
      .get(id)
      .then((res: any) => {
        state.production = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }
  */
  async function getAll() {
    if (state.loading) return
    state.loading = true
    return new ArticleModel()
      .getAll()
      .then((res: any) => {
        state.articles = res.data
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
