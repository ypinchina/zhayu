<!--  -->
<template>
  <li class="dropdown-option" :style="{'is-disabled': disabled}">
    <slot></slot>
  </li>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style scoped>
.dropdown-option.is-disabled * {
  color: #ccc;
  background-color: transparent;
  pointer-events: none;
}
</style>
