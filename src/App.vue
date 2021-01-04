<template>
  <div id="app">
    <v-page-loading v-show="isLoadingShow"></v-page-loading>
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { State, Action, Getter, namespace } from 'vuex-class';

@Component({
  name: 'App'
})

export default class App extends Vue { 
  @Getter('isShowLoading')
  
}
</script>