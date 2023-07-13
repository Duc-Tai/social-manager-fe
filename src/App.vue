<template>
  <div id="app">
    <!-- Set layout dynamic -->
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { initFlowbite } from 'flowbite'
import { languageKey } from './utils/common';
@Component({
})
export default class App extends Vue {
  defaultLayout = 'default'

  beforeCreate() {
    const language = localStorage.getItem(languageKey) || 'en'
    this.$i18n.locale = language
    this.$store.commit("site/setLanguage", language)
  }

  created() {
    initFlowbite()
    // this.$router.push("/home")
  }

  get layout() {
    //@ts-ignore
    return (this.$route.meta.layout || this.defaultLayout) + '-layout'
  }

}
</script>
