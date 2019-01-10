<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <exam-list-item title="2019年初一英语考试" student="杨旭辉" state="图片上传于2019-01-03 10:04">
        <dropdown-btn btnText="下载个人报告" @btn-click="downloadReport">
          <button>报告重新生成</button>
          <button>重新上传</button>
        </dropdown-btn>
        <option-btn @click="myUtils.goBack()" type="btn-primary">返回</option-btn>
      </exam-list-item>
      <div class="report-wrapper">
        <div class="report-item">
          <div class="report-item-title">
            <span>学情总览</span>
            <el-tooltip placement="top-end" :hide-after="0" popper-class="report-help-propper">
              <div slot="content">根据得分率显示档次名称：A（80-100）；B（70-80）；C（60-70）；D（0-60）<br>
                优势项目：A等；平均水平：B、C等；薄弱项目：D等</div>
              <span>等级评价<svg-icon name="help"></svg-icon></span>
            </el-tooltip>
          </div>
          <div class="report-item-content">
            <div class="circle green">
              <p>得分</p><span><strong>119.5</strong>/150分</span>
            </div>
            <div class="circle blue">
              <p>得分率</p><span><strong>79.6</strong>%</span>
            </div>
            <div class="circle yellow">
              <p>等级评价</p><span><strong>B</strong></span>
            </div>
          </div>
        </div>
        <div class="report-item">
          <div class="report-item-title">
            <span>试题分析</span>
          </div>
          <div class="report-item-content">
            <div class="radar-chart-wrapper">
              <div ref="radar" class="radar-chart"></div>
              <div class="analysis">
                <p class="great">阅读理解、改错</p>
                <p class="normal">听力、写作</p>
                <p class="weak">完型填空</p>
              </div>
            </div>
          </div>
        </div>
        <div class="report-table">
          <el-table :data="reportTable" style="width: 100%">
            <el-table-column align="center" prop="name" label="模块"></el-table-column>
            <el-table-column align="center" prop="number" label="题号"></el-table-column>
            <el-table-column align="center" prop="knowledge" label="知识点"></el-table-column>
            <el-table-column align="center" prop="degree" label="难度"></el-table-column>
            <el-table-column align="center" prop="point" label="分值"></el-table-column>
            <el-table-column align="center" prop="score" label="得分"></el-table-column>
            <el-table-column align="center" prop="rate" label="得分率"></el-table-column>
          </el-table>
        </div>
        <div class="more-content">
          <p>更多内容，请下载学生个人报告</p>
          <option-btn type="btn-success btn-medium btn-with-icon" @click="downloadReport"><svg-icon name="download"></svg-icon>下载个人报告</option-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
// @ is an alias to /src
import AppHeader from '@/components/Header'
import ExamListItem from '@/components/ExamListItem'
import DropdownBtn from '@/components/DropdownBtn'

