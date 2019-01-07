<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <filter-box :data="filterList" @filter-change="handleFilterChange"></filter-box>
      <exam-list :data="examList" @page-jump="handlePageJump"></exam-list>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import FilterBox from '@/components/FilterBox'
import ExamList from '@/components/ExamList'

export default {
  name: 'exam',
  components: {
    AppHeader,
    FilterBox,
    ExamList
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
      ],
      examList: [
        {
          title: '2019年初一英语考试',
          tag: '初中英语',
          state: '图片上传于2019-01-03 10:04',
          buttons: [
            { type: 'btn-success', text: '查看', event: 'page-jump' }
          ]
        },
        {
          title: '2019年初一英语考试',
          tag: '初中英语',
          state: '图片上传于2019-01-03 10:04',
          buttons: [
            { type: 'btn-success', text: '查看', event: 'page-jump' }
          ]
        }
      ]
    }
  },
  methods: {
    handleFilterChange(value) {
      console.log(value)
    },
    handlePageJump(value) {
      console.log(value)
      this.$router.push({ name: 'exam-detail', params: { id: 123456 } })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-main {
  padding: 20px;
}
</style>
