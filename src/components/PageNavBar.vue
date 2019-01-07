<template>
  <div class="page-nav-bar">
    <div class="nav-info bg-warning color-warning">
      <slot></slot>
    </div>
    <div class="nav-btn">
      <slot name="btn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-nav-bar'
}
</script>


<style lang="scss" scoped>
.page-nav-bar {
  color: #fff;
  display: flex;
  justify-content: space-between;
  .nav-info {
    padding: 8px 10px;
    border-radius: 3px;
    width: calc(100% - 150px);
    min-width: 600px;
    overflow: hidden;
  }
}
</style>

