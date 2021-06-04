<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
})
export default class App extends Vue {
}
</script>
<style lang="scss" scoped>
</style>