<template>
  <div :class="['chatModal', 'animate__animated', 'animate__faster', isModalAni]">
    <div class="chatModal__header">
      <button @click="closeChatLinkModal">
        <img width="24" src="~/assets/img/chat/calling/modal-header.png" alt="뒤로가기">
      </button>
      <span>체험으로 돌아가기</span>
    </div>
    <div class="chatModal__link">
      <img
        v-if="isImage"
        :src="modalLinkSrc"
        style="width: 100%;"
      />
      <iframe
        v-else
        :src="modalLinkSrc"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalAni: {
      type: String,
      default: 'animate__zoomIn'
    },
    modalLinkSrc: {
      type: String,
      required: true
    }
  },
  computed: {
    isImage() {
      // 이미지 확장자 확인
      return /\.(jpeg|jpg|png|gif|webp|bmp|svg)$/i.test(this.modalLinkSrc);
    }
  },
  methods: {
    closeChatLinkModal () {
      this.$emit('close-chatLinkModal')
    }
  }
}
</script>

<style scoped>
.chatModal {
  @apply fixed inset-0 z-[9999] bg-[#202020] flex flex-col justify-start items-center overflow-y-auto;
}
.chatModal__header{
  @apply sticky top-0 left-0 w-full h-[64px] bg-[#4D4D4D] flex justify-start items-center gap-[8px] p-[16px] border-b border-[#f5f5f5];
}
.chatModal__header span{
  @apply font-bold text-[16px] leading-[20px] text-[#fff];
}
.chatModal__link{
  @apply w-full h-full bg-[#202020] flex justify-center items-center;
}
</style>