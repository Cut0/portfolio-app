<template lang="pug">
  v-tabs-items(v-model="tabs.memo")
    v-tab-item(key="0")
      loading-circle(v-if="loading")
      memo-list(
        :items="memos.Yet"
        v-else
      )
    v-tab-item(key="1")
      loading-circle(v-if="loading")
      memo-list(
        :items="memos.Now"
        v-else
      )
    v-tab-item(key="2")
      loading-circle(v-if="loading")
      memo-list(
        :items="memos.Complated"
        v-else
      )
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ComingSoonCard from '@/components/cards/ComingSoonCard.vue'
import MemoComponent from '@/modules/local/memo'
import MemoList from '@/templates/MemoList.vue'
import LoadingCircle from '@/components/LoadingCircle.vue'
export default defineComponent({
  components: { ComingSoonCard, MemoList, LoadingCircle },
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
