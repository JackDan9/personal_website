<template>
  <section id="about" class="home-section">
    <div class="container">
      <div class="row" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <div class="col-xs-12 col-md-4">
          <div id="profile">
            <div class="portrait" itemprop="image"></div>
            <div class="portrait-title">
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
#description {
  position: relative;
  padding-top: 0.6rem;
  padding-left: 0.2rem;

  h1 {
    font-size: 0.8rem;
  }

  h3 {
    margin-top: 0.4rem;
    font-weight: 700;
    font-size: 0.4rem;
  }

  a {
    transition: color 0.6s ease;
    color: #0095eb;
    text-decoration: none;
  }

  ul {
    list-style: none;

    li {
      position: relative;
      padding: 0 0.3rem 0.08rem 0.06rem;
    }

    .fa-li {
      position: absolute;
      top: -0.04rem;
      left: -0.55rem;
      text-align: center;
    }

    .fa {
      display: inline-block;
      font: normal normal normal 0.28rem/1 FontAwesome;
      font-size: 0.5rem;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .icon-xingquaihao1 {
      color: rgba(255, 0, 0, 0.5);
    }

    .icon-graduation-cap {
      top: 0.04rem;
      font-size: 0.4rem;
    }

    .description {
      p {
        margin: 0;
      }
      p.content {
        font-size: 0.36rem;
      }
      p.course {
        font-size: 0.36rem;
      }
      p.institution {
        font-size: 0.25rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}

#profile {
  position: relative;
  padding: 0.6rem 0.2rem;
  text-align: center;
  
  .portrait {
    background-image: url("~@/assets/avatar.png");
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    border-radius: 50%;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
  }

  .portrait-title {
    h2 {
      margin: 0.4rem 0 0.2rem 0;
      font-size: 0.7rem;
      font-weight: 300;
      color: #000000;
    }
    h3 {
      margin: 0 0 0.2rem 0;
      font-size: 0.4rem;
      font-weight: 400;
      color: #AAAAAA;
      text-transform: uppercase;

      a {
        transition: color 0.6s ease;
        color: #0095eb;
        text-decoration: none;
        text-transform: none;
      }
    }
  }
  ul.social-icon {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-top: 0.6rem;

    li {
      margin-right: 0.2rem;
      a {
        color: #0095eb;
        text-decoration: none;
        transition: color 0.6s ease;

        .fa {
          display: inline-block;
          font: normal normal normal 0.28rem/1 FontAwesome;
          font-size: 1rem;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
    }
  }
}
</style>