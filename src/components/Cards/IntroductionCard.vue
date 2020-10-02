<template lang="pug">
  v-card(color="#2C2738" shaped)
    .wrapper
      h2.title {{title}}
      .main-container
        p.content  {{content}}
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    title: { type: String, default: 'TITLE', required: true },
    content: { type: String, default: 'CONTENT', required: true }
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
  margin: 16px 64px 16px 24px;
  min-width: 136px;
  position: relative;
}
.wrapper {
  display: flex;
  align-items: center;
  padding: 12px 0px;
}
.content {
  @include input;
  margin: 4px 0px 4px 16px;
  white-space: pre-line;
}
@media screen and (max-width: 600px) {
  .main-container {
    margin: 16px 0px 0px 16px;
  }
  .wrapper {
    display: block;
    align-items: center;
  }
  .content {
    font-size: 14px;
  }
}
@media screen and (min-width: 600px) {
  .title::before {
    content: '';
    position: absolute;
    top: 0;
    right: -24px;
    bottom: 0;
    margin: auto 0;
    width: 4px;
    height: 200%;
    border-radius: 3px;
    box-shadow: 2px 2px 2px #403952 inset, -2px -2px 2px #18151e inset;
  }
}
</style>
