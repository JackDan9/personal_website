<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top" id="navbar-main">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">{{ $t('resume-title') }}</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li
              v-for="(item, index) in tabMapOptions"
              v-bind:key="index"
              v-bind:class="[activeIndex == index ? 'active' : '']"
              @click="handleSwitchTab(index)"
            >
              <a href="#" data-target>
                <span>{{ $t(item.label) }}</span>
              </a>
            </li>
            <li class="nav-item">
              <a style="cursor: pointer" @click="handleLocaleLanguage()" data-target>
                <span>{{ $t('language') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <ResumeAbout></ResumeAbout>

    <ResumeProjectsSelected></ResumeProjectsSelected>

    <ResumeProjects></ResumeProjects>

    <ResumeSkillsSelected></ResumeSkillsSelected>

    <ResumeSkills></ResumeSkills>

    <ResumeExperience></ResumeExperience>

    <ResumeContact></ResumeContact>

    <ResumeFooter></ResumeFooter>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import ResumeAbout from './components/ResumeAbout/ResumeAbout';
import ResumeProjectsSelected from './components/ResumeProjectsSelected/ResumeProjectsSelected';
import ResumeProjects from './components/ResumeProjects/ResumeProjects';
import ResumeSkillsSelected from './components/ResumeSkillsSelected/ResumeSkillsSelected';
import ResumeSkills from './components/ResumeSkills/ResumeSkills';
import ResumeExperience from './components/ResumeExperience/ResumeExperience';
import ResumeContact from './components/ResumeContact/ResumeContact';
import ResumeFooter from './components/ResumeFooter/ResumeFooter';

@Component({
  name: 'Resume',
  components: {
    ResumeAbout,
    ResumeProjectsSelected,
    ResumeProjects,
    ResumeSkillsSelected,
    ResumeSkills,
    ResumeExperience,
    ResumeContact,
    ResumeFooter,
  },
})
export default class Resume extends Vue {
  private activeIndex = 0;

  private tabMapOptions = [
    { label: 'home', linkLabel: 'about' },
    { label: 'projects', linkLabel: 'projects' },
    { label: 'skills', linkLabel: 'skills' },
    { label: 'experience', linkLabel: 'experience' },
    { label: 'contact', linkLabel: 'contact' },
  ];

  private handleLocaleLanguage() {
    if (this.$i18n.locale === 'en') {
      this.$i18n.locale = 'zh';
    } else {
      this.$i18n.locale = 'en';
    }
  }

  private handleSwitchTab(index: number) {
    this.activeIndex = index;
  }
}
</script>

<style lang="scss" scoped>
$background-color: #fff;
$border-color: #e7e7e7;
$font-stack: "Lato", sans-serif;

.navbar-default {
  background: $background-color;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.11);
  border-color: $border-color;
  font-family: $font-stack;
  font-weight: 400;
  line-height: 1.25;
  text-rendering: optimizeLegibility;

  .navbar-brand {
    float: left;
    height: inherit;
    line-height: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.36rem;
    color: #2b2b2b;
  }

  .navbar-collapse {
    border-color: #e7e7e7;
    margin-right: 0.3rem;
    margin-left: 0.3rem;
  }
}

$min-height-num: 1.4rem;
.navbar {
  min-height: $min-height-num !important;
  margin-bottom: 0.4rem;
  border: 0.02rem solid transparent;
}

.navbar:before {
  display: table;
  content: "";
}

.navbar:after {
  display: table;
  content: "";
  clear: both;
}

.navbar-fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  border-width: 0 0 0.02rem;

  .navbar-collapse {
    max-height: 6.8rem;
  }
}

.navbar-collapse {
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 0.02rem solid transparent;
  -webkit-box-shadow: inset 0 0.02rem 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 0.02rem 0 rgba(255, 255, 255, 0.1);
}

.collapse {
  display: none;
}

.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  li {
    position: relative;
    display: block;
    font-size: 0.32rem;

    a {
      position: relative;
      display: block;
      padding: 0.2rem 0.3rem;
      height: inherit;
      line-height: 1rem;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;

      white-space: nowrap;
      transition: 0.2s ease;
      color: #34495e;
      font-weight: 600;
    }
  }
}

.nav:before {
  display: table;
  content: "";
}

.nav:after {
  display: table;
  content: "";
  clear: both;
}

.navbar-nav {
  margin: 0.15rem 0.3rem;

  .active {
    a {
      color: #0095eb;
      font-weight: 700;
      background-color: transparent !important;
    }
  }
}

.navbar-right {
  float: right !important;
  margin-right: -0.3rem;
}
</style>