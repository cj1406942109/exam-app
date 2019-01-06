<template>
  <div class="page-wrapper">
    <AppHeader />
    <div>
      这是考试页面
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'

export default {
  name: 'exam',
  components: {
    AppHeader
  }
}
</script>
