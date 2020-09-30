<template lang="pug">
  div
    name-card.card(
      :name="profile.name"
      :job="profile.job"
      :profileIcon="profile.image"
      v-if="!loading"
    )
    introduction-card.card(
      title="Introduction"
      :content="profile.introduction"
      v-if="!loading"
    )
    career-card.card(
      title="Career"
      :careers="careers"
      v-if="!loading"
    )
    carousel-card.card(
      title="Skills"
      keyword="image"
      :list="skills"
      @itemClick="openSkill"
      v-if="!loading"
    )
    carousel-card.card(
      title="SNS"
      :display="3"
      keyword="image"
      :list="sns"
      @itemClick="jumpLink"
      v-if="!loading"
    )
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NameCard from '@/components/cards/NameCard.vue'
import IntroductionCard from '@/components/cards/IntroductionCard.vue'
import CareerCard from '@/components/cards/CareerCard.vue'
import CarouselCard from '@/components/cards/CarouselCard.vue'
import ProfileComponent from '@/modules/local/profile'

export default defineComponent({
  components: { NameCard, CareerCard, IntroductionCard, CarouselCard },
  setup(_, ctx) {
    const profileComponent = ProfileComponent(ctx)
    profileComponent.get()
    return {
      ...profileComponent,
      openSkill(pos: number) {
        profileComponent.setSkill(pos)
      },
      jumpLink(pos: number) {
        profileComponent.navigateToSns(pos)
      }
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
