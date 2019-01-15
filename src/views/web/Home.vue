<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="page-main">
      <div class="option-wrapper">
        <ul>
          <li :class="{selected: selectedTab === 1}" @click="changeTab(1, moment().format('YYYY-MM-DD'))">今天</li>
          <li :class="{selected: selectedTab === 2}" @click="changeTab(2, moment().subtract(1, 'days').format('YYYY-MM-DD'))">{{moment().subtract(1, 'days').format('M月D日')}}</li>
          <li :class="{selected: selectedTab === 3}" @click="changeTab(3, moment().subtract(2, 'days').format('YYYY-MM-DD'))">{{moment().subtract(2, 'days').format('M月D日')}}</li>
          <li :class="{selected: selectedTab === 4}" @click="changeTab(4)" v-if="exerciseStudentList.lenth === 0">更早</li>
          <li :class="{selected: selectedTab === 4}" @click="changeTab(4)" v-else>更多学生</li>
        </ul>
        <option-btn @click="addStudentHandler" type="btn-success btn-medium btn-with-icon"><svg-icon name="plus"></svg-icon>添加学生</option-btn>
      </div>
      <div class="student-wrapper">
        <div v-if="exerciseStudentList.length === 0" class="no-student">
          <img src="./no-content.png" alt="尚未添加考生">
          <p>尚未添加考生</p>
        </div>
        <div v-else class="student-list-wrapper">
          <div class="search-wrapper">
            <search-box @search-text="searchExerciseStudent"></search-box>
            <ul class="status-indicators">
              <li v-for="item in [0, 1, 2, 3]" :key="item.id" @click="changeStatus(item)" :class="{'not-selected': !selectedStatus.includes(item)}">
                <svg-icon name="square" :class="'color-' + formatStatus(item).status"></svg-icon>{{formatStatus(item).message}}
              </li>
            </ul>
          </div>
          <div class="student-list">
            <div class="student-box"
              v-show="selectedStatus.includes(item.status) && item.name.includes(pageSearchText)"
              v-for="item in exerciseStudentList" :key="item.id"
              @click="selectStudent(item)">
              <svg-icon name="user" :class="'color-' + formatStatus(item.status).status"></svg-icon>
              <p>{{item.name}}<br><span>{{item.complete}}/{{item.total}}</span></p>
            </div>
          </div>
        </div>
      </div>

      <el-dialog title="添加学生" :visible.sync="dialogVisible" width="500px">
        <el-tabs v-model="activeDialogTab" type="card">
          <el-tab-pane label="新学生" name="new">
            <el-form ref="newStudentForm" :model="newStudentForm" size="small" hide-required-asterisk>
              <el-form-item label="学生姓名" prop="name"
                :rules="[
                  { required: true, message: '请输入学生姓名', trigger: 'blur' }
                ]">
                <el-input clearable v-model="newStudentForm.name" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="联系方式" prop="phone"
                :rules="[
                  { required: true, message: '请输入手机号', trigger: 'blur' },
                  { pattern: /^1[0-9]{10}$/, message: '手机号格式错误', trigger: 'blur' }
                ]">
                <el-input clearable v-model="newStudentForm.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="选择已有学生" name="exist">
            <search-box @search-text="searchAllStudent" size="small"></search-box>
            <el-table :data="filteredSchoolStudentList" style="width: 100%" max-height="200" @row-click="handleRowClick">
              <el-table-column align="right" label=" " width="50">
                <!-- eslint-disable -->
                <template slot-scope="scope">
                  <svg-icon name="check" :class="{'selected': scope.row.uid === selectedStudent.uid}"></svg-icon>
                </template>
                <!-- eslint-enable -->
              </el-table-column>
              <el-table-column align="center" prop="name" label="姓名" width="80"></el-table-column>
              <el-table-column align="center" prop="phone" label="联系方式"></el-table-column>
              <el-table-column align="center" prop="time_create" label="加入时间"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <div slot="footer" class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="addAndGoUpload" :disabled="activeDialogTab==='exist'&&!selectedStudent">添加，去上传</el-button>
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

import {
  getExerciseStudentList,
  getStudentList,
  addStudent
} from '@/api'

