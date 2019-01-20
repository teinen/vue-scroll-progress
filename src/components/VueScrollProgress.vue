<template>
  <div id="seekbar" v-bind:style="seekBarStyle"></div>
</template>

<script>
export default {
  props: {
    // seekbar color
    color: {
      type: String,
      required: false,
      default: "#42b983"
    },
    // seekbar opacity
    opacity: {
      type: Number,
      required: false,
      default: 1.0
    },
    height: {
      type: String,
      required: false,
      default: "5px"
    }
  },
  data() {
    return {
      seekBarStyle: {
        width: "1%"
      }
    };
  },
  methods: {
    scrollHandler() {
      // Get scrolled position
      const scrolledPer = (window.scrollY / this.calcScreenMaxHeight()) * 100;

      if (scrolledPer <= 1) {
        this.seekBarStyle.width = "1%";
      } else {
        this.seekBarStyle.width = scrolledPer.toString() + "%";
      }
    },
    calcScreenMaxHeight() {
      const docEl = document.documentElement;
      return docEl.scrollHeight - docEl.clientHeight;
    }
  },
  mounted() {
    // add event listner
    window.addEventListener("scroll", this.scrollHandler);
  },
  destroyed() {
    // remove event listner
    window.removeEventListener("scroll", this.scrollHandler, false);
  }
};
</script>

<style lang="scss" scoped>
#seekbar {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #42b983;
  height: 8px;
  opacity: 0.7;
}
</style>
