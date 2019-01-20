<template>
  <div id="main">
    <vue-scroll-progress
      color="#8181F7"
      opacity="0.5"
      height="10px"
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
