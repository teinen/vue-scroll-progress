<template>
  <div id="seek-bar" :style="seekbarStyle"></div>
</template>

<script>
const props = {
  color: {
    type: String,
    required: true
  },
  opacity: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  }
};

const data = () => {
  return {
    seekbarStyle: {
      width: "1%",
      "background-color": this.color,
      opacity: this.opacity,
      height: `${this.height}px`
    }
  };
};

const methods = {
  scrollHandler() {
    // Get scrolled position
    const scrolledPer = (window.scrollY / this.calcScreenMaxHeight()) * 100;

    if (scrolledPer <= 1) {
      this.seekbarStyle.width = "1%";
    } else {
      this.seekbarStyle.width = scrolledPer.toString() + "%";
    }
  },
  calcScreenMaxHeight() {
    const docEl = document.documentElement;
    return docEl.scrollHeight - docEl.clientHeight;
  }
};

const component = {
  props,
  data,
  methods,
  mounted() {
    // add event listner
    window.addEventListener("scroll", this.scrollHandler);
  },
  destroyed() {
    // remove event listner
    window.removeEventListener("scroll", this.scrollHandler, false);
  }
};

export default component;
</script>

<style lang="scss" scoped>
#seek-bar {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
