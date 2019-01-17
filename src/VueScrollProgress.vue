<script>
export default {
  data() {
    return {
      seekBarStyle: {
        width: "1%"
      }
    };
  },
  methods: {
    scrollHandler() {}
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

<style lang="scss" scoped></style>
