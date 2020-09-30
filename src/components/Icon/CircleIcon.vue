<template lang="pug">
  span.img-wrapper
    img(src="https://picsum.photos/200/300")
</template>
<style lang="scss" scoped>
.img-wrapper {
  width: 130px;
  height: 130px;
  position: relative;
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
  border-radius: 50%;
  background-color: grey;
}
@media screen and (max-width: 600px) {
  .img-wrapper {
    width: 100px;
    height: 100px;
  }
  .img-wrapper > img {
    width: 100px;
    height: 100px;
  }
}
</style>
