<!--  -->
<template>
  <div class="container">
    <global-header :user="userObj"></global-header>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">{{ emailRef.labelName }}</label>
        <input type="email" class="form-control" v-model="emailRef.emailVal" @blur="emailBlur" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">{{ emailRef.emailRule }}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang='ts'>
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { NavProps } from './components/globalHeader.vue'
import { defineComponent, reactive } from 'vue'
const userTestData: NavProps = {
  isLogin: true,
  id: 5,
  name: 'yip'
}
export default defineComponent({
  components: {
    GlobalHeader
  },
  setup () {
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
    return { userObj: userTestData, emailRef, emailBlur }
  }
})
</script>
<style scoped>
</style>
