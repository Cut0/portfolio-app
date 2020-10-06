import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {
  mdiAccount,
  mdiApplicationExport,
  mdiNewspaper,
  mdiStickerOutline,
  mdiHomeFloor0
} from '@mdi/js'
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      profile: mdiAccount,
      product: mdiApplicationExport,
      article: mdiNewspaper,
      memo: mdiStickerOutline,
      zero: mdiHomeFloor0
    }
  },
  theme: { dark: true }
})
