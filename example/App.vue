<template>
  <div id="main">
    <VueSeekBar color="#42b983" opacity="0.9" height="3"></VueSeekBar>
    Scroll Progress bar using Vue.js
  </div>
</template>

<script>
import VueSeekBar from "../src/VueSeekBar";

export default {
  components: { VueSeekBar }
};
</script>

<style lang="scss" scoped>
#main {
  height: 1500px;
  width: 100vw;
  padding: 10px 0;
}
</style>
