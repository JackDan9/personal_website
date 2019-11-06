<template>
    <div class="panel-main">
        <div class="panel-inverted panel-main__inner">
            <div class="panel-main__content">
                <a href="/blog" title="前往 JackDan's Den 的主页" class="blog-button">
                    <img src="~@/assets/logo.png" width="80" alt="JackDan's Den Logo" class="panel-cover__logo logo"></img>
                </a>
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
</style>