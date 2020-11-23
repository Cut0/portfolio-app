<template lang="pug">
  v-card(color="#2C2738" shaped)
    .wrapper
      div.img-wrapper
        img(:src="productIcon" alt="アイコンです")
      .main-container
        p.content-title {{title}}
        p.content  {{content}}
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    productIcon: { type: String, default: 'NAME', required: true },
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
  margin: 8px 64px 8px 24px;
  min-width: 136px;
  position: relative;
}
.wrapper {
  display: flex;
  align-items: top;
  justify-content: flex-end;
  padding: 12px 0px;
  margin: 12px 24px;
}
.content-title {
  @include subhead;
  margin: 4px 0px 4px 16px;
  color: #f68c4e;
}
.content {
  @include input;
  margin: 4px 0px 4px 16px;
  white-space: pre-line;
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
.main-container {
  flex: 1;
}
.img-wrapper {
  width: 130px;
  height: 130px;
  position: relative;
  margin: 0px 12px 0px 0px;
}
.img-wrapper > img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  height: 130px;
  object-fit: cover;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  border-radius: 10%;
  background-color: white;
  object-fit: contain;
}
@media screen and (max-width: 600px) {
  .wrapper {
    padding: 12px 0px;
    margin: 6px 0px;
  }
  .img-wrapper {
    width: 100px;
    height: 100px;
  }
  .img-wrapper > img {
    width: 100px;
    height: 100px;
  }
  .content-title {
    margin: 4px 0px 4px 8px;
  }
  .content {
    margin: 4px 0px 4px 8px;
  }
}
</style>
