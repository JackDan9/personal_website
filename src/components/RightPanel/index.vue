<template>
  <!-- right panel -->
  <div
    class="mt-0 md:mt-4 lg:mt-8 xl:mt-10 ml-0 sm:ml-0 md:ml-4 lg:ml-6 xl:ml-8 hidden sm:hidden md:hidden lg:hidden xl:block xxxl:block"
    style="max-width: 300px"
  >
    <div
      class="sticky top-8 mr-6 mt-12 mb-16"
      style="transition: top 0.2s ease-in-out"
    >
      <div class="mb-16 pl-4 border-l border-gray-500">
        <h3
          class="pt-2 pb-2 mt-0 mb-0 text-base text-gray-600 font-semibold tracking-tight"
        >
          最近更新
        </h3>
        <ul class="text-sm pb-1 pl-0 mt-2 ml-1 mb-4">
          <li class="h-8 truncate overflow-hidden" style="list-style: none" v-for="(item, index) in articlesList" :key="index">
            <span class="hover:border-b-2 cursor-pointer" style="color: #7d6c6c" @click="articleDetail(item.id)">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Route } from 'vue-router';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { ArticlesData } from './types/index';
import { fetchRecentlyUpdated } from '../../api/articles';

@Component({})
export default class RightPanel extends Vue {
  private articlesList: object[] = [];

  mounted(): void {
    this.handleRecentlyUpdated();
  }

  @Watch('$route')
  public routeChange(val: Route, oldVal: Route) {
    this.articlesList = [];
    this.handleRecentlyUpdated();
  }

  private async handleRecentlyUpdated(): Promise<void> {
    const data: ArticlesData = await fetchRecentlyUpdated({}).then((response) => {
      return { list: response.data };
    }, (error) => {
      console.log(error);
      throw new Error(error);
    });
    this.articlesList = [...this.articlesList, ...data.list];
  }

  private articleDetail(id: number): void {
    this.$router.replace({name: 'blog-detail', params: { article_id: id.toString() }});
  }
}
</script>

<style lang="scss" scoped>

</style>