<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top" id="navbar-main">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">{{ $t('resume-title') }}</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li v-for="(item, index) in tabMapOptions" 
                            v-bind:key="index"
                            v-bind:class="[activeIndex == index ? 'active' : '']"
                            @click="handleSwitchTab(index)">
                            <a href="#" data-target="">
                                <span>{{ $t(item.label) }}</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a style="cursor: pointer" @click="handleLocaleLanguage()" data-target="">
                                <span>{{ $t('language') }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section id="about" class="home-section">
            <div class="container">
                <div class="row" itemprop="author" itemscope itemtype="http://schema.org/Person">
                    <div class="col-xs-12 col-md-4">
                        <div id="profile">
                            <div class="portrait" itemprop="image">
                            </div>
                            <div class="portrait-title">
                                <h2 itemprop="author">{{ $t('author') }}</h2>
                                <h3 itemprop="jobTitle">{{ $t('jobTitle') }}</h3>
                                <h3 itemprop="worksFor">
                                    <a href="/home" target="_blank">
                                        JackDan's Den(@jackdan)
                                    </a>
                                </h3>
                            </div>
                            <ul class="social-icon" aria-hidden="true">
                                <li>
                                    <a href="" target="_blank">
                                        <i class="fa icon iconfont icon-email big-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        <i class="fa icon iconfont icon-twitter big-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        <i class="fa icon iconfont icon-weibo big-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        <i class="fa icon iconfont icon-github big-icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-8" itemprop="description">
                        <div id="description">
                            <h1 id="summary">{{ $t('summary') }}</h1>
                            <p style="font-size: 1rem">{{ $t('summary_detail') }}</p>
                            <p></p>
                            <p></p>
                            <div class="row">
                                <div class="col-sm-5">
                                    <h3></h3>
                                    <ul class="ul-interests"></ul>
                                </div>
                                <div class="col-sm-7">
                                    <h3></h3>
                                    <ul class="ul-edu fa-ul"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
    name: 'Resume',
})
export default class Resume extends Vue {
    private activeIndex = 0;

    private tabMapOptions = [
        { label: 'home', linkLabel: 'about' },
        { label: 'projects', linkLabel: 'projects' },
        { label: 'skills', linkLabel: 'skills' },
        { label: 'experience', linkLabel: 'experience' },
        { label: 'contact', linkLabel: 'contact' }
    ]

    private handleLocaleLanguage() {
        if (this.$i18n.locale === 'en') {
            this.$i18n.locale = 'zh';
        } else {
            this.$i18n.locale = 'en';
        }
    }

