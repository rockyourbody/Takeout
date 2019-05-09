<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">鸡哥外卖</h2>
        <div class="login_header_title">
          <a :class="{on: loginWay}" @click="loginWay = true">短信登录</a>
          <a :class="{on: !loginWay}" @click="loginWay = false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get_verification" :class="{right_phone: rightPhone}" @click.prevent="getCode">{{computeTime > 0 ? `已经发送(${computeTime}s)` : '获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="6" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册鸡哥外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
            </section>
            <section class="login_verification">
              <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
              <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
              <div class="switch_button" :class="showPwd? 'on' : 'off'" @click="showPwd = !showPwd">
                <div class="switch_circle" :class="{right: showPwd}"></div>
                <span class="switch_text">{{showPwd? 'abc' : '...'}}</span>
              </div>
            </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:3000/captcha" alt="captcha" @click="getCaptcha" ref="captcha">
              </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a class="about_us" href="javascript:;">关于我们</a>
      </div>
      <div class="go_back" @click="$router.back()">
          <i class="iconfont icon-arrow-left"></i>
      </div>
    </div>
    <alert-tip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></alert-tip>
  </div>
</template>
<script>
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import {reqLoginPwd, reqSendCode, reqLoginSms} from '../../api'
export default {
  data () {
    return {
      loginWay: true,//切换登录方式
      phone: '',//手机号检查
      code: '',//短信验证码
      computeTime: 0,//倒计时
      showPwd: false,
      name: '',//用户名
      pwd: '',//密码
      captcha: '',//图形验证码
      alertText: '',
      alertShow: false
    }
  },
  computed: {
    //手机号验证
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    //异步获取短信验证码
    async getCode () {
      //如果没有计时
      if (!this.computeTime) {
        //启动倒计时
        this.computeTime = 30
        this.intervalId = setInterval(() => {
          this.computeTime --
          if(this.computeTime == 0) {
            clearInterval(this.intervalId)
          }
        }, 1000)

        //发送ajax请求（向指定手机号发送验证短信码）
        const result = await reqSendCode(this.phone)
        //错误情况下
        if (result.code === 1) {
          //显示提示
          this.showAlert(result.msg)
          //停止倒计时
          if (this.computeTime) {
            this.computeTime = 0
            clearInterval(this.intervalId)
          }
        }
      }
    },

    showAlert (alertText) {
      this.alertShow = true
      this.alertText = alertText
    },
    //异步登录
    async login () {
      let result
      //前台表单验证
      if (this.loginWay) {//短信登录
        const {rightPhone, phone, code} = this
        if (!this.rightPhone) {
          //手机号不正确
          this.showAlert('手机号不正确')
          return
        } else if (!/^\d{6}$/.test(code)) {
          //验证码不正确
          this.showAlert('验证码不正确')
          return
        }
        //发送ajax请求短信登录
        result = await reqLoginSms(phone, code)

      } else {//密码登录
        const {name, pwd, captcha} = this
        if (!this.name) {
          //用户名不正确
          this.showAlert('用户名不正确')
          return
        } else if (!this.pwd) {
          //密码不正确
          this.showAlert('密码不正确')
          return
        } else if (!this.captcha) {
          //验证码不正确
          this.showAlert('验证码不正确')
          return
        }

        //发送ajax请求密码登录
        result = await reqLoginPwd({name, pwd, captcha})
      }

      //停止倒计时
      if (this.computeTime) {
        this.computeTime = 0
        clearInterval(this.intervalId)
      }

      //根据结果数据处理
      if (result.code === 0) {
        const user = result.data
        //储存到state中
        this.$store.dispatch('recordUser',user)
        //跳转到profile页面
        this.$router.replace('/profile')
      } else {
        //显示新的图片验证码
        this.getCaptcha()
        //出错提示
        const msg = result.msg
        this.showAlert(msg)
      }
    },
    //关闭警告框
    closeTip () {
      this.alertShow = false
      this.alertText = ''
    },
    //获取一个新的图形验证码
    getCaptcha () {
      this.$refs.captcha.src = 'http://localhost:3000/captcha?time=' + Date.now()
    }
  },
  components: {
    AlertTip
  }
}
</script>
<style>
.loginContainer {
    width: 100%;
    height: 100%;
    background: #fff;
}
.loginContainer .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;
}
.loginContainer .loginInner .login_header .login_logo {
    font-size: 40px;
    font-weight: bold;
    color: #3982FF;
    text-align: center;
}
.loginContainer .loginInner .login_header .login_header_title {
    padding-top: 40px;
    text-align: center;
}
.loginContainer .loginInner .login_header .login_header_title >a {
    color: #333;
    font-size: 14px;
    padding-bottom: 4px;
}
.loginContainer .loginInner .login_header .login_header_title >a:first-child {
    margin-right: 40px;
}
.loginContainer .loginInner .login_header .login_header_title >a.on {
    color: #3982FF;
    font-weight: 700;
    border-bottom: 2px solid #3982FF;
}
.loginContainer .loginInner .login_content >form >div {
    display: none;
}
.loginContainer .loginInner .login_content >form >div.on {
    display: block;
}
.loginContainer .loginInner .login_content >form >div input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: 0;
    font: 400 14px Arial;
}
.loginContainer .loginInner .login_content >form >div input:focus {
    border: 1px solid #3982FF;
}
.loginContainer .loginInner .login_content >form >div .login_message {
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
}
.loginContainer .loginInner .login_content >form >div .login_message .get_verification {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border: 0;
    color: #ccc;
    font-size: 14px;
    background: transparent;
}
.loginContainer .loginInner .login_content >form >div .login_message .right_phone {
  color: black;
}
.loginContainer .loginInner .login_content >form >div .login_verification {
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
}
.loginContainer .loginInner .login_content >form >div .login_hint {
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px;
}
.loginContainer .loginInner .login_content >form >div .login_hint >a {
    color: #3982FF;
}
/* 明文/暗文切换 */
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0 6px;
    width: 30px;
    height: 16px;
    line-height: 16px;
    color: #fff;
    transition: background-color 0.3s, border-color 0.3s;
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button >.switch_circle {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 16px;
    height: 16px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    transition: transform 0.3s;
    transform: translateX(0px);
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button >.right {
    transform: translateX(27px);
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button.off .switch_text {
    float: right;
    color: #ddd;
}
.loginContainer .loginInner .login_content >form >div .login_verification .switch_button.on {
    background: #3982FF;
}
.loginContainer .loginInner .login_content >form .login_submit {
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #3982FF;
    color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    border: 0;
}
.loginContainer .loginInner .login_content .about_us {
    display: block;
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
    color: #999;
}
.loginContainer .loginInner .go_back {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
}
.loginContainer .loginInner .go_back >i.iconfont {
    font-size: 20px;
    color: #999;
}
</style>



