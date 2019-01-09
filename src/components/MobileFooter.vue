<template>
  <div class="mobile-footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mobile-footer'
}
</script>


<style lang="scss" scoped>
.mobile-footer {
  position: fixed;
  bottom: 0;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
}
</style>
