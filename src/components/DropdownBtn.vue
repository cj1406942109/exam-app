<template>
  <div class="dropdown-btn" @mouseleave="toggleMenu(false)" ref="dropdownBtn">
    <option-btn type="btn-success btn-medium" @click="$emit('btn-click')">{{btnText}}
      <svg-icon name="arrow-down" @mouseenter.native="toggleMenu(true)">
      </svg-icon>
    </option-btn>
    <div class="dropdown-list" v-show="showMenu" :style="`width: ${menuWidth}px`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown-btn',
  data () {
    return {
      showMenu: false,
      menuWidth: 100
    }
  },
  props: {
    btnText: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.menuWidth = this.$refs['dropdownBtn'].clientWidth
  },
  methods: {
    toggleMenu (value) {
      this.showMenu = value;
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-btn {
  .option-btn {
    .svg-icon {
      margin-left: 5px;
    }
  }
  .dropdown-list {
    position: absolute;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 10px 0;
    text-align: center;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 5px;
    &::before{
      content:'';
      position: absolute;
      top: -8px;;
      right: 20px;
      border: 4px solid transparent;
      border-bottom-color:#fff;
      z-index: 12;
    }
    &::after{
      content:'';
      position: absolute;
      top: -10px;
      right: 19px;
      border: 5px solid transparent;
      border-bottom-color:#eee;
      z-index: 10;
    }
    button {
      margin-bottom: 5px;
      border: none;
      padding: 10px;
      border-radius: 3px;
      color: #666;
      outline: none;
      width: 100px;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        color: #08A7A1;
      }
      &:active {
        color: #fff;
        background-color: #08A7A1;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
