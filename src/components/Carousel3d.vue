<template lang="pug">
  carousel-3d(
    :controls-visible="true"
    :autoplay="true"
    :autoplay-timeout="2500"
    :display="display"
    :width="state.imgSize"
    :height="state.imgSize"
    :space="state.spaceSize"
    :on-main-slide-click="centerClick"
    @before-slide-change="updateIndex"
  )
    slide(v-for="(slide, i) in state.images" :index="i")
      circle-icon(:icon="slide")
</template>

<script lang="ts">
import {
  reactive,
  onMounted,
  onBeforeUnmount,
  computed,
  defineComponent
} from '@vue/composition-api'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import CircleIcon from '@/components/CircleIcon.vue'
type Props = {
  keyword: string
  list: any[]
}
export default defineComponent({
  components: {
    Carousel3d,
    Slide,
    CircleIcon
  },
  props: {
    display: {
      type: Number,
      default: 5
    },
    keyword: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  setup(props: Props, { emit }) {
    const state = reactive({
      width: window.innerWidth,
      height: window.innerHeight,
      imgSize: 150,
      spaceSize: 140,
      index: 0,
      images: computed(() => {
        const res = [] as any[]
        props.list.map(el => {
          res.push(el[props.keyword])
        })
        return res
      })
    })

    function handleResize() {
      state.width = window.innerWidth
      state.height = window.innerHeight
      if (state.width > 600) {
        state.imgSize = 150
        state.spaceSize = 140
      } else {
        state.imgSize = 100
        state.spaceSize = 90
      }
    }
    onMounted(() => {
      window.addEventListener('resize', handleResize)
      handleResize()
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })
    return {
      state,
      updateIndex(index: number) {
        state.index = index
      },
      centerClick() {
        emit('centerClick', state.index)
      }
    }
  }
})
</script>

<style>
.carousel-3d-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
}
.carousel-3d-controls {
  display: none;
}
@media screen and (max-width: 600px) {
  .carousel-3d-slide {
    width: 100px;
    height: 100px;
  }
}
</style>
