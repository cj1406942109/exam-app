<template>
  <div class="mobile-page">
    <div class="exam-info">
      <h2>2019初一英语考试</h2>
      <p>共15题，满分100分，答题卡共3页</p>
    </div>
    <div class="requirement">
      <el-button type="info" @click="myUtils.pageJump('photograph-requirement')">
        <svg-icon name="info"></svg-icon>
        了解拍照要求
      </el-button>
      <p class="color-error">请严格按照要求拍照<br>不符合要求的图片将不予批改</p>
    </div>
    <div class="progress">
      <p>拍照并上传图片：<strong>1</strong>/3</p>
      <el-button type="primary" @click="handleClick(1, 'image')">第 1 页</el-button>
      <el-button type="plian" @click="handleClick(2)">第 2 页</el-button>
      <el-button type="plain">第 3 页</el-button>
      <input type="file" capture="camera" accept="image/*" name="camera" ref="camera" @change="goUpload" style="display:none">
    </div>
    <mobile-footer>
      <el-button type="primary" :disabled="false" @click="myUtils.pageJump('finish-page')">上传完成，提交</el-button>
    </mobile-footer>
  </div>
</template>

<script>
import MobileFooter from '@/components/MobileFooter'

export default {
  name: 'select-page',
  components: {
    MobileFooter
  },
  methods: {
    handleClick (page, image=null) {
      this.myUtils.setItem('currentPage', page)
      if (image) {
        this.myUtils.setItem('currentImage', image)
        this.myUtils.pageJump('preview')
      } else {
        this.$refs['camera'].click()
      }
    },
    goUpload (e) {
      let img = e.currentTarget.files[0]
      let fd = new FileReader()
      fd.readAsDataURL(img)
      let vm = this
      fd.onload = function () {
        vm.myUtils.setItem('currentImage', this.result)
        vm.myUtils.pageJump('upload-pic')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .mobile-page {
    display: flex;
    height: 100vh;
    flex-direction: column;
    text-align: center;
    .exam-info {
      margin-top: 8vh;
      h2 {
        margin: 10px 0;
        font-weight: normal;
      }
      p {
        margin: 5px 0;
        color: #666;
      }
    }
    .requirement {
      padding: 10px;
      button {
        margin: 10px 0;
        background-color: #48B3FF;
        border: none;
        font-size: 16px;
        .svg-icon {
          // font-size: 1.2em;
          vertical-align: -0.3em;
        }
      }
      p {
        margin: 10px 0 0;
      }
    }
    .progress {
      padding: 10px;
      p {
        margin: 0 0 10px;
        padding-left: 10px;
        color: #666;
        text-align: left;
        strong {
          font-size: 1.2em;
          font-weight: normal;
          color: #333;
        }
      }
      .el-button {
        margin: 5px 0;
      }
    }
  }
</style>
