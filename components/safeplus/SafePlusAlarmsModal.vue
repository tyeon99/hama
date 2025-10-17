<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closeAlarmsModal"
  >
    <div
      class="modal-content animate__animated animate__faster"
      :class="{
        animate__fadeInDown: isModalAni,
        animate__fadeOutUp: !isModalAni,
      }"
      @click.stop
    >
      <div class="modal-body">
        <img width="24" src="~/assets/img/common/logout-icon.png" alt="로그아웃">
        <span :class="zoomClass" v-html="message"></span>
      </div>
      <div class="modal-footer">
        <button @click="closeAlarmsModal">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalAni: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    fontSizePercent () {
      return this.$store.state.font.fontSizePercent
    },
    zoomClass () {
      if (this.fontSizePercent === 130) return 'zoom-13'
      if (this.fontSizePercent === 120) return 'zoom-12'
      if (this.fontSizePercent === 110) return 'zoom-11'
      if (this.fontSizePercent === 90) return 'zoom-09'
      if (this.fontSizePercent === 80) return 'zoom-08'
      if (this.fontSizePercent === 70) return 'zoom-07'
      return ''
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  methods: {
    closeAlarmsModal() {
      this.$emit('close-alarmsModal')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[9999] px-[30px];
}
.modal-content {
  @apply w-full bg-[#fff] rounded-[4px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)] border-b-[5px] border-[#7139FF];
}
.modal-body{
  @apply relative w-full p-[20px] flex justify-center items-start gap-[8px];
}
.modal-body span{
  @apply font-normal text-[16px] leading-[24px] text-[#2B2436] text-center;
}
.modal-footer{
  @apply w-full flex justify-center items-center pb-[15px];
}
.modal-footer button{
  @apply w-[100px] h-[44px] rounded-[15px] bg-[#7139FF] font-bold text-[14px] leading-[17px] text-[#fff];
}
</style>