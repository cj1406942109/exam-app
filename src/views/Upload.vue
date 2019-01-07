<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <page-nav-bar>
        <svg-icon name="exclamation"></svg-icon>
        请选择<strong>杨旭辉</strong>同学参加的考试，并提交对应的答题卡图片
        <template slot="btn">
          <button @click="returnStudent">返回</button>
        </template>
      </page-nav-bar>
      <div class="filter-wrapper">
        <div class="filter-part">
          <div class="filter-title">学段：</div>
          <ul>
            <li><button>全部</button></li>
            <li><button>小学</button></li>
            <li><button>初中</button></li>
            <li><button>高中</button></li>
          </ul>
        </div>
        <div class="filter-part">
          <div class="filter-title">学科：</div>
          <ul>
            <li><button>全部</button></li>
            <li><button>英语</button></li>
            <li><button>数学</button></li>
            <li><button>语文</button></li>
          </ul>
        </div>
      </div>
      <search-box placeholder="请输入考试名称" v-on:search-text="searchExam"></search-box>
      <div class="exam-list">
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn finished" @click="uploadScan">去上传</button>
        </list-item>
        <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
          <button class="option-btn plain" @click="reuploadPic">已上传</button>
        </list-item>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import PageNavBar from '@/components/PageNavBar'
import SearchBox from '@/components/SearchBox'
import ListItem from '@/components/ListItem'

export default {
  name: 'upload-pic',
  components: {
    AppHeader,
    PageNavBar,
    SearchBox,
    ListItem
  },
  methods: {
    returnStudent() {
      this.$router.push({ name: 'student' });
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
        this.uploadScan()
      }).catch(() => {
      })
    },
    uploadScan() {
      this.$router.push({ name: 'upload-scan' });
    }
  }
}
</script>

<style lang="scss" scoped>
.page-main {
  padding: 20px;
  .page-nav-bar {
    .svg-icon {
      margin-right: 10px;
    }
    strong {
      margin: 0 10px;
    }
  }
  .filter-wrapper {
    height: 120px;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0 20px;
    .filter-part {
      height: 60px;
      line-height: 60px;
      border-bottom: 1px dashed #eee;
      display: flex;
      &:last-child {
        border-bottom: none;
      }
      .filter-title {
        font-weight: bold;
      }
      ul {
        display: flex;
        align-items: center;
        li {
          margin: 0 10px;
          button {
            cursor: pointer;
            border: 1px solid transparent;
            background-color: transparent;
            font-size: 16px;
            padding: 5px 10px;
            border-radius: 3px;
            outline: none;
            &.selected, &:hover {
              color: #08A7A1;
              border: 1px solid #08A7A1;
              background-color: rgba(8, 167, 162, 0.05);
            }
          }
        }
      }
    }
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

