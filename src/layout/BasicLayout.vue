<template>
    <div id="basicLayout" :class="['basic-layout-wrapper', device]">
        <div class="container">
            <div class="top">
                <nav class="navbar navbar-default navbar-fixed-top" id="navbar-main">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="/">简历</a>
                        </div>
                        <div class="collapse navbar-collapse">
                            <ul class="nav navbar-nav navbar-right">

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>
    $backgroud-color: #fff;
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
    }
    @mixin width($property) {
        width: $property;
    }

    @media (min-wdith: 768px)
    .container {
        @include width(750px);

        .navbar-header {
            float: left;
            margin-right: 0;
            margin-left: 0;
        }

        .navbar-brand {
            margin-left: -15px;
        }
    }

    @media (min-width: 992px)
    .container {
        @include width(970px);


    }

    @media (min-width: 1200px)
    .container {
        @include width(1170px);
        
        .navbar-header {
            float: none;
            min-height: inherit;
        }

        .navbar-brand {
            height: inherit;
            line-height: 40px;
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }
    
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;

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
</style>