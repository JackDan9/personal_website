<template>
  <div> 
    <mavon-editor class="w-full h-full" :ishljs="true" v-model="value" ref=md @save="save" @imgAdd="imgAdd" @imgDel="imgDel" />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import {Component, Vue, Watch} from 'vue-property-decorator';

export default class Index extends Vue {
  private value: string = '';
  private defaultData: string = 'preview';
  private imgFile: any = {};


  public mounted() {
    this.$nextTick(() => {
      console.log(1);
    });
  }

  private save(value: any, render: any, $e: any): void {
    const result: string = value;
    console.log(value);
    console.log(render);

    axios({
      url: 'http://192.168.1.120:7001/article',
      method: 'post',
      data: { content: render },
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      const err = new Error(error);
      console.log(err);
    });

    // const formdata:any = new FormData();
    // for(const _img in this.imgFile) {
    //   formdata.append(_img, this.imgFile[_img]);
    // }
    // axios({

    // }).then((res) => {
    //   for(const img in res) {
    //     let el:any = this.$refs.md;
    //     el.$img2Url(img[0], img[1]);
    //   }
    // })
  }

  private imgAdd(pos: any, $file: any): void {
    console.log(pos);
    console.log($file);
    // 缓存图片信息
    this.imgFile[pos] = $file;
  }

  private imgDel(pos: any): void {
    delete this.imgFile[pos];
  }
}
</script>