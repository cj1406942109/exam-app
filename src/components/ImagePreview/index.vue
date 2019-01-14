<template>
  <!-- 存在浏览器兼容性问题 -->
  <div class="image-preview bg">
    <div class="pic-box">
      <img :src="image" alt="预览">
    </div>
    <div class="option-wrapper" v-show="image">
      <img src="./gallery.png" alt="图库" :style="{visibility:'hidden'}" @click="clickInput('gallery')">
      <img src="./finish.png" alt="完成" class="big" @click="$emit('finish')">
      <img src="./clear.png" alt="关闭" @click="$emit('close')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'image-preview',
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.image-preview {
  position: absolute;
  z-index: 999;
  top: 50px;
  bottom: 0;
  left: 0;
  width: 100%;
  right: 0;
  overflow: auto;
  box-sizing: border-box;
  .pic-box {
    // height: calc(100% - 150px);
    padding: 18px 0;
    display: flex;
    align-items: center;
    margin: 40px;
    box-sizing: border-box;
    overflow: auto;
    background: linear-gradient(to left, #48B3FF, #48B3FF) left top no-repeat,
                linear-gradient(to bottom, #48B3FF, #48B3FF) left top no-repeat, 
                linear-gradient(to left, #48B3FF, #48B3FF) right top no-repeat,
                linear-gradient(to bottom, #48B3FF, #48B3FF) right top no-repeat, 
                linear-gradient(to left, #48B3FF, #48B3FF) left bottom no-repeat,
                linear-gradient(to bottom, #48B3FF, #48B3FF) left bottom no-repeat,
                linear-gradient(to left, #48B3FF, #48B3FF) right bottom no-repeat,
                linear-gradient(to left, #48B3FF, #48B3FF) right bottom no-repeat,
                transparent;
    background-size: 3px 15px, 15px 3px, 3px 15px, 15px 3px;
    img {
      margin: -15px auto;
      width: calc(100% - 6px);
      max-height: 100%;
      max-width: 500px;
    }
  }
  .option-wrapper {
    box-sizing: border-box;
    display: flex;
    padding: 0 30px;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    height: 100px;
    width: 100%;
    bottom: 0;
    img {
      width: 30px;
      cursor: pointer;
      &.big {
        width: 50px;
        margin: 0 50px;
      }
    }
  }
  &.bg {
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
