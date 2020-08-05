<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/tabbar/index.png" alt="">
        <img slot="item-icon1" src="@/assets/tabbar/index1.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/shop">
        <img slot="item-icon" src="@/assets/tabbar/shop.png" alt="">
        <img slot="item-icon1" src="@/assets/tabbar/shop1.png" alt="">
        <div slot="item-text">图表</div>
      </tab-bar-item>
      <tab-bar-item path="/swiper">
        <img slot="item-icon" src="@/assets/tabbar/shop.png" alt="">
        <img slot="item-icon1" src="@/assets/tabbar/shop1.png" alt="">
        <div slot="item-text">swiper</div>
      </tab-bar-item>
      <tab-bar-item path="/elem">
        <img slot="item-icon" src="@/assets/tabbar/shop.png" alt="">
        <img slot="item-icon1" src="@/assets/tabbar/shop1.png" alt="">
        <div slot="item-text">表单</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
    
  </div>
</template>
<script>
import TabBar from "com/tabbar/TabBar";
import TabBarItem from "com/tabbar/TabBarItem";
export default {
  name:"App",
  components:{
    TabBar,
    TabBarItem
  }
};
</script>
<style>

</style>
