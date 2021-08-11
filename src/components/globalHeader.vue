<!-- 组件说明 -->
<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">炸鱼专栏</a>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface NavProps {
  isLogin: boolean,
  name?: string,
  id?: number
}
export default defineComponent({
  props: {
    user: {
      type: Object as PropType<NavProps>,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
