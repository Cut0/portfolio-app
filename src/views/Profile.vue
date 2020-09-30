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
    image-modal(
      :isOpened="state.showSkillModal"
      :title="skill.name"
      :content="skill.content"
      :image="skill.image"
      @close="state.showSkillModal=false"
    )
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import NameCard from '@/components/cards/NameCard.vue'
import IntroductionCard from '@/components/cards/IntroductionCard.vue'
import CareerCard from '@/components/cards/CareerCard.vue'
import CarouselCard from '@/components/cards/CarouselCard.vue'
import ImageModal from '@/components/modals/ImageModal.vue'
import ProfileComponent from '@/modules/local/profile'

export default defineComponent({
  components: {
    NameCard,
    CareerCard,
    IntroductionCard,
    CarouselCard,
    ImageModal
  },
  setup(_, ctx) {
    const profileComponent = ProfileComponent(ctx)
    profileComponent.get()
    const state = reactive({ showSkillModal: false })
    return {
      state,
      ...profileComponent,
      openSkill(pos: number) {
        profileComponent.setSkill(pos)
        state.showSkillModal = true
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
