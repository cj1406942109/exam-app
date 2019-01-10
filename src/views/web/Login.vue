<template>
  <div class="page-login">
    <div class="page-header">
      <nav><svg-icon name="user"></svg-icon>未登录</nav>
    </div>
    <div class="page-main">
      <div class="form-wrapper">
        <h3>账号登录</h3>
        <el-input @focus="isError=false" v-model="username" type="text" placeholder="请输入账号"></el-input>
        <el-input @focus="isError=false" v-model="password" type="password" placeholder="请输入密码"></el-input>
        <div class="error-info" :style="{visibility:isError?'visible':'hidden'}">
          <svg-icon name="error"></svg-icon>
          {{errorMsg}}
        </div>
        <el-button type="primary" :loading="loading" @click="handleLogin">登录</el-button>
        <!-- <option-btn type="btn-success btn-large" :disabled="loading" @click="handleLogin">
          {{loading?'登录中...':'登录'}}
        </option-btn> -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  login
} from '@/api'

export default {
  name: 'login',
  data () {
    return {
      username: '0145test_training',
      password: '0145test_training',
      isError: false,
      errorMsg: '您输入的账号或密码错误',
      loading: false
    }
  },
  methods: {
    handleLogin() {
      let username = this.username
      let password = this.password
      if (username.trim() && password.trim()) {
        this.loading = true
        login(username, password).then(data => {
          this.loading = false
          if (data) {
            this.myUtils.setItem('account', JSON.stringify(data))
            this.myUtils.pageJump('home')
          } else {
            this.isError = true
          }
        })
      } else {
        this.$message({
          message: '用户名和密码不能为空',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-login {
  background-color: #fff;
  .page-header {
    height: 50px;
    background-color: #08A7A1;
    nav {
      padding: 0 50px;
      box-sizing: border-box;
      max-width: 1200px;
      min-width: 800px;
      margin: 0 auto;
      color: #fff;
      line-height: 50px;
      text-align: right;
      .svg-icon {
        color: #CDEDEC;
        margin-right: 10px;
      }
    }
  }
  .page-main {
    max-width: 1200px;
    min-width: 600px;
    margin: 0 auto;
    height: calc(100vh - 50px);
    overflow: auto;
    .form-wrapper {
      margin: 20vh auto 0;
      width: 300px;
      padding: 30px;
      border: 1px solid #ddd;
      border-radius: 5px;
      h3 {
        margin-top: 0;
        text-align: center;
        font-weight: normal;
      }
      .el-input, button {
        margin: 10px 0;
      }
      button {
        width: 100%;
      }
      .error-info {
        color: #F57060;
        text-align: center;
      }
    }
  }
}
</style>
