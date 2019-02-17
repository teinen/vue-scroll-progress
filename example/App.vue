<template>
  <div id="main">
    <!-- vue seek bar -->
    <VueSeekBar color="#42b983" opacity="0.9" height="5"></VueSeekBar>

    <h1>Scroll Progress bar using Vue.js</h1>

    <div class="content" v-for="i in 40" :key="i">Please scroll page !!!</div>

    <footer><p>Copyright 2019 Akira Kanno</p></footer>
  </div>
</template>

<script>
import VueSeekBar from "vue-seek-bar";

export default {
  components: { VueSeekBar }
};
</script>

<style lang="scss" scoped>
#main {
  height: 1500px;
  width: 100vw;
  padding: 10px 0 0 0;

  h1 {
    text-align: center;
  }

  .content {
    text-align: center;
    margin: 10px 0;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100vw;
    border-top: solid 1px #848484;
  }
}
</style>
