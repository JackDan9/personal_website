<template>
  <v-mobile v-if="isMobile"></v-mobile>
  <v-pc v-else-if="!isMobile"></v-pc>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Component, Vue, Watch } from 'vue-property-decorator';
import Mobile from './components/mobile.vue';
import PC from './components/pc.vue';

@Component({
  name: 'SiderBar',
  components: {
    'v-mobile': Mobile,
    'v-pc': PC,
  },
})
export default class SiderBar extends Vue {
  private isShowSidebar: boolean = true;
  private isMobile: boolean = window.matchMedia('(max-width: 575px)').matches || window.matchMedia('(min-width: 576px) and (max-width: 767px)').matches;
}
</script>
<style lang="scss" scoped>
.sider-bar-container {
  background: url("~@/assets/bg.jpg") top left no-repeat #666666;
  background-size: cover;
  .avatar-img {
    transition: transform 0.5s; 
    object-fit:cover;
  }
}
</style>