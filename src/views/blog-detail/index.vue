<template>
  <div>
    <!-- v-sider-bar -->
    <v-sider-bar></v-sider-bar>
    <!-- v-header -->
    <v-header></v-header>
    <div
      class="blog-detail-container relative bg-white ml-0 lg:ml-70 xl:ml-80 xxl:ml-80 xxxl:ml-90 px-0 pb-0 overflow-y-scroll"
    >
      <div
        class="pl-2 pr-2 flex flex-wrap ml-0 mr-0 lg:pl-12 xl:pl-12 xxxl:pl-48"
      >
        <div
          class="relative w-full pl-0 pr-0 md:pr-2 lg:pr-4 xl:pr-4 mt-0 md:mt-2 lg:mt-0 lg:max-w-screen-md xl:max-w-screen-md xxxl:max-w-screen-xmd"
        >
          <h1 class="mt-8 mb-2 text-2xl font-semibold tracking-wide">
            {{ articleDetail.title }}
          </h1>
          <div class="text-gray-50 hidden sm:hidden md:hidden xl:block">
            <div>
              <span class="text-sm pl-4">由</span>
              <span class="text-base pl-1 text-black">{{
                articleDetail.author
              }}</span>
              <span class="text-sm pl-1">发布于</span>
              <span class="text-sm pl-1">{{ articleDetail.created_time }}</span>
              <span class="text-sm pl-1 updated-time">
                最后更新：{{ articleDetail.updated_time }}
              </span>
            </div>
          </div>
          <div
            class="mt-10 break-words pb-10 md:pb-12 lg:pb-16 xl:pb-20 border-b border-gray-200"
            style="word-wrap: break-word"
          >
            <article
              v-html="value"
              class="leading-loose tracking-widest"
              v-hljs
            ></article>
          </div>
          <v-pay></v-pay>
          <!-- v-footer -->
          <v-footer></v-footer>
        </div>
        <!-- v-right-panel -->
        <v-right-panel></v-right-panel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue, Watch } from "vue-property-decorator";

import { ArticleDetailIF, ArticleDetailParams } from "./types/index";

import hljs from "highlight.js";
Vue.directive("hljs", (el) => {
  let blocks = el.querySelectorAll("pre code");
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});
import "@/assets/monokai-sublime.min.css";
import GlobalFooter from "@/components/GlobalFooter/index";
import RightPanel from "@/components/RightPanel/index";
import GlobalHeader from "@/components/GlobalHeader/index";
import SiderBar from "@/components/SiderBar/index";
import Pay from "@/components/Pay/index";
import { Route } from "vue-router";

@Component({
  components: {
    "v-header": GlobalHeader,
    "v-footer": GlobalFooter,
    "v-right-panel": RightPanel,
    "v-sider-bar": SiderBar,
    "v-pay": Pay,
  },
})
export default class Index extends Vue {
  private articleParams: ArticleDetailParams = {
    id: "",
    type: 1,
  };

  private value: any = null;

  private articleDetail: ArticleDetailIF = {
    toc: "",
    _id: "",
    author: "jackdan",
    category: [],
    comments: [],
    created_time: "",
    desc: "",
    content: "",
    content_url: "",
    id: 16,
    img_url: "",
    numbers: 0,
    keyword: [],
    like_users: [],
    meta: { views: 0, likes: 0, comments: 0 },
    origin: 0,
    state: 1,
    tags: [],
    title: "",
    updated_time: "",
  };

  private articleDetailList: any = [];

  public mounted(): void {
    this.articleParams.id = this.$route.params.article_id;
    this.handleArticleDetail();
    hljs.initHighlightingOnLoad();
  }

  @Watch("$route")
  public routeChange(val: Route, oldVal: Route): void {
    this.articleParams.id = this.$route.params.article_id;
    this.handleArticleDetail();
  }

  private async handleArticleDetail(): Promise<void> {
    const data: any = await axios.get("/static/articleDetail.json").then(
      (response) => {
        const res = response.data;
        res.data.map((item: any) => {
          if (item.id == this.articleParams.id) {
            document.title = item.title;
            this.articleDetail.title = item.title;
            this.articleDetail.author = item.author;
            this.articleDetail.created_time = item.created_time;
            this.articleDetail.updated_time = item.updated_time;
            this.value = this.md2html(require("./markdown" + item.content_url));
          }
        });
      },
      (error) => {
        throw new Error(error);
      }
    );
  }
}
</script>

<style lang="scss" scoped>
.algolia-autocomplete {
  width: 100% !important;
}
.my-info {
  margin-left: 0.25rem !important;
  &:first-child {
    margin-left: 0 !important;
  }
}
.blog-detail-container {
  height: calc(100vh - 6rem);
}
.updated-time::before {
  content: "\2022";
  color: rgba(158, 158, 158, 0.8);
  font-weight: bold;
}

hr {
  height: 0;
  border-top-width: 1px;
  border-color: inherit;
  margin-top: 10px;
  margin-bottom: 10px;
}

blockquote {
  margin: 0;
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}
.hljs,
.hljs-subst,
.hljs-tag {
  color: #f8f8f2;
}
.hljs-emphasis,
.hljs-strong {
  color: #a8a8a2;
}
.hljs-bullet,
.hljs-link,
.hljs-literal,
.hljs-number,
.hljs-quote,
.hljs-regexp {
  color: #ae81ff;
}
.hljs-code,
.hljs-section,
.hljs-selector-class,
.hljs-title {
  color: #a6e22e;
}
.hljs-strong {
  font-weight: 700;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-attr,
.hljs-keyword,
.hljs-name,
.hljs-selector-tag {
  color: #f92672;
}
.hljs-attribute,
.hljs-symbol {
  color: #66d9ef;
}
.hljs-class .hljs-title,
.hljs-params {
  color: #f8f8f2;
}
.hljs-addition,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-attr,
.hljs-selector-id,
.hljs-selector-pseudo,
.hljs-string,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
  color: #e6db74;
}
.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>