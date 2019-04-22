<template>
    <div class="profile">
        <header-top title="我的"></header-top>
        <!-- 我的--登录注册 -->
        <section class="profile_number">
            <router-link to="/login" class="profile_link">
                <div class="profile_image">
                    <i class="iconfont icon-rentou"></i>
                </div>
                <div class="user-info">
                    <p class="user-info-top">登录/注册</p>
                    <p>
                      <span class="user-icon">
                        <i class="iconfont icon-shouji"></i>
                      </span>
                      <span class="icon-mobile-number">暂无绑定手机号</span>
                    </p>
                </div>
                <span class="arrow">
                    <i class="iconfont icon-arrow-right2"></i>
                </span>
            </router-link>
            <!-- <a class="profile_link" href="javascript:;">
                <div class="profile_image">
                    <i class="iconfont icon-rentou"></i>
                </div>
                <div class="user-info">
                    <p class="user-info-top">登录/注册</p>
                    <p>
                      <span class="user-icon">
                        <i class="iconfont icon-shouji"></i>
                      </span>
                      <span class="icon-mobile-number">暂无绑定手机号</span>
                    </p>
                </div>
                <span class="arrow">
                    <i class="iconfont icon-arrow-right2"></i>
                </span>
            </a> -->
        </section>
        <!-- 我的--优惠积分 -->
        <section class="profile_info_data">
            <ul class="info_data_list">
                <a href="javascript:;" class="info_data_link">
                  <span class="info_data_top"><span>0.00</span>元</span>
                  <span class="info_data_bottom">我的余额</span>
                </a>
                <a href="javascript:;" class="info_data_link">
                  <span class="info_data_top"><span>0</span>个</span>
                  <span class="info_data_bottom">我的优惠</span>
                </a>
                <a href="javascript:;" class="info_data_link">
                  <span class="info_data_top"><span>0</span>分</span>
                  <span class="info_data_bottom">我的积分</span>
                </a>
            </ul>
        </section>
        <!-- 我的--商城 -->
        <section class="profile_my_order">
            <a href='javascript:' class="my_order">
                <span>
                  <i class="iconfont icon-icon-"></i>
                </span>
                <div class="my_order_div">
                  <span>我的订单</span>
                  <span class="my_order_icon">
                    <i class="iconfont icon-arrow-right2"></i>
                  </span>
                </div>
            </a>
            <a href='javascript:' class="my_order">
                <span>
                  <i class="iconfont icon-jifen"></i>
                </span>
                <div class="my_order_div">
                  <span>积分商城</span>
                  <span class="my_order_icon">
                    <i class="iconfont icon-arrow-right2"></i>
                  </span>
                </div>
            </a>
            <a href='javascript:' class="my_order">
                <span>
                  <i class="iconfont icon-vip"></i>
                </span>
                <div class="my_order_div">
                  <span>外卖会员卡</span>
                  <span class="my_order_icon">
                    <i class="iconfont icon-arrow-right2"></i>
                  </span>
                </div>
            </a>
        </section>
        <!-- 我的--服务 -->
        <section class="profile_my_order">
            <a href='javascript:' class="my_order">
                <span>
                  <i class="iconfont icon-zhongxinfuwu"></i>
                </span>
                <div class="my_order_div">
                  <span>服务中心</span>
                  <span class="my_order_icon">
                    <i class="iconfont icon-arrow-right2"></i>
                  </span>
                </div>
            </a>
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
/* 我的 */
.profile {
    width: 100%;
    overflow: hidden;
}
/* 我的--登录注册 */
.profile .profile_number {
    margin-top: 45.5px;
}
.profile .profile_number .profile_link {
    position: relative;
    display: block;
    background: #3982FF;
    padding: 20px 10px;
}
.profile .profile_number .profile_link::after {
    content: '';
    display: block;
    clear: both;
}
.profile .profile_number .profile_link .profile_image {
    float: left;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background: red;
}
.profile .profile_number .profile_link .profile_image .icon-rentou {
    background: #e4e4e4;
    font-size: 70px;
    line-height: 60px;
    margin-left: -3px;
}
.profile .profile_number .profile_link .user-info {
    float: left;
    margin-top: 8px;
    margin-left: 15px;
}
.profile .profile_number .profile_link .user-info p {
    font-weight: 700;
    font-size: 18px;
    color: #fff;
}
.profile .profile_number .profile_link .user-info p.user-info-top {
    padding-bottom: 8px;
}
.profile .profile_number .profile-link .user-info p .user-icon {
    display: inline-block;
    margin-left: -15px;
    margin-right: 5px;
    width: 20px;
    height: 20px;
}
.profile .profile_number .profile_link .user-info p .user-icon .icon-shouji {
    font-size: 15px;
}
.profile .profile_number .profile_link .user-info p .icon-mobile-number {
    font-size: 14px;
    color: #fff;
    margin-left: -4px;
}
.profile .profile_number .profile_link .arrow {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 15px;
    top: 40%;
}
.profile .profile_number .profile_link .arrow .icon-arrow-right2 {
    color: #fff;
    font-size: 23px;
    margin-left: -13px;
}
/* 我的--优惠积分 */
.profile .profile_info_data {
    position: relative;
    width: 100%;
    background: #fff;
    /* overflow: hidden; */
}
.profile .profile_info_data::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
    transform: scaleY(0.5);
}
.profile .profile_info_data .info_data_list::after {
    content: '';
    display: block;
    clear: both;
}
.profile .profile_info_data .info_data_list .info_data_link {
    float: left;
    width: 33%;
    text-align: center;
    border-right: 1px solid #f1f1f1;
}
.profile .profile_info_data .info_data_list .info_data_link .info_data_top {
    display: block;
    width: 100%;
    font-size: 14px;
    color: #333;
    padding: 15px 5px 10px;
}
.profile .profile_info_data .info_data_list .info_data_link .info_data_top span {
    display: inline-block;
    font-size: 30px;
    color: #f90;
    font-weight: 700;
    line-height: 30px;
}
.profile .profile_info_data .info_data_list .info_data_link .info_data_bottom {
    display: inline-block;
    font-size: 14px;
    color: #666;
    font-weight: 400;
    padding-bottom: 10px;
}
.profile .profile_info_data .info_data_list .info_data_link:nth-of-type(2) .info_data_top span {
    color: #ff5f3e;
}
.profile .profile_info_data .info_data_list .info_data_link:nth-of-type(3) {
   border: 0;
}
.profile .profile_info_data .info_data_list .info_data_link:nth-of-type(3) .info_data_top span {
   color: #6ac20b;
}
/* 我的--商城/服务 */
.profile .profile_my_order {
    position: relative;
    margin-top: 10px;
    background: #fff;
}
.profile .profile_my_order::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #e4e4e4;
}
.profile .profile_my_order .my_order {
    display: flex;
    align-items: center;
    padding-left: 15px;
}
.profile .profile_my_order .my_order >span {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
}
.profile .profile_my_order .my_order >span .iconfont {
    margin-left: -6px;
    font-size: 20px;
}
.profile .profile_my_order .my_order .my_order_div {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding: 18px 10px 18px 0;
    font-size: 16px;
    color: #333;
    display: flex;
    justify-content: space-between;
}
.profile .profile_my_order .my_order .my_order_div span {
    display: block;
    font-size: 15px;
}
.profile .profile_my_order .my_order .my_order_div .my_order_icon {
    width: 10px;
    height: 10px;
}
.profile .profile_my_order .my_order .my_order_div .my_order_icon .icon-arrow-right2 {
    color: #bbb;
    font-size: 15px;
    margin-left: -10px;
}
.profile .profile_my_order .my_order >span .icon-icon- {
    color: #3982FF;
}
.profile .profile_my_order .my_order >span .icon-jifen {
    color: #3982FF;
}
.profile .profile_my_order .my_order >span .icon-vip {
    color: #3982FF;
}
.profile .profile_my_order .my_order >span .icon-zhongxinfuwu {
    color: #3982FF;
}
</style>



