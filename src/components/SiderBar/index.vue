<template>
  <div
    class="sider-bar-container fixed top-0 left-0 h-full z-101 hidden lg:flex xl:flex flex-col w-5/6 sm:w-5/6 md:w-5/6 lg:w-70 xl:w-80 xxxl:w-90"
  >
    <div class="w-full block flex-grow">
      <div
        class="flex flex-col mt-16 sm:mt-12 md:mt-12 mr-8 mb-12 ml-16 sm:ml-8 md:ml-8 lg:mx-0 xl:mx-0"
      >
        <div
          class="flex justify-center md:justify-center lg:justify-center xl:justify-center items-center"
        >
          <a
            class="rounded-full h-24 w-24 block border border-2 border-yellow-700 overflow-hidden"
            style="
              transform: translateZ(0);
              -webkit-transition: border-color 0.35s ease-in-out;
              -moz-transition: border-color 0.35s ease-in-out;
              transition: border-color 0.35s ease-in-out;
            "
            href="/"
            alt="avatar"
          >
            <img
              class="w-full h-full avatar-img"
              src='~@/assets/avatar.png'
              alt="avatar"
              onerror="this.style.display='none'"
            />
          </a>
        </div>
        <div class="ml-2 mt-4 lg:mx-0 xl:mx-0 flex flex-wrap content-center">
          <div class="text-left lg:text-center xl:text-center w-full">
            <a
              href="/"
              class="text-2xl tracking-wider m-0 font-black"
              style="
                color: rgba(255, 255, 255, 0.5);
                transition: color 0.35s ease-in-out;
                user-select: none;
              "
              >{{ personInfo.name }}</a
            >
          </div>
          <div
            class="text-left lg:text-center xl:text-center w-full mt-1 text-base leading-5 italic font-sans"
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
          <a
            class="flex w-full rounded-none text-base font-semibold tracking-wider px-0 py-2 lg:px-0 xl:px-0 xxxl:pl-10 xxxl:pr-4 lg:justify-center xl:justify-center xxxl:justify-start my-0 mx-1 items-center"
            :href="[sibarItem.url]"
            style="
              color: #fcfcfc;
              transition: color 0.35s ease-in-out;
              user-select: none;
            "
          >
            <i
              v-bind:class="[sibarItem.icon]"
              class="icon iconfont border border-1 border-gray-100 rounded-full w-6 h-6 leading-none text-xs ml-4 mr-4 pt-1 pl-0 inline-block text-center lg:hidden xl:hidden xxxl:inline-block"
            ></i>
            <span class="tracking-widest">{{ sibarItem.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="flex flex-wrap mt-12 ml-12 mr-12 mb-12 text-base justify-around"
    >
      <span class="text-base">
        <i
          class="icon iconfont icon-taiyang w-8 h-8 lg:w-4 lg:h-4 lg:text-xl xl:w-4 xl:h-4 xl:text-xl leading-none text-2xl text-yellow-400 pt-1 pl-0 inline-block text-center cursor-pointer"
        ></i>
      </span>
      <span
        class="ml-1 mr-1 mt-3 w-1 h-1 border rounded-full"
        style="background: #525354"
      ></span>
      <a v-for="(icon, index) in iconList" :key="index" :href="[icon.url]" target="_blank">
        <i
          v-bind:class="[icon.name]"
          class="icon iconfont w-8 h-8 lg:w-4 lg:h-4 lg:text-xl xl:w-4 xl:h-4 xl:text-xl leading-none text-2xl text-yellow-400 pt-1 pl-0 inline-block text-center"
        ></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class SiderBar extends Vue {
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
}
</script>
<style lang="scss" scoped>
.sider-bar-container {
  background: url("~@/assets/bg.jpg") top left no-repeat #666666;
  background-size: cover;
  .avatar-img {
    transition: transform 0.5s; 
    object-fit:cover;
  }
}
</style>