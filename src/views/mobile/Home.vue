<template>
  <div class="mobile-page">
    <div class="exam-info">
      <h2>2019初一英语考试</h2>
      <p>共15题，满分100分，答题卡共3页</p>
    </div>
    <div class="option-wrapper">
      <p class="student-info">即将为<strong>杨旭辉</strong>拍照上传答题卡图片</p>
      <option-btn type="btn-success btn-large" @click="myUtils.pageJump('select-page')">开始</option-btn>
      <p class="prompt">
        <svg-icon name="star"></svg-icon>
        若考试或学生信息错误，请关闭页面
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-home'
}
</script>

<style lang="scss" scoped>
  .mobile-page {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
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
    .option-wrapper {
      margin-bottom: 5vh;
      padding: 0 10px;
      .student-info {
        margin-bottom: 100px;
        color: #666;
        strong {
          margin: 0 10px;
          color: #FF6E36;
        }
      }
      .prompt {
        margin-top: 20px;
        color: #999;
        font-size: 14px;
      }
    }
  }
</style>
