<template>
  <div class="spContent">
    <div class="title" :class="zoomClass">있고 없고의 차이</div>
    <div class="txt" :class="zoomClass">꼭 필요한 이유가 무엇인지 알아봅니다.</div>
    <div class="box-group">
      <div
        v-for="(item, idx) in boxes"
        :key="idx"
        class="box-line"
        :class="item.class"
      >
        <div class="box">
          <div class="box-title">
            <img width="40" :src="require(`~/assets/img/safeplus/${item.img}`)">
            <span :class="zoomClass">{{ item.title }}</span>
          </div>
          <div class="p-group">
            <p
              v-for="(p, pidx) in item.texts"
              :key="pidx"
              :class="zoomClass"
            >
              {{ p }}
            </p>
          </div>
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
          img: 'sp-pbox-icon01.png',
          title: '안심플러스 없이 피해를 당하면',
          class: 'box01',
          texts: [
            '평균 635만원 손실 (회복 불가)',
            '가족에 대한 죄책감과 자책',
            '우울증, 불안장애 위험',
            '극단적 선택 위험 (실제 사례 다수)',
            '가족 관계 악화'
          ]
        },
        {
          img: 'sp-pbox-icon02.png',
          title: '안심플러스가 있다면',
          class: 'box02',
          texts: [
            '최대 500만원 즉시 보장',
            '경제적·심리적 회복 가능',
            '가족 관계 유지, 일상 복귀',
            '재발 방지 교육 제공'
          ]
        }
      ]
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
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full px-[16px];
}
.spContent .title{
  @apply font-[JalnanGothic] font-normal text-[20px] leading-[24px] text-[#2B2436] mb-[8px] text-center;
}
.spContent .txt{
  @apply w-full text-center mb-[24px] font-semibold text-[16px] leading-[20px] text-[#6B6D95];
}
.spContent .box-group{
  @apply w-full flex flex-col justify-start items-center gap-[16px];
}
.spContent .box-group .box-line{
  @apply w-full p-[8px] rounded-[24px];
  box-shadow: 0px 0px 8px 0px #00000014;
}
.spContent .box-group .box-line .box{
  @apply w-full p-[20px_16px] bg-[#fff] rounded-[16px] flex flex-col justify-start items-center gap-[16px];
  box-shadow: 0px 8px 24px 0px #F249C80A;
}
.spContent .box-group .box-line .box .box-title{
  @apply w-full flex justify-start items-center gap-[12px];
}
.spContent .box-group .box-line .box .box-title span{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[20px];
}
.spContent .box-group .box-line .box .p-group{
  @apply w-full flex flex-col justify-start items-start gap-[8px];
}
.spContent .box-group .box-line .box .p-group p{
  @apply relative pl-[21px] font-bold text-[14px] leading-[17px] text-[#2B2436] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:rounded-full before:absolute before:left-[8px] before:top-[6px] before:bg-[#2B2436];
}
.spContent .box-group .box-line.box01{
  @apply bg-[#FCDBF4];
}
.spContent .box-group .box-line.box02{
  @apply bg-[#DBE9FC];
}
.spContent .box-group .box-line.box01 .box .box-title span{
  @apply text-[#FF2E7B];
}
.spContent .box-group .box-line.box02 .box .box-title span{
  @apply text-[#6F75F2];
}
</style>