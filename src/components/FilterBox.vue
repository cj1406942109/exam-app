<template>
  <div class="filter-box">
    <div class="filter-list-wrapper" v-for="item in filterList" :key="item.id">
      <div class="filter-list-title">{{item.type}}</div>
      <ul class="filter-list-items">
        <li v-for="subItem in removeDuplicate(item.value)" :key="subItem.id">
          <button :class="{selected: subItem === item.selected}" @click="changeFilter(item.type, subItem)">{{subItem}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filter-box',
  data () {
    return {
      filterList: JSON.parse(JSON.stringify(this.data))
    }
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: [
        {
          type: 'list1',
          value: ['item1', 'item2', 'item3'],
          selected: 'item1'
        },
        {
          type: 'list2',
          value: ['item1', 'item2', 'item3', 'item4'],
          selected: 'item1'
        }
      ]
    }
  },
  methods: {
    // 去重复值
    removeDuplicate (array) {
      return [...new Set(array)]
    },
    changeFilter (type, value) {
      this.filterList.forEach(ele => {
        if (type === ele.type) {
          if (value !== ele.selected) {
            ele.selected = value
          }
        }
      });
      this.$emit('filter-change', { type, value })
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-box {
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0 20px;
  .filter-list-wrapper {
    background-color: #FEFEFE;
    border-bottom: 1px dashed #eee;
    display: flex;
    .filter-list-title {
      font-weight: bold;
      line-height: 60px;
      &::after {
        content: ':';
        margin: 0 5px;
      }
    }
    .filter-list-items {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      line-height: 60px;
      button {
        border: 1px solid transparent;
        padding: 5px 8px;
        border-radius: 3px;
        margin: 0 10px;
        color: #666;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        &:hover {
          border: 1px solid #11D0C4;
          color: #11D0C4;
        }
        &.selected {
          background-color: #11D0C4;
          color: #fff;
        }
      }
    }
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
