<template>
  <i-ic:baseline-explicit :style="svgStyle" />
</template>

<script>
export default {
  name: 'ExplicitSymbol',
  props: {
    size: {
      type: Number,
      default: 16,
    },
  },
  data() {
    return {
      svgStyle: {},
    }
  },
  created() {
    this.svgStyle = {
      height: this.size + 'px',
      width: this.size + 'px',
      position: 'relative',
      left: '-1px',
    }
  },
}
</script>
