<template lang="pug">
  div
    loading-circle(v-if="loading")
    template(v-else)
      name-card.card(
        :name="profile.name"
        :job="profile.job"
        :profileIcon="profile.image"
      )
      introduction-card.card(
        title="Introduction"
        :content="profile.introduction"
      )
      career-card.card(
        title="Career"
        :careers="careers"
      )
      carousel-card.card(
        title="Skills"
        keyword="image"
        :list="skills"
        @itemClick="openSkill"
      )
      carousel-card.card(
        title="SNS"
        :display="3"
        keyword="image"
        :list="sns"
        @itemClick="jumpLink"
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
import LoadingCircle from '@/components/LoadingCircle.vue'
export default defineComponent({
  components: {
    NameCard,
    CareerCard,
    IntroductionCard,
    CarouselCard,
    ImageModal,
    LoadingCircle
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
