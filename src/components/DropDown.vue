<!--  -->
<template>
  <div class="dropdown" ref="dropDownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleMenu">{{ title }}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-show="isShowMenu">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'dropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isShowMenu = ref(false)
    const toggleMenu = () => {
      isShowMenu.value = !isShowMenu.value
    }
    const dropDownRef = ref<null | HTMLElement>(null)
    const isOutSide = useClickOutside(dropDownRef)
    watch(isOutSide, () => {
      if (isShowMenu.value && isOutSide.value) {
        isShowMenu.value = false
      }
    })
    return { toggleMenu, isShowMenu, dropDownRef }
  }
})
</script>
<style scoped>
</style>
