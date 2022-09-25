<template>
  <div class="login-container">
    <el-form ref='loginForm' class="login-form" :model="loginForm" :rules="rules">
      <div class="title-container">
        <h3 class="title">
          <img src="@/assets/common/logo.png" alt="" width="96px" height="96px">
        </h3>
      </div>

      <!-- 账号 -->
      <el-form-item prop='loginName'>
        <span class="svg-container el-icon-user-solid" />
        <el-input
          v-model="loginForm.loginName"
          placeholder="请输入账号"
        />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          ref='password'
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
        />
        <span class="svg-container" @click="showPwd">
          <svg-icon :icon-class="passwordType==='password'?'eye':'eye-open'" />
        </span>
      </el-form-item>

      <!-- 验证码 -->
      <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>

        <el-input
          class="ell"
          placeholder="请输入验证码"
        ></el-input>

        <!-- 验证码 -->
        <div class="elr">
          <img src="" alt="">
        </div>

      </el-form-item>

      <el-button
        class="login-btn"
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click="login"
      >登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        loginName: '',
        password: ''
      },
      passwordType: 'password',
      loading: false,
      rules: {
        loginName: [{
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    id() {
      return Math.floor(Math.random() * 100)
    }
  },
  created() {
    this.validation()
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    async login() {
      try {
        await this.$store.dispatch('user/loginAction', this.loginForm)
        console.log(1)
        this.loading = true
      } finally {
        this.loading = false
      }
    },
    async validation() {
      try {
        console.log(this.id)
        await this.$store.dispatch('user/valiDation', this.id)
      } catch (e) {
        console.log(new Error(e))
      }
    }

  }
}
</script>

<style lang="scss">
$bg:#283443;
$light_gray:#000;
$cursor: #000;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

    // 验证码
    .elr{
      position: absolute;
      top: 0px;
      right: 0px;
      width: 130px;
      height: 50px;
      background-color: pink;
    }

  .el-form-item {
    width: 100%;
    height: 52px;
    margin-bottom: 24px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
  .el-input input {
    color: #000;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  // 设置背景图
  background-image: url('~@/assets/common/background.png');
  background-repeat: no-repeat;
  background-size: cover;

  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 518px;
    height: 388px;
    max-width: 100%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background-color: #fff;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: absolute;
    top: -46px;
    left: 50%;
    margin-left: -48px;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .login-btn{
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
  }

}
</style>
