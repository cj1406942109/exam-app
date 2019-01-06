<template>
  <div class="search-box" :class="size">
    <input type="text" v-model="searchText" :placeholder="placeholder">
    <button @click="$emit('search-text', searchText)">
      <svg-icon name="search"></svg-icon>
    </button>
  </div>
</template>

<script>
export default {
    name: 'search-box',
    data () {
        return {
            searchText: ''
        }
    },
    props: {
        placeholder: {
            type: String,
            default: '请输入学生姓名'
        },
        size: {
            type: String
        }
    }
}
</script>


<style lang="scss" scoped>
.search-box {
  display: flex;
  input {
    width: 150px;
    height: 40px;
    border: 1px solid #99a9bf;
    color: #99a9bf;
    border-top-left-radius: 20px;
    box-sizing: border-box;
    border-bottom-left-radius: 20px;
    padding-left: 20px;
    vertical-align: top;
    outline: none;
    &::placeholder {
      color: #99a9bf;
    }
  }
  input + button {
    cursor: pointer;
    height: 40px;
    width: 50px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: #99a9bf;
    border: 1px solid #99a9bf;
    border-left: none;
    font-size: 1.2em;
    background-color: #fff;
    outline: none;
    &:hover {
      background-color: #f9fafc;
    }
  }
  &.small {
      input, button {
          height: 30px;
      }
  }
}
</style>