    private handleSwitchTab(index:number) {
        this.activeIndex = index;
    }
}
</script>
<style lang="scss" scoped>
    $background-color: #fff;
    $border-color: #e7e7e7;
    $font-stack: 'Lato', sans-serif;
    .navbar-default {
        background: $background-color;
        box-shadow: 0 0.125rem 0.25rem 0 rgba(0,0,0,.11);
        border-color: $border-color;
        font-family: $font-stack;
        font-weight: 400;
        line-height: 1.25;
        text-rendering: optimizeLegibility;

        .navbar-brand {
            float: left;
            height: inherit;
            line-height: 50px;
            padding-top: 10px;
            padding-bottom: 10px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 1.2em;
            color: #2b2b2b; 
        }
        
        .navbar-collapse {
            border-color: #e7e7e7;
            margin-right: 15px;
            margin-left: 15px;
        }
    }
    $min-height-num: 70px;
    .navbar {
        min-height: $min-height-num !important;
        margin-bottom: 20px;
        border: 1px solid transparent;
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
        border-width: 0 0 1px;

        .navbar-collapse {
            max-height: 340px;
        }
    }

    .navbar-collapse {
        padding-right: 15px;
        padding-left: 15px;
        overflow-x: visible;
        -webkit-overflow-scrolling: touch;
        border-top: 1px solid transparent;
        -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
        box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
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
            font-size: 16px;

            a {
                position: relative;
                display: block;
                padding: 10px 15px;
                height: inherit;
                line-height: 50px;
                padding-top: 10px;
                padding-bottom: 10px;

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
        margin: 7.5px 15px;

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
        margin-right: -15px;
    }
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        min-height: 70px;

        .navbar-header {
            margin-right: -15px;
            margin-left: -15px;
        }

        .navbar-header:before {
            display: table;
            content: "";
        }
        .navbar-header:after {
            display: table;
            content: "";
            clear: both;
        }
    }

    .container:before {
        display: table;
        content: "";
    }
    .container:after {
        display: table;
        content: "";
        clear: both;
    }
    @mixin width($property) {
        width: $property;
    }

    @media (min-width: 768px) {
        .container {
            @include width(750px);

            .navbar-brand {
                margin-left: -15px;
            }

            .navbar-collapse {
                margin-right: 0;
                margin-left: 0;
                padding-right: 0;
                padding-left: 0;
            }

            .navbar-header {
                float: none;
                min-height: inherit;
                margin-left: 0;
                margin-right: 0;
            }
        }
        .collapse {
            display: block !important;
            height: auto !important;
            padding-bottom: 0;
            overflow: visible !important;
        }
        .navbar-collapse {
            width: auto;
            border-top: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        .navbar-nav {
            float: left;
            margin: 0;
        }

        .nav {
            li {
                float: left;
            }
        }
    }

    @media (min-width:992px) {
        .container {
            @include width(970px);


        }
    }

    @media (min-width:1200px) {
        .container {
            @include width(1170px);
            
            .navbar-header {
                float: left;
                margin-right: 0;
                margin-left: 0;
                min-height: inherit;
            }

            .navbar-brand {
                height: inherit;
                line-height: 50px;
                padding-top: 10px;
                padding-bottom: 10px;
            }
        }
    }

    .home-section:first-of-type {
        padding-top: 70px;
    }
    .home-section {
        background-color: rgb(255, 255, 255);
        padding: 110px 0 110px 0;
        animation: intro 0.3s both;
        animation-delay: 0.15s;
    }
    .row {
        margin-left: 0px;
        margin-right: 0px;
    }
    .row:before {
        content: " ";
        display: table;
    }
    .row:after {
        content: " ";
        display: table;
        clear: both;
    }
    #description {
        padding-top: 30px;
        padding-left: 10px;
        position: relative;
        h1 {
            font-size: 2.25rem;
        }
        p {
            margin: 0 0 10px;
            margin-bottom: 1rem;
        }
    }
    #profile {
        text-align: center;
        padding: 30px 10px;
        position: relative;

        .portrait {
            background-image: url('~@/assets/avtar.png');
            width: 200px;
            height: 200px;
            margin: 0 auto;
            border-radius: 50%;
            background-size: cover;
            -webkit-background-size: cover;
            -moz-background-size: cover;
        }

        .portrait-title {
            h2 {
                font-size: 1.75em;
                font-weight: bold;
                color: #000000;
                text-transform: uppercase;
                margin: 20px 0 10px 0;
            }
            h3 {
                font-size: 1.13em;
                font-weight: 400;
                color: #AAAAAA;
                text-transform: uppercase;
                margin: 0px 0 10px 0;

                a {
                    color: #0095eb;
                    text-decoration: none;
                    text-transform: none;
                    transition: color 0.6s ease;
                }
            }
        }
        ul.social-icon {
            display: inline-flex;
            flex-direction: row;
            flex-wrap: wrap;
            list-style: none;
            padding: 0;
            margin-top: 30px;

            li {
                margin-right: 10px;
                a {
                    color: #0095eb;
                    text-decoration: none;
                    transition: color 0.6s ease;

                    .fa {
                        display: inline-block;
                        font: normal normal normal 14px/1 FontAwesome;
                        font-size: 2rem;
                        text-rendering: auto;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                }
            }
        }
    }
    .big-icon {
        font-size: 2rem;
    }
</style>