<!-- 组件说明 -->
<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <img :src="item.avatar" alt="avatar" />
      <div>{{ item.title }}</div>
      <div>{{ item.description }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  props: {
    list: {
      type: Array as PropType <ColumnProps[]>,
      require: true
    }
  }
})
</script>

<style scoped>
</style>
