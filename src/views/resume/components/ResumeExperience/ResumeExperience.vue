<template>
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
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';


@Component({
    name: 'ResumeExperience',
})

export default class ResumeExperience extends Vue {}
</script>

<style lang="scss" scoped>

</style>