export default {
  name: 'home',
  components: {
    AppHeader,
    SearchBox
  },
  data () {
    return {
      moment,
      selectedTab: 1,
      selectedStatus: [0, 1, 2, 3],
      pageSearchText: '',
      dialogSearchText: '',
      newStudentForm: {
        name: '',
        phone: ''
      },
      exerciseStudentList: [{
          "uid":"34324aef",
          "name":"李达",
          "phone":18515578987,
          "status":1,
          "complete":5,
          "total":10
        },{
          "uid":"34677aef",
          "name":"李逵",
          "phone":18515578967,
          "status":2,
          "complete":5,
          "total":5
        }
      ],
      schoolStudentList: [
        { "uid":"34324aef", "name":"李达", "phone":18515578987, "time_create":"2018-09-01 18:00:00" },
        { "uid":"34677aef", "name":"李逵", "phone":18515578967, "time_create":"2018-09-01 18:00:00" }
      ],
      dialogVisible: false,
      activeDialogTab: 'new',
      selectedStudent: ''
    }
  },
  computed: {
    filteredSchoolStudentList () {
      let tempList = []
      this.schoolStudentList.forEach(ele => {
        if (ele.name.includes(this.dialogSearchText)) {
          tempList.push(ele)
        }
      })
      return tempList
    }
  },
  methods: {
    // 首页日期标签点击事件处理函数
    changeTab (tabIndex, date = '') {
      this.selectedTab = tabIndex
      this.getExerciseStudentList(date)
    },
    // 根据状态筛选学生列表
    changeStatus (status) {
      let index = this.selectedStatus.indexOf(status)
      if (index >= 0) {
        this.selectedStatus.splice(index, 1)
      } else {
        this.selectedStatus.push(status)
      }
    },
    // 学生点击事件，选定当前学生
    selectStudent (item) {
      this.myUtils.setItem('currentStudent', JSON.stringify(item))
      this.myUtils.pageJump('student', {id: item.uid})
    },
    // 格式化学生状态
    formatStatus (code) {
      if (code === 0) {
        return {
          status: 'success',
          message: '批改完成'
        }
      } else if (code === 1) {
        return {
          status: 'info',
          message: '批改中'
        }
      } else if (code === 2) {
        return {
          status: 'default',
          message: '未上传'
        }
      } else if (code === 3) {
        return {
          status: 'error',
          message: '异常'
        }
      } else {
        return ''
      }
    },
    // 添加学生按钮点击事件处理函数
    addStudentHandler () {
      this.dialogVisible = true
    },
    // 搜索考试学生列表处理函数
    searchExerciseStudent (text) {
      this.pageSearchText = text
    },
    // 搜索全校学生列表处理函数
    searchAllStudent (text) {
      this.dialogSearchText = text
    },
    // 全校学生列表，table行点击事件处理函数
    handleRowClick (row) {
      this.selectedStudent = JSON.parse(JSON.stringify(row))
    },
    // 弹窗关闭事件处理函数
    handleClose () {
      this.dialogVisible = false;
      this.$refs['newStudentForm'].clearValidate();
      this.selectedStudent = '';
    },
    // 添加，去上传按钮点击事件处理函数
    // TODO:将选定的学生存到本地存储
    addAndGoUpload () {
      if (this.activeDialogTab === 'new') {
        // 添加新学生
        this.$refs['newStudentForm'].validate((valid) => {
          if (valid) {
            addStudent(this.newStudentForm.name, this.newStudentForm.phone).then(data => {
              if (data) {
                this.myUtils.setItem('currentStudent', JSON.stringify({
                  name: this.newStudentForm.name,
                  phone: this.newStudentForm.phone,
                  uid: data.uid
                }))
                this.myUtils.pageJump('upload', {id: data.uid})
              }
            })
          } else {
            return false
          }
        });
      } else {
        // 选定学生，跳转到上传页面
        this.myUtils.setItem('currentStudent', JSON.stringify(this.selectedStudent))
        this.myUtils.pageJump('upload', {id: this.selectedStudent.uid})
      }
    },
    getExerciseStudentList (date = '') {
      getExerciseStudentList(date).then(data => {
        if (data) {
          this.exerciseStudentList = data
        }
      })
    }
  },
  created () {
    this.getExerciseStudentList()
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
      ul {
        display: flex;
        align-items: flex-end;
        li {
          cursor: pointer;
          margin-right: 50px;
          color: #666;
          &.selected {
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
              cursor: pointer;
              margin-left: 40px;
              .svg-icon {
                margin-right: 5px;
              }
              &.not-selected {
                color: #ddd;
                .svg-icon {
                  color: #eee;
                }
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
              font-size: 14px;
              span {
                font-size: 12px;
              }
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
