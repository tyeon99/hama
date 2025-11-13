<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="termsTabContent">
    <div class="txt-group">
      <div class="title" :class="zoomClass">
        <img width="24" src="~/assets/img/guide/guide_bottom-icon05.png">
        개인정보 처리방침
      </div>
      <div class="txtBox">
        <p :class="zoomClass">
          ㈜씽크풀(이하 ‘회사’)은 이용자의 개인정보를 중요하게 생각하며 「개인정보 보호법」 및 관련 법령, Google Play 정책을 준수합니다.<br />
          본 개인정보 처리방침은 회사가 운영하는 “하마터면” 및 “하마터면 안심플러스” 서비스에 적용됩니다
        </p>
        <p :class="zoomClass">
          <strong>1. 개인정보의 수집 및 이용 목적</strong>
          1) 하마터면(무료 서비스)<br />
          <span>무료 체험 서비스는 회원가입 없이 이용 가능하며, 이용자의 실제 개인정보를 수집하지 않습니다.</span>
          <span>체험 과정에서 사용되는 이름·성별·주민번호 등은 모두 가상 정보이며, 서버에 저장되거나 외부로 전송되지 않습니다.</span><br />
          2) 하마터면 안심플러스(유로 구독 서비스)
          <span>유료 구독 결제 및 본인확인을 위해 아래 정보만 수집합니다. (이름, 휴대폰번호, 이메일 주소)</span>
          <span>보험사 보장심사 시 필요한 구독 상태 및 보장요건 충족 여부 조회를 위해 아래 목적에 한해 정보를 사용합니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>2. 수집하는 개인정보 항목 및 수집방법</strong>
          1) 수집하는 항목 - 하마터면 무료 서비스
          <span>없음 (개인 정보를 저장·수집·전송하지 않음)</span><br />
          2) 수집하는 항목 - 하마터면 안심플러스
          <span>이름</span>
          <span>휴대폰번호</span>
          <span>이메일 주소</span><br />
          ※ 유료 구독 시 이용자가 직접 입력하여 수집함.<br /><br />
          3)보험 보당 확인 관련 안내 (제 3자 조회)
          <span>이용자가 보험금 지급 심사를 위해 보험사에 자신의 휴대폰번호를 제공한 경우, 보험사는 해당 번호를 기준으로 구독 상태 및 보장요건 충족 여부를 조회할 수 있습니다. (회사는 휴대폰번호를 보험사에 제공하지 않으며, 보험사가 직접 확인 요청)</span>
        </p>
        <p :class="zoomClass">
          <strong>3. 개인정보 보유 및 이용기간</strong>
          하마터면 무료 서비스
          <span>개인정보를 수집하지 않으므로 보유기간 없음.</span><br />
          하마터면 안심플러스
          <span>관련 법령에서 정한 기간 동안 보유</span>
          <em>대금결제 및 재화 등의 공급 기록: 5년</em>
          <em>계약 또는 청약철회 등의 기록: 5년</em>
          <em>소비자 불만 또는 분쟁처리 기록: 3년</em><br />
          ※ 위 기간 내에서 구독관리 및 보험사 보장검증 목적을 위해 이용될 수 있음.
        </p>
        <p :class="zoomClass">
          <strong>4. 개인정보의 제3자 제공</strong>
          회사는 소비자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.<br />
          다만, 하마터면 안심플러스 보험금 심사 시 아래의 제공이 이루어질 수 있습니다.
          <span>제공받는 자: 이용자가 보험금 청구 과정에서 선택한 보험사</span>
          <span>제공 목적: 보장 적용여부 및 필수 체험 완료 여부 확인</span>
          <span>제공 항목:</span>
          <em>유료 구독 여부</em>
          <em>보장요건 충족 여부</em>
          <span>제공 시점: 보험사가 필요 시마다 조회</span>
          <span>동의 거부 시: 보장 심사 불가</span>
        </p>
        <p :class="zoomClass">
          <strong>5. 개인정보 처리 위탁</strong>
          <span>하마터면 무료 서비스는 위탁 없음.</span>
          <span>하마터면 안심플러스는 결제 및 본인확인 등을 위해 일부 위탁 서비스 사용 가능.<br />
            (예: 결제대행사, 본인인증 서비스 등)</span>
        </p>
        <p :class="zoomClass">
          <strong>6. 개인정보 자동수집 장치 사용 여부</strong>
          <span>쿠키, 광고 ID, 기기정보, 위치정보 등을 자동으로 수집하지 않음.</span>
          <span>음성대화 기능은 실시간 처리 후 즉시 폐기되며 저장되지 않음.</span>
        </p>
        <p :class="zoomClass">
          <strong>7. 정보주체 권리 행사</strong>
          <span>무료 서비스는 개인정보를 보관하지 않으므로 별도의 권리 행사 필요 없음.</span>
          <span>안심플러스 이용자는 개인정보 열람·정정·삭제 요청 가능.</span>
        </p>
        <p :class="zoomClass">
          <strong>8. 개인정보 파기</strong>
          <span>무료 서비스 : 파기 대상 없음</span>
          <span>안심플러스 : 법정 보유기간 경과 후 즉시 파기</span>
        </p>
        <p :class="zoomClass">
          <strong>9. 개인정보 보호책임자</strong>
          <span>개인정보 보호책임자: 김정민 전무</span>
          <span>담당부서: ThinkPool Lab</span>
        </p>
        <p :class="zoomClass">
          <strong>10. Google Play 정책 준수</strong>
          <span>앱은 데이터 최소 수집 원칙을 준수하며 수집·이용 목적 외 사용하지 않습니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>부칙</strong>
          <span>본 개인정보 처리방침은 2025년 11월 00일부터 적용됩니다.</span>
        </p>
      </div>
    </div>
    <div class="prev">
      <span>▶</span>
      <button :class="zoomClass" @click="openPrevTermsModal">이전 개인정보 처리방침 보기</button>
    </div>
    <!-- 이전 약관 팝업 -->
    <PrevTermsModal
      v-if="isPrevTermsModalOpen"
      :isModalAni="isModalAni"
      :title="prevTermsTitle"
      :txt="prevTermsTxt"
      @close-prevtermsModal="closePrevTermsModal"
    />
  </div>
