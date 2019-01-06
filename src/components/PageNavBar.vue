<template>
  <div class="page-nav-bar">
    <div class="nav-info">
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
  height: 50px;
  padding: 0 20px;
  background-color: #08a7a1;
  border-radius: 5px;
  color: #fff;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  button {
    color: #08a7a1;
    cursor: pointer;
    font-size: 14px;
    background-color: #fff;
    border: none;
    min-width: 100px;
    outline: none;
    padding: 10px 20px;
    border-radius: 18px;
    margin-right: 20px;
  }
}
</style>

