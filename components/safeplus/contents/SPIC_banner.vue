<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="spContent">
    <button class="banner">
      <img width="35" src="~/assets/img/safeplus/coffee-icon.png">
      <p>
        월 3,250원<br />
        커피 한잔 값으로 <span>안심플로스 시작하기</span>
      </p>
    </button>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full px-4;
}
.banner{
  @apply h-[60px] bg-[url('~/assets/img/safeplus/banner-bg.png')] bg-left bg-[#6B4EFF] bg-no-repeat bg-[length:343px] w-full flex justify-start items-center gap-7 rounded-[8px] p-3 pt-[10px] pb-[7px];
}
.banner img{
  @apply inline-block mb-1;
}
.banner p{
  @apply text-left font-[JalnanGothic] text-[#fff] font-normal leading-[21px] tracking-[-3%] text-[15px];
}
.banner p span{
  @apply font-[JalnanGothic] text-[#FEE500] font-normal;
}
</style>