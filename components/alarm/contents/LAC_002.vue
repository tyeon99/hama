<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="laContent">
    <div class="box-group">
      <div
        v-for="(box, idx) in boxList"
        :key="idx"
        class="box"
      >
        <span :class="zoomClass">{{ box.date }}</span>
        <div class="title" :class="zoomClass">{{ box.title }}</div>
        <p :class="zoomClass" v-html="box.txt"></p>
      </div>
    </div>
    <div class="btn-wrap">
      <button>더 보기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxList: [
        {
          date: '2025.09.21 07:00',
          title: '"아들이 교통사고 났다" 가장 긴급 사칭',
          txt: '보이스피싱범이 자녀·가족 목소리를 흉내내며 “사고로 합의금이 필요하다”는 속 메시지를 유도 <br><br><span>예방 법: 반드시 다른 번호로 본인 확인 후 대응 </span><br><br>일부는 SNS 프로필 사진과 이전 대화 기록을 악용하는 방식으로 은근히 신뢰를 쌓습니다. 국민권익위에 따르면 2024년 하반기 기준 관련 민원이 200건 넘게 접수됐습니다. 만약 금전 요구가 접수되면 계좌 이체는 중단하고, 캡처·녹취자료를 수집해 즉시 신고하십시오.'
        },
        {
          date: '2025.09.21 07:00',
          title: '카드사 고객센터 사칭 전화 주의보',
          txt: '기존의 택배 배송 문자 사기가 더욱 교묘해지고 있습니다. <br>새로운 수법은 문자에 첨부된 링크를 클릭하도록 유도한 뒤, 먼저 가짜정보를 보여 ‘정상 페이지’처럼 안심시키고 뒤에서 악성 앱 설치를 유도합니다. <br>이 악성 앱은 통화·문자 내용을 가로채며, 은행 앱을 가짜로 가리앉는 술수로 금전 피해를 유발하고 있습니다. <br>이런 경우는 문자로 온 배송조회 링크라면 100% 사기입니다.'
        },
        {
          date: '2025.09.21 07:00',
          title: '금융감독원 사칭 이벤트 대행 유포',
          txt: '기존의 택배 배송 문자 사기가 더욱 교묘해지고 있습니다. <br>새로운 수법은 문자에 첨부된 링크를 클릭하도록 유도한 뒤, 먼저 가짜정보를 보여 ‘정상 페이지’처럼 안심시키고 뒤에서 악성 앱 설치를 유도합니다. <br>이 악성 앱은 통화·문자 내용을 가로채며, 은행 앱을 가짜로 가리앉는 술수로 금전 피해를 유발하고 있습니다. <br>이런 경우는 문자로 온 배송조회 링크라면 100% 사기입니다.'
        },
        {
          date: '2025.09.21 07:00',
          title: '택배 배송 알림 문자 사기 변종 등장',
          txt: '기존의 택배 배송 문자 사기가 더욱 교묘해지고 있습니다. <br>새로운 수법은 문자에 첨부된 링크를 클릭하도록 유도한 뒤, 먼저 가짜정보를 보여 ‘정상 페이지’처럼 안심시키고 뒤에서 악성 앱 설치를 유도합니다. <br>이 악성 앱은 통화·문자 내용을 가로채며, 은행 앱을 가짜로 가리앉는 술수로 금전 피해를 유발하고 있습니다. <br>이런 경우는 문자로 온 배송조회 링크라면 100% 사기입니다.'
        },
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
.laContent {
  @apply w-full;
}
.laContent .box-group{
  @apply w-full flex flex-col justify-start items-center gap-[24px] mb-[52px];
}
.laContent .box-group .box{
  @apply w-full bg-[#fff] rounded-[12px] p-[24px_16px] border border-[#E3E0F9] flex flex-col justify-start items-start gap-[16px];
}
.laContent .box-group .box span{
  @apply p-[4px_8px] rounded-[12px] font-medium text-[12px] leading-[14px] text-[#fff];
  background: linear-gradient(203.66deg, #9D49F1 0%, #6E95F7 100.99%);
}
.laContent .box-group .box .title{
  @apply font-extrabold text-[18px] leading-[21px] text-[#2B2436];
}
.laContent .box-group .box p{
  @apply font-medium text-[13px] leading-[16px] text-[#6B6D95];
}
.btn-wrap{
  @apply px-[16px] w-full;
}
.btn-wrap button{
  @apply w-full bg-[#fff] rounded-[48px] border-2 border-[#AFB2EC] h-[52px] font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#7139FF];
  box-shadow: 0px 4px 4px 0px #00000024;
}
</style>