<template>
  <div class="mobile-nav" :style="{height: height + 'px'}">
    <svg-icon name="arrow-left" @click.native="handleClick"></svg-icon>
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'mobile-nav',
  props: {
    height: {
      type: Number,
      default: 50
    },
    backPath: {
      type: String,
      default: null
    }
  },
  methods: {
    handleClick() {
      if (this.backPath) {
        this.myUtils.pageJump(this.backPath)
      } else {
        this.myUtils.goBack()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.mobile-nav {
  position: fixed;
  top: 0;
  background-color: #F2F2F2;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  .svg-icon {
    font-size: 1.2em;
    padding: 10px 0;
    width: 50px;
    cursor: pointer;
    position: relative;
    z-index: 99;
  }
  p {
    margin: 0;
    width: calc(100% - 100px);
    text-align: center;
  }
}
</style>
