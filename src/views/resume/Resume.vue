<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top" id="navbar-main">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">{{ $t('resume-title') }}</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="nav-item">
                            <a href="/#about" data-target="#about">
                                <span>{{ $t('home') }}</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/#about" data-target="#about">
                                <span>{{ $t('projects') }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Resume extends Vue {
    private currentLocale = 'en';


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
</style>