<template>
  <div class="page-wrapper">
    <AppHeader />
    <div>
      这是扫码页面
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/Header'

export default {
  name: 'upload-scan',
  components: {
    AppHeader
  }
}
</script>
