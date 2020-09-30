<template lang="pug">
  v-card(color="#2C2738" shaped)
    .wrapper
      h2.title {{title}}
      carousel3d(
        :display="display"
        :image-urls="list"
        :keyword="keyword"
        :list="list"
        @centerClick="centerClick"
      )
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Carousel3d from '@/components/Carousel3d.vue'
export default defineComponent({
  components: {
    Carousel3d
  },
  props: {
    title: {
      type: String,
      required: true
    },
    display: { type: Number, default: 5 },
    keyword: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    return {
      centerClick(index: number) {
        emit('itemClick', index)
      }
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
.title {
  @include title;
  margin: 16px 32px 16px 24px;
  min-width: 136px;
  position: relative;
}
.wrapper {
  display: flex;
  align-items: center;
  padding: 12px 0px;
}
@media screen and (max-width: 600px) {
  .wrapper {
    display: block;
    align-items: center;
  }
}
@media screen and (min-width: 600px) {
  .title::before {
    content: '';
    position: absolute;
    top: 0;
    right: -3px;
    bottom: 0;
    margin: auto 0;
    width: 4px;
    height: 400%;
    border-radius: 3px;
    box-shadow: 2px 2px 2px #403952 inset, -2px -2px 2px #18151e inset;
  }
}
</style>
