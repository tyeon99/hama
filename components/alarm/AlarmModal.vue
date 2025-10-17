<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closeAlarmModal"
  >
    <div
      class="modal-content animate__animated animate__faster"
      :class="{
        animate__fadeInDown: isModalAni,
        animate__fadeOutUp: !isModalAni,
      }"
      @click.stop
    >
      <div class="modal-header">
        <button @click="closeAlarmModal">
          <img width="16" src="~/assets/img/safeplus/close-icon.png">
        </button>
      </div>
      <div class="modal-body alarm">
        <div class="title" :class="zoomClass">{{ title }}</div>
        <div class="txt-box">
          <p :class="zoomClass" v-html="txt"></p>
        </div>
      </div>
      <div class="modal-footer">
        <button>{{ buttonTxt }}</button>
        <button @click="closeAlarmModal">닫 기</button>
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
    title: {
      type: String,
      default: ''
    },
    txt: {
      type: String,
      default: ''
    },
    buttonTxt: {
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
    closeAlarmModal() {
      this.$emit('close-alarmModal')
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
.modal-header{
  @apply w-full p-[9px] flex justify-end;
}
.modal-body{
  @apply relative w-full p-[30px_16px_52px];
}
.modal-body .title{
  @apply w-full pb-[20px] font-extrabold text-[16px] leading-[19px] text-[#2B2436] border-b border-[#C0B8E8] text-center mb-[20px];
}
.modal-body .title .txt-box{
  @apply w-full;
}
.modal-footer{
  @apply w-full flex justify-center items-center gap-[12px] pb-[15px];
}
.modal-footer button{
  @apply w-[115px] h-[44px] rounded-[15px] bg-[#7139FF] border-2 border-[#7139FF] font-bold text-[14px] leading-[17px] text-[#fff] last:bg-[#fff] last:text-[#7139FF] last:w-[100px];
}
</style>