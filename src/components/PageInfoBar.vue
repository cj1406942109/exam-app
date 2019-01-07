<template>
  <div class="page-info-bar" :class="className">
    <div class="bar-wrapper color-warning">
        <div class="bar-title" v-if="title">
          <svg-icon name="exclamation"></svg-icon>
          {{title}}
        </div>
        <div class="bar-info-wrapper">
          <div class="bar-info bg-warning">
            <svg-icon name="exclamation"></svg-icon>
            <slot></slot>
          </div>
          <div class="bar-btn" v-if="btnText">
            <option-btn @click="$emit('btn-click')" type="btn-primary">{{btnText}}</option-btn>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-info-bar',
  props: {
    btnText: {
      type: String
    },
    title: {
      type: String
    }
  },
  computed: {
    className() {
      let tempClass = '';
      tempClass += this.btnText ? 'with-btn' : ''
      tempClass += this.title ? ' with-title' : ''
      return tempClass
    }
  }
}
</script>


<style lang="scss" scoped>
.page-info-bar {
  color: #fff;
  .bar-title {
    padding-left: 10px;
    margin-bottom: 10px;
    .svg-icon {
      margin-right: 10px;
    }
  }
  .bar-info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bar-info {
      padding: 8px 10px;
      border-radius: 3px;
      width: 100%;
      min-width: 600px;
      overflow: hidden;
      text-align: justify;
      .svg-icon {
        margin-right: 10px;
      }
      strong {
        color: #FF6E36;
        margin: 0 10px;
      }
    }
  }
  &.with-btn .bar-info {
    width: calc(100% - 150px);
  }
  &.with-title .bar-info .svg-icon {
    visibility: hidden;
  }
}
</style>
