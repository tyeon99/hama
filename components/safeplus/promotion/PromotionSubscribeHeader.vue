<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="safePlusIntroHeader">
    <button>
      <img width="24" src="~/assets/img/safeplus/promotion/close-btn.png" alt="뒤로가기">
    </button>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '안심플러스 구독신청'
    }
  }
}
</script>

<style scoped>
.safePlusIntroHeader{
  @apply w-full bg-[#7139FF] h-[61px] flex justify-center items-center sticky top-0 z-[99];
}
.safePlusIntroHeader button{
  @apply absolute top-[19px] right-[10px];
}
.safePlusIntroHeader .title{
  @apply font-semibold text-[18px] leading-[24px] text-[#fff];
}
</style>