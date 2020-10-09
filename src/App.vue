<template lang="pug">
  v-app(color="#49337D")
    v-navigation-drawer(
      v-if="!$vuetify.breakpoint.xs"
      color="#49337D" app fixed permanent touchless :expand-on-hover="$vuetify.breakpoint.xs||$vuetify.breakpoint.sm")
      v-list.py-0
        v-list-item(@click="navigateTo('/')")
          v-list-item-icon
            v-icon  $zero
            v-list-item-title.title 's Portfolio
        v-divider
        v-list-item-group(aria-label="ページ遷移用")
          v-list-item(@click="navigateTo('/')" role="option")
            v-list-item-icon
              v-icon  $profile
            v-list-item-content
              v-list-item-title Profile
          v-list-item(@click="navigateTo('/Products')" role="option")
            v-list-item-icon
              v-icon  $product
            v-list-item-content
              v-list-item-title Producs
          v-list-item(@click="navigateTo('/Articles')" role="option")
            v-list-item-icon
              v-icon  $article
            v-list-item-content
              v-list-item-title Article
          v-list-item(@click="navigateTo('/Memos')" role="option")
            v-list-item-icon
              v-icon  $memo
            v-list-item-content
              v-list-item-title Memos
    v-app-bar(color="#49337D" app fixed collapse-on-scroll)
      template(v-if="$route.name!=='検索'")
        v-app-bar-nav-icon(aria-label="ページアイコン")
          v-icon(v-if="$route.name==='Profile'") $profile
          v-icon(v-if="$route.name==='Products'") $product
          v-icon(v-if="$route.name==='Articles'") $article
          v-icon(v-if="$route.name==='Memos'") $memo
        v-toolbar-title {{this.$route.name}}
        v-spacer
      template(
        v-if="($route.name==='Memos')"
        v-slot:extension)
        v-tabs(
          color="white"
          v-model="state.tabs.memo"
          fixed-tabs centered)
          v-tab(key="0") Yet
          v-tab(key="1") Now
          v-tab(key="2") Complated
    v-main
      v-container(color="#49337D")
        router-view(:tabs="state.tabs")
    v-bottom-navigation(
      v-if="$vuetify.breakpoint.xs"
      background-color="#49337D" app fixed grow)
      v-btn(to="/" aria-label="プロフィールページ")
        v-icon $profile
      v-btn(to="/Products" aria-label="プロダクションページ")
        v-icon $product
      v-btn(to="/Articles" aria-label="アーティクルページ")
        v-icon $article
      v-btn(to="/Memos" aria-label="メモページ")
        v-icon $memo
</template>
<script lang="ts">
import { reactive, SetupContext, defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup(_, context: SetupContext) {
    const state = reactive({ tabs: { memo: null } })
    return {
      state,
      navigateTo(path: string) {
        if (path !== context.root.$route.path) context.root.$router.push(path)
      }
    }
  }
})
</script>
<style lang="sass">
.v-application
  background: #2c2738 !important
.v-window
  border-radius: 19px !important
</style>
