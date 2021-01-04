<template>
  <div class="w-full flex flex-col sm:flex-col md:flex-col xl:flex-row">
    <div class="w-full sm:w-full md:w-full xl:w-1/2">
      <img class="w-auto h-auto" src="../../assets/pay/wechat.png" alt="wechat" title="刨去网站本身的运营费用，全部捐到山区" />
    </div>
    <div class="w-full sm:w-full md:w-full xl:w-1/2">
      <img class="w-auto h-auto" src="../../assets/pay/alipay.png" alt="alipay" title="刨去网站本身的运营费用，全部捐到山区" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({})
export default class Pay extends Vue {
}
</script>
<style lang="scss" scoped>
</style>