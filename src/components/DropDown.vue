<!--  -->
<template>
  <div class="dropdown">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleMenu">{{ title }}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-show="isShowMenu">
      <li class="dropdown-item"><a href="#">新建文章</a></li>
      <li class="dropdown-item"><a href="#">编辑资料</a></li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
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
    return { toggleMenu, isShowMenu }
  }
})
</script>
<style scoped>
</style>
