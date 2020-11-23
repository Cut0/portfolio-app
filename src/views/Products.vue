<template lang="pug">
  div
    template(v-for="el in products")
      product-card.card(
        :productIcon="el.image"
        :title="el.name"
        :content="el.content"
        :url="el.link"
      )
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import ComingSoonCard from '@/components/cards/ComingSoonCard.vue'
import ProductCard from '@/components/cards/ProductCard.vue'
import ProductComponent from '@/modules/local/product'
export default defineComponent({
  components: { ComingSoonCard, ProductCard },
  setup(_, ctx) {
    const productComponent = ProductComponent(ctx)
    productComponent.getAll()
    return {
      ...productComponent
    }
  }
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
