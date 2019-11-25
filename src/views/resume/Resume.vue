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
                            <div class="portrait-tnavShowitle">
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
                            <p style="font-size: 1rem">{{ $t('summary_subdetail') }}</p>
                            <p style="font-size: 1rem">
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
                                        <a href="#" data-filter="*" class="btn btn-primary btn-large active">{{ $t('all') }}</a>
                                        <a href="#" data-filter=".app" class="btn btn-primary btn-large">{{ $t('app') }}</a>
                                        <a href="#" data-filter=".web" class="btn btn-primary btn-large">{{ $t('web') }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="container-projects" class="row isotope" style="position: relative; height: 1734px;">
                            <!-- First Web Project -->
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope-item web" style="position: absolute; left: 0px; top: 0px">
                                <div class="card">
                                    <a href="" title="" class="card-image hover-overlay" target="_blank">
                                        <img src="~@/assets/soil.jpg" alt="soil" class="imp-responsive" />
                                    </a>
                                    <div class="card-text">
                                        <h4>
                                            <a href="" target="_blank"></a>
                                        </h4>
                                        <div class="card-description">
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Second Web Project -->
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope web" style="position: absolute; left: 365px; top: 0px;">

                            </div>
                            <!-- Third App Project -->
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope app" style="position: absolute; left: 0px; top: 578px;">
                                
                            </div>
                            <!-- Fourth App Project -->
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope app" style="position: absolute; left: 365px; top: 578px;">
                                
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
                        <p>I also built and worked on these projects: </p>
                        <h3 id="scrapy-mygirl">
                            <a href="" target="_blank">scrapy-mygirl</a>
                        </h3>
                        <p>
                            <span class="dim">scrapy weather</span>
                        </p>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="selected_skills" class="home-section">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-4 section-heading">
                        <h1>Selected Skills</h1>
                    </div>
                    <div class="col-xs-12 col-md-8">

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
    .home-section:nth-of-type(even) {
        background-color: rgb(247, 247, 247);
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
        h3 {
            font-weight: 700;
            margin-top: 1.5rem;
            font-size: 1.25rem;
        }
        a {
            color: #0095eb;
            text-decoration: none;
            transition: color 0.6s ease;
        }
        .ul-interests {
            list-style: none;

            li {
                position: relative;
                padding: 0px 15px 4px 3px;

                i {
                    font-size: 29px !important;
                    color: rgba(255, 0, 0, 0.5);
                    top: -0.08em !important;
                    left: -1.84285714em !important;
                    margin-right: -10px;
                    
                }
            }
        }
        .ul-edu {
            list-style: none;

            li {
                position: relative;
                padding: 0px 15px 4px 3px;
            }
        }
        .fa-ul {
            padding-left: 0;
            margin-left: 2.14285714em;
            list-style-type: none;

            .fa-li {
                position: absolute;
                left: -2.14285714em;
                width: 2.14285714em;
                top: 0.3685714em;
                text-align: center;
            }

            .fa {
                display: inline-block;
                font: normal normal normal 14px/1 FontAwesome;
                font-size: inherit;
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            .description {
                p {
                    margin: 0;
                }
                p.cource {
                    font-size: 0.9rem;
                }
                p.content {
                    font-size: 0.9rem;
                }
                p.institution {
                    font-size: 0.75rem;
                    color: rgba(0,0,0,0.6);
                }
            }
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

    // Second-section
    .section-heading {
        h1 {
            margin: 0 0 10px 0;
            font-size: 2.24rem;
        }
    }
    .project-toolbar {
        margin-bottom: 2rem;
    }
    .btn-toolbar {
        margin-left: -5px;
        .btn-group {
            float: left;
            margin-left: 5px;
            
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
                padding: 6px 12px;
                margin-bottom: 0;
                font-size: 14px;
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
                border: 1px solid transparent;
                border-radius: 4px;

                font-size: 0.9rem;
                padding: 10px 14px 9px;
                border: none;
            }

        }
        .btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
            border-radius: 0;
        }
        // .btn {
        //     font-size: 0.9rem;
        //     padding: 10px 14px 9px;
        //     border: none;
        // }
    }
    .btn-group-vertical>.btn.active, .btn-group-vertical>.btn:active, .btn-group-vertical>.btn:focus, .btn-group-vertical>.btn:hover, .btn-group>.btn.active, .btn-group>.btn:active, .btn-group>.btn:focus, .btn-group>.btn:hover {
        z-index: 2;
    }
    .btn-group>.btn:first-child {
        margin-left: 0;
    }
    .btn-toolbar .btn:first-child {
        border-radius: 6px 0 0 6px;
    }
    .btn-toolbar .btn:last-child {
        border-radius: 0 6px 6px 0;
    }
    .btn-toolbar .btn.btn-primary:active, .btn-toolbar .btn.btn-primary.active {
        background-color: rgba(0,89,175,1);
    }
    .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {
        background: #0095eb;
    }
    .btn-toolbar .btn, .btn-toolbar .btn-group, .btn-toolbar .input-group {
        float: left;
    }
    .btn-group-vertical>.btn, .btn-group>.btn {
        position: relative;
        float: left;
    }
    .btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {
        background-image: none;
    }
    .btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
    }
    .btn.active, .btn:active {
        background-image: none;
        outline: 0;
        -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
        box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    }
    .btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .btn-group>.btn:last-child:not(:first-child), .btn-group>.dropdown-toggle:not(:first-child) {
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
        margin-top: 5rem;
        overflow: hidden;
    }

    .isotope-item {
        z-index: 2;
    }

    .project-item {
        margin-bottom: 1.5rem;
    }

    .card {
        margin-bottom: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        transition: all 0.2s ease-out;
        .card-image {
            display: block;
            position: relative;
            min-height: 100px;
        }
    }
    
    a {
        color: #337ab7;
        text-decoration: none;
    }

    a {
        background-color: transparent;
    }

    a, h3.article-title a:hover {
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
        font-family: 'FontAwesome';
        content: '\f0c1';
        text-align: center;
        font-size: 3rem;
        color: #666;
    }

    .img-responsive {
        margin: 0 auto;
    }

    .carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    img, video {
        height: auto;
        max-width: 100%;
        display: block;
    }

    img {
        vertical-align: middle;
        border: 0;
    }

    .card .card-text {
        padding: 0.75rem 1rem 0.75rem;
    }

    .card h4 {
        font-size: 0.9rem;
        font-weight: 700;
        line-height: 1.5;
        text-transform: uppercase;
    }

    .card h4 a {
        color: #000;
        border-bottom: solid 1px transparent;
    }

    .card p:last-child {
        margin-bottom: 0;
    }

    .card .card-text p {
        color: #999999;
        font-size: 0.75rem;
    }

    .dim {
        font-size: 0.7em;
        color: #8e8e8e;
    }
</style>