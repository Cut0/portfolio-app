<template lang="pug">
  div {{profile.name}}
</template>
<script>
import { reactive, defineComponent } from '@vue/composition-api'
import ComingSoonCard from '@/components/Cards/ComingSoonCard.vue'
import ProfileComponent from '@/modules/local/profile'
export default defineComponent({
  components: { ComingSoonCard },
  setup(_, ctx) {
    const profileComponent = ProfileComponent(ctx)
    profileComponent.get()
    return {
      ...profileComponent
    }
  }
})
</script>
