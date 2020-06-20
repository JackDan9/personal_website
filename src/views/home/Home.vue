<template>
    <div class="panel-main">
        <div class="panel-inverted panel-main__inner">
            <div class="panel-main__content">
                <a href="/blog" title="前往 JackDan's Den 的主页" class="blog-button">
                    <img src="~@/assets/logo.png" width="80" alt="JackDan's Den Logo" class="panel-cover__logo logo" />
                </a>

                <h1 class="panel-cover__title panel-title">
                    <a href="/blog" title="link to homepage for JackDan's Den" class="blog-button">JackDan's Den</a>
                </h1>

                <span class="panel-cover__subtitle panel-subtitle">一份耕耘，一份收获</span>
                <span class="panel-cover__subtitle panel-subtitle">No Pains, No Gains</span>
                <hr class="panel-cover__divider" />
                <p class="panel-cover__description">Hi, 我是单军军(@jackdan), 一名狂热的前端开发者。</p>
                <hr class="panel-cover__divider panel-cover__divider--secondary" />
                <p class="panel-cover__description"></p>
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
                    <div>
                        <nav class="cover-navigation navigation--social">
                            <ul class="navigation">
                                <!-- Weibo -->
                                <li class="navigation__item">
                                    <a href="http://weibo.com/jackdan" title="@jackdan 的微博" target="_blank">
                                        <i class="social fa icon iconfont icon-weibo">
 
                                        </i>
                                    </a>
                                </li>
                                <!-- Github -->
                                <li class="navigation__item">
                                    <a href="http://weibo.com/jackdan" title="@jackdan 的 Github" target="_blank">
                                        <i class="social fa icon iconfont icon-github">
 
                                        </i>
                                    </a>
                                </li>
                                <!-- Twitter -->
                                <li class="navigation__item">
                                    <a href="http://weibo.com/jackdan" title="@jackdan 的 Twitter" target="_blank">
                                        <i class="social fa icon iconfont icon-twitter">
 
                                        </i>
                                    </a>
                                </li>
                                <!-- Google Plus -->
                                <li class="navigation__item">
                                    <a href="http://weibo.com/jackdan" title="@jackdan 的 Google Plus" target="_blank">
                                        <i class="social fa icon iconfont icon-googleplussquare">
 
                                        </i>
                                    </a>
                                </li>
                                <!-- RSS -->
                                <li class="navigation__item">
                                    <a href="http://weibo.com/jackdan" title="@jackdan 的 RSS" target="_blank">
                                        <i class="social fa icon iconfont icon-rss">
 
                                        </i>
                                    </a>
                                </li>
                                <!-- Email -->
                                <li class="navigation__item">
                                    <a href="http://weibo.com/jackdan" title="@jackdan 的 Email" target="_blank">
                                        <i class="social fa icon iconfont icon-email">
 
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
    name: 'Name',
})
export default class Home extends Vue {
    private homeTabOptions = [

    ];
}
</script>

<style lang="scss" scoped>
    .panel-main {
        display: table;
        width: 100%;
        height: 100%;
    }
    .panel-inverted {
        font-weight: 100;
        text-align: center;
        color: #FFF;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);

        a {
            color: #FFF;
        }
    }
    .panel-main__inner {
        display: table-cell;
        position: relative;
        z-index: 900;
        padding: 0 1.2rem;
        vertical-align: middle;
    }
    .panel-main__content {
        max-width: 12.4rem;
        margin: 0 auto;
    }
    .panel-cover__logo {
        margin-bottom: 0.06rem;
    }
    .logo {
        border-radius: 50%;
        border: 0.06rem solid #FFF;
        box-shadow: 0 0 0.02rem 0.02rem rgba(0, 0, 0, 0.3);
    }
    .panel-title {
        margin: 0 0 0.1rem 0;
        font-size: 0.75rem;
        letter-spacing: 0.08rem;
        color: #FFF;

    }
    .panel-subtitle {
        display: block;
        font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
        font-size: 0.36rem;
        font-weight: lighter;
        letter-spacing: 0.06rem;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }
    .panel-cover__divider {
        width: 50%;
        margin: 0.4rem auto;
        border-top: 0.02rem solid rgba(255, 255, 255, 0.14);
    }
    .panel-cover__description {
        margin: 0 0.6rem;
        font-size: 0.4rem;
        line-height: 0.51rem;
    }
    .panel-cover__divider--secondary {
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
            border: 1px solid #FFF;
            border-radius: 0.4rem;
            color: #FFF;
            font-size: 0.27rem;
            font-weight: bold;
            letter-spacing: 0.02rem;
            text-shadow: none;
            -webkit-font-smoothing: antialiased;
            opacity: .8;
        }
        a:hover {
            color: #FFF;
            border-color: #FFF; 
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
</style>