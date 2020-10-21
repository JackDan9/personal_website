<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top" id="navbar-main">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">{{ $t('resume-title') }}</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li
              v-for="(item, index) in tabMapOptions"
              v-bind:key="index"
              v-bind:class="[activeIndex == index ? 'active' : '']"
              @click="handleSwitchTab(index)"
            >
              <a href="#" data-target>
                <span>{{ $t(item.label) }}</span>
              </a>
            </li>
            <li class="nav-item">
              <a style="cursor: pointer" @click="handleLocaleLanguage()" data-target>
                <span>{{ $t('language') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <ResumeAbout></ResumeAbout>

    <section id="projects_selected" class="home-section">
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

    <section id="projects" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4 section-heading">
            <h1>Other Projects</h1>
          </div>
          <div class="col-xs-12 col-md-8">
            <p>I also built and worked on these projects:</p>
            <!-- First Other Project -->
            <h3 id="scrapy-mygirl">
              <a href target="_blank">scrapy_mygirl</a>
            </h3>
            <p>
              <span class="dim">scrapy weather</span>
            </p>
            <p>一款基于scrapy框架编写的可以自动获取指定城市的天气信息(温度、湿度、风向以及风速大小)，然后将其整理为风格独特且可以自定义的静态页面代码，配置邮件发送人以及收件人即可以将获取到的天气信息发送到指定人邮箱之中，自动化运行脚本文件让项目软件可以在每天指定时间(例如8:00进行邮件信息的整理以及发送)执行。</p>
            <!-- Second Other Project -->
            <h3 id="scrapy-mygirl-joke">
              <a href target="_blank">scrapy_mygirl_joke</a>
            </h3>
            <p>
              <span class="dim">scrapy joke</span>
            </p>
            <p>一款基于scrapy框架编写的可以自动获取内容健康的笑话内容(包括笑话动态图)，然后将其整理为风格独特且可以自定义的静态页面代码，配置邮件发送人以及收件人即可以将获取到的天气信息发送到指定人邮箱之中，自动化运行脚本文件让项目软件可以在每天指定时间(例如8:00进行邮件信息的整理以及发送)执行。</p>
            <!-- Third Other Project -->
            <h3 id="scrapy-mygirl-english">
              <a href target="_blank">scrapy_mygirl_english</a>
            </h3>
            <p>
              <span class="dim">scrapy english</span>
            </p>
            <p>一款基于scrapy框架编写的可以自动获取英文短文信息(包括短文图片信息、音频信息(时长与音频内容)以及短文内容等)，然后将其整理为页面html代码，配置邮件发送人以及收件人即可以将获取到的天气信息发送到指定人邮箱之中，自动化运行脚本文件让项目软件可以在每天指定时间(例如8:00进行邮件信息的整理以及发送)执行。</p>
            <!-- Third Other Project -->
            <h3 id="scrapy-mygirl-english">
              <a href target="_blank">scrapy_mygirl_english</a>
            </h3>
            <p>
              <span class="dim">scrapy english</span>
            </p>
            <p>一款基于scrapy框架编写的可以自动获取英文短文信息(包括短文图片信息、音频信息(时长与音频内容)以及短文内容等)，然后将其整理为页面html代码，配置邮件发送人以及收件人即可以将获取到的天气信息发送到指定人邮箱之中，自动化运行脚本文件让项目软件可以在每天指定时间(例如8:00进行邮件信息的整理以及发送)执行。</p>
            <!-- Fourth Other Project -->
            <h3 id="app-spider">
              <a href target="_blank">app_spider</a>
            </h3>
            <p>
              <span class="dim">app spider</span>
            </p>
            <p>一款自动分析视频分享的Url链接，然后整理得出分享内容中的视频源地址(其中主要的视频源地址格式要求为mp4)，将整理的视频源地址、视频源地址的出处等信息整合到特定接口(json数据返回)中提供给外界使用。</p>
            <!-- Fifth Other Project -->
            <h3 id="cpu-node">
              <a href target="_blank">cpu_node</a>
            </h3>
            <p>
              <span class="dim">cpu node</span>
            </p>
            <p>一款基于node实现的实时地监控系统CPU使用率(CPU总量以及CPU使用量信息)的Web项目，将CPU信息实时地收集回来然后利用数据去渲染Web视图层，外加结合了echarts特性将CPU实时变化的数据信息通过丰富的可视化类型更直观、清晰地展现出来。</p>
            <!-- Sixth Other Project -->
            <h3 id="react-blog">
              <a href target="_blank">react_blog</a>
            </h3>
            <p>
              <span class="dim">react blog</span>
            </p>
            <p>一款基于react实现的仿写了一个CNode社区。实现功能包括（各板块）帖子列表，帖子详文、评论的查看，新手入门页面，API页面，关于页面等功能模块。</p>
          </div>
        </div>
      </div>
    </section>

    <section id="selected_skills" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4 section-heading">
            <h1>职业技能</h1>
          </div>
          <div class="col-xs-12 col-md-8">
            <div
              id="container-skills"
              class="row isotope"
              style="position: relative; height: 300px;"
            >
              <!-- First Skill Html -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 0px; top: 0px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/html.svg" alt="html" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <!-- <h4>
                                            <a href="" target="_blank">Html</a>
                    </h4>-->
                    <div class="card-description">
                      <p>熟悉Html</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Second Skill CSS -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 120px; top: 0px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/CSS.svg" alt="css" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉css</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Third Skill Less -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 240px; top: 0px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/less.svg" alt="less" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉less</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Fourth Skill SASS -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 360px; top: 0px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/SASS.svg" alt="sass" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉sass</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Fifth Skill JavaScript -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 480px; top: 0px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/JavaScript.svg" alt="css" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉JavaScript</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Sixth Skill Vue -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 600px; top: 0px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/Vue.svg" alt="vue" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉Vue</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Seventh Skill React -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 720px; top: 0px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/React.svg" alt="react" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉React</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Eighth Skill Node.js -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 0px; top: 200px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/node.svg" alt="node" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉Node.js</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Ninth Skill Python -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 120px; top: 200px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/python.svg" alt="python" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉Python</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Tenth Skill Django -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 240px; top: 200px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/django.svg" alt="django" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉Django</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Eleventh Skill Openstack -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 360px; top: 200px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img
                      src="~@/assets/skills/icon_openstack.svg"
                      alt="openstack"
                      class="imp-responsive"
                    />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉Openstack</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Twelfth Skill RabbitMQ -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 480px; top: 200px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/RabbitMQ.svg" alt="RabbitMQ" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉RabbitMQ</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Thirteenth Skiil Nginx -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 600px; top: 200px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/nginx.svg" alt="nginx" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉Nginx</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Fourteenth Skill Mysql -->
              <div
                class="col-xs-12 col-sm-6 col-md-4 col-lg-6 skill-item isotope-item html"
                style="position: absolute; left: 720px; top: 200px; width: 20%;"
              >
                <div class="card">
                  <a href title class="card-image hover-overlay" target="_blank">
                    <img src="~@/assets/skills/my-SQL.svg" alt="mysql" class="imp-responsive" />
                  </a>
                  <div class="card-text" style="font-size: 12px;">
                    <div class="card-description">
                      <p>熟悉Mysql</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4 section-heading">
            <h1>Other Skills</h1>
          </div>
          <div class="col-xs-12 col-md-8">
            <p>I also built and worked on these skills:</p>
            <!-- First Other Skill -->
            <ul class="other-skill-list">
              <li class="other-skill-item">
                <img
                  src="~@/assets/other_skills/software.svg"
                  alt="software"
                  class="imp-responsive"
                />
                <span>软件调研、设计</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4 section-heading">
            <h1>职业经历</h1>
          </div>
          <div class="col-xs-12 col-md-8">
            <h3 id="2018-年-6-月-至今">2018年6月~至今</h3>
            <p>
              <a href target="https://www.easystack.cn/">EasyStack</a> 软件研发工程师
            </p>
            <ul>
              <li>Soil·云平台纳管技术负责人</li>
              <li>Hamal·云平台迁移技术负责人</li>
            </ul>

            <h3 id="2017-年-7-月-2018-年-6-月">2017年7月~2018年6月</h3>
            <p>
              <a href target="_blank">Lanmudatech</a> 前端研发工程师
            </p>
            <ul>
              <li>智慧信阳App·前端技术开发负责人</li>
            </ul>

            <h3 id="2017-年-1-月-2017-年-6-月">2017年1月~2017年6月</h3>
            <p>
              <a href target="https://www.d-bigdata.com/index.html#/?_k=1ls5ei">BBD</a> 前端研发工程师
            </p>
            <ul>
              <li>数据可视化·组件开发、维护</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4 section-heading">
            <h1>联系</h1>
          </div>
          <div class="col-xs-12 col-md-8">
            <ul class="fa-ul">
              <li>
                <i class="fa fa-li icon iconfont icon-email big-icon"></i>
                <span>
                  <a href="mailto:j.dan92016@gmail.com">j.dan92016@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="container">
        <p class="powered-by">
          © 2020 Jack Dan ·
          Powered by the
          <a
            href="https://github.com/gcushen/hugo-academic"
            target="_blank"
          >
            Academic
            theme
          </a> for
          <a href="http://gohugo.io" target="_blank">Hugo</a>
          .
          <span class="pull-right" aria-hidden="true">
            <a href="#" id="back_to_top">
              <span class="button_icon">
                <i class="fa fa-chevron-up fa-2x"></i>
              </span>
            </a>
          </span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import ResumeAbout from './components/ResumeAbout/ResumeAbout';


@Component({
  name: 'Resume',
  components: {
    ResumeAbout,
  },
})
export default class Resume extends Vue {
  private activeIndex = 0;

  private tabMapOptions = [
    { label: 'home', linkLabel: 'about' },
    { label: 'projects', linkLabel: 'projects' },
    { label: 'skills', linkLabel: 'skills' },
    { label: 'experience', linkLabel: 'experience' },
    { label: 'contact', linkLabel: 'contact' },
  ];

  private handleLocaleLanguage() {
    if (this.$i18n.locale === 'en') {
      this.$i18n.locale = 'zh';
    } else {
      this.$i18n.locale = 'en';
    }
  }

  private handleSwitchTab(index: number) {
    this.activeIndex = index;
  }
}
</script>

<style lang="scss" scoped>
$background-color: #fff;
$border-color: #e7e7e7;
$font-stack: "Lato", sans-serif;

.navbar-default {
  background: $background-color;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.11);
  border-color: $border-color;
  font-family: $font-stack;
  font-weight: 400;
  line-height: 1.25;
  text-rendering: optimizeLegibility;

  .navbar-brand {
    float: left;
    height: inherit;
    line-height: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.36rem;
    color: #2b2b2b;
  }

  .navbar-collapse {
    border-color: #e7e7e7;
    margin-right: 0.3rem;
    margin-left: 0.3rem;
  }
}
$min-height-num: 1.4rem;
.navbar {
  min-height: $min-height-num !important;
  margin-bottom: 0.4rem;
  border: 0.02rem solid transparent;
}
.navbar:before {
  display: table;
  content: "";
}
.navbar:after {
  display: table;
  content: "";
  clear: both;
}
.navbar-fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  border-width: 0 0 0.02rem;

  .navbar-collapse {
    max-height: 6.8rem;
  }
}

