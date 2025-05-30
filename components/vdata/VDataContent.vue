<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="vDataContent">
    <div class="vDataContent__img animate__animated animate__fadeInUp">
      <img width="88" src="~/assets/img/vdata/vData-img.png">
    </div>
    <div class="vDataContent__notice animate__animated animate__fadeInUp animate__delay-01s">
      <strong :class="zoomClass">😊 안녕하세요~</strong>
      <p :class="zoomClass">
        보이스피싱 체험을 위한 <span>AI 가이드 하마</span>라고 해요. <br />
        이 체험은 디지털 금융 사기 예방 교육을 위한 시뮬레이션으로, <span>맞춤형 체험을 위해 간단한 정보를 선택</span>해 주세요~
      </p>
    </div>
    <div class="vDataContent__txt animate__animated animate__fadeInUp animate__delay-02s">
      <p :class="zoomClass">
        ✨ 체험은 가상 사용자 정보로만 진행되며, 실제 금융 거래가 아니니 안심하세요!
      </p>
      <p :class="zoomClass">
        ✨ 입력 정보는 가상 사용자 정보 생성에만 사용되며, 서버에 수집되지 않아요.
      </p>
    </div>
    <div class="vDataContent__btn animate__animated animate__fadeInUp animate__delay-03s">
      <button class="fill" @click="openVDataOffcanvas">가상 정보 입력하기</button>
      <button @click="goLink('/main')">AI피싱 체험 목록 보기</button>
    </div>
    <VDataOffcanvas
      v-if="isVDataOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-vDataOffcanvas="closeVDataOffcanvas"
    />
  </div>
</template>

<script>
import VDataOffcanvas from '~/components/vdata/VDataOffcanvas'

export default {
  components: {
    VDataOffcanvas
  },
  data () {
    return {
      isOffcanvasAni: false,
      isVDataOffcanvasOpen: false
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
    },
    openVDataOffcanvas () {
      this.isOffcanvasAni = true
      this.isVDataOffcanvasOpen = true
    },
    closeVDataOffcanvas () {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isVDataOffcanvasOpen = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.vDataContent{
  @apply w-full p-[24px_16px_86px] bg-[url(~/assets/img/vdata/vData-bg.png)] bg-cover bg-center bg-no-repeat;
}
.vDataContent__img{
  @apply w-full flex justify-center items-center mb-[16px];
}
.vDataContent__notice{
  @apply w-full flex flex-col justify-start items-start gap-[8px] mb-[16px];
}
.vDataContent__notice strong{
  @apply w-full text-center block font-[JalnanGothic] font-normal text-[18px] leading-[20px] text-[#2B2436];
}
.vDataContent__notice p{
  @apply w-full text-center font-[JalnanGothic] text-[16px] leading-[22px] text-[#2B2436];
}
.vDataContent__notice p span{
  @apply font-[JalnanGothic] text-[#7139FF];
}
.vDataContent__txt{
  @apply w-full rounded-[16px] p-[22px_16px] mb-[20px] shadow-[0px_1px_8px_0px_rgba(45,39,80,0.2)] flex flex-col justify-start items-start gap-[12px];
  background: linear-gradient(110.06deg, #1C054A 43.96%, #7A007A 101.52%);
}
.vDataContent__txt p{
  @apply w-full font-semibold text-[16px] leading-[20px] text-[#F5FAFF];
}
.vDataContent__btn{
  @apply w-full px-[8px] flex flex-col justify-start items-center gap-[16px];
}
.vDataContent__btn button{
  @apply w-full h-[50px] pt-[4px] bg-[#fff] rounded-[48px] border-[2px] border-[#AFB2EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] font-normal text-[16px] leading-[20px] tracking-[3%] text-[#7139FF];
}
.vDataContent__btn button.fill{
  @apply border-none bg-[#6B4EFF] text-[#fff];
}
</style>