<template>
    <div class="panel-main">
        <div class="panel-inverted panel-main__inner">
            <div class="panel-main__content">
                <a href="/blog" title="前往 JackDan's Den 的主页" class="blog-button">
                    <img src="~@/assets/logo.png" width="80" alt="JackDan's Den Logo" class="panel-cover__logo logo"></img>
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
                <div class="navigation-wrapper"></div>
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
        z-index: 800;
        padding: 0 60px;
        vertial-align: middle;
    }
    .panel-main__content {
        max-width: 620px;
        margin: 0 auto;
    }
    .panel-cover__logo {
        margin-bottom: .2em;
    }
    .logo {
        border-radius: 50%;
        border: 3px solid #FFF;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
    }
    .panel-title {
        margin: 0 0 5px 0;
        font-size: 2.5em;
        letter-spacing: 4px;
        color: #FFF;

    }
    .panel-subtitle {
        display: block;
        font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
        font-size: 1.2em;
        font-weight: lighter;
        letter-spacing: 3px;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }
    .panel-cover__divider {
        width: 50%;
        margin: 20px auto;
        border-top: 1px solid rgba(255, 255, 255, 0.14);
    }
    .panel-cover__description {
        margin: 0 30px;
    }
    .panel-cover__divider--secondary {
        width: 15%;
    }
    
</style>