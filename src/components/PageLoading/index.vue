<template>
  <div class="loading-container">
    <div class="main">
      <div class="outer2">
        <div class="outer"></div>
        <div class="circle">
          <div class="text">Loading...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from "vue-property-decorator";

@Component({})
export default class PageLoading extends Vue {}
</script>

<style lang="scss" scoped>
.loading-container {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle, #93c7d0, #66a0aa, #437881, #265158);
  z-index: 100;

  .main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .outer2 {
      border-radius: 50%;
      border-top: 2px solid #da11d0;
      border-bottom: 2px solid transparent;
      border-left: 2px solid #da11d0;
      border-right: 2px solid #da11d0;
      width: 160px;
      height: 160px;
      animation: Rotate 7s linear infinite;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .outer {
        border-radius: 50%;
        border-top: 4px solid #cc0954;
        border-bottom: 4px solid #cc0954;
        border-left: 4px solid transparent;
        border-right: 4px solid #cc0954;
        width: 140px;
        height: 140px;
        animation: Rotate 5s linear infinite;
      }

      .circle {
        border-radius: 50%;
        border-top: 4px double transparent;
        border-bottom: 4px double #ff9900;
        border-left: 4px double #ff9900;
        border-right: 4px double #ff9900;
        width: 120px;
        height: 120px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        .text {
          text-align: center;
          text-transform: uppercase;
          font-weight: bold;
          background: linear-gradient(to right, #da11d0, #cc0954, #ff9900);
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 3px 3px #fff;
        }
      }
    }
  }
}
@keyframes Rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>