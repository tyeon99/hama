<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="spContent">
    <div class="title" :class="zoomClass">약관 동의</div>
    <div class="box">
      <!-- 전체동의 -->
      <div class="all-check">
        <div class="checkbox-input">
          <input
            id="allcheck"
            v-model="allChecked"
            type="checkbox"
            @change="toggleAll"
          >
          <label for="allcheck"><strong :class="zoomClass">전체 동의</strong></label>
        </div>
      </div>

      <!-- 개별 약관 -->
      <div class="check-group">
        <div
          v-for="(item, idx) in termsList"
          :key="idx"
          class="checkbox-input"
        >
          <input
            :id="`check${idx + 1}`"
            v-model="item.checked"
            type="checkbox"
            @change="checkAllState"
          >
          <label :for="`check${idx + 1}`">
            <span :class="zoomClass">{{ item.label }}</span>
            <button type="button" @click="openTermsModal">보기</button>
          </label>
        </div>
      </div>
    </div>
    <!-- 약관 팝업창 -->
    <SafePlusTermsModal
      v-if="isTermsModalOpen"
      :isModalAni="isModalAni"
      @close-termsModal="closeTermsModal"
    />
  </div>
</template>

<script>
import SafePlusTermsModal from '~/components/safeplus/SafePlusTermsModal'

export default {
  components: {
    SafePlusTermsModal
  },
  data() {
    return {
      allChecked: false,
      termsList: [
        { label: '이용약관 (필수)', checked: false },
        { label: '개인정보 수집 및 이용동의 (필수)', checked: false },
        { label: '개인정보 제 3자 제공 동의 (필수)', checked: false },
        { label: '안심플러스 피해보상 보험 약관 (필수)', checked: false }
      ],
      isTermsModalOpen: false,
      isModalAni: false
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
    toggleAll() {
      this.termsList.forEach(item => (item.checked = this.allChecked))
    },
    checkAllState() {
      this.allChecked = this.termsList.every(item => item.checked)
    },
    openTermsModal() {
      this.isModalAni = true
      this.isTermsModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeTermsModal(){
      this.isModalAni = false
      setTimeout(() => {
        this.isTermsModalOpen = false
        document.body.style.overflow = ''
      }, 300)
    }
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full mb-[44px];
}
.spContent .title{
  @apply w-full mb-[20px] font-bold text-[20px] leading-[24px] text-[#212121];
}
.spContent .box{
  @apply w-full bg-[#fff] border border-[#E3E0F9] rounded-[10px] p-[18px_16px_20px];
}
.all-check{
  @apply w-full pb-[16px] border-b border-[#B1B5C3];
}
.check-group{
  @apply w-full pt-[16px] flex flex-col justify-start items-start gap-[16px];
}
.checkbox-input{
  @apply w-full;
}
.checkbox-input input[type=checkbox]{
  @apply hidden;
}
.all-check .checkbox-input input[type=checkbox] + label{
  @apply block w-full pl-[32px] bg-[url(~/assets/img/safeplus/checkbox.png)] bg-left bg-no-repeat bg-[length:20px] font-medium text-[16px] leading-[20px] text-[#2B2436];
}
.all-check .checkbox-input input[type=checkbox]:checked + label{
  @apply bg-[url(~/assets/img/safeplus/checkbox-allchecked.png)];
}
.checkbox-input input[type=checkbox] + label{
  @apply block w-full pl-[24px] bg-[url(~/assets/img/safeplus/checkbox.png)] bg-left bg-no-repeat bg-[length:16px] font-normal text-[12px] leading-[16px] text-[#6B6D95] flex justify-start items-center gap-[8px];
}
.checkbox-input input[type=checkbox]:checked + label{
  @apply bg-[url(~/assets/img/safeplus/checkbox-checked.png)];
}
.checkbox-input input[type=checkbox] + label button{
  @apply p-[2px_5px] font-normal text-[12px] leading-[12px] text-[#6B6D95] border border-[#B1B5C3];
}
</style>