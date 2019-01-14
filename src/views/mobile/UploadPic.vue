<template>
  <div class="mobile-page">
    <mobile-nav>第 {{page}} 页</mobile-nav>
    <div class="camera-wrapper">
      <image-preview v-show="showImage" :image="image" @finish="handleFinish" @close="myUtils.goBack()"></image-preview>
      <uploading :percentage="percentage" v-show="!showImage"></uploading>
    </div>
  </div>
</template>

<script>
import MobileNav from '@/components/MobileNav'
import ImagePreview from '@/components/ImagePreview'
import Uploading from '@/components/Uploading'

export default {
  name: 'upload',
  components: {
    MobileNav,
    ImagePreview,
    Uploading
  },
  data () {
    return {
      showImage: true,
      percentage: 0,
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
    handleFinish() {
      this.showImage = false
      let vm = this
      let timer = setInterval(function(){
        vm.percentage += 1
        if (vm.percentage >= 100) {
          vm.percentage = 100
          clearInterval(timer)
          vm.myUtils.pageJump('preview')
        }
      }, 50)
    }
  }
}
</script>
