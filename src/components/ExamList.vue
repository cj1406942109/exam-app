<template>
  <div class="exam-list">
    <search-box v-if="!hideSearch" placeholder="请输入考试名称" @search-text="searchExam"></search-box>
    <exam-list-item v-for="item in examList" :key="item.id"
      :title="item.title"
      :tag="item.tag"
      :state="item.state">
      <option-btn  v-for="btn in item.buttons" :key="btn.id"
      @click="triggleClick(btn, item)"
      :type="btn.type"><svg-icon v-if="btn.iconName" :name="btn.iconName"></svg-icon>{{btn.text}}</option-btn>
    </exam-list-item>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import ExamListItem from '@/components/ExamListItem'

export default {
  name: 'exam-list',
  components: {
    SearchBox,
    ExamListItem
  },
  data () {
    return {
      examList: this.data
    }
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    hideSearch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconPath() {
      return require(`@/assets/icons/${this.name}.svg`).default.url;
    }
  },
  methods: {
    searchExam (text) {
      console.log(text)
      this.$emit('search-exam', text)
    },
    triggleClick (btn ,exam) {
      this.$emit(btn.event, exam)
    }
  }
}
</script>

<style lang="scss" scoped>
.exam-list {
  .search-box {
    margin: 10px 50px 10px 0;
    justify-content: flex-end;
  }
  .exam-list-item {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
