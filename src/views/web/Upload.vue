<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <page-info-bar @btn-click="myUtils.goBack()" btn-text="返回">
        请选择<strong>{{currentStudent.name}}</strong>同学参加的考试，并提交对应的答题卡图片
      </page-info-bar>
      <filter-box :data="filterList" @filter-change="handleFilterChange"></filter-box>
      <search-box placeholder="请输入考试名称" @search-text="searchExam"></search-box>
      <div class="exam-list">
        <exam-list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
          <option-btn @click="myUtils.pageJump('upload-scan', {id: 12313123122, examId: 123134124})" type="btn-success">去上传</option-btn>
        </exam-list-item>
        <exam-list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
          <option-btn @click="reuploadPic" type="btn-primary">已上传</option-btn>
        </exam-list-item>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import PageInfoBar from '@/components/PageInfoBar'
import FilterBox from '@/components/FilterBox'
import SearchBox from '@/components/SearchBox'
import ExamListItem from '@/components/ExamListItem'

export default {
  name: 'upload',
  components: {
    AppHeader,
    PageInfoBar,
    FilterBox,
    SearchBox,
    ExamListItem
  },
    data () {
    return {
      currentStudent: JSON.parse(this.myUtils.getItem('currentStudent')),
      filterList: [
        {
          type: '学段',
          value: ['全部', '小学', '初中', '高中'],
          selected: '全部'
        },
        {
          type: '学科',
          value: ['全部', '英语', '数学', '语文'],
          selected: '全部'
        }
      ]
    }
  },
  methods: {
    handleFilterChange(value) {
      console.log(value)
    },
    searchExam(text) {
      console.log(text)
    },
    reuploadPic() {
      this.$confirm('','是否重新上传', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '重新上传',
        cancelButtonText: '取消',
        customClass: 'upload-confirm'
      }).then(() => {
        this.myUtils.pageJump('upload-scan', {id: 12313123122, examId: 123134124})
      }).catch(() => {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-main {
  padding: 20px;
  .filter-box {
    margin-top: 20px;
  }
  .search-box {
    margin-top: 10px;
    margin-right: 50px;
    justify-content: flex-end;
  }
  .exam-list {
    .exam-list-item {
      margin-top: 10px;
    }
  }
}
</style>

