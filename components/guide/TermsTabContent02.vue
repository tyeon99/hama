<template>
  <div class="termsTabContent">
    <div class="txt-group">
      <div class="title" :class="zoomClass">
        <img width="24" src="~/assets/img/guide/guide_bottom-icon05.png">
        이용 약관
      </div>
      <div class="txtBox">
        <p :class="zoomClass">
          <strong>제 1조 (목적)</strong>
          본 약관은 "하마터면" 애플리케이션(이하 "앱")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
        <p :class="zoomClass">
          <strong>제 2조 (정의)</strong>
          <em>*"앱"**이란 디지털 피싱 가상체험을 통한 보안 위험 인식 및 예방 교육을 제공하는 모바일 애플리케이션을 의미합니다.</em>
          <em>*"이용자"**란 본 앱을 다운로드하여 사용하는 모든 개인을 의미합니다.</em>
          <em>*"가상체험"**이란 실제 피싱이 아닌 교육 목적의 시뮬레이션 환경을 의미합니다.</em>
        </p>
        <p :class="zoomClass">
          <strong>제 3조 (앱의 목적과 성격)</strong>
          <em>본 앱은 교육 목적으로만 제공되며, 디지털 피싱의 위험성을 인식하고 예방 능력을 향상시키는 것을 목표로 합니다.</em>
          <em>모든 체험 콘텐츠는 가상의 시나리오이며, 실제 피싱 공격이나 악성 활동과는 무관합니다.</em>
          <em>본 앱은 회원가입이나 로그인 없이 누구나 이용할 수 있습니다.</em>
        </p>
        <p :class="zoomClass">
          <strong>제 4조 (개인정보 처리)</strong>
          <em>본 앱은 개인정보를 수집하지 않습니다.</em>
          <em>체험 과정에서 사용되는 모든 정보는 가상의 정보이며, 이용자의 실제 개인정보와는 무관합니다.</em>
          <em>앱 사용 통계나 오류 보고를 위한 익명화된 기술적 정보만을 수집할 수 있으며, 이는 개인을 식별할 수 없는 형태입니다.</em>
        </p>
        <p :class="zoomClass">
          <strong>제 5조 (이용자의 의무)</strong>
          이용자는 다음 행위를 하여서는 안됩니다:
          <em>본 앱을 실제 피싱이나 사기 목적으로 악용하는 행위</em>
          <em>앱의 콘텐츠를 무단으로 복제, 배포, 상업적으로 이용하는 행위</em>
          <em>앱의 정상적인 운영을 방해하거나 다른 이용자에게 피해를 주는 행위</em>
          <em>관련 법령을 위반하는 행위</em>
        </p>
        <p :class="zoomClass">
          <strong>제 6조 (서비스 제공 및 변경)</strong>
          <em>앱은 24시간 연중무휴로 제공됩니다. 단, 시스템 점검이나 기술적 문제로 인해 일시적으로 중단될 수 있습니다.</em>
          <em>교육 효과 향상을 위해 콘텐츠나 기능이 업데이트될 수 있으며, 중요한 변경사항은 앱 내에서 공지합니다.</em>
        </p>
        <p :class="zoomClass">
          <strong>제 7조 (면책사항)</strong>
          <em>본 앱은 교육 목적으로만 제공되며, 실제 보안 위협에 대한 완전한 보호를 보장하지 않습니다.</em>
          <em>회사는 서비스의 정확성, 신뢰성, 최신성, 연속성 등을 보장하지 않으며, 본 앱을 통해 제공되는 체험 내용 및 결과에 대해 법적 책임을 지지 않습니다.</em>
          <em>이용자가 앱 사용 후에도 실제 피싱 공격에 피해를 입는 경우, 회사는 이에 대한 책임을 지지 않습니다.</em>
          <em>앱 사용으로 인한 기기 손상이나 데이터 손실에 대해서는 책임을 지지 않습니다.</em>
        </p>
        <p :class="zoomClass">
          <strong>제 8조 (지적재산권)</strong>
          <em>앱의 모든 콘텐츠, 디자인, 소스코드 등은 회사의 지적재산권으로 보호됩니다.</em>
          <em>이용자는 교육 목적 범위 내에서만 앱을 사용할 수 있으며, 상업적 이용은 금지됩니다.</em>
        </p>
        <p :class="zoomClass">
          <strong>제 9조 (미성년자 보호)</strong>
          <em>만 13세 미만의 어린이는 부모 또는 법정대리인의 동의 하에 앱을 사용해야 합니다.</em>
          <em>교육적 성격을 고려하여 학교나 교육기관에서의 단체 사용을 권장합니다.</em>
        </p>
        <p :class="zoomClass">
          <strong>제 10조 (약관 효력 및 변경)</strong>
          <em>본 약관은 앱을 다운로드하여 사용하는 시점부터 효력이 발생합니다.</em>
          <em>약관 변경 시 앱 내 공지를 통해 7일 전 사전 고지하며, 계속 사용하는 경우 변경에 동의한 것으로 간주합니다.</em>
        </p>
        <p :class="zoomClass">
          <strong>제 11조 (준거법 및 관할)</strong>
          <em>본 약관은 대한민국 법에 따라 해석되며, 관련 분쟁은 서울중앙지방법원을 관할법원으로 합니다.</em>
        </p>
        <p :class="zoomClass">
          <strong>제 12조 (문의사항)</strong>
          <span>앱명: 하마터면</span>
          <span>연락처: [hama@thinkpool.com]</span>
          <span>고객지원: [고객센터 연락처]</span>
        </p>
        <p :class="zoomClass">
          <strong>부칙</strong>
          <span>본 약관은 [2025.05.28]부터 시행됩니다.</span>
          <span>본 앱은 구글 플레이 스토어 정책을 준수합니다.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped>
.termsTabContent .txt-group{
  @apply w-full flex flex-col justify-start items-center gap-[12px];
}
.termsTabContent .txt-group .title{
  @apply w-full px-[12px] font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#2b2436] tracking-[3%] flex justify-start items-center gap-[8px];
}
.termsTabContent .txt-group .txtBox{
  @apply w-full bg-[#fff] rounded-[12px] p-[16px] flex flex-col justify-start items-start gap-[12px];
}
.termsTabContent .txt-group .txtBox p{
  @apply w-full font-medium text-[14px] leading-[17px] text-[#6B6D95];
}
.termsTabContent .txt-group .txtBox p span{
  @apply text-[#6F75F2] before:content-none p-0;
}
.termsTabContent .txt-group .txtBox p strong{
  @apply block mb-[4px] font-extrabold text-[16px] text-[#6F75F2];
}
.termsTabContent .txt-group .txtBox p span{
  @apply block w-full pl-[20px] relative font-semibold text-[14px] leading-[17px] text-[#6B6D95] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#6B6D95] before:left-[6px] before:top-[6px];
}
.termsTabContent .txt-group .txtBox p em{
  @apply block w-full pl-[20px] relative font-semibold text-[14px] leading-[17px] text-[#6B6D95] before:content-['1.'] before:w-[10px] before:h-[17px] before:text-[14px] before:font-medium before:absolute before:rounded-full before:left-[4px] before:top-[0px];
}
.termsTabContent .txt-group .txtBox p em:nth-child(3){
  @apply before:content-['2.'];
}
.termsTabContent .txt-group .txtBox p em:nth-child(4){
  @apply before:content-['3.'];
}
.termsTabContent .txt-group .txtBox p em:nth-child(5){
  @apply before:content-['4.'];
}
</style>