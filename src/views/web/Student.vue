<template>
  <div class="page-wrapper">
    <AppHeader/>
    <div class="page-main">
      <div class="student-info">
        <div>
          <h3>{{currentStudent.name}}</h3>
          <p>{{currentStudent.phone}}</p>
        </div>
        <div>
          <option-btn @click="myUtils.pageJump('upload')" type="btn-info btn-medium btn-with-icon"><svg-icon name="upload"></svg-icon>上传图片批改</option-btn>
          <option-btn @click="myUtils.goBack()" type="btn-primary">返回</option-btn>
        </div>
      </div>
      <exam-list :data="examList" :hide-search="true" @page-jump="handlePageJump" @download-report="handleDownloadReport"></exam-list>
    </div>
  </div>
</template>

<script>
import {
  getExerciseList
} from '@/api'
// @ is an alias to /src
import AppHeader from '@/components/Header'
import ExamList from '@/components/ExamList'
import ExamListItem from '@/components/ExamListItem'

export default {
  name: 'student',
  components: {
    AppHeader,
    ExamList,
    ExamListItem
  },
  data () {
    return {
      examList: [],
      currentStudent: JSON.parse(this.myUtils.getItem('currentStudent'))
    }
  },
  created () {
    let studentId = this.$route.params.id
    // 测试用
    this.formateExamList([{
      "uid":"678ea1f",
      "name":"考试名称",
      "subject_id":1,
      "status":1,
      "page_count":3, //总页数
      "last_upload": "2018-09-11 12:00:00" // 最后一次上传时间
    },{
      "uid":"678ea1f",
      "name":"考试名称",
      "subject_id":1,
      "status":2,
      "page_count":3, //总页数
      "last_upload": "2018-09-11 12:00:00" // 最后一次上传时间
    },{
      "uid":"678ea1f",
      "name":"考试名称",
      "subject_id":1,
      "status":3,
      "page_count":3, //总页数
      "last_upload": "2018-09-11 12:00:00",  // 最后一次上传时间
      "time_start": "2018-09-11 12:00:00", // 开始批改时间
      "time_end": "2018-09-11 12:00:00", // 结束批改时间
    },{
      "uid":"678ea1f",
      "name":"考试名称",
      "subject_id":1,
      "status":4,
      "page_count":3, //总页数
      "last_upload": "2018-09-11 12:00:00",  // 最后一次上传时间
      "time_start": "2018-09-11 12:00:00", // 开始批改时间
      "time_end": "2018-09-11 12:00:00", // 结束批改时间
    }])
    // 测试用
    getExerciseList(studentId).then(data => {
      if (data) {
        this.formateExamList(data)
      }
    })
  },
  methods: {
    handlePageJump(exam) {
      console.log(exam)
    },
    handleDownloadReport(exam) {
      console.log(exam)
    },
    formateExamList(data) {
      let vm = this
        data.forEach(ele => {
        let tempObj = {}
        tempObj.title = ele.name
        tempObj.tag = vm.myUtils.getSubjectById(ele.subject_id) ?  vm.myUtils.getSubjectById(ele.subject_id).cn_name : '未知'
        tempObj.uid = ele.uid
        tempObj.page_count = ele.page_count
        tempObj.status = ele.status
        if (ele.status === 1) {
          tempObj.state = '未上传图片'
          tempObj.buttons = [
            { type: 'btn-default', text: '未上传', event: 'page-jump' }
          ]
        } else if (ele.status === 2) {
          tempObj.state = '图片上传于' + ele.last_upload
          tempObj.buttons = [
            { type: 'btn-info', text: '批改中', event: 'page-jump' }
          ]
        } else if (ele.status === 3) {
          tempObj.state = '批改完成于' + ele.time_end
          tempObj.buttons = [
            { type: 'btn-success btn-with-icon', text: '下载报告', iconName: 'download', event: 'download-report' },
            { type: 'btn-success', text: '查看成绩', event: 'page-jump' },
          ]
        } else if (ele.status === 4) {
          tempObj.state = '图片上传于' + ele.last_upload
          tempObj.buttons = [
            { type: 'btn-error', text: '批改异常', event: 'page-jump' }
          ]
        }
        vm.examList.push(tempObj)
      })
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
    margin-top: 20px;
  }
}
</style>
