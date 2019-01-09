<template>
  <div class="mobile-page">
    <div class="prompt">
      <svg-icon name="check-fill"></svg-icon>
      <h3>上传完成，开始批改</h3>
      <p>请耐心等待批改完成</p>
    </div>
    <mobile-footer>
      <option-btn type="btn-success btn-large" @click="closePage">关闭页面</option-btn>
    </mobile-footer>
  </div>
</template>

<script>
import MobileFooter from '@/components/MobileFooter'
export default {
  name: 'finish-upload',
  components: {
    MobileFooter
  },
  methods: {
    closePage() {
      window.close();
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-page {
  .prompt {
    width: 100%;
    text-align: center;
    margin-top: 15vh;
    .svg-icon {
      font-size: 40px;
    }
    h3 {
      font-weight: normal;
    }
    p {
      color: #666;
    }
  }
}
</style>
