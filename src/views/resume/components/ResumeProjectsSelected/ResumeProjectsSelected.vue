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
                  <a
                    href="#"
                    data-filter="*"
                    class="btn btn-primary btn-large active"
                  >{{ $t('all') }}</a>
                  <a href="#" data-filter=".app" class="btn btn-primary btn-large">{{ $t('app') }}</a>
                  <a href="#" data-filter=".web" class="btn btn-primary btn-large">{{ $t('web') }}</a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="container-projects"
            class="row isotope"
            style="position: relative; height: 1881px;"
          >
            <!-- First Web Project -->
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope-item web"
              style="position: absolute; left: 0px; top: 0px"
            >
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
                    <a href target="_blank">Soil</a>
                  </h4>
                  <div class="card-description">
                    <p
                      style="font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;"
                    >Soil 是一款基于Openstack私有云部署的软件，通过原生Openstack直接纳管VMware环境资源的管理工具，其目标是为企业用户实现基于Openstack架构纳管第三方云集算产品，实现操作入口、用户管理、使用习惯的整合，通过开源架构管理所有云资源。从而实现更好的服务、效率和管理的一体化运营。</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Second Web Project -->
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope web"
              style="position: absolute; left: 365px; top: 0px;"
            >
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
                    <p
                      style="font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;"
                    >Hamal 是一款用于V2V oVirt/RHV转换主机和CloudForms的OSP设备的自动化软件，Hamal软件收集其他虚拟机技术的虚拟机信息，然后将其迁移到KVM里面。软件流程如下：从hypervisor中检索XML配置文件, 导出磁盘镜像文件, 修改磁盘镜像文件, 在目标Hypervisor里创建虚拟机，Hamal软件将流程步骤集成到软件之中，使其自动化。</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Third App Project -->
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope app"
              style="position: absolute; left: 0px; top: 650px;"
            >
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
                    <p
                      style="font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;"
                    >Smart App是一款基于Android与iOS的移动端应用，本人通过React Native实现了将Vue实现的前端应用打包为Android(.apk)以及iOS(.ipa)。本人从最初开始，以功能完善且优雅的设计，以稳定且满足敏捷开发、快速迭代的架构为原则，完成了页面服务以及打包为应用的所有实现。</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fourth App Project -->
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope app"
              style="position: absolute; left: 365px; top: 650px;"
            >
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
                    <p
                      style="font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;"
                    >Music App 是一款基于flex布局设计和实现的音乐播放H5应用，我自己为了验证和解决传统布局方式上的难点，例如传统布局中垂直居中这类比较难以实现的问题。任何的容器都可以指定Flex布局，只需要为盒子增加一行display: flex，行内元素则是使用display: inline-block。</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fifth App Project -->
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope app"
              style="position: absolute; left: 0px; top: 1280px;"
            >
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
                    <p
                      style="font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;"
                    >Demo Kugou是一款基于Vue全家桶搭建的Kugou移动端Web应用软件，利用webpack-bundle-analyzer插件从路由层优化项目代码打包后的体积。实现了包括热门推荐、音乐排行以及播放等，用Vue原生技术开发移动端项目软件，解决了滑动(better-scroll)、点击(fastclick)以及跨平台请求(axios)等问题。</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Sixth PC Project -->
            <div
              class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope app"
              style="position: absolute; left: 365px; top: 1280px;"
            >
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
                    <p
                      style="font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;"
                    >React Echarts 是一款将React特点(声明式编码、组件化编码、支持客户端与服务端渲染、高效以及单向数据流等)与Echarts特性(丰富的可视化类型、多种数据格式无需转换直接使用、千万数据的前端展现以及移动端优化)结合的软件，由于Echarts文件过大，所以自定义构建文件，按需引入Echarts。</p>
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
.section-heading {
  h1 {
    margin: 0 0 0.08rem 0;
    font-size: 0.9rem;
  }
}

.project-toolbar {
  margin-bottom: 0.8rem;
}

</style>