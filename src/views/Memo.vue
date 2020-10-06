<template lang="pug">
  coming-soon-card
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ComingSoonCard from '@/components/cards/ComingSoonCard.vue'
import MemoComponent from '@/modules/local/memo'
export default defineComponent({
  components: { ComingSoonCard },
  setup(_, ctx) {
    const memoComponent = MemoComponent(ctx)
    memoComponent.getAll()
    return {
      ...memoComponent
    }
  }
})
</script>
