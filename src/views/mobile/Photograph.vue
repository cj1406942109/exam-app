<template>
  <div class="mobile-page">
    <mobile-nav>第 1 页</mobile-nav>
    <div class="camera-wrapper">
      <local-camera :visible.sync="showCamera" @finish="handleFinish"></local-camera>
      <uploading :percentage="percentage" v-show="!showCamera"></uploading>
    </div>
  </div>
</template>

<script>
import MobileNav from '@/components/MobileNav'
import LocalCamera from '@/components/LocalCamera/index'
import Uploading from '@/components/Uploading'

export default {
  name: 'phorograph',
  components: {
    MobileNav,
    LocalCamera,
    Uploading
  },
  data () {
    return {
      showCamera: true,
      percentage: 0
    }
  },
  created () {
    this.percentage = 0
    this.showCamera = true
  },
  methods: {
    handleFinish(image) {
      console.log(image)
      this.showCamera = false
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
