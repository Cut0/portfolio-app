<template lang="pug">
  div
    product-card.card(
      :productIcon="require('@/assets/icons/profileIcon.svg')"
      title="Career"
      content="ハッカソンで作成したテレワーク中の休憩促進アプリです。"
    )
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import ComingSoonCard from '@/components/cards/ComingSoonCard.vue'
import ProductCard from '@/components/cards/ProductCard.vue'
export default defineComponent({
  components: { ComingSoonCard, ProductCard }
})
</script>
<style scoped>
.card {
  margin: 32px 24px;
}
@media screen and (max-width: 600px) {
  .card {
    margin: 32px 8px;
  }
}
</style>
