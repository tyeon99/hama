<template>
  <div class="spContent">
    <div class="top">
      <img width="162" src="~/assets/img/safeplus/spc02-img.png">
      <div class="txt">
        <b>보</b><b>이</b><b>스</b> <b>피</b><b>싱</b><br />
        <p>지금 이 순간도<br /> 위험합니다.</p>
      </div>
    </div>
    <div class="bottom">
      <div
        v-for="(item, idx) in boxes"
        :key="idx"
        class="box"
        :class="item.class"
      >
        <img width="28" :src="require(`~/assets/img/safeplus/${item.img}`)">
        <div class="txt">
          <strong>{{ item.num }}</strong>
          <span>{{ item.txt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          class: 'box01',
          img: 'sp-pbox-img05.png',
          num: '137명',
          txt: '일일 평균 피해자'
        },
        {
          class: 'box02',
          img: 'sp-pbox-img06.png',
          num: '635만원',
          txt: '평균 피해 금액'
        },
        {
          class: 'box03',
          img: 'sp-pbox-img07.png',
          num: '230% 상승',
          txt: '전년 대비 증가율'
        },
        {
          class: 'box04',
          img: 'sp-pbox-img08.png',
          num: '3.2조원',
          txt: '연간 피해 규모'
        }
      ]
    }
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full p-[20px] bg-[#E8C3FF];
}
.spContent .top{
  @apply w-full flex justify-between items-center mb-[8px] pr-[16px];
}
.spContent .top .txt b{
  @apply pt-[14px] relative font-[JalnanGothic] font-normal text-[24px] leading-[28px] text-[#2B2436] after:content-[''] after:absolute after:top-0 after:left-[10px] after:bg-[#CB78FF] after:rounded-full after:w-[5px] after:h-[5px];
}
.spContent .top .txt p{
  @apply mt-[7px] font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#730FB2];
}
.spContent .bottom{
  @apply w-full grid grid-cols-2 gap-[12px_16px];
}
.spContent .bottom .box{
  @apply w-full h-[73px] rounded-[12px] p-[16px] flex justify-start items-start gap-[8px];
  box-shadow: 0px 4px 4px 0px #00000024;
}
.spContent .bottom .box .txt{
  @apply flex flex-col justify-start items-start gap-[8px] pt-[2px];
}
.spContent .bottom .box .txt strong{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[18px] tracking-wide;
}
.spContent .bottom .box .txt span{
  @apply font-medium text-[12px] leading-[14px] text-[#42526B];
}
.spContent .bottom .box01{
  @apply bg-[#F1EBFF];
}
.spContent .bottom .box01 .txt strong{
  @apply text-[#8945FF];
}
.spContent .bottom .box02{
  @apply bg-[#E7F5E8]
}
.spContent .bottom .box02 .txt strong{
  @apply text-[#029B59]
}
.spContent .bottom .box03{
  @apply bg-[#FFF9EE];
}
.spContent .bottom .box03 .txt strong{
  @apply text-[#F39200];
}
.spContent .bottom .box04{
  @apply bg-[#FEEDFA];
}
.spContent .bottom .box04 .txt strong{
  @apply text-[#FF2E43];
}
</style>