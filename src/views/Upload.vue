<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <page-info-bar @btn-click="pageJump('student')" btn-text="返回">
        请选择<strong>杨旭辉</strong>同学参加的考试，并提交对应的答题卡图片
      </page-info-bar>
      <filter-box :data="filterList" @filter-change="handleFilterChange"></filter-box>
      <search-box placeholder="请输入考试名称" @search-text="searchExam"></search-box>
      <div class="exam-list">
        <list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
          <option-btn @click="pageJump('upload-scan')" type="btn-success">去上传</option-btn>
        </list-item>
        <list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
          <option-btn @click="reuploadPic" type="btn-primary">已上传</option-btn>
        </list-item>
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
import ListItem from '@/components/ListItem'

export default {
  name: 'upload',
  components: {
    AppHeader,
    PageInfoBar,
    FilterBox,
    SearchBox,
    ListItem
  },
    data () {
    return {
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
    pageJump(name) {
      this.$router.push({ name });
    },
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
        cancelButtonText: '取消'
      }).then(() => {
        this.pageJump('upload-scan')
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
    .list-item {
      margin-top: 10px;
    }
  }
}
</style>

