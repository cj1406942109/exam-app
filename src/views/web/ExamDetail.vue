<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <exam-list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
        <dropdown-btn btnText="下载答题卡" @btn-click="downloadAnswerSheet">
          <button>下载答案卷</button>
        </dropdown-btn>
        <option-btn @click="myUtils.goBack()" type="btn-primary">返回</option-btn>
      </exam-list-item>
      <el-tabs v-model="activeTab" type="card" class="exam-tabs">
        <el-tab-pane label="试题" name="question">试题</el-tab-pane>
        <el-tab-pane label="答案" name="answer">答案</el-tab-pane>
        <el-tab-pane label="答题卡" name="answersheet">
          <div class="answersheet-spec">
            <p>类型：标准答题卡；纸张大小：A4；板式：竖版单栏；页数：2</p>
            <p class="color-info" @click="isAnswerShow=!isAnswerShow">
              <span v-show="isAnswerShow"><svg-icon name="eye-on"></svg-icon>显示答案</span>
              <span v-show="!isAnswerShow"><svg-icon name="eye-off"></svg-icon>隐藏答案</span>
            </p>
          </div>
          <page-info-bar title="答题卡打印须知：">
            本答题卡有2页，请使用<strong>双面打印</strong>，即将2页打印到一张纸的正反两面来进行印制
          </page-info-bar>
          <div class="answersheet-pic">
            <img src="./answer-sheet.png" alt="答题卡">
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import ExamListItem from '@/components/ExamListItem'
import DropdownBtn from '@/components/DropdownBtn'
import PageInfoBar from '@/components/PageInfoBar'

export default {
  name: 'exam',
  components: {
    AppHeader,
    ExamListItem,
    DropdownBtn,
    PageInfoBar
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
            { className: 'btn-success', text: '查看', event: 'page-jump' }
          ]
        },
        {
          title: '2019年初一英语考试',
          tag: '初中英语',
          state: '图片上传于2019-01-03 10:04',
          buttons: [
            { className: 'btn-success', text: '查看', event: 'page-jump' }
          ]
        }
      ],
      activeTab: 'question',
      isAnswerShow: false
    }
  },
  methods: {
    handleFilterChange(value) {
      console.log(value)
    },
    downloadAnswerSheet() {
      console.log('下载')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-main {
  padding: 20px;
  .el-tabs {
    margin-top: 10px;
    .el-tab-pane {
      border: 1px solid #e4e7ed;
      border-top: none;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 30px;
      .answersheet-spec {
        display: flex;
        justify-content: space-between;
        .color-info {
          cursor: pointer;
        }
        .svg-icon {
          margin-right: 5px;
          vertical-align: -0.3em;
        }
      }
      .answersheet-pic {
        text-align: center;
        margin-top: 30px;
        img {
          width: 300px;
        }
      }
    }
  }
}
</style>
