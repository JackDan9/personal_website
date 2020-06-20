<template>
  <section id="about" class="home-section">
    <div class="container">
      <div class="row" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <div class="col-xs-12 col-md-4">
          <div id="profile">
            <div class="portrait" itemprop="image"></div>
            <div class="portrait-tnavShowitle">
              <h2 itemprop="author">{{ $t('author') }}</h2>
              <h3 itemprop="jobTitle">{{ $t('jobTitle') }}</h3>
              <h3 itemprop="worksFor">
                <a href="/home" target="_blank">JackDan's Den(@jackdan)</a>
              </h3>
            </div>
            <ul class="social-icon" aria-hidden="true">
              <li>
                <a href target="_blank">
                  <i class="fa icon iconfont icon-email big-icon"></i>
                </a>
              </li>
              <li>
                <a href target="_blank">
                  <i class="fa icon iconfont icon-twitter big-icon"></i>
                </a>
              </li>
              <li>
                <a href target="_blank">
                  <i class="fa icon iconfont icon-weibo big-icon"></i>
                </a>
              </li>
              <li>
                <a href target="_blank">
                  <i class="fa icon iconfont icon-github big-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xs-12 col-md-8" itemprop="description">
          <div id="description">
            <h1 id="summary">{{ $t('summary') }}</h1>
            <p style="font-size: 0.4rem">{{ $t('summary_detail') }}</p>
            <p style="font-size: 0.4rem">{{ $t('summary_subdetail') }}</p>
            <p style="font-size: 0.4rem">
              {{ $t('summary_work01') }}
              <a href="https://www.easystack.cn" target="_blank">EasyStack</a>
              {{ $t('summary_work02') }}
            </p>
            <div class="row">
              <div class="col-sm-5">
                <h3>{{ $t('interests') }}</h3>
                <ul class="ul-interests fa-ul">
                  <li>
                    <i class="fa-li fa icon iconfont icon-xingquaihao1"></i>
                    <div class="description">
                      <p class="content">{{ $t('web_services') }}</p>
                    </div>
                  </li>
                  <li>
                    <i class="fa-li fa icon iconfont icon-xingquaihao1"></i>
                    <div class="description">
                      <p class="content">{{ $t('mobile_internet') }}</p>
                    </div>
                  </li>
                  <li>
                    <i class="fa-li fa icon iconfont icon-xingquaihao1"></i>
                    <div class="description">
                      <p class="content">{{ $t('open_source_software') }}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-sm-7">
                <h3>{{ $t('education') }}</h3>
                <ul class="ul-edu fa-ul">
                  <li>
                    <i class="fa-li fa icon iconfont icon-graduation-cap"></i>
                    <div class="description">
                      <p class="course">{{ $t('profession') }}</p>
                      <p class="institution">{{ $t('college') }}</p>
                    </div>
                  </li>
                </ul>
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
  name: 'ResumeAbout',
})
export default class ResumeAbout extends Vue {}
</script>

<style lang="scss" scoped>
</style>