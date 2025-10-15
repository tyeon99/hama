<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closeLogOutModal"
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
        <span>로그아웃 되었습니다.</span>
        <div class="progress"></div>
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

    // 2초뒤 닫기
    setTimeout(() => {
      this.closeLogOutModal()
    }, 2000)
  },
  methods: {
    closeLogOutModal() {
      this.$emit('close-logOutModal')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[9999] px-[30px];
}
.modal-content {
  @apply w-full bg-[#fff] rounded-[4px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)];
}
.modal-body{
  @apply relative w-full p-[20px_12px] flex justify-start items-center gap-[8px];
}
.modal-body span{
  @apply font-normal text-[16px] leading-[20px] text-[#000];
}
.modal-body .progress{
  @apply absolute bottom-0 left-0 w-0 h-[5px] bg-[#7139FF];
  animation: progress-fill 1s linear forwards;
}
@keyframes progress-fill {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>