import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {
  mdiAccount,
  mdiApplicationExport,
  mdiNewspaper,
  mdiStickerOutline
} from '@mdi/js'
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      profile: mdiAccount,
      production: mdiApplicationExport,
      article: mdiNewspaper,
      memo: mdiStickerOutline
    }
  },
  theme: { dark: true }
})
