<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <page-info-bar @btn-click="myUtils.goBack()" btn-text="返回">
        请上传<strong>杨旭辉</strong>同学本次考试的<strong>3张</strong>图片
      </page-info-bar>
      <exam-list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
        <option-btn @click="myUtils.pageJump('exam-detail')" type="btn-success btn-medium">查看考试详情</option-btn>
      </exam-list-item>
      <div class="code-area">
        <p>使用手机拍照上传答题卡</p>
        <q-r-code text="http://192.168.23.1:8080/#/mobile"></q-r-code>
        <p>请扫码二维码</p>
        <el-button @click="finishScan">测试完成扫码</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import PageInfoBar from '@/components/PageInfoBar'
import ExamListItem from '@/components/ExamListItem'
import QRCode from '@/components/QRCode'

export default {
  name: 'upload-scan',
  components: {
    AppHeader,
    PageInfoBar,
    ExamListItem,
    QRCode
  },
  methods: {
    finishScan() {
      window.open('#/mobile')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-main {
  padding: 20px;
  .page-info-bar {
    .svg-icon {
      margin-right: 10px;
    }
    strong {
      color: #FF6E36;
      margin: 0 10px;
    }
  }
  .exam-list-item {
    margin-top: 20px;
  }
  .code-area {
    min-height: 500px;
    border: 1px solid #eee;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    p {
      color: #666;
    }
    img {
      margin: 0 auto;
      width: 200px;
    }
  }
}
</style>
