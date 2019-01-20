<template>
  <div id="progress-bar" :style="progressBarStyle"></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: "#42b983"
    },
    opacity: {
      type: String,
      required: false,
      default: "1.0"
    },
    height: {
      type: String,
      required: false,
      default: "5px"
    }
  },
  data() {
    return {
      progressBarStyle: {
        width: "1%",
        "background-color": this.color,
        opacity: this.opacity,
        height: this.height
      }
    };
  },
  methods: {
    scrollHandler() {
      // Get scrolled position
      const scrolledPer = (window.scrollY / this.calcScreenMaxHeight()) * 100;

      if (scrolledPer <= 1) {
        this.progressBarStyle.width = "1%";
      } else {
        this.progressBarStyle.width = scrolledPer.toString() + "%";
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
#progress-bar {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
