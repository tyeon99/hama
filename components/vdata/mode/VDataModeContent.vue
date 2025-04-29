<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="vDataContent">
    <div class="vDataContent__img animate__animated animate__fadeInUp">
      <img width="123" src="~/assets/img/vdata/vData-mode-img.png">
    </div>
    <div class="vDataContent__notice animate__animated animate__fadeInUp animate__delay-01s">
      <strong :class="zoomClass">거의 다 되었습니다.</strong>
      <p :class="zoomClass">
        마지막으로, AI 피싱 체험은 채팅으로 진행되며, 음성 대화도 추가로 선택할 수 있어요.
      </p>
    </div>
    <div class="vDataContent__mode animate__animated animate__fadeInUp animate__delay-02s">
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
      <div class="caution">※ 음성대화는 크롬과 엣지 브라우저만 지원합니다.</div>
    </div>
    <div class="vDataContent__btn animate__animated animate__fadeInUp animate__delay-03s">
      <button
        class="fill"
        :disabled="!selectedMode"
        @click="goLink('/vdata/complete')"
      >
        다음 단계 넘어가기
      </button>
      <button @click="goLink('/vdata')">가상 정보 다시 고를래요</button>
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
  @apply w-full p-[60px_12px] pb-[126px] bg-[url(~/assets/img/vdata/vData-bg.png)] bg-cover bg-center bg-no-repeat;
}
.vDataContent__img{
  @apply w-full flex justify-center items-center mb-[20px];
}
.vDataContent__notice{
  @apply w-full mb-[24px] px-[12px];
}
.vDataContent__notice strong{
  @apply block w-full text-center mb-[8px] font-[JalnanGothic] font-normal text-[20px] leading-[28px] text-[#7139FF];
}
.vDataContent__notice p{
  @apply w-full text-center font-[JalnanGothic] text-[16px] leading-[22px] text-[#2B2436];
}
.vDataContent__mode{
  @apply w-full rounded-[16px] bg-[#fff] mb-[40px] p-[22px_28px];
}
.vDataContent__mode .title{
  @apply w-full text-center mb-[16px] font-[JalnanGothic] font-normal text-[20px] leading-[24px] text-[#2B2436];
}
.mode-input {
  @apply w-full flex justify-center items-center gap-[20px];
}
.mode-input input{
  @apply hidden;
}
.mode-input label{
  @apply w-[137px] h-[126px] flex flex-col justify-center items-center gap-[12px] bg-[#F9F5FF] rounded-[16px] cursor-pointer;
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
.vDataContent__btn{
  @apply w-full px-[24px] flex flex-col justify-start items-center gap-[16px];
}
.vDataContent__btn button{
  @apply w-full h-[52px] pt-[4px] bg-[#fff] rounded-[48px] border-[2px] border-[#AFB2EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] font-normal text-[16px] leading-[20px] tracking-[3%] text-[#7139FF] disabled:!bg-[#AFB2EC];
}
.vDataContent__btn button.fill{
  @apply border-none bg-[#6B4EFF] text-[#fff];
}
.caution{
  @apply w-full text-center mt-[16px] font-medium text-[14px] leading-[17px] text-[#6B6D95];
}
</style>