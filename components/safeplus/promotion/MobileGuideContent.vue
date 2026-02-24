<template>
  <div class="mobileGuideContent">
    <div class="mobileGuideContent__wrap">
      <div class="box-group">
        <div class="box">
          <div class="title">
            <p>
              <span>방법1</span>. QR 스캔으로 바로 연결
            </p>
          </div>
          <div class="qr-img">
            <!-- QR 이미지 영역 -->
          </div>
          <div class="txt">
            카메라를 켜고 스캔하면<br />앱으로 바로 연결됩니다. 
          </div>
        </div>
        <div class="box">
          <div class="title">
            <p>
              <span>방법2</span>. 내 폰으로 설치 링크 받기
            </p>
          </div>
          <div class="input-group">
            <label for="number">휴대폰 번호 입력</label>
            <div class="input-box">
              <input id="number" type="text" name="number" placeholder="010-1234-1234">
              <button>링크 문자 받기</button>
            </div>
            <div class="txt">* 일일 최대 3회까지 발송 가능합니다.</div>
          </div>
        </div>
        <div class="box">
          <div class="title">
            <p>
              혹시 연결이 안 되시나요?
            </p>
          </div>
          <div class="input-group">
            <label for="url">URL 직접 복사</label>
            <div class="input-box">
              <input id="url" type="text" name="url" value="//링크//" disabled>
              <button @click="showToastMessage">주소 복사</button>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>하마터면 안심플러스</p>
        <p>Copyright since 1999 © ThinkPool Co.,Ltd. All Rights Reserved.</p>
      </div>
    </div>
    <transition name="fade">
      <div v-if="isShowToast" class="toastMsg">
        주소가 복사되었습니다. 필요한 곳에 붙여넣으세요.
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowToast: false, // 토스트 노출 여부
      toastTimer: null // 타이머 초기화용
    }
  },
  methods: {
    showToastMessage() {
      this.isShowToast = true

      if (this.toastTimer) {
        clearTimeout(this.toastTimer)
      }

      this.toastTimer = setTimeout(() => {
        this.isShowToast = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.mobileGuideContent{
  @apply w-full flex justify-center items-center pt-[30px] pb-[100px];
}
.mobileGuideContent__wrap{
  @apply w-full max-w-[520px] flex flex-col justify-start items-center gap-[40px] px-[16px];
}
.box-group{
  @apply w-full flex flex-col justify-center items-center gap-[16px];
}
.box{
  @apply w-full bg-[#fff] p-[30px_12px] rounded-[12px] flex flex-col justify-center items-center gap-[15px];
  box-shadow: 0px 0px 8px 0px #00000014;
}
.box .title p{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#2B2436];
}
.box .title p span{
  @apply font-[JalnanGothic] text-[#7139FF]
}
.qr-img{
  @apply w-[140px] h-[140px] overflow-hidden;
}
.box .txt{
  @apply w-full font-medium text-[12px] leading-[14px] text-[#6B6D95] text-center;
}
.input-group{
  @apply py-[10px] flex flex-col justify-center items-start gap-[10px];
}
.input-group label{
  @apply font-bold text-[14px] leading-[17px] text-[#6B6D95];
}
.input-box{
  @apply flex justify-center items-center gap-[10px];
}
.input-box input{
  @apply w-[214px] h-[44px] p-[12px] border border-[#C0B8E8] rounded-[10px] text-[14px] font-bold leading-[17px] text-[#2B2436] placeholder:text-[#AFB2EC] disabled:bg-[#fff];
}
.input-box button{
  @apply p-[13.5px_16px] bg-[#7139FF] rounded-[10px] font-bold text-[14px] leading-[17px] text-[#fff];
}
.copyright{
  @apply flex flex-col justify-center items-center gap-[2px];
}
.copyright p{
  @apply font-normal text-[10px] leading-[20px] tracking-[-3%] text-[#999];
}
.toastMsg{
  @apply fixed top-[50%] translate-y-[-50%] p-[10px] bg-[#999] text-[#fff] text-[14px] leading-[20px] font-bold rounded-[12px];
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>