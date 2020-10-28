<template>
  <section id="skills" class="home-section">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4 section-heading">
          <h1>Other Skills</h1>
        </div>
        <div class="col-xs-12 col-md-8">
          <p>I also built and worked on these skills:</p>
          <!-- First Other Skill -->
          <ul class="other-skill-list">
            <li class="other-skill-item">
              <img src="~@/assets/other_skills/software.svg" alt="software" class="imp-responsive" />
              <span>软件调研、设计</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';


@Component({
  name: 'ResumeSkills',
})

export default class ResumeSkills extends Vue {}
</script>

<style lang="scss" scoped>
.other-skill-list {
  display: block;
  list-style: none;
}

.other-skill-item .imp-responsive {
  display: inline-block;
  width: 10%;
}

.other-skill-item span {
  font-size: 0.32rem;
}
</style>