<template>
<div>
  <div>
    <!-- v-sider-bar -->
    <v-sider-bar></v-sider-bar>
    <!-- v-header -->
    <v-header></v-header>
    <div class="blog-container relative bg-white ml-0 lg:ml-70 xl:ml-80 xxl:ml-80 xxxl:ml-90 px-0 pb-0 overflow-y-scroll">
      <div
        class="pl-2 pr-2 flex flex-wrap ml-0 mr-0 lg:pl-12 xl:pl-12 xxxl:pl-48"
      >
        <div
          class="relative w-full pl-0 pr-0 md:pr-2 lg:pr-4 xl:pr-4 mt-0 md:mt-2 lg:mt-0 lg:max-w-screen-md xl:max-w-screen-md xxxl:max-w-screen-xmd"
        >
          <div class="pl-0 lg:pl-2 xl:pl-2 pr-0 lg:pr-4 xl:pr-8 pb-10 md:pb-12 lg:pb-16 xl:pb-20">
            <div class="pt-0 lg:pt-2 xl:pt-4 pr-0 lg:pr-1 xl:pr-2">
              <div
                class="pt-6 pb-4 border-b border-gray-200"
                v-for="(article, index) in articlesList"
                :key="index"
              >
                <div class="flex lg:pr-2 xl:pr-2 justify-between">
                  <h1 class="m-0 text-2xl font-normal font-sans">
                    <span class="text-gray-800 hover:border-b-2 cursor-pointer" @click="articleDetail(article.id)">
                      {{ article.title }}
                    </span>
                  </h1>
                </div>
                <div class="mt-2 mb-2 text-gray-600 leading-loose">
                  <p class="m-0 truncate text-base">{{ article.desc }}</p>
                </div>

                <div class="flex items-center" style="color: #6c757d">
                  <i
                    class="icon iconfont icon-huaban23 text-base font-normal pr-1"
                  ></i>
                  <span class="text-xs tracking-wide">{{ article.created_on }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- v-footer -->
          <v-footer></v-footer>
        </div>
        <!-- v-right-panel -->
        <v-right-panel></v-right-panel>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

import { ArticlesData } from './types/index';
import GlobalHeader from '@/components/GlobalHeader/index';
import GlobalFooter from '@/components/GlobalFooter/index';
import RightPanel from '@/components/RightPanel/index';
import SiderBar from '@/components/SiderBar/index';

import { fetchList } from '../../api/articles';

@Component({
  components: {
    'v-header': GlobalHeader,
    'v-footer': GlobalFooter,
    'v-right-panel': RightPanel,
    'v-sider-bar': SiderBar,
  },
})
export default class Index extends Vue {
  private articlesList: object[] = [];

  public mounted(): void {
    this.handleSearch();
  }

  @Watch('$route')
  public routeChange(val: Route, oldVal: Route): void {
    this.articlesList = [];
    this.handleSearch();
  }

  private async handleSearch(): Promise<void> {
    const data: ArticlesData = await fetchList({}).then((response) => {
      return { list: response.data};
    }, (error) => {
      console.log(error);
      throw new Error(error);
    });
    this.articlesList = [...this.articlesList, ...data.list];
  }

  private articleDetail(id: number): void {
    this.$router.push({name: 'blog-detail', params: { article_id: id.toString() }});
  }
}
</script>

<style lang="scss" scoped>
.algolia-autocomplete {
  width: 100% !important;
}
.blog-container {
  height: calc(100vh - 6rem);
}
.my-info {
  margin-left: 0.25rem !important;
  &:first-child {
    margin-left: 0 !important;
  }
}
</style>