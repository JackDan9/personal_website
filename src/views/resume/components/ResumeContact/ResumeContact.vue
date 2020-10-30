<template>
  <section id="contact" class="home-section">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4 section-heading">
          <h1>联系</h1>
        </div>
        <div class="col-xs-12 col-md-8">
          <ul class="fa-ul">
            <li>
              <i class="fa fa-li icon iconfont icon-email big-icon"></i>
              <span>
                <a href="mailto:j.dan92016@gmail.com">j.dan92016@gmail.com</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';


@Component({
    name: 'ResumeContact',
})

export default class ResumeContact extends Vue {}
</script>

<style lang="scss" scoped>
#contact.home-section .fa-ul {
  margin-left: 1.25rem;
}

#contact.home-section li {
  padding-top: 0.32rem;
  margin-bottom: 0.12rem;
  list-style-type: none;
  padding-left: 0;
}

#contact.home-section .fa-li {
  position: absolute;
  left: 1.14rem;
  width: 0.8rem;
  top: 0.01rem;
  text-align: center;
}
</style>