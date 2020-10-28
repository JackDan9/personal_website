<template>
    <footer class="site-footer">
      <div class="container">
        <p class="powered-by">
          © 2020 Jack Dan ·
          Powered by the
          <a
            href="https://github.com/gcushen/hugo-academic"
            target="_blank"
          >
            Academic
            theme
          </a> for
          <a href="http://gohugo.io" target="_blank">Hugo</a>
          .
          <span class="pull-right" aria-hidden="true">
            <a href="#" id="back_to_top">
              <span class="button_icon">
                <i class="fa fa-chevron-up fa-2x"></i>
              </span>
            </a>
          </span>
        </p>
      </div>
    </footer>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';


@Component({
    name: 'ResumeFooter',
})

export default class ResumeFooter extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 0.6rem 0;
  color: #899596;
  background-color: #f7f7f7;
  p {
    font-size: 0.3rem;
    text-align: center;
  }
}
</style>