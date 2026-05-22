<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="certificateHeader">
    <button>
      <img width="8" src="~/assets/img/login/back-btn.png" alt="뒤로가기">
    </button>
    <div class="title">피싱 예방 체험 수료증</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.certificateHeader{
  @apply w-full bg-[#7139FF] h-[61px] flex justify-center items-center sticky top-0 z-[99];
}
.certificateHeader button{
  @apply absolute top-[25px] left-[20px];
}
.certificateHeader .title{
  @apply font-semibold text-[20px] leading-[20px] text-[#fff];
}
</style>