<template>
  <div class="spContent">
    <div class="title" :class="zoomClass">최근 신종 수법</div>
    <div class="txt" :class="zoomClass">30일 빠른 체험 서비스로 예방하세요!</div>
    <div class="box-group">
      <div
        v-for="(item, idx) in boxes"
        :key="idx"
        class="box"
        :class="item.class"
      >
        <div class="left">
          <div class="box-title" :class="zoomClass">{{ item.title }}</div>
          <div class="box-txt" :class="zoomClass">{{ item.txt }}</div>
        </div>
        <div class="right">
          <span :class="zoomClass">위험도: {{ item.level }}</span>
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
          title: '긴급재난지원금 환수 사칭',
          txt: '“코로나 지원금을 잘못 수령하셨습니다. 24시간 내 환수하지 않으면 형사 고발됩니다.”',
          level: '극심'
        },
        {
          class: 'box02',
          title:'카카오톡 해외 로그인 차단',
          txt: '“코로나 지원금을 잘못 수령하셨습니다. 코로나 지원금을 잘못 수령하셨습니다. 코로나 지원금을 잘못 수령하셨습니다.”',
          level: '높음'
        },
        {
          class: 'box03',
          title: '해외직구 관세 체납 협박',
          txt: '“코로나 지원금을 잘못 수령하셨습니다.“',
          level: '중간'
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
  @apply w-full flex flex-col justify-start items-center gap-[20px];
}
.spContent .box-group .box{
  @apply w-full border-dashed border-2 rounded-[10px] p-[14px] pl-[16px] flex justify-between items-start gap-[14px];
}
.spContent .box-group .box .box-title{
  @apply mb-[4px] font-bold text-[16px] leading-[20px] text-[#2B2436];
}
.spContent .box-group .box .box-txt{
  @apply font-medium text-[13px] leading-[16px];
}
.spContent .box-group .box span{
  @apply min-w-[80px] h-[25px] flex justify-center items-center rounded-[100px] text-[#fff] font-extrabold text-[11px] leading-[13px];
}
.spContent .box-group .box01{
  @apply bg-[#FFE5EE] border-[#FF2E7B];
}
.spContent .box-group .box01 .box-txt{
  @apply text-[#CA7493];
}
.spContent .box-group .box01 span{
  @apply bg-[#FF2E7B];
}
.spContent .box-group .box02{
  @apply bg-[#FFE7E0] border-[#FF923E];
}
.spContent .box-group .box02 .box-txt{
  @apply text-[#C88585]
}
.spContent .box-group .box02 span{
  @apply bg-[#FF923E];
}
.spContent .box-group .box03{
  @apply bg-[#F5FAF9] border-[#39D4C8];
}
.spContent .box-group .box03 .box-txt{
  @apply text-[#6AACA8];
}
.spContent .box-group .box03 span{
  @apply bg-[#01C6B9];
}
</style>