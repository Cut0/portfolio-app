<template lang="pug">
  v-app(color="#49337D")
    v-navigation-drawer(
      v-if="!$vuetify.breakpoint.xs"
      color="#49337D" app fixed permanent touchless :expand-on-hover="$vuetify.breakpoint.xs||$vuetify.breakpoint.sm")
      v-list.py-0
        v-list-item()
          v-list-item-avatar
            img(src="https://picsum.photos/200/300")
          v-list-item-content
            v-list-item-title Cut0
        v-divider
        v-list-item-group
          v-list-item()
            v-list-item-icon
              v-icon  $profile
            v-list-item-content
              v-list-item-title Profile
          v-list-item()
            v-list-item-icon
              v-icon  $production
            v-list-item-content
              v-list-item-title Productions
          v-list-item()
            v-list-item-icon
              v-icon  $article
            v-list-item-content
              v-list-item-title Article
          v-list-item()
            v-list-item-icon
              v-icon  $memo
            v-list-item-content
              v-list-item-title Memos
    v-app-bar(color="#49337D" app fixed)
      template(v-if="$route.name!=='検索'")
        v-app-bar-nav-icon
          v-icon(v-if="$route.name==='Profile'") $profile
          v-icon(v-if="$route.name==='Productions'") $production
          v-icon(v-if="$route.name==='Articles'") $article
          v-icon(v-if="$route.name==='Memos'") $memo
        v-toolbar-title {{this.$route.name}}
        v-spacer
    v-main
      v-container(color="#49337D")
        router-view
    v-bottom-navigation(
      v-if="$vuetify.breakpoint.xs"
      background-color="#49337D" app fixed grow)
      v-btn(to="/")
        v-icon $profile
      v-btn(to="/productions")
        v-icon $production
      v-btn(to="/articles")
        v-icon $article
      v-btn(to="/memos")
        v-icon $memo
</template>

<style lang="sass">
.v-application
  background: #2c2738 !important
</style>
