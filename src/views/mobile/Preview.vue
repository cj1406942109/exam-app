<template>
  <div class="mobile-page">
    <mobile-nav back-path="select-page">第 {{page}} 页</mobile-nav>
    <div class="pic-wrapper">
      <p><svg-icon name="check"></svg-icon>第 {{page}} 页已上传</p>
      <div class="pic">
        <img src="./sample-correct.jpg" :alt="'第 '+page+' 页'">
      </div>
      <input type="file" capture="camera" accept="image/*" name="camera" ref="camera" @change="goUpload" style="display:none">
      <mobile-footer>
        <option-btn type="btn-large" @click="rePhotograph">重新拍照</option-btn>
      </mobile-footer>
    </div>
  </div>
</template>

<script>
import MobileNav from '@/components/MobileNav'
import MobileFooter from '@/components/MobileFooter'

export default {
  name: 'phorograph',
  components: {
    MobileNav,
    MobileFooter
  },
  data () {
    return {
      page: '',
      image: ''
    }
  },
  created () {
    this.percentage = 0
    this.page = this.myUtils.getItem('currentPage')
    this.image = this.myUtils.getItem('currentImage')
  },
  methods: {
    rePhotograph() {
      this.$confirm('是否重新拍照？','', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '重新拍照',
        cancelButtonText: '取消',
        customClass: 'photograph-confirm'
      }).then(() => {
        this.$refs['camera'].click()
      }).catch(() => {
      })
    },
    goUpload (e) {
      let img = e.currentTarget.files[0]
      let fd = new FileReader()
      fd.readAsDataURL(img)
      let vm = this;
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
  .pic-wrapper {
    margin-top: 50px;
    overflow: auto;
    p {
      padding-left: 20px;
      color: #666;
      .svg-icon {
        font-size: 1.2em;
        color: #11D0C4;
        margin-right: 10px;
        vertical-align: -0.3em;
      }
    }
    .pic {
      height: calc(100vh - 180px);
      display: flex;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      overflow: auto;
      img {
        margin: 0 auto 10px;
        max-height: 90%;
        max-width: 500px;
      }
    }
  }
}
</style>
