<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from "./components/Default/Header.vue";
import Footer from "./components/Default/Footer.vue";
@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
