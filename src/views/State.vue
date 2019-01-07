<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <list-item title="2019年初一英语考试" tag="初中英语" description="图片上传于2019-01-03 10:04">
        <button class="option-btn btn-primary" @click="pageJump('student')">返回</button>
      </list-item>
      <div class="state-wrapper">
        <div class="current-state">
          <div class="error-wrapper" v-if="false">
            <p class="error-title color-error"><svg-icon name="error"></svg-icon>批改图片异常终止</p>
            <p class="error-subtitle">异常原因：图片过于模糊</p>
            <button class="option-btn btn-success">重新上传</button>
            <button class="option-btn btn-primary">放弃批改</button>
          </div>
          <div class="normal-wrapper color-success" v-else>
            <img src="./loading.png" alt="批改中">
            <span>批改中</span>
            <p>请耐心等待~</p>
          </div>
        </div>
        <div class="pic-wrapper">
          <p class="pic-info"><strong>杨旭辉</strong>同学的图片上传于2019-01-03 10:05</p>
          <div class="pics">
            <div><img src="./answer-sheet.png" alt="答题卡"><p>第一页</p></div>
            <div><img src="./answer-sheet.png" alt="答题卡"><p>第二页</p></div>
            <div><img src="./answer-sheet.png" alt="答题卡"><p>第三页</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import ListItem from '@/components/ListItem'

export default {
  name: 'state',
  components: {
    AppHeader,
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
  .state-wrapper {
    border: 1px solid #eee;
    margin-top: 10px;
    border-radius: 5px;
    padding: 30px;
    .current-state {
      padding: 30px;
      border-bottom: 1px dashed #ccc;
      .error-wrapper {
        text-align: center;
        .error-title {
          margin-bottom: 20px;
          font-size: 16px;
          .svg-icon {
            font-size: 1.3em;
            margin-right: 10px;
            vertical-align: -0.3em;
          }
        }
        .error-subtitle {
          font-size: 14px;
          color: #666;
        }
        button {
          margin-right: 10px;
        }
      }
      .normal-wrapper {
        text-align: center;
        span {
          display: inline-block;
          width: 100px;
          text-align: center;
          position: relative;
          margin-left: -100px;
          top: -42px;
          font-size: 14px;
        }
        img {
          height: 100px;
          animation: rotate 10s infinite linear;
        }
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    .pic-wrapper {
      .pic-info {
        color: #666;
        margin: 30px 0;
        strong {
          margin: 0 10px;
          font-weight: bold;
        }
      }
      .pics {
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
        div {
          text-align: center;
          color: #666;
          img {
            height: 250px;
          }
        }
      }
    }
  }
}
</style>
