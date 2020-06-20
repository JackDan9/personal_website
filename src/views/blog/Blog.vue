<template>
  <div class="container">
    <div class="blog-header">
      <div class="blog-main-header">
        <div class="blog-header-panel">
          <div class="panel-main-content">
            <a href="/blog" title="前往 JackDan's Den的主页" class="blog-button">
              <img
                src="~@/assets/logo.png"
                width="80"
                alt="JackDan's Den Logo"
                class="panel-cover-logo logo"
              />
            </a>
            <h1 class="panel-cover-title panel-title">
              <a
                href="/blog"
                title="link to homepage for JackDan's Den"
                class="blog-button"
              >JackDan's Den</a>
            </h1>

            <span class="panel-cover-subtitle panel-subtitle">一份耕耘，一份收获！</span>
            <span class="panel-cover-subtitle panel-subtitle">No Pains, No Gains!</span>

            <hr class="panel-cover-divider" />

            <p class="panel-cover-description">Hi, 我是单军军(@jackdan), 一名狂热的前端开发者。</p>

            <hr class="panel-cover-divider panel-cover-divider--secondary" />

            <p class="panel-cover-description"></p>

            <div class="navigation-wrapper">
              <div>
                <nav class="cover-navigation cover-navigation--primary">
                  <ul class="navigation">
                    <li class="navigation__item">
                      <a href="/blog" title="访问博客" class="blog-button">博客</a>
                    </li>
                    <li class="navigation__item">
                      <a href="/resume" title="我得简历" class="blog-button">简历</a>
                    </li>
                    <li class="navigation__item">
                      <a href="/apps" title="我所使用的 app 们" class="blog-button">工具</a>
                    </li>
                    <li class="navigation__item">
                      <a href="/subscribe" target="_blank" title="邮件订阅本站" class="blog-button">订阅</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div>
              <nav class="cover-navigation navigation--social">
                <ul class="navigation">
                  <!-- Weibo -->
                  <li class="navigation__item">
                    <a href="http://weibo.com/jackdan" title="@jackdan 的微博" target="_blank">
                      <i class="social fa icon iconfont icon-weibo"></i>
                    </a>
                  </li>
                  <!-- Github -->
                  <li class="navigation__item">
                    <a href="http://weibo.com/jackdan" title="@jackdan 的 Github" target="_blank">
                      <i class="social fa icon iconfont icon-github"></i>
                    </a>
                  </li>
                  <!-- Twitter -->
                  <li class="navigation__item">
                    <a href="http://weibo.com/jackdan" title="@jackdan 的 Twitter" target="_blank">
                      <i class="social fa icon iconfont icon-twitter"></i>
                    </a>
                  </li>
                  <!-- Google Plus -->
                  <li class="navigation__item">
                    <a
                      href="http://weibo.com/jackdan"
                      title="@jackdan 的 Google Plus"
                      target="_blank"
                    >
                      <i class="social fa icon iconfont icon-googleplussquare"></i>
                    </a>
                  </li>
                  <!-- RSS -->
                  <li class="navigation__item">
                    <a href="http://weibo.com/jackdan" title="@jackdan 的 RSS" target="_blank">
                      <i class="social fa icon iconfont icon-rss"></i>
                    </a>
                  </li>
                  <!-- Email -->
                  <li class="navigation__item">
                    <a href="http://weibo.com/jackdan" title="@jackdan 的 Email" target="_blank">
                      <i class="social fa icon iconfont icon-email"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blog-content">
      <div class="blog-main-content">
        <ul class="blog-list">
          <li>
            <h2 class="blog-post-title">Redux渲染原理</h2>
            <p
              class="blog-excerpt"
            >这篇文章不是针对当前版本 Swift 3 的，而是对预计于 2018 年发布的 Swift 5 的一些特性的猜想。如果两年后我还记得这篇文章，可能会回来更新一波。在此之前，请当作一篇对现代语言并行编程特性的不太严谨科普文来看待。CPU 速度已经很多年没有大的突破了，硬件行业更多地将重点放在多核心技术上，而与之对应，软件中并行编程的概念也越来越重要。如何利用多核心 CPU，以及拥有密集计算单元的 GPU，来进行快速的处理和计算，是很多开发者十分感兴趣的事情。在今年年初 Swift 4 的</p>
            <div class="blog-meta">
              <time datetime="2020-06-16" class="blog-meta-date">2020-06-16</time> •
              <span class="blog-meta-tags">React修炼手册</span>
              <a class="blog-btn-border-small">继续阅读</a>
            </div>
            <hr class="blog-divider" />
          </li>

          <li>
            <h2 class="blog-post-title">Redux渲染原理</h2>
            <p
              class="blog-excerpt"
            >这篇文章不是针对当前版本 Swift 3 的，而是对预计于 2018 年发布的 Swift 5 的一些特性的猜想。如果两年后我还记得这篇文章，可能会回来更新一波。在此之前，请当作一篇对现代语言并行编程特性的不太严谨科普文来看待。CPU 速度已经很多年没有大的突破了，硬件行业更多地将重点放在多核心技术上，而与之对应，软件中并行编程的概念也越来越重要。如何利用多核心 CPU，以及拥有密集计算单元的 GPU，来进行快速的处理和计算，是很多开发者十分感兴趣的事情。在今年年初 Swift 4 的</p>
            <div class="blog-meta">
              <time datetime="2020-06-16" class="blog-meta-date">2020-06-16</time> •
              <span class="blog-meta-tags">React修炼手册</span>
              <a class="blog-btn-border-small">继续阅读</a>
            </div>
            <hr class="blog-divider" />
          </li>
        </ul>
        <nav class="pagination" role="navigation">
          <span class="pagination-page-number">1 / 7</span>
          <a class="older-posts pagination-order">更早 -></a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'Blog',
})
export default class Blog extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  .blog-header {
    display: block;
    position: fixed;
    z-index: 900;
    background-image: url("~@/assets/bg.jpg");
    max-width: 14rem;
    width: 30%;
    height: 100%;
    background: url("~@/assets/bg.jpg") top left no-repeat #666666;
    background-size: cover;
    .blog-main-header {
      display: table;
      width: 100%;
      height: 100%;
      .blog-header-panel {
        display: table-cell;
        position: relative;
        z-index: 800;
        padding: 0 1.2rem;
        font-weight: 100;
        text-align: center;
        vertical-align: middle;
        color: #fff;
        text-shadow: 0 0.02rem 0.02rem rgba(0, 0, 0, 0.4);
        .panel-main-content {
          max-width: 12.4rem;
          margin: 0 auto;
          a {
            text-decoration: none;
            color: #ffffff;

            .panel-cover-logo {
              margin-bottom: 0.06rem;
              border-radius: 50%;
              border: 0.06rem solid #ffffff;
              box-shadow: 0 0 0.02rem 0.02rem rgba(0, 0, 0, 0.3);
            }
          }
          .panel-title {
            margin: 0 0 0.1rem 0;
            font-size: 0.75rem;
            letter-spacing: 0.08rem;
            color: #ffffff;
            line-height: 1rem;
          }
          .panel-subtitle {
            display: block;
            font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2",
              "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3",
              "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            font-size: 0.36rem;
            font-weight: lighter;
            letter-spacing: 0.06rem;
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
          }
          .panel-cover-divider {
            width: 50%;
            margin: 0.4rem auto;
            border-top: 0.02rem solid rgba(255, 255, 255, 0.14);
          }
          .panel-cover-description {
            margin: 0 0.6rem;
            font-size: 0.4rem;
            line-height: 0.51rem;
          }
          .panel-cover-divider--secondary {
            width: 15%;
          }
          .cover-navigation {
            position: relative;
            display: inline-block;
            margin-top: 0.84rem;
          }
          .navigation {
            position: relative;
            display: inline-block;
            margin: 0;
            list-style-type: none;
            list-style: none;
          }
          .navigation__item {
            display: inline-block;
            margin: 0.1rem 0.1rem 0 0;
            line-height: 0.3rem;

            a {
              position: relative;
              display: block;
              padding: 0.2rem 0.4rem;
              border: 1px solid #fff;
              border-radius: 0.4rem;
              color: #fff;
              font-size: 0.27rem;
              font-weight: bold;
              letter-spacing: 0.02rem;
              text-shadow: none;
              -webkit-font-smoothing: antialiased;
              opacity: 0.8;
            }
            a:hover {
              color: #fff;
              border-color: #fff;
              opacity: 1;
            }
          }
          .fa {
            display: inline-block;
            font-style: normal;
            font-weight: normal;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .social {
            font-size: 0.44rem;
          }
          .navigation--social {
            a {
              border: 0;
              padding: 0.12rem 0.16rem 0.12rem 0.18rem;
            }
          }
        }
      }
    }
  }
  .blog-content {
    z-index: 800;
    width: 70%;
    margin-left: 30%;
    .blog-main-content {
      margin: 0 10%;
      padding: 1rem 0;
      max-width: 17rem;
      .blog-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        text-align: left;
        li {
          margin: 0 0 0.44rem 0;
          .blog-post-title {
            margin-top: 0;
            margin-bottom: 0.06rem;
            font-size: 0.45rem;
            line-height: 0.39rem;
            a {
              color: #333333;
            }
          }
          .blog-excerpt {
            margin: 0;
            font-size: 0.27rem;
            color: #999999;
            line-height: 0.51rem;
          }
          .blog-meta {
            margin: 0.21rem 0 0 0;
            font-size: 0.27rem;
            color: #c7c7c7;
            line-height: 0.6rem;
            .blog-meta-date {
              font-size: 0.24rem;
              margin-right: 0.15rem;
              color: #c7c7c7;
            }
            .blog-meta-tags {
              font-size: 0.24rem;
              margin-left: 0.15rem;
            }
            .blog-btn-border-small {
              border: 0.02rem solid #c0363f;
              border-radius: 0.4rem;
              padding: 0.12rem 0.16rem;
              font-size: 0.24rem;
              margin-left: 0.2rem;
              text-decoration: none;
              color: #c0363f;
            }
          }
          .blog-divider {
            width: 30%;
            margin: 0.66rem 0 0.63rem 0;
            border-top: 0.02rem solid #dddddd;
          }
        }
      }
      .pagination {
        display: block;
        margin: 0 0 1.2rem 0;
        .pagination-page-number {
          margin: 0;
          font-size: 0.24rem;
          color: #999999;
        }
        .pagination-order {
          margin-left: 0.3rem;
          padding: 0.16rem 0.24rem;
          font-size: 0.21rem;
          border-color: #999999;
          color: #999999;
          border: 0.02rem solid #c0363f;
          border-radius: 0.4rem;
          font-weight: bold;
          letter-spacing: 0.02rem;
          text-shadow: none;
          -webkit-font-smoothing: antialiased;
          text-decoration: none;
          cursor: pointer;
        }

      }
    }
  }
}
</style>
