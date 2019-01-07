<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, "Nimbus Sans L",
    Arial, "Liberation Sans", "Hiragino Sans GB", "Source Han Sans CN",
    "Source Han Sans SC", "Microsoft YaHei", "微软雅黑", "Wenquanyi Micro Hei",
    "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp",
    sans-serif;
  background-color: #fafafa;
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

.page-main {
  max-width: 1200px;
  min-width: 850px;
  margin: 0 auto;
  height: calc(100vh - 62px);
  box-sizing: border-box;
  padding: 0 50px;
  background-color: #fff;
}

// 全局样式

.finished .svg-icon{
  color: #08A7A1;
}
.correcting .svg-icon{
  color: #02A1F3;
}
.not-uploaded .svg-icon{
  color: #DDDDDD;
}
.exception .svg-icon{
  color: #FF6468;
}

.option-btn {
  color: #fff;
  width: 100px;
  font-size: 14px;
  padding: 8px 0;
  border: 1px solid transparent;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  .svg-icon {
    margin-right: 5px;
    color: #fff;
  }
  &.finished {
    background-color: #08A7A1;
  }
  &.correcting {
    background-color: #02A1F3;
  }
  &.not-uploaded {
    background-color: #DDDDDD;
  }
  &.exception {
    background-color: #FF6468;
  }
  &.plain {
    color: #08A7A1;
    border: 1px solid #08A7A1;
    background-color: #fff;
  }
}
// 覆盖element样式
.el-dialog {
  .el-dialog__body {
    padding: 20px !important;
  }
  .el-tabs__nav {
    border: none !important;
  }
  .el-tabs__item {
    height: 50px;
    line-height: 50px;
    background-color: #f7f8f9;
    border: 1px solid #e4e7ed !important;
    margin-right: 5px !important;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    &.is-active {
      border-bottom: none !important;
      background-color: #fff;
      font-weight: bold;
    }
  }
  .el-tabs__content {
    overflow: visible !important;
  }
  // 覆盖添加学生弹窗学生列表表头颜色
  .el-table {
    th {
      background: #eff6f6 !important;
    }
    td,
    th {
      padding: 5px 0;
    }
  }
}
// 确认弹窗按钮宽度重写
.el-message-box {
  width: 300px!important;
  padding: 20px 0!important;
  .el-message-box__title {
    font-size: 16px;
    padding-left: 20px;
    span::before {
      // content: url(./assets/icons/exclamation.svg)!important;
      content: url("./assets/test.png");
      margin-right: 5px;
      vertical-align: -0.2em;
    }
  }
  .el-message-box__btns {
    padding-right: 30px;
    button {
      width: 80px!important;
    }
  }
}
</style>
