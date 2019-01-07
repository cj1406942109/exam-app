<template>
  <div class="page-wrapper">
    <AppHeader/>
    <div class="page-main">
      <div class="student-info">
        <div>
          <h3>杨旭辉</h3>
          <p>17823423421</p>
        </div>
        <div>
          <button class="option-btn btn-info btn-medium btn-with-icon" @click="pageJump('upload')"><svg-icon name="upload"></svg-icon>上传图片批改</button>
          <button class="option-btn btn-primary" @click="pageJump('home')">返回</button>
        </div>
      </div>
      <div class="exam-list">
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn btn-info" @click="pageJump('state')">批改中</button>
        </list-item>
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn btn-success btn-with-icon"><svg-icon name="download"></svg-icon>下载报告</button>
          <button class="option-btn btn-success">查看成绩</button>
        </list-item>
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn btn-error">批改异常</button>
        </list-item>
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn btn-info">批改中</button>
        </list-item>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import ListItem from '@/components/ListItem'

export default {
  name: 'student',
  components: {
    AppHeader,
    ListItem
  },
  methods: {
    pageJump(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-main {
  padding: 20px;
  .student-info {
    margin-top: -20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    border-bottom: 1px dashed #ccc;
    h3, p {
      margin: 20px;
    }
    p {
      color: #666;
    }
    button {
      margin-left: 10px;
    }
  }
  .exam-list {
    padding: 10px 0;
    .list-item {
      margin: 10px 0;
    }
  }
}
</style>
