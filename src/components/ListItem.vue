<template>
  <div class="list-item">
      <div class="list-info">
        <h3>{{title}}</h3>
        <p><span>{{tag}}</span>{{description}}</p>
      </div>
      <div class="list-btn">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'list-item',
  props: {
    title: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
.list-item {
    border: 1px solid #eee;
    // height: 120px;
    border-radius: 5px;
    padding: 30px 50px 30px 30px;
    display: flex;
    justify-content: space-between;
    .list-info {
      max-width: 600px;
      overflow: hidden;
      h3 {
        margin: 0;
        font-weight: normal;
      }
      p {
        margin: 30px 0 0;
        color: #666;
        span {
          color: #08A7A1;
          margin-right: 20px;
          &::before {
            content: '\005B';
          }
          &::after {
            content: '\005D';
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

