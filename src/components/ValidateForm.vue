<!--  -->
<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button class="btn btn-primary" type="submit">提 交</button>
      </slot>
    </div>
  </form>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
export default defineComponent({
  emits: ['on-formSubmit'],
  setup (prop, context) {
    const submitForm = () => {
      context.emit('on-formSubmit', true)
    }
    const callback = (test: any) => {
      console.log(test)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })
    return { submitForm }
  }

})
</script>
<style scoped>
</style>
