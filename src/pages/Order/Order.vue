<template>
    <div class="order">
        <header-top title="订单详情">
        </header-top>
        <section class="order_no_login">
            <img src="./images/order/person.png">
            <h3>登录后查看外卖订单</h3>
            <button>立即登陆</button>
        </section>
    </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    components: {
        HeaderTop
    }
}
</script>
<style>
.order {
    width: 100%;
    overflow: hidden;
}
.order .order_no_login {
    padding-top: 140px;
    width: 60%;
    margin: 0 auto;
    text-align: center;
}
.order .order_no_login >img {
    display: block;
    width: 100%;
    height: 30%;
}
.order .order_no_login >h3 {
    padding: 10px 0;
    font-size: 17px;
    color: #6a6a6a;
}
.order .order_no_login >button {
    display: inline-block;
    border-radius: 5px;
    padding: 10px 20px;
    border: 0;
    outline: none;
    background: #3982FF;
    font-size: 14px;
    color: #fff;
}
</style>



