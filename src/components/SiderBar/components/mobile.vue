<template>
  <div>
    <div class="mobileDrawer" :style="this.$store.state.sidebar.isOpenSideBar ? { padding: '0px', height: '100vh', width: '100%', transition: 'transform .3s cubic-bezier(.7,.3,.1,1)' } : {padding: '0px', height: '100vh'}">
      <div class="mobileMask" :style="this.$store.state.sidebar.isOpenSideBar ? { height: '100%', opacity: 1, transition: 'none', animation: 'antdDrawerFadeIn .3s cubic-bezier(.7,.3,.1,1)', pointerEvents: 'auto' } : {height: 0}" @click="handleSidebar()"></div>
      <div class="mobileWrapper w-5/6" :style="this.$store.state.sidebar.isOpenSideBar ? { transform: 'none'} : { transform: 'translateX(-100%)'}">
        <div class="mobileContent">
          <div class="mobileBody">
            <div class="mobileDrawerBody">
              <div class="sider-bar-container flex flex-col w-full">
                <div class="w-full block flex-grow">
                  <div class="flex flex-col mt-12 mr-8 mb-12 ml-8 mx-0">
                    <div class="flex justify-center items-center">
                      <a class="rounded-full h-24 w-24 block border border-2 border-yellow-700 overflow-hidden" style="transform: translateZ(0); -webkit-transition: border-color 0.35s ease-in-out; -moz-transition: border-color 0.35s ease-in-out; transition: border-color 0.35s ease-in-out; " href="/" alt="avatar">
                        <img class="w-full h-full avatar-img" src="~@/assets/avatar.png" alt="avatar" onerror="this.style.display='none'"/>
                      </a>
                    </div>
                    <div class="ml-2 mt-4flex flex-wrap content-center">
                      <div
                        class="text-center w-full"
                      >
                        <a
                          href="/"
                          class="text-2xl tracking-wider m-0 font-black"
                          style="
                            color: rgba(255, 255, 255, 0.5);
                            transition: color 0.35s ease-in-out;
                            user-select: none;
                          "
                          >{{ personInfo.name }}</a>
                      </div>
                      <div
                        class="text-center w-full mt-1 text-base leading-5 italic font-sans"
                        style="color: #828282"
                      >
                        {{ personInfo.content }}
                      </div>
                    </div>
                  </div>
                  <ul class="flex flex-col h-64 pl-0 mb-0 list-none">
                    <li
                      class="flex justify-center h-12"
                      v-for="(sibarItem, sibarIndex) in sibarList"
                      :key="sibarIndex"
                    >
                      <a class="flex justify-center items-center w-full rounded-none text-base font-semibold tracking-wider px-0 py-2 my-0 mx-1" :href="[sibarItem.url]"
                        style="
                          color: #fcfcfc;
                          transition: color 0.35s ease-in-out;
                          user-select: none;
                        "
                      >
                        <i v-bind:class="[sibarItem.icon]" class="icon iconfont border border-1 border-gray-100 rounded-full w-6 h-6 leading-none text-xs ml-4 mr-4 pt-1 pl-0 inline-block text-center"></i>
                        <span class="tracking-widest">{{sibarItem.name}}</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="flex flex-wrap mt-12 ml-12 mr-12 mb-12 text-base justify-around">
                  <span class="text-base">
                    <i class="icon iconfont icon-taiyang w-8 h-8 leading-none text-2xl text-yellow-400 pt-1 pl-0 inline-block text-center cursor-pointer"></i>
                  </span>
                  <!-- <span
                    class="ml-1 mr-1 mt-3 w-1 h-1 border rounded-full"
                    style="background: #525354"
                  ></span> -->
                  <a v-for="(icon, index) in iconList" :key="index" :href="[icon.url]" target="_blank">
                    <i v-bind:class="[icon.name]" class="icon iconfont w-8 h-8 leading-none text-2xl text-yellow-400 pt-1 pl-0 inline-block text-center"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'Mobile',
})
export default class Mobile extends Vue {
  private personInfo: object = {
    name: 'JackDan\'s Den',
    content: '一分耕耘，一分收获',
  };

  private iconList: object[] = [
    {
      name: 'icon-github',
      value: 'github',
      url: 'https://github.com/JackDan9',
    },
    {
      name: 'icon-emailFilled',
      value: 'email',
      url: 'mailto:j.dan92016@gmail.com',
    },
    {
      name: 'icon-gongzhonghao',
      value: '微信',
      url: 'tel:xxj19950917',
    },
    {
      name: 'icon-weibo',
      value: '微博',
      url: 'https://weibo.com/p/1005055750162812/home',
    },
    {
      name: 'icon-qq',
      value: 'qq',
      url: 'http://wpa.qq.com/msgrd?v=3&uin=1835812864&site=qq&menu=yes',
    },
  ];

  private sibarList: object[] = [
    {
      icon: 'icon-zhuye',
      name: '主页',
      url: '/blog',
    },
    {
      icon: 'icon-fenlei',
      name: '分类',
      url: '/blog',
    },
    {
      icon: 'icon-biaoqian',
      name: '标签',
      url: '/blog',
    },
    {
      icon: 'icon-guidang',
      name: '归档',
      url: '/blog',
    },
    {
      icon: 'icon-guanyuwomen',
      name: '关于',
      url: '/blog',
    },
  ];

  private isShowSidebar: boolean = true;

  private handleSidebar(): void {
    this.$store.dispatch('handleSidebar');
  }
}
</script>

<style lang="scss" scoped>
.mobileDrawer {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1), height 0s ease 0.3s,
    width 0s ease 0.3s;
}

.mobileMask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.45);
  opacity: 0;
  filter: alpha(opacity=45);
  transition: opacity 0.3s linear, height 0s ease 0.3s;
  pointer-events: none;
}

.mobileWrapper {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 6px 0 16px -8px rgba(0, 0, 0, 0.08),
    9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
    box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
}

.mobileContent {
  position: relative;
  z-index: 1;
  overflow: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  width: 100%;
  height: 100%;
}

.mobileBody {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
}

.mobileDrawerBody {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100vh;
  padding: 0;
  overflow: auto;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
}

.sider-bar-container {
  background: url("~@/assets/bg.jpg") top left no-repeat #666666;
  background-size: cover;
  .avatar-img {
    transition: transform 0.5s; 
    object-fit:cover;
  }
}
</style>