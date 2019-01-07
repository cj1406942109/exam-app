<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
.page-main {
  max-width: 1200px;
  min-width: 850px;
  margin: 0 auto;
  height: calc(100vh - 72px);
  box-sizing: border-box;
  padding: 0 50px;
  background-color: #fff;
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
      content: url("./assets/exclamation.png");
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
