<!--  -->
<template>
  <div class="validate-input-container pb-3">
    <input type="email" class="form-control" :style="{'is-invalid': emailRef.error}" v-model="emailRef.val" @blur="inputValidate">
    <span v-if="emailRef.error" >{{ emailRef.message }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive } from 'vue'
const emailZz = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
interface rulesProp {
  type: 'required' | 'email',
  message: string
}
export type rulesProps = rulesProp[]
export default defineComponent({
  props: {
    rules: {
      type: Array as PropType<rulesProps>
    }
  },
  setup (props) {
    const emailRef = reactive({
      val: '',
      message: '',
      error: false
    })
    const inputValidate = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          emailRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (emailRef.val.trim() !== '')
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
    return { emailRef, inputValidate }
  }
})
</script>
<style scoped>
</style>
