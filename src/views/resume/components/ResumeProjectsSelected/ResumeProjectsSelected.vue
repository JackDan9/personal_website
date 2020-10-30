<template>
  <section id="projects-selected" class="home-section">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4 section-heading">
          <h1>{{ $t('selected_projects') }}</h1>
        </div>
        <div class="col-xs-12 col-md-8">
          <div class="project-toolbar">
            <div id="filters">
              <div class="btn-toolbar">
                <div class="btn-group">
                  <a href="#" data-filter="*" class="btn btn-primary btn-large active">{{ $t('all') }}</a>
                  <a href="#" data-filter=".app" class="btn btn-primary btn-large">{{ $t('app') }}</a>
                  <a href="#" data-filter=".web" class="btn btn-primary btn-large">{{ $t('web') }}</a>
                </div>
              </div>
            </div>
          </div>
          <div id="container-projects" class="row isotope">
            <!-- First Web Project -->
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope-item web-first">
              <div class="card">
                <a
                  href
                  title="A software called soil"
                  class="card-image hover-overlay"
                  target="_blank"
                >
                  <img src="~@/assets/projects/soil.svg" alt="soil" class="imp-responsive" />
                </a>
                <div class="card-text">
                  <h4>
                    <a href target="_blank">{{ $t('soil') }}</a>
                  </h4>
                  <div class="card-description">
                    <p>{{ $t('soil_detail') }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Second Web Project -->
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope web-second">
              <div class="card">
                <a
                  href
                  title="A software called hamal"
                  class="card-image hover-overlay"
                  target="_blank"
                >
                  <img src="~@/assets/projects/hamal.svg" alt="hamal" class="imp-responsive" />
                </a>
                <div class="card-text">
                  <h4>
                    <a href target="_blank">Hamal</a>
                  </h4>
                  <div class="card-description">
                    <p>{{ $t('hamal_detail') }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- First App Project -->
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope app-first">
              <div class="card">
                <a
                  href
                  title="A software called smart_xinyang_app"
                  class="card-image hover-overlay"
                  target="_blank"
                >
                  <img
                    src="~@/assets/projects/smart_app.svg"
                    alt="smart_app"
                    class="imp-responsive"
                  />
                </a>
                <div class="card-text">
                  <h4>
                    <a href target="_blank">Smart_App</a>
                  </h4>
                  <div class="card-description">
                    <p>Smart App是一款基于Android与iOS的移动端应用，本人通过React Native实现了将Vue实现的前端应用打包为Android(.apk)以及iOS(.ipa)。本人从最初开始，以功能完善且优雅的设计，以稳定且满足敏捷开发、快速迭代的架构为原则，完成了页面服务以及打包为应用的所有实现。</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Second App Project -->
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope app-second">
              <div class="card">
                <a
                  href
                  title="A software called music app"
                  class="card-image hover-overlay"
                  target="_blank"
                >
                  <img
                    src="~@/assets/projects/music_app.svg"
                    alt="music app"
                    class="imp-responsive"
                  />
                </a>
                <div class="card-text">
                  <h4>
                    <a href target="_blank">Music_App</a>
                  </h4>
                  <div class="card-description">
                    <p>Music App 是一款基于flex布局设计和实现的音乐播放H5应用，我自己为了验证和解决传统布局方式上的难点，例如传统布局中垂直居中这类比较难以实现的问题。任何的容器都可以指定Flex布局，只需要为盒子增加一行display: flex，行内元素则是使用display: inline-block。</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Third App Project -->
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope app-third">
              <div class="card">
                <a
                  href
                  title="A software called Demo Kugou"
                  class="card-image hover-overlay"
                  target="_blank"
                >
                  <img
                    src="~@/assets/projects/demo_kugou.svg"
                    alt="Demo Kugou"
                    class="imp-responsive"
                  />
                </a>
                <div class="card-text">
                  <h4>
                    <a href target="_blank">Demo_Kugou</a>
                  </h4>
                  <div class="card-description">
                    <p>Demo Kugou是一款基于Vue全家桶搭建的Kugou移动端Web应用软件，利用webpack-bundle-analyzer插件从路由层优化项目代码打包后的体积。实现了包括热门推荐、音乐排行以及播放等，用Vue原生技术开发移动端项目软件，解决了滑动(better-scroll)、点击(fastclick)以及跨平台请求(axios)等问题。</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Third Web Project -->
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope web-third">
              <div class="card">
                <a
                  href
                  title="A software called React Echarts"
                  class="card-image hover-overlay"
                  target="_blank"
                >
                  <img
                    src="~@/assets/projects/react_echarts.svg"
                    alt="React Echarts"
                    class="imp-responsive"
                  />
                </a>
                <div class="card-text">
                  <h4>
                    <a href target="_blank">React_Echarts</a>
                  </h4>
                  <div class="card-description">
                    <p>React Echarts 是一款将React特点(声明式编码、组件化编码、支持客户端与服务端渲染、高效以及单向数据流等)与Echarts特性(丰富的可视化类型、多种数据格式无需转换直接使用、千万数据的前端展现以及移动端优化)结合的软件，由于Echarts文件过大，所以自定义构建文件，按需引入Echarts。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';


@Component({
  name: 'ResumeProjectsSelected',
})

export default class ResumeProjectsSelected extends Vue {}
</script>

<style lang="scss" scoped>
.project-toolbar {
  margin-bottom: 0.8rem;
}

#container-projects {
  display: block;
  position: relative;
  height: 1881px;
  margin-top: 2rem;
  overflow: hidden;
}

.btn-toolbar {
  margin-left: -0.04rem;
  .btn-group {
    float: left;
    margin-left: 0.04rem;

    a {
      color: #337ab7;
      text-decoration: none;
      background-color: transparent;
    }

    .btn-primary {
      border-color: #0095eb;
      background: #0095eb;
    }

    .btn-primary {
      color: #fff;
      background-color: #337ab7;
      border-color: #2e6da4;
    }

    .btn {
      display: inline-block;
      margin-bottom: 0;
      font-size: 0.112rem;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-image: none;
      border: 0.008rem solid transparent;
      border-radius: 0.032rem;

      font-size: 0.36rem;
      padding: 0.08rem 0.112rem 0.072rem;
    }
  }

  .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
    border-radius: 0;
  }
}

