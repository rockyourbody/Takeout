<template>
    <div class="loginContainer">
        <div class="loginInner">
            <div class="login_header">
                <h2 class="login_logo">鸡哥外卖</h2>
                <div class="login_header_title">
                    <a class="on" href="javascript:;">短信登录</a>
                    <a href="javascript:;">密码登录</a>
                </div>
            </div>
            <div class="login_content">
                <form>
                    <div class="on">
                        <section class="login_message">
                            <input type="tel" maxlength="11" placeholder="手机号">
                            <button disabled class="get_verification">获取验证码</button>
                        </section>
                        <section class="login_verification">
                            <input type="tel" maxlength="6" placeholder="验证码">
                        </section>
                        <section class="login_hint">
                            温馨提示：未注册鸡哥外卖帐号的手机号，登录时将自动注册，且代表已同意
                            <a href="javascript:;">《用户服务协议》</a>
                        </section>
                    </div>
                    <div>
                        <section class="login_message">
                            <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
                        </section>
                        <section class="login_verification">
                            <input type="tel" maxlength="8" placeholder="密码">
                            <div class="switch_button off">
                                <div class="switch_circle"></div>
                                <span class="switch_text">...</span>
                            </div>
                        </section>
                        <section class="login_message">
                            <input type="text" maxlength="11" placeholder="验证码">
                            <img class="get_verification" src="./images/captcha.svg" alt="captcha">
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
    </div>
</template>
<script>
export default {

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



