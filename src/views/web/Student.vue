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
          <option-btn @click="myUtils.pageJump('upload')" type="btn-info btn-medium btn-with-icon"><svg-icon name="upload"></svg-icon>上传图片批改</option-btn>
          <option-btn @click="myUtils.goBack()" type="btn-primary">返回</option-btn>
        </div>
      </div>
      <div class="exam-list">
        <exam-list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
          <option-btn @click="myUtils.pageJump('state', {id: 1231214213, examId: 23421413421})" type="btn-info">批改中</option-btn>
        </exam-list-item>
        <exam-list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
          <option-btn type="btn-success btn-with-icon"><svg-icon name="download"></svg-icon>下载报告</option-btn>
          <option-btn @click="myUtils.pageJump('report', {id: 1231214213, studentId: 421342134134})" type="btn-success">查看成绩</option-btn>
        </exam-list-item>
        <exam-list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
          <option-btn type="btn-error">批改异常</option-btn>
        </exam-list-item>
        <exam-list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
          <option-btn @click="myUtils.pageJump('state', {id: 1231214213, examId: 23421413421})" type="btn-info">批改中</option-btn>
        </exam-list-item>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import ExamListItem from '@/components/ExamListItem'

export default {
  name: 'student',
  components: {
    AppHeader,
    ExamListItem
  },
  methods: {
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
    .exam-list-item {
      margin: 10px 0;
    }
  }
}
</style>
