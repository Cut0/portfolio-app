<template lang="pug">
  v-dialog(v-model="opened" width="400")
    v-card.mx-auto
      v-img(
        :src="image"
        alt="モーダルのヘッダー"
        class="white--text align-end"
        height="300px"
        contain
      )
      v-card-title {{ title }}
      v-card-text.text--primary
        p.content {{ content }}
      v-card-actions
        v-spacer
        v-btn(@click="opened = false" color="purple lighten-1" text) Close
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api'
export default defineComponent({
  props: {
    title: {
      required: true
    },
    content: { required: true },
    image: { required: true },
    isOpened: { required: true }
  },
  setup(props, { emit }) {
    const opened = computed({
      get: () => props.isOpened,
      set: value => emit('close', value)
    })
    return {
      opened
    }
  }
})
</script>

<style lang="scss" scoped>
.v-image {
  background: white;
}
.content {
  white-space: pre-line;
}
</style>
