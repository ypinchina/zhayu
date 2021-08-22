<!--  -->
<template>
  <div class="container">
    <global-header :user="userObj"></global-header>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">{{ emailRef.labelName }}</label>
        <validate-input :rules="emailValidateRule" v-model="modelValue" type="text" placeholder="请输入邮箱地址"></validate-input>
        {{ modelValue }}
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <validate-input :rules="passwordRules" type="password" placeholder="请输入密码"></validate-input>
      </div>
    </form>
  </div>
</template>

<script lang='ts'>
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { NavProps } from './components/globalHeader.vue'
import validateInput, { rulesProps } from './components/validateInput.vue'
import { defineComponent, reactive, ref } from 'vue'
const userTestData: NavProps = {
  isLogin: true,
  id: 5,
  name: 'yip'
}
export default defineComponent({
  components: {
    GlobalHeader, validateInput
  },
  setup () {
    const modelValue = ref('yip')
    const emailValidateRule: rulesProps = [
      { type: 'required', message: '邮箱信息不能为空' },
      { type: 'email', message: '请输入正确的邮箱格式' }
    ]
    const passwordRules: rulesProps = [
      {
        type: 'required', message: '请输入密码'
      }
    ]
    const emailRef = reactive({
      labelName: 'email',
      emailVal: '',
      emailRule: ''
    })
    const emailBlur = () => {
      if (!emailRef.emailVal) {
        emailRef.emailRule = '请输入email'
      } else if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(emailRef.emailVal)) {
        emailRef.emailRule = 'email格式不符合规范'
      }
    }
    return { userObj: userTestData, emailRef, emailBlur, emailValidateRule, modelValue }
  }
})
</script>
<style scoped>
</style>
