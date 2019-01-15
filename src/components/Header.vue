<template>
  <div class="app-header">
    <nav>
      <div>
        <img src="../assets/logo.png" alt="logo">
        <template v-for="item in navList">
          <router-link
            v-if="item.meta && item.meta.showTab"
            :key="item.id"
            :to="item.path"
            active-class="active-nav"
          >{{item.meta.title}}</router-link>
        </template>
      </div>
      <div class="user-center">
        <el-popover
          :visible-arrow="false"
          placement="bottom-end"
          width="100"
          trigger="hover">
          <span slot="reference"><svg-icon name="user"></svg-icon>{{account.name}}</span>
          <span style="cursor:pointer" @click="handleLogout"><svg-icon name="power"></svg-icon>退出</span>
        </el-popover>
      </div>
    </nav>
  </div>
</template>

<script>
import { routes } from '@/router'
import {
  logout
} from '@/api'
export default {
  name: 'app-header',
  data() {
    return {
      navList: routes,
      account: JSON.parse(this.myUtils.getItem('account'))
    }
  },
  methods: {
    handleLogout() {
      logout().then(data => {
        if (data) {
          this.myUtils.removeItem('account')
          this.myUtils.pageJump('login')
        } else {
           this.$notify.error({
            title: '登出失败',
            duration: 3000,
            message: '请先登录，即将跳转到登录页'
          })
          let vm = this
          setTimeout(function(){
            vm.myUtils.pageJump('login')
          }, 3000)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$headerHeight: 50px;

.app-header {
  height: $headerHeight;
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  nav {
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    div {
      line-height: $headerHeight;
    }
    img {
      height: $headerHeight;
      vertical-align: top;
      margin-right: 100px;
      margin-left: 50px;
    }
    a {
      color: #333;
      margin-right: 50px;
    }
    a:hover {
      color: #08a7a1;
    }
    a.active-nav {
      color: #08a7a1;
    }
    .user-center {
      cursor: pointer;
      color: #333;
      margin-right: 50px;
      .svg-icon {
        color: #d8e0eb;
        margin-right: 5px;
      }
    }
  }
}
</style>
