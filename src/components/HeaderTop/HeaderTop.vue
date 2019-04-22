<template>
    <header class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>
</template>
<script>
export default {
    props: {
        title: String
    }
}
</script>
<style>
/* header公共部分 */
.header {
    background-color: #3982FF;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
}
.header .header_title {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    font-size: 22px;
    color: #fff;
}
.header .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    /* height: 50%; */
}
.header .header_search .icon-soushuo {
    font-size: 25px;
    color: #fff;
}
.header .header_title .header_title_text {
    display: block;
    font-size: 20px;
    color: #fff;
}
.header .header_login {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    font-size: 14px;
    color: #fff;
}
</style>



