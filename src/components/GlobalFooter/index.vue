<template>
  <footer
    class="flex w-full justify-center absolute py-0 px-2 lg:px-4 xl:px-4 pl-0 h-10 md:h-12 lg:h-16 xl:h-20 bg-white text-sm global-footer-color">
    <div class="flex justify-between items-center">
      <div class="w-full">
        <p class="m-0">
          © {{ currentYear }}
          <a class="text-sm lg:text-base xl:text-base italic text-teal-700" href="https://github.com/JackDan9/">{{ githubName }}</a>
          .
          <span>{{ content }}</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class GlobalFooter extends Vue {
  private currentYear:string = '2020';
  private githubName:string = 'JackDan';
  private content:string = '保留部分权益';
}
</script>

<style lang="scss" scoped>
</style>