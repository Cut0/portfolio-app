<template lang="pug">
  div
    name-card.card(
      :name="profile.name"
      :job="profile.job"
    )
    introduction-card.card(
      title="Introduction"
      :content="profile.introduction"
    )
    career-card.card(
      title="Career"
      :careers="careers"
    )
</template>
<script>
import { reactive, defineComponent } from '@vue/composition-api'
import NameCard from '@/components/Cards/NameCard.vue'
import IntroductionCard from '@/components/Cards/IntroductionCard.vue'
import CareerCard from '@/components/Cards/CareerCard.vue'
import ProfileComponent from '@/modules/local/profile'
export default defineComponent({
  components: { NameCard, CareerCard, IntroductionCard },
  setup(_, ctx) {
    const profileComponent = ProfileComponent(ctx)
    profileComponent.get()
    return {
      ...profileComponent
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
