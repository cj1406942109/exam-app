<template>
  <div class="uploading">
    <el-progress :percentage="percentage" :stroke-width="20" color="#11D0C4"></el-progress>
    <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name: 'uploading',
  props: {
    info: {
      type: String,
      default: '上传中，请耐心等待'
    },
    percentage: {
      type: Number,
      default: 70
    }
  }
}
</script>

<style lang="scss" scoped>
.uploading {
  background-color: #fff;
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50px;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 40px;
  .el-progress {
    margin-top: 20vh;
  }
}
</style>
