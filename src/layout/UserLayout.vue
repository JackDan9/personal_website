<template>
  <div id="userLayout" :class="['user-layout-wrapper', device]">
    <div class="container">
      <!-- <div class="top">
        <div class="header">
          <a href="/">
            <img src="~@/assets/logo.png" class="logo" alt="logo">
            <span class="title">Ant Design</span>
          </a>
        </div>
        <div class="desc">
          Ant Design 是西湖区最具影响力的 Web 设计规范
        </div>
      </div> -->

      <route-view></route-view>

      <!-- <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">
          Copyright &copy; 2018 白鹭学园技术组出品
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import RouteView from "./RouteView";
import { mixinDevice } from "@/utils/mixin";

export default {
  name: "UserLayout",
  components: { RouteView },
  mixins: [mixinDevice],
  data() {
    return {};
  },
  mounted() {
    document.body.classList.add("userLayout");
  },
  beforeDestroy() {
    document.body.classList.remove("userLayout");
  },
};
</script>

<style lang="scss" scoped>
#userLayout {
  // display: block;
}

.container {
  display: block;
  position: fixed;
  width: 100%;
  max-width: none;
  height: 100%;
  background: url("~@/assets/bg.jpg") top left no-repeat #666666;
  background-size: cover;
}

.top {
  width: 100%;
}
</style>
