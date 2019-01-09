<template>
  <div class="exam-list-item">
      <div class="list-info">
        <h3>{{title}}</h3>
        <p :class="{'color-success': student}">
          <span v-if="tag" class="list-tag color-success">{{tag}}</span>
          <span v-if="student" class="list-student">{{student}}</span>
          {{state}}
        </p>
      </div>
      <div class="list-btn">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'exam-list-item',
  props: {
    title: {
      type: String,
      required: true
    },
    tag: {
      type: String
    },
    student: {
      type: String
    },
    state: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
.exam-list-item {
    border: 1px solid #eee;
    // height: 120px;
    border-radius: 5px;
    padding: 30px 50px 30px 30px;
    display: flex;
    justify-content: space-between;
    .list-info {
      max-width: 600px;
      overflow: hidden;
      color: #666;
      h3 {
        margin: 0;
        color: #333;
        font-weight: normal;
      }
      p {
        margin: 30px 0 0;
        .list-tag {
          margin-right: 20px;
          &::before {
            content: '\005B';
          }
          &::after {
            content: '\005D';
          }
        }
        .list-student {
          margin-right: 20px;
          &::before {
            content: '学生：'
          }
        }
      }
    }
    .list-btn {
      display: flex;
      align-items: center;
      button {
        margin-left: 20px;
      }
    }
}
</style>

