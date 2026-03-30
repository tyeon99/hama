<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closeDeleteAccountModal"
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
        <div class="title" :class="zoomClass">
          {{ isFinished ? '삭제 완료' : '계정 정보를 삭제하시겠습니까?' }}
        </div>
        <div class="txt">
          <p :class="zoomClass" v-html="modalTxt"></p>
        </div>

        <div v-if="!isFinished" class="btn-group">
          <button :class="zoomClass" :disabled="isLoading" @click="closeDeleteAccountModal">
            취소
          </button>
          <button 
            :class="[zoomClass, { 'opacity-50': isLoading }]" 
            :disabled="isLoading"
            @click="handleActiveAction"
          >
            {{ isLoading ? '계정 삭제 중..' : '계정 삭제' }}
          </button>
        </div>

        <div v-else class="btn-group">
          <button class="confirm-btn" :class="zoomClass" @click="finalConfirm">
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
    isModalAni: { type: Boolean, default: false }
  },
  data() {
    return {
      isLoading: false,
      isFinished: false
    }
  },
  computed: {
    modalTxt() {
      if (this.isFinished) {
        return `모든 이용 정보가 파기되었습니다.<br><br>
                계정 삭제 후에도 <strong>App Store 자동 결제는 유지</strong>되오니, 반드시 [아이폰 설정 > 구독]에서 <br>
                직접 해지하셔야 합니다.<br><br>
                첫화면으로 이동합니다.`
      }
      return `삭제 시 모든 이용 기록이 즉시 파기되며 <br>복구할 수 없습니다.<br><br>
              계정 삭제 후에도 <strong>App Store 자동 결제는 유지</strong>되오니, 반드시 [아이폰 설정 > 구독]에서 <br>
              직접 해지하셔야 합니다.<br><br>
              삭제 즉시 남은 구독 권한은 소멸됩니다.`
    },
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
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
      this.closeDeleteAccountModal()
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
    closeDeleteAccountModal() {
      if (this.isLoading) return
      this.$emit('close-deleteAccountModal', false)
    },
    finalConfirm() {
      if (this.isLoading) return
      this.$emit('close-deleteAccountModal', true)
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