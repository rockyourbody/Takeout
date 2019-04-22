<template>
    <div class="msite">
        <!-- 首页--头部 -->
        <header-top title="昌平区北七家宏福科技园">
            <span class="header_search" slot="left">
                <i class="iconfont icon-soushuo"></i>
            </span>
            <span class="header_login" slot="right">
                <span class="header_login_text">登录|注册</span>
            </span>
        </header-top>
        <!-- 首页部分--导航 -->
        <nav class="msite_nav">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/3.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/4.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/5.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/6.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/7.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/8.jpg">
                            </div>
                            <span>最低特惠</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/9.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/10.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/11.jpg">
                            </div>
                            <span>最低特惠</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/12.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/13.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/14.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                        <a href="javascript:;" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>最低特惠</span>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <!-- 首页部分--列表 -->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-xuanxiang"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <shop-list/>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'

export default {
    mounted () {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    },
    components: {
        HeaderTop,
        ShopList
    }
}
</script>
<style>
/* 首页部分 */
.msite {
    width: 100%;
    overflow: hidden;
}
/* 首页部分--导航 */
.msite .msite_nav {
    position: relative;
    margin-top: 45px;
    height: 200px;
    background: #fff;
}
.msite .msite_nav::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
    background: #e4e4e4;
}
.msite .msite_nav .swiper-container {
    width: 100%;
    height: 100%;
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food {
    width: 25%;
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container {
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    /* font-size: 0; */
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container img {
    display: inline-block;
    width: 50px;
    height: 50px;
}
.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #666;
}
/* 首页部分--列表 */
.msite .msite_shop_list {
    position: relative;
    margin-top: 10px;
    background: #fff;
}
.msite .msite_shop_list::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
    background-color: #e4e4e4;
}
.msite .msite_shop_list .shop_header {
    padding: 10px 10px 0;
}
.msite .msite_shop_list .shop_header .icon-xuanxiang {
    margin-left: 5px;
    font-size: 14px;
    color: #999;
}
.msite .msite_shop_list .shop_header .shop_header_title {
    color: #999;
    font-size: 14px;
    line-height: 20px;
}

</style>



