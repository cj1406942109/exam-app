<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "微软雅黑", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
    background-color: #FAFAFA;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }

  // 覆盖element样式
  .el-dialog {
    .el-dialog__body {
      padding: 20px!important;
    }
    .el-tabs__nav {
      border: none!important;
    }
    .el-tabs__item {
      height: 50px;
      line-height: 50px;
      background-color: #F7F8F9;
      border: 1px solid #e4e7ed!important;
      margin-right: 5px!important;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      &.is-active {
        border-bottom: none!important;
        background-color: #fff;
        font-weight: bold;
      }
    }
    .el-tabs__content {
      overflow: visible!important;
    }
    // 覆盖添加学生弹窗学生列表表头颜色
    .el-table {
        th {
          background: #EFF6F6!important;
        }
        td, th {
          padding: 5px 0;
        }
      }
  }
</style>
