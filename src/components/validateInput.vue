<!--  -->
<template>
  <div class="validate-input-container pb-3">
    <input type="email" class="form-control"
    :style="{'is-invalid': emailRef.error}"
    :value="emailRef.val" @blur="inputValidate" @input="updateVal" v-bind="$attrs">
    <span v-if="emailRef.error" >{{ emailRef.message }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailZz = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
interface rulesProp {
  type: 'required' | 'email',
  message: string
}
export type rulesProps = rulesProp[]
export default defineComponent({
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<rulesProps>
    },
    modelValue: String
  },
  setup (props, context) {
    // $attrs 在context中取到
    const emailRef = reactive({
      val: props.modelValue || '',
      message: '',
      error: false
    })
    const updateVal = (e: KeyboardEvent) => {
      const inputVal = (e.target as HTMLInputElement).value
      emailRef.val = inputVal
      context.emit('update:modelValue', inputVal)
    }
    const inputValidate = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          console.log(rule)
          let passed = true
          emailRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (emailRef.val.trim() !== '')
              console.log(passed)
              break
            case 'email':
              passed = emailZz.test(emailRef.val)
              break
            default:
              break
          }
          return passed
        })
        emailRef.error = !allPassed
      }
    }
    onMounted(() => {
      emitter.emit('form-item-created', inputValidate)
    })
    return { emailRef, inputValidate, updateVal }
  }
})
</script>
<style scoped>
</style>
