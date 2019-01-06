<template>
  <div class="app-header">
    <nav>
      <div>
        <img src="../assets/logo.png" alt="logo">
        <template v-for="item in navList">
          <router-link
            v-if="!item.meta.hideTab"
            :key="item.id"
            :to="item.path"
            active-class="active-nav"
          >{{item.meta.title}}</router-link>
        </template>
      </div>
      <div class="user-center">
        <svg-icon name="user"></svg-icon>合心测试
      </div>
    </nav>
  </div>
</template>

<script>
import { routes } from '@/router'
export default {
  name: 'app-header',
  data() {
    return {
      navList: routes
    }
  }
}
</script>

<style lang="scss" scoped>
$headerHeight: 60px;

.app-header {
  height: $headerHeight;
  background-color: #fff;
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
