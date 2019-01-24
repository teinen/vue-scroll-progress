<template>
  <div id="main">
    <vue-scroll-progress
      color="#42b983"
      opacity="0.9"
      height="3"
    ></vue-scroll-progress>
    Scroll Progress bar using Vue.js
  </div>
</template>

<script>
import VueScrollProgress from "./components/VueScrollProgress";

export default {
  components: {
    "vue-scroll-progress": VueScrollProgress
  }
};
</script>

<style lang="scss" scoped>
#main {
  height: 1500px;
  width: 100vw;
  padding: 10px 0;
}
</style>
