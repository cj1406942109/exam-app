<template>
  <div class="mobile-page">
    <mobile-nav back-path="select-page">第 1 页</mobile-nav>
    <div class="pic-wrapper">
      <p><svg-icon name="check"></svg-icon>第 1 页已上传</p>
      <div class="pic">
        <img src="./sample-correct.jpg" alt="第一页">
      </div>
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
    }
  },
  methods: {
    rePhotograph() {
      this.$confirm('是否重新拍照？','', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '重新拍照',
        cancelButtonText: '取消',
        customClass: 'photograph-confirm'
      }).then(() => {
        this.myUtils.pageJump('photograph')
      }).catch(() => {
      })
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
        width: 90%;
        max-width: 500px;
      }
    }
  }
}
</style>
