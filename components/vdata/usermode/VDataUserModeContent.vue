<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="vDataContent">
    <div class="vDataContent__intro animate__animated animate__fadeInUp">
      <img width="112" src="~/assets/img/vdata/vData-user-img.png">
      <p :class="zoomClass">
        체험에서 사용할 <span>가상 사용자 정보가 생성</span> 되었어요.
      </p>
    </div>
    <div class="vDataContent__info animate__animated animate__fadeInUp animate__delay-02s">
      <div class="title" :class="zoomClass">🗒️ 가상 사용자 정보</div>
      <div class="info-box">
        <div class="info">
          <span :class="zoomClass">이름</span>
          <p :class="zoomClass"><strong>김철수</strong></p>
        </div>
        <div class="info">
          <span :class="zoomClass">주민등록번호</span>
          <p :class="zoomClass"><strong>123456-1234567</strong></p>
        </div>
        <div class="info">
          <span :class="zoomClass">대출 현황</span>
          <p :class="zoomClass"><strong>5,000만원</strong> 한강저축은행</p>
        </div>
      </div>
    </div>
    <div class="mode-box">
      <div class="vDataContent__mode animate__animated animate__fadeInUp animate__delay-03s">
        <div class="title">아래 보기 중 골라주세요</div>
        <div class="mode-input">
          <div
            v-for="(option, idx) in modeOptions"
            :key="option.value"
            class="mode"
          >
            <input
              :id="'mode-' + idx"
              v-model="selectedMode"
              type="radio"
              name="mode"
              :value="option.value"
            />
            <label
              :for="'mode-' + idx"
              :class="{ 'selected': selectedMode === option.value }"
            >
              <img
                width="52"
                :src="require(`~/assets/img/vdata/${option.value}-icon.png`)"
              />
              <span v-html="option.label"></span>
            </label>
          </div>
        </div>
        <div class="caution" :class="zoomClass">※ iOS에서는 음성 입력 기능을 사용할 수 없어요.</div>
      </div>
    </div>
    <div class="vDataContent__btn animate__animated animate__fadeInUp animate__delay-04s">
      <button
        class="fill"
        :disabled="!selectedMode"
        @click="goLink('/woori/code/vdata/complete')"
      >
        다음 단계 넘어가기
      </button>
      <button @click="goLink('/woori/code/vdata')">가상 정보 다시 고를래요</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modeOptions: [
        { label: '음성과 글로<br>대화할게요', value: 'voice' },
        { label: '글로만<br>대화 할게요', value: 'text' }
      ],
      selectedMode: null
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
    goLink(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.vDataContent{
  @apply w-full pb-[86px] bg-[url(~/assets/img/vdata/vData-bg.png)] bg-cover bg-center bg-no-repeat;
}
.vDataContent__intro{
  @apply w-full flex justify-start items-center gap-[22px] p-[20px_15px];
}
.vDataContent__intro p{
  @apply w-full font-[JalnanGothic] text-[16px] leading-[22px] text-[#2B2436] text-left mt-[10px];
}
.vDataContent__intro p span{
  @apply font-[JalnanGothic] text-[#7139FF];
}
.vDataContent__info{
  @apply w-full p-[20px] flex flex-col justify-center items-center gap-[12px] mb-[16px];
  background: linear-gradient(125.37deg, #8789F6 27.74%, #4F71F0 89.24%);
}
.vDataContent__info .title{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[20px] text-[#fff];
}
.vDataContent__info .info-box{
  @apply w-full p-[16px_20px] rounded-[16px] flex flex-col gap-[8px] justify-start items-start bg-[#fff] shadow-[0px_1px_8px_0px_rgba(45,39,80,0.2)];
}
.vDataContent__info .info-box .info{
  @apply flex justify-start items-start gap-[12px];
}
.vDataContent__info .info-box .info span{
  @apply min-w-[75px] font-extrabold text-[14px] leading-[24px] text-[#7139FF];
}
.vDataContent__info .info-box .info p{
  @apply font-semibold text-[14px] leading-[17px] text-[#2B2436];
}
.vDataContent__info .info-box .info p strong{
  @apply font-extrabold text-[20px] leading-[20px] text-[#2B2436];
}
.mode-box{
  @apply w-full px-[12px];
}
.vDataContent__mode{
  @apply w-full rounded-[16px] bg-[#fff] mb-[20px] p-[16px_28px];
}
.vDataContent__mode .title{
  @apply w-full text-center mb-[8px] font-[JalnanGothic] font-normal text-[18px] leading-[22px] text-[#2B2436];
}
.mode-input {
  @apply w-full flex justify-center items-center gap-[20px];
}
.mode-input input{
  @apply hidden;
}
.mode-input label{
  @apply w-[137px] h-[120px] flex flex-col justify-center items-center gap-[12px] bg-[#F9F5FF] rounded-[16px] cursor-pointer;
}
.mode-input label span{
  @apply font-semibold text-[16px] leading-[17px] text-[#2B2436] text-center;
}
.mode-input label.selected{
  @apply shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
  background: linear-gradient(180deg, #8B64F8 0%, #5D68FF 100%);
}
.mode-input label.selected span{
  @apply font-extrabold text-[#fff];
}
.mode-input label:hover{
  @apply border-[3px] border-[#7139FF];
}
.mode-input label:hover span{
  @apply text-[#7139FF];
}
.mode-input label.selected:hover{
  @apply border-none;
}
.mode-input label.selected:hover span{
  @apply text-[#fff];
}
.caution{
  @apply w-full text-center mt-[8px] font-medium text-[12px] leading-[14px] text-[#6B6D95];
}
.vDataContent__btn{
  @apply w-full px-[24px] flex flex-col justify-start items-center gap-[16px];
}
.vDataContent__btn button{
  @apply w-full h-[50px] pt-[4px] bg-[#fff] rounded-[48px] border-[2px] border-[#AFB2EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] font-normal text-[16px] leading-[20px] tracking-[3%] text-[#7139FF] disabled:!bg-[#AFB2EC];
}
.vDataContent__btn button.fill{
  @apply border-none bg-[#6B4EFF] text-[#fff];
}
</style>