.navbar-collapse {
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 0.02rem solid transparent;
  -webkit-box-shadow: inset 0 0.02rem 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 0.02rem 0 rgba(255, 255, 255, 0.1);
}

.collapse {
  display: none;
}

.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  li {
    position: relative;
    display: block;
    font-size: 0.32rem;

    a {
      position: relative;
      display: block;
      padding: 0.2rem 0.3rem;
      height: inherit;
      line-height: 1rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;

      white-space: nowrap;
      transition: 0.2s ease;
      color: #34495e;
      font-weight: 600;
    }
  }
}
.nav:before {
  display: table;
  content: "";
}
.nav:after {
  display: table;
  content: "";
  clear: both;
}

.navbar-nav {
  margin: 0.15rem 0.3rem;

  .active {
    a {
      color: #0095eb;
      font-weight: 700;
      background-color: transparent !important;
    }
  }
}

.navbar-right {
  float: right !important;
  margin-right: -0.3rem;
}

// Second-section
.section-heading {
  h1 {
    margin: 0 0 0.08rem 0;
    font-size: 0.9rem;
  }
}
.project-toolbar {
  margin-bottom: 0.8rem;
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
.btn-group > .btn:first-child {
  margin-left: 0;
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
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background: #0095eb;
}
.btn-toolbar .btn,
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}
.btn-group-vertical > .btn,
.btn-group > .btn {
  position: relative;
  float: left;
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
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
.btn-group {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

#container-projects {
  display: block;
  position: relative;
  margin-top: 2rem;
  overflow: hidden;
}

.isotope-item {
  z-index: 2;
}

.project-item {
  margin-bottom: 0.6rem;
}

.card {
  margin-bottom: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #fff;
  box-shadow: 0 0.016rem 0.032rem 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-out;
  .card-image {
    display: block;
    position: relative;
    min-height: 0.8rem;
  }
}

a {
  color: #337ab7;
  text-decoration: none;
}

a {
  background-color: transparent;
}

a,
h3.article-title a:hover {
  color: #0095eb;
  text-decoration: none;
  transition: color 0.6s ease;
}

.card .card-image.hover-overlay:before {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  content: " ";
  opacity: 0;
  transition: all 0.2s ease-out;
}

.card .card-image.hover-overlay:after {
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  opacity: 0;
  transition: all 0.2s ease-out;
  font-family: "FontAwesome";
  content: "\f0c1";
  text-align: center;
  font-size: 1.2rem;
  color: #666;
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

img,
video {
  height: auto;
  max-width: 100%;
  display: block;
}

img {
  vertical-align: middle;
  border: 0;
}

.card .card-text {
  padding: 0.3rem 0.4rem 0.3rem;
}

.card h4 {
  font-size: 0.36rem;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
}

.card h4 a {
  border-bottom: solid 0.02rem transparent;
  color: #000000;
}

.card p:last-child {
  margin-bottom: 0;
}

.card .card-text p {
  font-size: 0.3rem;
  color: #999999;
}

.dim {
  font-size: 0.3rem;
  color: #8e8e8e;
}

.other-skill-list {
  display: block;
  list-style: none;
}

.other-skill-item .imp-responsive {
  display: inline-block;
  width: 10%;
}

.other-skill-item span {
  font-size: 0.32rem;
}

#contact.home-section .fa-ul {
  margin-left: 1.25rem;
}

#contact.home-section li {
  padding-top: 0.32rem;
  margin-bottom: 0.12rem;
  list-style-type: none;
  padding-left: 0;
}

#contact.home-section .fa-li {
  position: absolute;
  left: 1.14rem;
  width: 0.8rem;
  top: 0.01rem;
  text-align: center;
}

/*************************************************
 *  Footer
 **************************************************/
footer {
  width: 100%;
  padding: 0.6rem 0;
  color: #899596;
  background-color: #f7f7f7;
  p {
    font-size: 0.3rem;
    text-align: center;
  }
}
</style>