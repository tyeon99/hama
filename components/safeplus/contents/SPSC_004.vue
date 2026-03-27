<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="spContent">
    <!-- 탭 버튼 -->
    <div class="tab-group">
      <button
        v-for="(tab, idx) in tabs"
        :key="idx"
        :class="{ active: activeTab === tab.name }"
        @click="changeTab(tab.name)"
      >
        <span :class="zoomClass">{{ tab.label }}</span>
      </button>
    </div>

    <!-- 탭 콘텐츠 -->
    <div
      v-for="(tab, idx) in tabs"
      v-show="activeTab === tab.name"
      :key="`content-${idx}`"
      class="tabContent"
    >
      <div class="box">
        <div class="txt" :class="zoomClass" v-html="tab.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'tab01',
      tabs: [
        {
          name: 'tab01',
          label: '안내',
          content: `
            <strong>안내</strong>
            <p>① 모든 상품은 결제와 동시에 서비스 사용이 가능하므로 서비스가 개시된 결제 상품에 대한 취소 시 환불 금액은 없습니다.</p>
            <p>② 정기결제(구독형 상품)의 경우, 구독 기간에 대한 약정이 없으며 앱스토어 결제는 각 스토어에서, 웹 구독결제는 마이페이지-구독/결제 관리를 통해 해지가 가능합니다.</p>
            <p>③ 정기결제(구독형 상품)를 해지하셔도 결제 이용기간까지 서비스 이용이 가능합니다.</p>
          `,
        },
        {
          name: 'tab02',
          label: '보험안내',
          content: `
            <strong>보험 안내</strong>
            <p>- 보험제공사: 현대해상보험 하이사이버안심보험</p>
            <p>- 보장내용: 보이스피싱·파밍·스미싱·메모리해킹 등 사이버금융범죄 피해 보장</p>
            <p>- 보상한도: 최대 500만원</p>
            <p>- 자기부담금: 1사고당 5만원</p>
            <p>- 보상기간: 구독 유지 기간 중 적용 (구독 후 익일 적용)</p>
            <p>- 보상조건: 최근 1년 내 구독 중 AI피싱 5종 체험완료 이력 충족 시 적용</p>
            <p>- 보상제외: 고의·공모, 개인정보 자진노출, 해외사고, 법인계좌·가상화폐 피해, 인터넷 직거래·쇼핑몰 사기 등</p>
            <p>- 보험료: 서비스 이용료에 포함 (별도 납부 없음)</p>
            <p>- 보험금 청구: 피해자 직접 보험사 청구 (수사기관 피해사실 확인서 필요)</p>
            <p>- 지급기준: 보상 여부 및 금액은 보험사 약관 기준에 따라 결정</p>
          `
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
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName
    }
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full mb-[32px];
}
.tab-group{
  @apply w-full flex justify-start items-center gap-[12px] mb-[16px];
}
.tab-group button{
  @apply w-[100px] h-[44px] rounded-[24px] border border-[#C0B8E8] bg-[#fff] font-bold text-[16px] leading-[20px] text-[#C0B8E8];
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
.tab-group button.active{
  @apply bg-[#7139FF] text-[#fff] border-[#7139FF];
}
.tab-content{
  @apply w-full;
}
.box{
  @apply p-[16px] border border-[#E3E0F9] rounded-[10px] bg-[#fff];
}
.box .txt{
  @apply font-normal text-[12px] leading-[14px] text-[#6B6D95] flex flex-col justify-start items-start gap-2;
}
::v-deep .box .txt strong{
  @apply block font-extrabold pb-1;
}
</style>