<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="safePlusIntroHeader">
    <button>
      <img width="8" src="~/assets/img/login/back-btn.png" alt="뒤로가기">
    </button>
    <div class="title">마이 페이지</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.safePlusIntroHeader{
  @apply w-full bg-[#7139FF] h-[61px] flex justify-center items-center sticky top-0 z-[99];
}
.safePlusIntroHeader button{
  @apply absolute top-[25px] left-[20px];
}
.safePlusIntroHeader .title{
  @apply font-semibold text-[20px] leading-[20px] text-[#fff];
}
</style>