<template>
  <div class="qr-code">
    <img :src="getQRCode({text, correctLevel, size})" alt="二维码">
  </div>
</template>

<script>
import qrcode from 'qrcode-generator'

export default {
  name: 'qr-code',
  props: {
    text: {
      type: String,
      required: true
    },
    correctLevel: {
      type: String,
      default: 'H'
    },
    size: {
      type: Number,
      default: 180
    }
  },
  methods: {
    getQRCode ({text, correctLevel = 'M', typeNumber = 0, size = 200}) {
      const qr = qrcode(typeNumber, correctLevel)
      qr.addData(text)
      qr.make()
      const cellSize = size / qr.getModuleCount()
      return qr.createDataURL(cellSize, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.qr-code {
  display: inline-block;
}
</style>
