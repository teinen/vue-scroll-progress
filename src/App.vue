<template>
  <div id="main">
    <vue-seek-bar color="#42b983" opacity="0.9" height="3"></vue-seek-bar>
    Scroll Progress bar using Vue.js
  </div>
</template>

<script>
import VueSeekBar from "./components/VueSeekBar";

export default {
  components: {
    "vue-seek-bar": VueSeekBar
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
