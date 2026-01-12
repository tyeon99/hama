<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="vDataContent">
    <div class="vDataContent__top animate__animated animate__fadeInUp">
      <img width="90" src="~/assets/img/vdata/vData-complete-img.png">
      <div class="title">
        <strong :class="zoomClass">보이스피싱과의 전쟁</strong>
        <p :class="zoomClass">
          안전한 AI 체험으로 <br />
          보이스피싱을 미리 예방하세요.
        </p>
      </div>
    </div>
    <div class="vDataContent__txt animate__animated animate__fadeInUp animate__delay-01s">
      <p>
        <img width="22" src="~/assets/img/vdata/public-icon.png">
        <strong :class="zoomClass">검증된 공신력</strong>
      </p>
      <p :class="zoomClass">
        하마터면은 정부(산업통상자원부) AI 국책과제로 개발된 서비스로, 국회 포럼에서도 검증된 서비스입니다. 
      </p>
    </div>
    <div class="vDataContent__mode animate__animated animate__fadeInUp animate__delay-02s">
      <div class="title">체험할 캐릭터와 대화 방식을 선택해주세요.</div>
      <div class="input-group">
        <p>체험 캐릭터 선택</p>
        <div class="input-box user-input">
          <div
            v-for="(option, idx) in userOptions"
            :key="option.value"
            class="mode"
          >
            <input
              :id="'user-' + idx"
              v-model="selectedUser"
              type="radio"
              name="user"
              :value="option.value"
            />
            <label
              :for="'user-' + idx"
              :class="{ 'selected': selectedUser === option.value }"
            >
              <img
                width="40"
                :src="require(`~/assets/img/vdata/${option.value}-icon.png`)"
              />
              <p>
                <strong v-html="option.name"></strong>
                <span v-html="option.number"></span>
              </p>
            </label>
          </div>
        </div>
      </div>
      <div class="input-group">
        <p>대화 방식 선택</p>
        <div class="input-box mode-input">
          <div
            v-for="(option, idx) in modeOptions"
            :key="option.value"
            class="mode"
          >
          <!-- ios일 때 '음성과 글로 대화할게요' disabled 처리 -->
            <input
              :id="'mode-' + idx"
              v-model="selectedMode"
              type="radio"
              name="mode"
              :value="option.value"
              :disabled="option.value === 'voice'"
            />
            <label
              :for="'mode-' + idx"
              :class="{ 
                'selected': selectedMode === option.value,
                'disabled': option.value === 'voice' 
              }"
            >
              <img
                width="40"
                :src="require(`~/assets/img/vdata/${option.value}-icon.png`)"
              />
              <p v-html="option.label"></p>
            </label>
          </div>
        </div>
      </div>
      <!-- ios일 때만 보이도록 -->
      <div
        class="caution"
        :class="zoomClass"
      >
        아직 IOS에서는 음성 기능이 지원되지 않아요.
      </div>
      <!-- // -->
    </div>
    <div class="vDataContent__btn animate__animated animate__fadeInUp animate__delay-06s">
      <button @click="goLink('/vdata/ready')">
        체험하러 가기
      </button>
      <p>체험은 가상신분으로만 진행되며, 실제 금융 거래가 아니니 안심하세요!</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modeOptions: [
        { label: '글로만 대화<br> 할게요', value: 'text' },
        { label: '음성과 글로<br>대화할게요', value: 'voice' }
      ],
      userOptions: [
        { name: '김철수(남)', number: '123456-1234567', value: 'male' },
        { name: '김영희(여)', number: '123456-2234567', value: 'female' }
      ],
      selectedMode: 'text',
      selectedUser: 'male'
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
  @apply w-full p-[20px_12px_86px] bg-[url(~/assets/img/vdata/vData-bg.png)] bg-cover bg-center bg-no-repeat;
}
.vDataContent__top{
  @apply w-full flex justify-start items-center gap-[16px] px-[8px] mb-[16px];
}
.vDataContent__top .title{
  @apply flex flex-col justify-start items-start gap-[2px];
}
.vDataContent__top .title strong{
  @apply font-[JalnanGothic] text-[#7139FF] font-normal text-[24px] leading-[34px];
}
.vDataContent__top .title p{
  @apply font-[JalnanGothic] text-[#2B2436] font-normal text-[14px] leading-[17px] tracking-wide;
}
.vDataContent__txt{
  @apply w-full rounded-[16px] p-[12px_20px] mb-[16px] shadow-[0px_1px_8px_0px_rgba(45,39,80,0.2)] flex flex-col justify-start items-start gap-[8px] bg-[#fff];
}
.vDataContent__txt p{
  @apply w-full flex justify-start items-center gap-[12px] font-semibold text-[14px] leading-[17px] text-[#6B6D95] tracking-tighter;
}
.vDataContent__txt p strong{
  @apply tracking-normal font-extrabold text-[16px] leading-[19px] text-[#2B2436];
}
.vDataContent__mode{
  @apply w-full rounded-[16px] bg-[#fff] mb-[20px] p-[16px] flex flex-col justify-start items-start gap-[16px];
}
.vDataContent__mode .title{
  @apply w-full font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#2B2436];
}
.input-group{
  @apply w-full flex flex-col justify-start items-start gap-[8px];
}
.input-group p{
  @apply font-bold text-[16px] leading-[19px] text-[#2B2436];
}
.input-box {
  @apply w-full flex justify-center items-center gap-[8px];
}
.input-box input{
  @apply hidden;
}
.input-box .mode{
  @apply w-1/2;
}
.input-box label{
  @apply w-full h-[72px] p-[16px_12px] flex justify-center items-center gap-[10px] bg-[#F9F5FF] rounded-[16px] cursor-pointer;
}
.input-box.user-input label{
  @apply gap-[4px];
}
.input-box label p{
  @apply font-semibold text-[16px] leading-[17px] text-[#2B2436];
}
.input-box label p span{
  @apply block mt-[4px] font-medium text-[12px] leading-[14px] tracking-[-0.07em];
}
.input-box label.selected{
  @apply shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
  background: linear-gradient(180deg, #8B64F8 0%, #5D68FF 100%);
}
.input-box label.selected p{
  @apply font-extrabold text-[#fff];
}
.input-box label.disabled p{
  @apply opacity-30;
}
.input-box label.disabled img{
  @apply opacity-30;
}
.vDataContent__btn{
  @apply w-full px-[8px] flex flex-col justify-start items-center gap-[8px];
}
.vDataContent__btn button{
  @apply w-full h-[50px] pt-[4px] bg-[#6B4EFF] rounded-[48px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] font-normal text-[16px] leading-[20px] tracking-[3%] text-[#fff];
}
.vDataContent__btn p{
  @apply text-[#6B6D95] w-full font-semibold text-[13px] leading-[16px] tracking-tighter text-center;
}
.caution{
  @apply w-full text-center font-medium text-[14px] leading-[17px] text-[#6B6D95];
}
</style>