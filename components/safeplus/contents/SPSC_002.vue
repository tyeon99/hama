<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="spContent">
    <div class="box">
      <!-- 이름 -->
      <div class="input-box">
        <div class="input-title" :class="zoomClass">이름</div>
        <div class="input-group">
          <input id="name" type="text" placeholder="이름">
        </div>
      </div>
      <!-- 휴대폰 번호 -->
      <div class="input-box">
        <div class="input-title" :class="zoomClass">휴대폰 번호</div>
        <div class="input-group">
          <input
            id="number"
            v-model="phone"
            type="text"
            placeholder="휴대폰 번호"
          >
          <button
            :class="{ active: isPhoneValid }"
            :disabled="!isPhoneValid"
            @click="requestAuth"
          >
            인증요청
          </button>
        </div>
      </div>
      <!-- 인증번호(휴대폰 번호 입력 후 요청버튼 클릭 시) -->
      <div
        v-if="showAuthInput"
        class="input-box"
      >
        <div class="input-title" :class="zoomClass">인증번호</div>
        <div class="input-group">
          <div class="input-wrap">
            <input
              id="authCode"
              v-model="authCode"
              type="text"
              placeholder="인증번호"
            >
            <div class="time">
              02:32
              <!-- 인증시간 초과 (재요청) -->
            </div>
          </div>
          <button
            :class="{ active: isAuthValid }"
            :disabled="!isAuthValid"
            @click="openAlarmsModal('인증번호가 일치하지 않습니다.')"
          >
            확인
          </button>
        </div>
      </div>
      <!-- 이메일 -->
      <div class="input-box">
        <div class="input-title" :class="zoomClass">이메일</div>
        <div class="input-group">
          <input id="email" type="text" placeholder="사용자 이메일">
        </div>
      </div>
    </div>
    <!--
      알림 팝업창(글자만 바꿔서 사용)
      @click="openAlarmsModal('휴대폰 번호를 정확히 입력해주세요.')"
      @click="openAlarmsModal('인증번호가 일치하지 않습니다.')"
      @click="openAlarmsModal('인증시간이 초과되었습니다.<br>다시 요청해 주세요.')"
    -->
    <SafePlusAlarmsModal
      v-if="isAlarmsModalOpen"
      :isModalAni="isModalAni"
      :message="modalMessage"
      @close-alarmsModal="closeAlarmsModal"
    />
  </div>
</template>

<script>
import SafePlusAlarmsModal from '~/components/safeplus/SafePlusAlarmsModal'

export default {
  components: {
    SafePlusAlarmsModal
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      authCode: '',
      showAuthInput: false,
      isAlarmsModalOpen: false,
      isModalAni: false,
      modalMessage: ''
    }
  },
  computed: {
    isPhoneValid() {
      // 휴대폰 번호 10~11자리만
      return /^\d{10,11}$/.test(this.phone)
    },
    isAuthValid() {
      // 인증번호 4~6자리만
      return /^\d{4,6}$/.test(this.authCode)
    },
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
    requestAuth() {
      this.showAuthInput = true;
    },
    openAlarmsModal(message) {
      this.modalMessage = message
      this.isModalAni = true
      this.isAlarmsModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeAlarmsModal(){
      this.isModalAni = false
      setTimeout(() => {
        this.isAlarmsModalOpen = false
        document.body.style.overflow = ''
      }, 300)
    }
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full mb-[24px];
}
.spContent .box{
  @apply w-full bg-[#fff] border border-[#E3E0F9] rounded-[10px] p-[24px_10px] flex flex-col justify-start items-start gap-[20px];
}
.spContent .box .input-box{
  @apply w-full flex flex-col justify-start items-start gap-[8px];
}
.spContent .box .input-box .input-title{
  @apply font-bold text-[14px] leading-[17px] text-[#6B6D95];
}
.spContent .box .input-box .input-group{
  @apply w-full flex justify-start items-center gap-[13px];
}
.spContent .box .input-box .input-group input[type=text]{
  @apply w-full h-[44px] border border-[#C0B8E8] rounded-[16px] px-[12px] font-bold text-[14px] leading-[17px] text-[#2B2436] placeholder:font-bold placeholder:text-[14px] placeholder:leading-[17px] placeholder:text-[#C0B8E8] focus-visible:border-2 focus-visible:border-[#6F75F2] focus:border-2 focus:border-[#6F75F2] focus-visible:outline-none;
}
.spContent .box .input-box .input-group button{
  @apply min-w-[100px] h-[44px] bg-[#D2D4EF] rounded-[15px] font-bold text-[14px] leading-[17px] text-[#fff];
  transition: background-color 0.3s ease;
}
.spContent .box .input-box .input-group button.active{
  @apply bg-[#7139FF];
}
.spContent .box .input-box .input-group .input-wrap{
  @apply w-full relative;
}
.spContent .box .input-box .input-group .input-wrap .time{
  @apply absolute top-[15px] right-[12px] font-medium text-[12px] leading-[14px] text-[#FF7474];
}
</style>