<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" ref="loginForm" :model="loginForm"
             :rules="loginRules" label-position="left">
      <div class="title-container">
        <h3 class="title">系统登录</h3>
        <!--<lang-select class="set-language"></lang-select>-->
      </div>
      <el-form-item prop="username" class="form-item">
       <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <input class="el-input" name="username" type="text" v-model="loginForm.username" autoComplete="on"
                  placeholder="username"/>
      </el-form-item>
      <el-form-item prop="password" class="form-item">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <input class="el-input" name="password" :type="passwordType" @keyup.enter.native="handleLogin"
                  v-model="loginForm.password" autoComplete="on" placeholder="password"/>
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-button type="primary" :loading="loading" style="width:100%"
                 @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin13724182712',
        password: '13724182712'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$router.push({ path: '/dashboard' })
      //     this.$store.dispatch('LoginByUsername', this.LoginForm).then(res => {
      //       // 如果输入正确并返回正确
      //       console.log('dispatch LoginByUsername execute')
      //       this.loading = false
      //       this.$router.push({ path: '/dashboard' })
      //     }).catch(() => {
      //       this.loading = false
      //     })
         } else {
           console.log('err submit!')
           return false
         }
       })
    },
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  $background-color:#383856;
  $font-color:#d6d6de;
  $dark_gray:#889aa4;
  $form-color:#30304d;

  .login-container{
    background-color:$background-color;
    height:80vh;
    overflow: hidden;
    color:$font-color;
    font-size:20px;
    padding-top:20vh;
    text-align:center;
    .login-form{
      width:500px;
      margin:0 auto;
    }
  }
  .form-item{
    background-color: $form-color;
    border: 1px solid #8787b4;
    border-radius: 5px;
  }
  .svg-container {
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
    padding: 8px;
    font-size: 24px;
  }
  .el-input {
    width: 85%;
    background-color: #30304d;
    border: none;
    color: #889aa4;
    font-size: 16px;
    padding-left: 5px;
  }
.title-container{
  margin-bottom: 30px;
}
.show-pwd{
  position: absolute;
  right: 20px;
  font-size: 20px;
  top: 28px;
  margin-top: -20px;
}
</style>
