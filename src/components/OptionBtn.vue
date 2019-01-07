<template>
  <button :class="className" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'option-btn',
  props: {
    type: {
      type: String
    }
  },
  computed: {
    className() {
      return 'option-btn ' + this.type;
    }
  }
}
</script>

<style lang="scss" scoped>

$color-success: #08A7A1;
$color-info: #02A1F3;
$color-default: #DDDDDD;
$color-warning: #FFAA01;
$color-error: #FF6468;
$color-success-opacity: rgba(8, 167, 162, 0.05);

.option-btn {
  color: #fff;
  min-width: 100px;
  font-size: 14px;
  padding: 8px 10px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  // 不同背景颜色的按钮
  &.btn-success {
    background-color: $color-success;
  }
  &.btn-info {
    background-color: $color-info;
  }
  &.btn-default {
    background-color: $color-default;
  }
  &.btn-error {
    background-color: $color-error;
  }
  &.btn-primary {
    background-color: transparent;
    color: $color-success;
    border: 1px solid $color-success;
    &:hover {
      background-color: $color-success-opacity;
    }
  }
  &.btn-small {
    min-width: 60px;
    padding: 3px 5px;
  }
  &.btn-medium {
    min-width: 120px;
    padding: 8px 15px;
  }
  &.btn-large {
    min-width: 300px;
  }
  &.btn-with-icon {
    .svg-icon {
      margin-right: 5px;
    }
  }
}
</style>

