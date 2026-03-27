<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isInModalAni, animate__fadeOut: !isInModalAni }"
    @click="closeMypageAlarmModal"
  >
    <div
      class="modal-content animate__animated animate__faster"
      :class="{
        animate__fadeInDown: isInModalAni,
        animate__fadeOutUp: !isInModalAni,
      }"
      @click.stop
    >
      <div class="modal-body">
        <div class="title" :class="zoomClass">
          {{ isFinished ? finishedTitle : modalTitle }}
        </div>
        <div class="txt">
          <p :class="zoomClass" v-html="isFinished ? finishedTxt : modalTxt"></p>
        </div>

        <div v-if="!isFinished" class="btn-group">
          <button :class="zoomClass" @click="closeMypageAlarmModal">취소</button>
          <button 
            :class="[zoomClass, { 'opacity-50': isLoading }]" 
            :disabled="isLoading"
            @click="handleActiveAction"
          >
            {{ isLoading ? loadingBtnTxt : activeBtnTxt }}
          </button>
        </div>

        <div v-else class="btn-group">
          <button class="confirm-btn" :class="zoomClass" @click="closeMypageAlarmModal">
            확인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isInModalAni: { type: Boolean, default: false },
    modalTitle: { type: String, default: '' },
    modalTxt: { type: String, default: '' },
    activeBtnTxt: { type: String, default: '해지' },
    loadingBtnTxt: { type: String, default: '처리 중..' },
    finishedTitle: { type: String, default: '해지가 완료되었습니다' },
    finishedTxt: { type: String, default: '그동안 이용해주셔서 감사합니다.' }
  },
  data() {
    return {
      isLoading: false,
      isFinished: false
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
    goLink(path) {
      this.$router.push(path)
      this.closeMypageAlarmModal()
    },
    handleActiveAction() {
      // 해지 메서드
      this.isLoading = true

      // 시간 조절 필요
      setTimeout(() => {
        this.isLoading = false;
        this.isFinished = true; // 화면 전체를 완료 상태로 전환
      }, 1500);
    },
    closeMypageAlarmModal() {
      if (this.isLoading) return
      this.$emit('close-mypageAlarmModal')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[9999] px-[10px];
}
.modal-content {
  @apply w-full bg-[#fff] rounded-[32px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)];
}
.modal-body{
  @apply w-full p-[40px_24px] flex flex-col justify-center items-center;
}
.modal-body .title{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[22px] text-[#2B2436] mb-[16px];
}
.modal-body .txt{
  @apply text-center font-medium text-[14px] leading-[20px] text-[#2B2436] mb-[24px];
}
.modal-body .btn-group{
  @apply w-full flex justify-center items-center gap-[12px];
}
.modal-body .btn-group button{
  @apply flex-1 w-full h-[54px] bg-[#fff] border-2 border-[#FF507A] rounded-[8px] flex justify-center items-center font-extrabold text-[16px] leading-[22px] text-[#FF507A] first:bg-[#FF507A] first:text-[#fff];
}
</style>