<template lang="pug">
  v-card(color="#2C2738" shaped)
    v-layout
      .left-container
        circle-icon(:icon="profileIcon")
      v-flex.right-container
        div
          h1.name {{name}}
          .job {{job}}
</template>

<script lang="ts">
import CircleIcon from '@/components/CircleIcon.vue'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  components: { CircleIcon },
  props: {
    name: {
      type: String,
      default: 'NAME',
      required: true
    },
    job: {
      type: String,
      default: 'JOB',
      required: true
    },
    profileIcon: {
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 19px !important;
  background: #2c2738 !important;
  box-shadow: inset 9px 9px 18px #252130, inset -9px -9px 18px #332d40 !important;
  padding: 16px !important;
}
.left-container {
  display: flex;
  align-items: center;
  margin: 16px 32px 16px 96px;
}
.right-container {
  margin: 0px 32px 0px 64px;
  display: flex;
  align-items: center;
}
.name {
  @include large-title;
}
.job {
  @include title;
  margin-top: 4px;
}
@media screen and (max-width: 600px) {
  .left-container {
    margin: 16px 16px 16px 32px;
  }
  .right-container {
    margin: 0px 24px 0px 16px;
  }
  .name {
    font-size: 24px;
  }
  .job {
    font-size: 16px;
  }
}
</style>
