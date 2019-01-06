<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <div class="option-wrapper">
        <ul>
          <li>今天</li>
          <li>{{moment().subtract(1, 'days').format('M 月 D 日')}}</li>
          <li>{{moment().subtract(2, 'days').format('M 月 D 日')}}</li>
          <li>更早</li>
        </ul>
        <button @click="addStudentHandler"><svg-icon name="plus"></svg-icon>添加学生</button>
      </div>
      <div class="student-wrapper">
        <div v-if="studentList.length === 0" class="no-student">
          <img src="./no-student.png" alt="尚未添加考生">
          <p>尚未添加考生</p>
        </div>
        <div v-else class="student-list-wrapper">
          <div class="search-wrapper">
            <div class="search-box">
              <input type="text" placeholder="请输入学生姓名"><button><svg-icon name="search"></svg-icon></button>
            </div>
            <ul class="status-indicators">
              <li class="finished"><svg-icon name="square"></svg-icon>批改完成</li>
              <li class="correcting"><svg-icon name="square"></svg-icon>批改中</li>
              <li class="not-uploaded"><svg-icon name="square"></svg-icon>未上传</li>
              <li class="exception"><svg-icon name="square"></svg-icon>异常</li>
            </ul>
          </div>
          <div class="student-list">
            <div class="student-box" v-for="item in studentList" :key="item.id" :class="item.status" @click="goStudentDetail(item)">
              <svg-icon name="user"></svg-icon>
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import moment from 'moment'

export default {
  name: 'home',
  components: {
    AppHeader
  },
  data () {
    return {
      moment,
      studentList: [{
        name: '杨旭辉',
        status: 'finished'
      },{
        name: '黄子英',
        status: 'correcting'
      }]
    }
  },
  methods: {
    addStudentHandler () {
      console.log('hello')
    },
    goStudentDetail (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-main {
    max-width: 1200px;
    min-width: 850px;
    margin: 0 auto;
    height: calc(100vh - 62px);
    box-sizing: border-box;
    padding: 0 50px;
    background-color: #fff;
    .option-wrapper {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        border-radius: 3px;
        color: #08A7A1;
        border: 1px solid #08A7A1;
        background-color: transparent;
        padding: 10px 20px;
        cursor: pointer;
        outline: none;
        .svg-icon {
          margin-right: 10px;
        }
        &:hover {
          background-color: rgba(8, 167, 162, 0.05);
        }
      }
      ul {
        display: flex;
        align-items: flex-end;
        li {
          cursor: pointer;
          margin-right: 50px;
          color: #666;
          &:first-of-type {
            color: #333;
            font-size: 28px;
          }
        }
      }
    }
    .student-wrapper {
      min-height: 600px;
      border: 1px dashed #ccc;
      border-radius: 10px;
      .no-student {
        text-align: center;
        margin-top: 150px;
        color: #666;
      }
      .student-list-wrapper {
        padding: 30px 40px;
        .finished .svg-icon{
          color: #08A7A1;
        }
        .correcting .svg-icon{
          color: #02A1F3;
        }
        .not-uploaded .svg-icon{
          color: #DDDDDD;
        }
        .exception .svg-icon{
          color: #FF6468;
        }
        .search-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #666;
          .search-box {
            display: flex;
            input {
              width: 150px;
              height: 40px;
              border: 1px solid #99A9BF;
              color: #99A9BF;
              border-top-left-radius: 20px;
              box-sizing: border-box;
              border-bottom-left-radius: 20px;
              padding-left: 20px;
              vertical-align: top;
              outline: none;
              &::placeholder {
                color: #99A9BF;
              }
            }
            input + button {
              cursor: pointer;
              height: 40px;
              width: 50px;
              border-top-right-radius: 20px;
              border-bottom-right-radius: 20px;
              color: #99A9BF;
              border: 1px solid #99A9BF;
              border-left: none;
              font-size: 1.2em;
              background-color: #fff;
              outline: none;
              &:hover {
                background-color: #F9FAFC;
              }
            }
          }
          .status-indicators {
            display: flex;
            li {
              margin-left: 40px;
              .svg-icon {
                margin-right: 5px;
              }
            }
          }
        }
        .student-list {
          margin-top: 40px;
          display: flex;
          .student-box {
            width: 50px;
            margin: 10px;
            text-align: center;
            cursor: pointer;
            color: #666;
            p {
              margin: 10px 0 0;
              font-size: 12px;
            }
            .svg-icon {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
</style>
