<template lang="pug">
  v-tabs-items(v-model="tabs.memo")
    v-tab-item(key="0")
      memo-list(:items="memos.Yet")
    v-tab-item(key="1")
      memo-list(
        :items="memos.Now")
    v-tab-item(key="2")
      memo-list(
        :items="memos.Complated")
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ComingSoonCard from '@/components/cards/ComingSoonCard.vue'
import MemoComponent from '@/modules/local/memo'
import MemoList from '@/templates/MemoList.vue'
export default defineComponent({
  components: { ComingSoonCard, MemoList },
  props: {
    tabs: {
      type: Object
    }
  },
  setup(_, ctx) {
    const memoComponent = MemoComponent(ctx)
    memoComponent.getAll()
    return {
      ...memoComponent
    }
  }
})
</script>
