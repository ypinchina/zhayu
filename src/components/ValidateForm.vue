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
type ValidateForm = () => boolean | undefined
export default defineComponent({
  emits: ['on-formSubmit'],
  setup (prop, context) {
    let resultArr: ValidateForm[] = []
    const submitForm = () => {
      console.log(resultArr)
      const result = resultArr.map(result => result).every(func => func)
      context.emit('on-formSubmit', result)
    }
    const callback = (func: ValidateForm) => {
      resultArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      resultArr = []
    })
    return { submitForm }
  }

})
</script>
<style scoped>
</style>