.btn-toolbar .btn:first-child {
  border-radius: 0.048rem 0 0 0.048rem;
}

.btn-toolbar .btn:last-child {
  border-radius: 0 0.048rem 0.048rem 0;
}

.btn-toolbar .btn.btn-primary:active,
.btn-toolbar .btn.btn-primary.active {
  background-color: rgba(0, 89, 175, 1);
}

.btn-toolbar .btn,
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}

.btn-toolbar:before {
  display: table;
  content: " ";
}

.btn-toolbar:after {
  display: table;
  content: " ";
  clear: both;
}

.btn-group-vertical > .btn.active,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:hover,
.btn-group > .btn.active,
.btn-group > .btn:active,
.btn-group > .btn:focus,
.btn-group > .btn:hover {
  z-index: 2;
}

.btn-group-vertical > .btn,
.btn-group > .btn {
  position: relative;
  float: left;
}

.btn-group > .btn:first-child {
  margin-left: 0;
}

.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background: #0095eb;
}

.btn-primary.active,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary {
  background-image: none;
}

.btn-primary.active,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}

.btn.active,
.btn:active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 0.024rem 0.04rem rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 0.024rem 0.04rem rgba(0, 0, 0, 0.125);
}

.web-first {
  position: absolute;
  left: 0;
  top: 0;
}

.web-second {
  position: absolute;
  left: 365px;
  top: 0;
}

.web-third {
  position: absolute;
  left: 365px;
  top: 1280px;
}

.app-first {
  position: absolute;
  left: 0;
  top: 650px;
}

.app-second {
  position: absolute;
  left: 365px;
  top: 650px;
}

.app-third {
  position: absolute;
  left: 0;
  top: 1280px;
}

.project-item {
  margin-bottom: 0.6rem;
}

.img-responsive {
  margin: 0 auto;
}

.carousel-inner > .item > a > img,
.carousel-inner > .item > img,
.img-responsive,
.thumbnail a > img,
.thumbnail > img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>