<template>
    <div id="userLayout" :class="['user-layout-wrapper', device]">
        <div class="container">
            <route-view></route-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator';
import { mixinDevice } from '@/utils/mixin';
import  RouteView from '@/layout/RouteView.vue';

@Component({
    components: {
        RouteView,
    },
    mixins: [mixinDevice]
})
export default class UserLayout extends Vue {
    private data() {
        return {};
    };

    private mounted () {
        document.body.classList.add('userLayout');
    }

    private beforeDestroy () {
        document.body.classList.remove('userLayout');
    }
};
</script>
<style lang="scss" scoped>

</style>
