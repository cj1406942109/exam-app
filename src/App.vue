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
  min-height: calc(100vh - 72px);
  box-sizing: border-box;
  padding: 0 50px;
  background-color: #fff;
}

.mobile-page {
  background-color: #fff;
  min-height: 100vh;
  overflow: auto;
  button {
    width: 100%;
    height: 45px;
  }
}

// 覆盖element样式
.el-table {
  th {
    background: #eff6f6 !important;
    color: #333;
    font-weight: bold;
  }
}
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
    td, th {
      padding: 5px 0;
    }
  }
}
// 确认弹窗按钮宽度重写
.upload-confirm.el-message-box {
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
.photograph-confirm.el-message-box {
  width: 250px!important;
  text-align: center;
  .el-message-box__content {
    padding: 20px;
  }
  .el-message-box__btns {
    text-align: center;
    button {
      width: 100px;
    }
  }
}
.exam-tabs.el-tabs {
  .el-tabs__header {
    margin: 0!important;
    border-bottom-right-radius: 5px;
  }
  .el-tabs__item {
    min-width: 100px;
    &.is-active {
      font-weight: bold;
    }
  }
}

// 报告页面tooltip
.report-help-propper.el-tooltip__popper[x-placement^=top]{
  line-height: 1.5em;
  background-color: rgba(48, 49, 51, 0.7)!important;
  .popper__arrow::after {
    border-top-color: rgba(48, 49, 51, 0.7)!important;
  }
  .popper__arrow {
    border-top-color: transparent;
  }
}

// 进度条样式覆盖
.el-progress {
  .el-progress-bar__outer {
    background-color: #ECEAEA;
    border: 1px solid #ECEAEA;
    border-radius: 0;
  }
  .el-progress-bar__inner {
    border-radius: 0;
  }
  .el-progress__text {
    color: #333!important;
    width: 30px;
  }
  &.is-success .el-progress__text {
    color: #11D0C4!important;
  }
}

.el-popover {
  min-width: 80px!important;
  text-align: center!important;
  .svg-icon {
    margin-right: 5px;
  }
}
</style>