export default {
  name: 'report',
  components: {
    AppHeader,
    ExamListItem,
    DropdownBtn
  },
  data () {
    return {
      chartData: '',
      reportTable: [
        { name: '阅读', number: '12', knowledge: '理解说话者的意图', degree: '中等', point: '10', score: '7', rate: '70' },
        { name: '阅读', number: '12', knowledge: '理解说话者的意图', degree: '中等', point: '10', score: '7', rate: '70' },
        { name: '阅读', number: '12', knowledge: '理解说话者的意图', degree: '中等', point: '10', score: '7', rate: '70' },
        { name: '阅读', number: '12', knowledge: '理解说话者的意图', degree: '中等', point: '10', score: '7', rate: '70' },
        { name: '阅读', number: '12', knowledge: '理解说话者的意图', degree: '中等', point: '10', score: '7', rate: '70' },
        { name: '阅读', number: '12', knowledge: '理解说话者的意图', degree: '中等', point: '10', score: '7', rate: '70' },
        { name: '阅读', number: '12', knowledge: '理解说话者的意图', degree: '中等', point: '10', score: '7', rate: '70' }
      ]
    }
  },
  mounted(){
    this.$nextTick(function() {
        this.drawRadar('radar')
    })
  },
  methods: {
    downloadReport() {
      console.log('下载报告')
    },
    drawRadar(ele) {
      let myChart = echarts.init(this.$refs[ele])
      let option = {
        color: ['#4CB5FE','#F5A623'],
        legend: {
          top: 20,
          left: 500,
          itemWidth: 16,
          itemHeight: 16,
          itemGap: 50,
          textStyle: {
            fontSize: 16
          },
          data: [
            {name: '个人', icon: 'rect'},
            {name: '同水平学生', icon: 'rect'},
          ]
        },
        radar: [
          {
            indicator: [
              { color: '#333', text: '听力', max: 100 },
              { color: '#333', text: '写作', max: 100 },
              { color: '#333', text: '改错', max: 100 },
              { color: '#333', text: '短文填空', max: 100 },
              { color: '#333', text: '完型填空', max: 100 },
              { color: '#333', text: '阅读理解', max: 100 }
            ],
            center: ['160', '50%'],
            radius: 80,
            splitLine: {
              show: false
            },
            splitArea: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '试题分析',
            type: 'radar',
            data: [
              {
                value: [90, 80, 70, 60, 80, 70],
                name: '个人',
                symbol: 'path://M 100,100 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0',
                symbolSize: 6,
                areaStyle: {
                  normal: {
                    color: '#EFF7FD',
                    opacity: 0.9
                  },
                  emphasis: {
                    color: '#EFF7FD',
                    opacity: 0.9
                  }
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              },
              {
                value: [90, 70, 30, 30, 70, 60],
                name: '同水平学生',
                symbol: 'none',
                areaStyle: {
                  normal: {
                    opacity: 0
                  }
                }
              },
              {
                value : [80, 80, 80, 80, 80, 80],
                symbol: 'none',
                lineStyle: {
                  normal: {
                    color: '#ddd',
                    type: 'dashed'
                  },
                  emphasis: {
                    color: '#ddd'
                  }
                }
              },
              {
                value : [100, 100, 100, 100, 100, 100],
                symbol: 'none',
                lineStyle: {
                  normal: {
                    color: '#ddd',
                    type: 'solid'
                  },
                  emphasis: {
                    color: '#ddd'
                  }
                }
              },
            ]
          }
        ]
      }
      myChart.setOption(option);
    }
  }
}
</script>

<style lang="scss" scoped>
.page-main {
  padding: 20px;
  .report-wrapper {
    margin-top: 20px;
    .report-item {
      .report-item-title {
        padding: 0 15px;
        border-left: 3px solid #28D4C9;
        color: #666;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        .el-tooltip {
          cursor: pointer;
          outline: none;
          color: #08A7A1;
          .svg-icon {
            margin: 0 10px;
          }
        }
      }
      .report-item-content {
        display: flex;
        justify-content: space-evenly;
        padding: 30px;
        .circle {
          width: 150px;
          height: 150px;
          background-color: pink;
          border-radius: 50%;
          text-align: center;
          color: #fff;
          font-size: 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            margin: -5px 0 10px;
          }
          strong {
            font-weight: normal;
            font-size: 24px;
          }
          &.green {
            background-color: #A5E79B;
          }
          &.blue {
            background-color: #76AFFF;
          }
          &.yellow {
            background-color: #FED491;
          }
        }
        .radar-chart-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          .radar-chart {
            height: 240px;
            width: 800px;
          }
          .analysis {
            width: 300px;
            margin-left: -300px;
            padding-top: 60px;
            p {
              line-height: 30px;
              color: #666;
              &::before {
                margin-right: 30px;
              }
              &.great::before {
                color: #11D0C4;
                content: '\2022\0020优势项目';
              }
              &.normal::before {
                color: #6679FF;
                content: '\2022\0020平均水平';
              }
              &.weak::before {
                color: #FC6766;
                content: '\2022\0020薄弱项目';
              }
            }
          }
        }
      }
    }
    .report-table {
      .el-table {
        border: 1px solid #ebeef5;
        border-bottom: none;
      }
    }
    .more-content {
      margin: 40px 0;
      background-color: #F7F7F7;
      border-radius: 5px;
      text-align: center;
      padding: 30px 0;
      p {
        color: #666;
        margin-top: 0;
      }
    }
  }
}
</style>
