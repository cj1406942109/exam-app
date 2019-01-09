<template>
  <div class="mobile-page">
    <mobile-nav>拍照识别小技巧</mobile-nav>
    <div class="requirement-wrapper">
      <div class="detail">
        <div class="list">
          <ol>
            <p>拍摄要求：</p>
            <li>答题纸<span>水平拍摄，无倾角</span>；</li>
            <li>答题纸<span>平整，无卷曲</span>；</li>
            <li>二维码清晰完整；</li>
            <li>答题纸四角的<span>四个定位点</span>完整无污损。如右图：</li>
          </ol>
          <img src="./sample-correct.jpg" alt="正确示例">
        </div>
        <p class="info"><svg-icon name="info"></svg-icon>如何进行水平拍摄？<br>
          拍照时，保持纸张四边与屏幕边框或参考线平行即可。
        </p>
      </div>
      <div class="wrong-sample">
        <p>错误样例示范：</p>
        <div class="error-pics">
          <div class="error-pic">
            <img src="./sample-not-complete.jpg" alt="错误示例-不完整">
            <svg-icon name="error"></svg-icon>
            <p>要拍摄完整纸张，而不是仅仅拍摄答题区域</p>
          </div>
          <div class="error-pic">
            <img src="./sample-not-straight.jpg" alt="错误示例-弯曲">
            <svg-icon name="error"></svg-icon>
            <p>纸张不要弯曲，拍前请放平，如有弯曲请压平</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileNav from '@/components/MobileNav'

export default {
  name: 'requirement',
  components: {
    MobileNav
  }
}
</script>

<style lang="scss" scoped>
.mobile-page {
  .requirement-wrapper {
    margin-top: 50px;
    padding: 0 10px;
    .detail {
      border-bottom: 1px dashed #ccc;
      padding: 10px 0;
      color: #666;
      .list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 1.8em;
        ol {
          margin: 0;
          padding-left: 30px;
          p {
            margin: 0 0 10px -15px;
            color: #48B3FF;
          }
          li span {
            color: #11D0C4;
          }
        }
        img {
          width: 30vw;
          max-width: 150px;
          border: 2px solid #FF6E36;
          border-radius: 5px;
          margin-left: 5px;
        }
      }
      .info {
        color: #999;
        font-size: 14px;
        padding-left: 30px;
        .svg-icon {
          margin-left: -25px;
          margin-right: 5px;
          font-size: 1.2em;
          vertical-align: -0.3em;
        }
      }
    }
    .wrong-sample {
      padding: 10px 0;
      & > p {
        color: #FF6468;
        padding-left: 10px;
      }
      .error-pics {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        .error-pic {
          text-align: center;
          margin: 0 5px;
          img {
            width: 30vw;
            max-width: 150px;
            margin: 0 auto 10px;
            border-radius: 5px;
            display: block;
          }
          .svg-icon {
            font-size: 1.2em;
            color: #FF6468;
          }
          p {
            color: #666;
            margin: 10px 0;
          }
        }
      }
    }
  }
}
</style>
