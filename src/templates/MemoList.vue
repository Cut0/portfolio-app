<template lang="pug">
.list-wrapper
  v-list(
    color="#2C2738"
    v-if="items.length>0"
    )
    v-list-group(
      color="white"
      v-for="item in items"
      no-action
    )
      template(v-slot:activator)
        v-list-item-avatar
          img(:src="require('@/assets/icons/profileIcon.svg')")
        v-list-item-content
          v-list-item-title(v-text="item.title")
          v-list-item-subtitle {{item.startTime}} 〜 {{item.endTime}}
      v-list-item
        v-list-item-content
          span.content {{item.content.replaceAll('\\n', '\n')}}
          v-list-item-subtitle {{item.startTime}} 〜 {{item.endTime}}
  span.content(v-else) No Data
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: { items: { type: Array } }
})
</script>

<style scoped>
.list-wrapper {
  border-radius: 19px !important;
  background: #2c2738 !important;
  box-shadow: inset 9px 9px 18px #252130, inset -9px -9px 18px #332d40 !important;
  padding: 16px !important;
}
.v-list {
  border-radius: 19px !important;
}
.v-list-item {
  padding-left: 16px !important;
}
.content {
  white-space: pre-line;
  margin: 8px 0px;
  min-width: 136px;
  position: relative;
}
</style>
