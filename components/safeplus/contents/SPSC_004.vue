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
        <p :class="zoomClass" v-html="tab.content"></p>
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
            <strong>안내</strong><br /><br />
            ① 모든 결제는 구글 플레이 스토어를 통해 진행되며, 등록한 결제 수단을 이용하여 결제가 가능합니다.<br /><br />
            ② 모든 상품은 결제와 동시에 서비스 사용이 가능하므로 서비스가 개시된 결제 상품에 대한 취소 시 환불 금액은 없습니다.<br /><br />
            ③ 정기결제(구독형 상품)의 경우, 구독 기간에 대한 약정이 없으며 언제든 구글 플레이 스토어를 통해 해지가 가능합니다.<br /><br />
            ④ 정기결제(구독형 상품)를 해지하셔도 결제월 이용기간까지 서비스 이용이 가능합니다.
          `,
        },
        {
          name: 'tab02',
          label: '보험안내',
          content: `
            <strong>보험 안내</strong><br /><br />
            - 본 서비스 구독자는 보이스피싱 등 금융사기 피해 발생 시 최대 500만원까지 보장을 받을 수 있습니다.<br /><br />
            - 보장은 구독 익일부터 적용되며, 구독 만료 시 자동 종료됩니다.<br /><br />
            - 보험은 제휴 보험사(○○손해보험)에서 제공하며, 별도의 가입 절차가 필요하지 않습니다.<br /><br />
            - 보험 청구는 가입자가 직접 보험사에 신청해야 하며, 보험사 심사를 거쳐 보상됩니다. 보험사 고객센터: 1588-0000
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
.box p{
  @apply font-normal text-[12px] leading-[14px] text-[#6B6D95];
}
.box p strong{
  @apply font-extrabold;
}
</style>