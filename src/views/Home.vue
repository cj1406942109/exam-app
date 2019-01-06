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
            <search-box v-on:search-text="searchStudent"></search-box>
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

      <el-dialog title="添加学生" :visible.sync="dialogVisible" width="500px">
        <el-tabs v-model="activeTabName" type="card">
          <el-tab-pane label="新学生" name="new">
            <el-form ref="newStudentForm" :model="newStudentForm" size="small" hide-required-asterisk>
              <el-form-item label="学生姓名" prop="name"
                :rules="[
                  { required: true, message: '请输入学生姓名', trigger: 'blur' }
                ]">
                <el-input v-model="newStudentForm.name" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="联系方式" prop="phone"
                :rules="[
                  { required: true, message: '请输入手机号', trigger: 'blur' },
                  { pattern: /^1[0-9]{10}$/, message: '手机号格式错误', trigger: 'blur' }
                ]">
                <el-input v-model="newStudentForm.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="选择已有学生" name="exist">
            <search-box v-on:search-text="searchStudent" size="small"></search-box>
            <el-table :data="studentsInSystem" style="width: 100%" max-height="200">
              <el-table-column align="right" label=" " width="50">
                <!-- eslint-disable -->
                <template slot-scope="scope">
                  <svg-icon name="check"></svg-icon>
                </template>
                <!-- eslint-enable -->
              </el-table-column>
              <el-table-column align="center" prop="name" label="姓名" width="80"></el-table-column>
              <el-table-column align="center" prop="phone" label="联系方式"></el-table-column>
              <el-table-column align="center" prop="createTime" label="加入时间"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible=false;$refs['newStudentForm'].clearValidate();">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">添加，去上传</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'
import SearchBox from '@/components/SearchBox'
import moment from 'moment'

export default {
  name: 'home',
  components: {
    AppHeader,
    SearchBox
  },
  data () {
    return {
      moment,
      newStudentForm: {
        name: '',
        phone: ''
      },
      studentList: [{
        name: '杨旭辉',
        status: 'finished'
      },{
        name: '黄子英',
        status: 'correcting'
      }],
      studentsInSystem: [
        { name: '杨旭辉', phone: '13753862869', createTime: '2019-01-03 10:04'},
        { name: '杨旭辉', phone: '13753862869', createTime: '2019-01-03 10:04'},
        { name: '杨旭辉', phone: '13753862869', createTime: '2019-01-03 10:04'},
        { name: '杨旭辉', phone: '13753862869', createTime: '2019-01-03 10:04'},
        { name: '杨旭辉', phone: '13753862869', createTime: '2019-01-03 10:04'},
        { name: '杨旭辉', phone: '13753862869', createTime: '2019-01-03 10:04'}
      ],
      dialogVisible: false,
      activeTabName: 'new'
    }
  },
  methods: {
    addStudentHandler () {
      this.dialogVisible = true
    },
    searchStudent (text) {
      console.log(text)
    },
    goStudentDetail (item) {
      this.$router.push({ name: 'student', params: { id: 123456 } })
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-main {
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
        .search-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #666;
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
    .el-dialog {
      .el-button {
        width: 120px;
      }
      .el-form {
        margin-top: 40px;
        .el-form-item {
          display: flex;
          justify-content: center;
          .el-input {
            width: 200px;
          }
        }
      }
      .search-box {
        position: relative;
        margin-top: -55px;
        margin-left: 250px;
        margin-bottom: 20px;
      }
      .el-table {
        border: 1px solid #ebeef5;
        border-bottom: none;
        .svg-icon {
          color: #D8D8D8;
        }
        .svg-icon.selected {
          color: #08A7A1;
        }
      }
    }
  }
</style>
