<template>
    <div class="footer_guide">
        <div class="guide_item" :class="{on: isCurrent('/msite')}" @click="goTo('/msite')">
            <span class="item_icon">
                <i class="iconfont icon-yemian"></i>
            </span>
            <span>首页</span>
        </div>
        <div class="guide_item" :class="{on: isCurrent('/search')}" @click="goTo('/search')">
            <span class="item_icon">
                <i class="iconfont icon-sousuo"></i>
            </span>
            <span>搜索</span>
        </div>
        <div class="guide_item" :class="{on: isCurrent('/order')}" @click="goTo('/order')">
            <span class="item_icon">
                <i class="iconfont icon-icon--copy-copy"></i>
            </span>
            <span>订单</span>
        </div>
        <div class="guide_item" :class="{on: isCurrent('/profile')}" @click="goTo('/profile')">
            <span class="item_icon">
                <i class="iconfont icon-wode"></i>
            </span>
            <span>我的</span>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goTo (path) {
            this.$router.replace(path)
        },
        isCurrent(path) {
            return this.$route.path === path
        }
    }
}
</script>
<style>
.footer_guide {
    position: relative;
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
}
.footer_guide::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #e4e4e4;
}
.footer_guide .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999;
}
.footer_guide .guide_item.on {
    color: #3982FF;
}
.footer_guide .guide_item span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
}
.footer_guide .guide_item span .iconfont {
    font-size: 22px;
}
</style>



