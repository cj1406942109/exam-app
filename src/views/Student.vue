<template>
  <div class="page-wrapper">
    <AppHeader/>
    <div class="page-main">
      <page-nav-bar>
        <span>杨旭辉</span>
        <span>17823423421</span>
        <template slot="btn">
          <button @click="uploadPic"><svg-icon name="upload"></svg-icon>上传图片批改</button>
          <button @click="returnHome">返回</button>
        </template>
      </page-nav-bar>
      <div class="exam-list">
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn correcting">批改中</button>
        </list-item>
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn finished"><svg-icon name="download"></svg-icon>下载报告</button>
          <button class="option-btn finished">查看成绩</button>
        </list-item>
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn exception">批改异常</button>
        </list-item>
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn correcting">批改中</button>
        </list-item>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import PageNavBar from '@/components/PageNavBar'
import ListItem from '@/components/ListItem'

export default {
  name: 'student',
  components: {
    AppHeader,
    PageNavBar,
    ListItem
  },
  methods: {
    returnHome() {
      this.$router.push({ name: 'home' });
    },
    uploadPic() {
      this.$router.push({ name: 'upload-pic' });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-main {
  padding: 20px;
  .page-nav-bar {
    span {
      margin-right: 50px;
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
