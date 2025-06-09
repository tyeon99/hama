<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="termsContent">
    <div class="termsContent__top">
      <div class="titleBox">
        <div class="title">
          <span>약관 및 정책</span>
          <p>"<strong>하마터면</strong>"의<br />약관 및 정책을 확인<br />하실 수 있습니다.</p>
        </div>
        <img width="84" src="~/assets/img/guide/guide_top-icon05.png">
      </div>
    </div>
    <div class="termsContent__bottom">
      <div class="termsContent__bottom--tab">
        <button
          v-for="(tab, idx) in tabs"
          :key="idx"
          :class="{ active: activeTab === tab.name }"
          @click="changeTab(tab.name)"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="termsContent__bottom--tabContent">
        <div
          v-for="(tab, tabIdx) in tabs"
          v-show="activeTab === tab.name"
          :key="tabIdx"
          class="serviceIntro__tabContent--box"
        >
          <component
            :is="tab.component"
            :activeTab="activeTab"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TermsTabContent01 from '~/components/guide/TermsTabContent01'
import TermsTabContent02 from '~/components/guide/TermsTabContent02'


export default {
  data() {
    return {
      activeTab: 'tab1',
      tabs: [
        { name: 'tab1', label: '개인정보 처리방침', component: TermsTabContent01 },
        { name: 'tab2', label: '이용약관', component: TermsTabContent02 }
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
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.termsContent{
  @apply w-full bg-[#F7F5FF] pb-[90px];
}
.termsContent__top{
  @apply w-full bg-[#FFF2E7] shadow-[0px_0px_2px_0px_rgba(23,26,31,0.12)] p-[28px_8px_16px];
}
.termsContent__top .titleBox{
  @apply w-full px-[12px] flex justify-between items-end mb-[25px];
}
.termsContent__top .titleBox .title{
  @apply flex flex-col justify-start items-start gap-[20px];
}
.termsContent__top .titleBox .title span{
  @apply ml-[5px] inline-block p-[6px_12px_5px] bg-[#FF8C3A] rounded-[16px] font-bold text-[14px] leading-[17px] text-[#fff];
}
.termsContent__top .titleBox .title p{
  @apply font-[JalnanGothic] font-normal text-[24px] leading-[28px] text-[#252525];
}
.termsContent__top .titleBox .title p strong{
  @apply font-[JalnanGothic] font-normal text-[#FF7139];
}
.termsContent__bottom{
  @apply w-full pt-[24px] px-[12px] flex flex-col justify-start items-start gap-[40px];
}
.termsContent__bottom--tab{
  @apply w-full flex justify-start items-center gap-[12px] px-[4px];
}
.termsContent__bottom--tab button{
  @apply p-[12px_14px] border-[2px] border-[#2B2436] rounded-[12px] bg-[#fff] text-[#2B2436] font-extrabold text-[18px] leading-[20px];
}
.termsContent__bottom--tab button.active{
  @apply p-[14px_16px] bg-[#846BFF] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)] border-none text-[#fff];
}
</style>