<template>
  <!-- 存在浏览器兼容性问题 -->
  <div class="local-camera" v-show="visible" :class="{bg:image}">
    <div class="camera-view" v-show="image">
      <!-- <img src="" alt=""> -->
      <div class="pic-box">
        <img :src="image" alt="预览">
      </div>
    </div>
    <div class="camera-gallery" v-show="!image">
      <input type="file" accept="image/*" name="gallery" ref="gallery" @change="showImage">
      <input type="file" capture="camera" accept="image/*" name="camera" ref="camera" @change="showImage">
      <img src="./camera.png" alt="拍照" class="big" @click="clickInput('camera')">
      <img src="./gallery.png" alt="图库" @click="clickInput('gallery')">
    </div>
    <div class="option-wrapper" v-show="image">
      <img src="./gallery.png" alt="图库" :style="{visibility:'hidden'}" @click="clickInput('gallery')">
      <img src="./finish.png" alt="完成" class="big" @click="finish">
      <img src="./clear.png" alt="关闭" @click="handleClose">
    </div>
  </div>
</template>

<script>
export default {
  name: 'local-camera',
  data () {
    return {
      closed: false,
      imageGet: false,
      image: ''
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.clickInput('camera')
      console.log('hello')
    })
  },
  watch: {
    visible: function(val) {
      if (val) {
        this.closed = false
        this.$emit('open')
      } else {
        if (!this.closed) {
          this.$emit('close')
        }
      }
    }
  },
  methods: {
    handleClose() {
      this.$refs['gallery'].value = null
      this.$refs['camera'].value = null
      if (this.image) {
        this.image = ''
      } else {
        this.$emit('update:visible', false)
        this.$emit('close')
        this.closed = true
      }
    },
    clickInput(name) {
      this.$refs[name].click()
    },
    showImage(e){
      console.log(e)
      let img = e.currentTarget.files[0]
      let fd = new FileReader()
      fd.readAsDataURL(img)
      let vm = this;
      fd.onload = function () {
        vm.image = this.result
      }
    },
    finish() {
      this.$emit('finish', this.image)
    }
  }
}
</script>

<style lang="scss" scoped>
.local-camera {
  position: absolute;
  z-index: 999;
  top: 50px;
  bottom: 0;
  left: 0;
  width: 100%;
  right: 0;
  overflow: auto;
  box-sizing: border-box;
  .camera-view {
    width: 100%;
    box-sizing: border-box;
    height: calc(100% - 100px);
    .pic-box {
      height: calc(100% - 40px);
      display: flex;
      align-items: center;
      margin: 40px;
      margin-bottom: 0;
      // border: 3px solid #48B3FF;
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
      box-sizing: border-box;
      overflow: auto;
      img {
        margin: 0 auto;
        max-height: 90%;
        max-width: 500px;
      }
    }
  }
  input {
    display: none;
  }
  .camera-gallery {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 50px);
    overflow: hidden;
    img {
      margin-bottom: 40px;
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
