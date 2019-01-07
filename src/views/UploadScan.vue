<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <page-info-bar>
        请上传
        <strong>杨旭辉</strong>同学本次考试的
        <strong>3张</strong>图片
        <template slot="btn">
          <option-btn @click="pageJump('upload')" type="btn-primary">返回</option-btn>
        </template>
      </page-info-bar>
      <list-item title="2019年初一英语考试" tag="初中英语" state="图片上传于2019-01-03 10:04">
        <option-btn @click="pageJump('exam-detail')" type="btn-success btn-medium">查看考试详情</option-btn>
      </list-item>
      <div class="code-area">
        <p>使用手机拍照上传答题卡</p>
        <img src="./code.png" alt="二维码">
        <p>请扫码二维码</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import PageInfoBar from '@/components/PageInfoBar'
import ListItem from '@/components/ListItem'

export default {
  name: 'upload-scan',
  components: {
    AppHeader,
    PageInfoBar,
    ListItem
  },
  methods: {
    pageJump(name) {
      this.$router.push({ name });
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
  .list-item {
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