</template>

<script>
import PrevTermsModal from '~/components/guide/PrevTermsModal'

export default {
  components: {
    PrevTermsModal
  },
  data() {
    return {
      isPrevTermsModalOpen: false,
      isModalAni: false,
      prevTermsTitle: '개인정보 처리방침',
      prevTermsTxt:`
        <p :class="zoomClass">
          ㈜[씽크풀](이하 ‘회사’라 합니다)은 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 구글 플레이 스토어 정책 등 관련 법령을 준수합니다. <br />
          “하마터면”(이하 ‘앱’)은 디지털 피싱 위험성을 가상체험을 통해 인지하고 예방하는 교육 서비스로, 사용자의 개인정보를 일체 수집하지 않습니다.<br />
          회사는 아래와 같이 개인정보 처리방침을 수립·공개합니다.
        </p>
        <p :class="zoomClass">
          <strong>1. 개인정보의 수집 및 이용 목적</strong>
          <span>본 앱은 회원가입, 로그인 등 별도의 인증 절차 없이 누구나 자유롭게 이용할 수 있습니다.</span>
          <span>앱의 모든 체험 과정은 실제 개인정보가 아닌 가상의 정보만을 선택·입력하여 진행됩니다.</span>
          <span>회사는 서비스 제공, 앱 운영, 서비스 개선 등 어떠한 목적으로도 이용자의 개인정보를 수집하거나 저장하지 않습니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>2. 수집하는 개인정보 항목</strong>
          <span>수집 항목: 없음</span>
          <span>본 앱은 이름, 연락처, 이메일, 기기 정보, 위치 정보, 사진, 파일 등 어떠한 개인정보도 수집하지 않습니다.</span>
          <span>앱 이용 과정에서 사용자가 입력하는 모든 정보는 실제 개인정보가 아닌 가상의 정보이며, 서버로 전송되거나 저장되지 않습니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>3. 개인정보의 보유 및 이용기간</strong>
          <span>본 앱은 개인정보를 수집하지 않으므로, 별도의 보유 및 이용 기간이 존재하지 않습니다.</span>
          <span>앱 사용 중 생성되는 가상 데이터는 앱 내에서만 일시적으로 사용되며, 앱 종료 시 모두 삭제됩니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>4. 개인정보의 제3자 제공</strong>
          <span>회사는 개인정보를 수집하지 않으므로, 어떠한 경우에도 제3자에게 개인정보를 제공하지 않습니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>5. 개인정보 처리의 위탁</strong>
          <span>회사는 개인정보를 수집하지 않으므로, 개인정보 처리 업무를 외부에 위탁하지 않습니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>6. 개인정보 자동수집 장치의 설치·운영 및 거부</strong>
          <span>본 앱은 쿠키(Cookie), 로그분석, 광고 ID, 위치 정보 등 개인정보 자동수집 장치를 사용하지 않습니다.</span>
          <span>앱은 사용자의 인터넷 사용 정보, 방문 기록, 기기 정보 등 어떠한 정보도 자동으로 수집하지 않습니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>7. 정보주체의 권리와 그 행사방법</strong>
          <span>본 앱은 개인정보를 수집하지 않으므로, 정보주체의 열람, 정정, 삭제, 처리정지 요구 등 권리 행사가 필요하지 않습니다.</span>
          <span>다만, 개인정보 처리방침과 관련한 문의사항이 있으실 경우 아래 연락처로 문의해 주시기 바랍니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>8. 개인정보의 파기</strong>
          <span>회사는 개인정보를 수집하지 않으므로, 파기할 개인정보가 존재하지 않습니다.</span>
          <span>앱 사용 중 생성되는 모든 가상 데이터는 앱 종료 시 즉시 삭제되며, 서버 또는 외부 저장소에 저장되지 않습니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>9. 개인정보 보호를 위한 기술적·관리적 대책</strong>
          <span>회사는 개인정보를 수집하지 않으나, 앱의 안전한 운영과 보안 강화를 위해 다음과 같은 조치를 취하고 있습니다.</span>
          <em>앱의 정기적 보안 점검 및 업데이트</em>
          <em>외부로의 데이터 전송 차단</em>
          <em>앱 내 가상 데이터의 임시성 유지 및 자동 삭제</em>
        </p>
        <p :class="zoomClass">
          <strong>10. 개인정보 보호책임자 및 문의처</strong>
          회사는 개인정보 관련 문의 및 불만 처리를 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          <span>개인정보 보호책임자</span>
          <span>성명: 김정민</span>
          <span>직책: 전무</span>
          <span>연락처: 010-3275-6621</span>
          <span>이메일: vongchu@thinkpool.com</span>
          <span>담당부서</span>
          <span>부서명: ThinkPool Lab</span>
          <span>연락처: 02-2174-6402</span>
          <span>이메일: hun402@thinkpool.com</span>
        </p>
        <p :class="zoomClass">
          <strong>11. 개인정보 처리방침의 변경</strong>
          <span>본 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 회사 정책 변경에 따라 내용이 추가, 삭제, 수정될 수 있습니다.</span>
          <span>변경 시에는 앱 내 공지사항 또는 별도의 안내를 통해 사전 고지합니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>12. Google Play 개발자 정책 준수</strong>
          <span>본 앱은 Google Play 개발자 정책 및 데이터 안전성(Data Safety) 요구사항을 준수합니다.</span>
          <span>앱에서 요구하는 권한은 서비스 제공에 필수적인 최소한의 범위로 제한하며, 권한 사용 목적을 명확히 안내합니다.</span>
          <span>개인정보를 수집하지 않음에도 불구하고, 사용자 신뢰 확보와 정책 준수를 위해 본 처리방침을 제공합니다.</span>
        </p>
        <p :class="zoomClass">
          <strong>부칙</strong>
          <span>본 개인정보 처리방침은 2025년 5월 26일부터 적용됩니다.</span>
        </p>
      `
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
    openPrevTermsModal() {
      this.isModalAni = true
      this.isPrevTermsModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closePrevTermsModal(){
      this.isModalAni = false
      setTimeout(() => {
        this.isPrevTermsModalOpen = false
        document.body.style.overflow = ''
      }, 300)
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
  @apply block mb-[6px] font-extrabold text-[16px] text-[#6F75F2];
}
.termsTabContent .txt-group .txtBox p span{
  @apply block w-full pl-[20px] relative font-medium text-[14px] leading-[17px] text-[#6B6D95] mt-[4px] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#6B6D95] before:left-[6px] before:top-[6px];
}
.termsTabContent .txt-group .txtBox p em{
  @apply block w-full pl-[40px] relative font-medium text-[14px] leading-[17px] text-[#6B6D95] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#6B6D95] before:left-[26px] before:top-[6px];
}
.prev{
  @apply w-full pt-[12px] pl-[4px] flex justify-start items-center gap-[4px];
}
.prev button{
  @apply text-[#6B6D95] text-[14px] leading-[17px] underline;
}
.prev span{
  @apply text-[#6B6D95] text-[14px] leading-[17px];
}
</style>