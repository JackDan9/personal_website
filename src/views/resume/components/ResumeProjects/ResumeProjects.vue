<template>
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
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';


@Component({
  name: 'ResumeProjects',
})

export default class ResumeProjects extends Vue {}
</script>

<style lang="scss" scoped>
.dim {
  font-size: 0.3rem;
  color: #8e8e8e;
}
</style>