<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="mypageContent">
    <div class="box-wrap">
      <!-- 구독자 정보 -->
      <div class="box-group">
        <div class="title"><p :class="zoomClass">구독자 정보</p></div>
        <div class="box">
          <div class="list-group">
            <div
              v-for="(item, uidx) in userInfoList"
              :key="uidx"
              class="list"
            >
              <div class="left" :class="zoomClass">{{ item.label }}</div>
              <div class="right" :class="zoomClass">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 구독상품 -->
      <div class="box-group">
        <div class="title">
          <div class="left">
            <p :class="zoomClass">구독상품</p>
            <strong :class="zoomClass">{{ subscription.name }}</strong>
          </div>
          <div class="right">
            <span class="gift">선물</span>
            <span>{{ subscription.status }}</span>
          </div>
        </div>
        <div class="box">
          <div class="list-group">
            <div
              v-for="(item, sidx) in subscriptionList"
              :key="sidx"
              class="list"
            >
              <div class="left" :class="zoomClass">{{ item.label }}</div>
              <div class="right" :class="zoomClass" v-html="item.value"></div>
            </div>
          </div>
          <button
            class="w-full h-[44px] rounded-[10px] bg-[#5D5D8F] mt-[25px] font-bold text-[14px] leading-[17px] text-[#fff]"
            :class="zoomClass"
            @click="openManageModal"
          >
            구독/결제 관리
          </button>
        </div>
      </div>

      <!-- 피싱 예방 체험 진행률 -->
      <div class="box-group">
        <div class="title"><p :class="zoomClass">피싱 예방 체험 진행률</p></div>
        <div class="box">
          <div class="progress-group">
            <div class="progress">
              <svg class="svg-donut" viewBox="0 0 120 120">
                <circle 
                  class="base-circle" 
                  cx="60" cy="60" 
                  :r="circleRadius"
                  stroke-width="10" 
                  fill="none"
                  stroke="#ECECEC"
                />
                <circle 
                  class="progress-bar" 
                  :class="{ 'complete': completedCount === totalCount }"
                  cx="60" cy="60" 
                  :r="circleRadius"
                  stroke-width="10" 
                  fill="none" 
                  stroke-linecap="round"
                  :stroke-dasharray="circleCircumference"
                  :stroke-dashoffset="strokeDashoffset"
                  transform="rotate(-90 60 60)" 
                />
              </svg>
              <div class="inner-circle">
                <strong>{{ Math.round(progressPercent) }}%</strong>
                <p>
                  <span :class="{ 'complete': completedCount === totalCount }">
                    {{ completedCount }}
                  </span> 
                  / {{ totalCount }}
                </p>
              </div>
            </div>
            <div class="txt">
              <p>전체 {{ totalCount }}개 중</p>
              <span>{{ completedCount }}개 완료</span>
              <strong :class="{ 'complete': completedCount === totalCount }">
                {{ completedCount === totalCount ? '수료 기준 달성!' : `${totalCount - completedCount}개 남음` }}
              </strong>
            </div>
          </div>
          
          <button 
            class="certificate-btn"
            :class="{ 'complete': completedCount === totalCount }"
            :disabled="completedCount !== totalCount"
          >
            {{ completedCount === totalCount ? '수료증 발급받기' : '30개 체험을 완료하면 수료증이 발급됩니다.' }}
          </button>
        </div>
      </div>

      <!-- 결제 히스토리 -->
      <div class="box-group">
        <div class="title"><p :class="zoomClass">결제 히스토리</p></div>
        <div class="box">
          <div class="list-group">
            <div
              v-for="(item, pidx) in paymentHistory"
              :key="pidx"
              class="list"
            >
              <div class="left" :class="zoomClass">{{ item.period }}</div>
              <div class="right" :class="zoomClass">{{ item.amount }}</div>
            </div>
          </div>
          <button
            class="w-full h-[44px] rounded-[10px] bg-[#fff] mt-[25px] font-bold text-[14px] leading-[17px] border border-[#C0B8E8] text-[#2B2436]"
            :class="zoomClass"
          >
            더 보기 +
          </button>
        </div>
      </div>
    </div>

    <!-- 계정 삭제 버튼 -->
    <!-- <div class="delete-account">
      <button @click="openDeleteAccountModal">[계정 삭제]</button>
    </div> -->

    <div class="note">
      <p>
        <strong :class="zoomClass">㈜씽크풀 </strong>
        <span :class="zoomClass">사업자 등록번호 116-81-54775</span>
        <span :class="zoomClass">대표 : 김동진</span>
      </p>
      <p>
        <strong :class="zoomClass">안심플러스 고객센터</strong>
        <button>
          <img width="18" src="~/assets/img/safeplus/kakao-logo.png">
          <em :class="zoomClass">카카오채널 채팅문의</em>
        </button>
      </p>
    </div>
    <!-- 알림 팝업창 -->
    <ManageModal
      v-if="isManageModalOpen"
      :isModalAni="isModalAni"
      @close-manageModal="closeManageModal"
      @open-mypageAlarmModal="openUnsubscribeModal"
    />
    <!-- 알림 모달 -->
    <MypageAlarmModal
      v-if="isMypageAlarmModalOpen"
      :isInModalAni="isInModalAni"
      :modalTitle="modalInfo.title"
      :modalTxt="modalInfo.txt"
      :activeBtnTxt="modalInfo.btnTxt"
      :loadingBtnTxt="modalInfo.loadingBtnTxt"
      :finishedTitle="modalInfo.finishTitle"
      :finishedTxt="modalInfo.finishTxt"
      @close-mypageAlarmModal="closeMypageAlarmModal"
    />
  </div>
</template>

<script>
import ManageModal from '~/components/mypage/ManageModal'
import MypageAlarmModal from '~/components/mypage/MyPageAlarmModal'

export default { 
  components: {
    ManageModal,
    MypageAlarmModal
  },
  data() {
    return {
      userInfoList: [
        { label: '이름', value: '홍길동' },
        { label: '휴대폰 번호', value: '010-1234-5678' },
        { label: '이메일 주소', value: 'iuikejkks9839@mymail.com' },
        { label: '로그인 계정', value: '구글 로그인' }
      ],
      subscription: {
        name: '안심 플러스 6개월',
        status: '구독 중'
      },
      subscriptionList: [
        { label: '다음 결제일', value: '<span>2025-10-10</span>' },
        { label: '보험청구 연락처', value: '<em>1500-1234</em><button>[약관 보기]</button>' }
      ],
      paymentHistory: [
        { period: '2025-09-10 ~ 2025-10-10', amount: '16,500 원' },
        { period: '2025-09-10 ~ 2025-10-10', amount: '16,500 원' },
        { period: '2025-09-10 ~ 2025-10-10', amount: '16,500 원' },
        { period: '2025-09-10 ~ 2025-10-10', amount: '16,500 원' },
        { period: '2025-09-10 ~ 2025-10-10', amount: '16,500 원' }
      ],
      isManageModalOpen: false,
      isModalAni: false,
      isMypageAlarmModalOpen: false,
      isInModalAni: false,
      modalInfo: {
        title: '',
        txt: '',
        btnTxt: '',
        loadingBtnTxt: '',
        finishTitle: '',
        finishTxt: ''
      },
      // 진행률 개수
      totalCount: 30,
      completedCount: 22,
      // 도넛 svg
      circleRadius: 50
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
    },
    // 진행률 퍼센트 계산
    progressPercent() {
      return (this.completedCount / this.totalCount) * 100;
    },
    // 도넛 svg
    circleCircumference() {
      return 2 * Math.PI * this.circleRadius;
    },
    strokeDashoffset() {
      const progress = this.completedCount / this.totalCount;
      return this.circleCircumference * (1 - progress);
    }
  },
  methods: {
    openManageModal() {
      this.isModalAni = true
      this.isManageModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeManageModal(){
      this.isModalAni = false
      setTimeout(() => {
        this.isManageModalOpen = false
        document.body.style.overflow = ''
      }, 300)
    },
    // 구독 해지 모달
    openUnsubscribeModal() {
      this.modalInfo = {
        title: '구독을 해지하시겠습니까?',
        txt: '지금 해지하셔도 이미 결제된 이용기간 종료 시점까지는 서비스 이용이 가능합니다.<br>다음 결제일부터는 자동 결제가 진행되지 않습니다.',
        btnTxt: '구독 해지',
        loadingBtnTxt: '구독 해지 중..',
        finishTitle: '구독 해지가 완료되었습니다',
        finishTxt: '이용기간 종료 시점까지는 서비스 이용이 가능합니다<br>다음 결제일부터는 자동 결제가 진행되지 않습니다.'
      }
      this.closeManageModal() // 관리 모달 닫기
      setTimeout(() => {
        this.openMypageAlarmModal();
      }, 100);
    },
    // 계정 삭제 모달
    // openDeleteAccountModal() {
    //   this.modalInfo = {
    //     title: '게정 정보를 삭제하시겠습니까?',
    //     txt: '삭제 시 모든 이용 기록이 즉시 파기되며 <br>복구할 수 없습니다.<br><br>계정 삭제 후에도 <strong>App Store 자동 결제는 유지</strong>되오니, 반드시 [아이폰 설정 > 구독]에서 <br>직접 해지하셔야 합니다.<br><br>삭제 즉시 남은 구독 권한은 소멸됩니다.',
    //     btnTxt: '계정 삭제',
    //     loadingBtnTxt: '계정 삭제 중..',
    //     finishTitle: '삭제 완료',
    //     finishTxt: '모든 이용 정보가 파기되었습니다.<br><br>계정 삭제 후에도 <strong>App Store 자동 결제는 유지</strong>되오니, 반드시 [아이폰 설정 > 구독]에서 <br>직접 해지하셔야 합니다.<br><br>첫화면으로 이동합니다.'
    //   }
    //   this.openMypageAlarmModal();
    // },
    // 공통 열기 닫기
    // 공통 오픈 로직
    openMypageAlarmModal() {
      this.isInModalAni = true
      this.isMypageAlarmModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeMypageAlarmModal() {
      this.isInModalAni = false
      setTimeout(() => {
        this.isMypageAlarmModalOpen = false
        document.body.style.overflow = ''
      }, 300)
    }
  }
}
</script>

<style scoped>
.mypageContent {
  @apply w-full p-[32px_18px_118px];
}
.mypageContent .box-wrap {
  @apply w-full flex flex-col justify-start items-start gap-[24px] mb-[16px];
}
.mypageContent .box-group {
  @apply w-full flex flex-col justify-start items-start gap-[12px];
}
.mypageContent .box-group .box {
  @apply w-full rounded-[8px] border border-[#E3E0F9] bg-[#fff] p-[20px];
}
.mypageContent .box-group .title {
  @apply w-full flex justify-between items-center;
}
.mypageContent .box-group .title .left {
  @apply flex justify-start items-center gap-[8px];
}
.mypageContent .box-group .title p {
  @apply font-extrabold text-[16px] leading-[19px] text-[#2B2436];
}
.mypageContent .box-group .title strong {
  @apply text-[#6F75F2] font-extrabold text-[16px] leading-[19px];
}
.mypageContent .box-group .title span {
  @apply p-[4px_8px] rounded-[12px] bg-[#7139FF] font-extrabold text-[11px] leading-[13px] text-[#fff];
}
.mypageContent .box-group .title span.gift{
  @apply bg-[#D657EF];
}
.mypageContent .box .list-group {
  @apply w-full flex flex-col justify-start items-start gap-[12px];
}
.mypageContent .box .list-group .list {
  @apply w-full flex justify-between items-center;
}
.mypageContent .box .list-group .list .left {
  @apply font-semibold text-[12px] leading-[14px] text-[#6B6D95];
}
.mypageContent .box .list-group .list .right {
  @apply flex justify-end items-center gap-[2px] font-semibold text-[13px] leading-[16px] text-[#2B2436];
}
.mypageContent .box .list-group .list .right button {
  @apply w-auto h-auto mt-0 p-0 bg-transparent border-0 font-extrabold text-[13px] leading-[16px] text-[#6F75F2];
}
.mypageContent .note {
  @apply w-full flex flex-col justify-start items-center gap-[8px] pt-[34px];
}
.mypageContent .note p {
  @apply w-full flex justify-center items-center gap-[12px];
}
.mypageContent .note p strong {
  @apply font-extrabold text-[11px] leading-[13px] text-[#ABADC5];
}
.mypageContent .note p span {
  @apply font-medium text-[11px] leading-[13px] text-[#ABADC5];
}
.mypageContent .note p button {
  @apply flex justify-start items-center gap-[12px];
}
.mypageContent .note p button em {
  @apply font-medium text-[11px] leading-[13px] text-[#7139FF];
}
.experience-complete {
  @apply text-[#00B050] font-semibold;
}
.experience-incomplete {
  @apply text-[#FF6B6B] font-semibold;
}
/* 선물 이용자 케어 스타일 */
.gift-care-group .sub-title {
  @apply w-full;
}
.gift-care-group .sub-title span {
  @apply font-semibold text-[13px] leading-[16px] text-[#6B6D95];
}
.gift-care-box {
  @apply flex flex-row items-center gap-[12px] mt-[12px];
}
.gift-care-box .gift-select {
  @apply flex-1 min-w-0 h-[44px] px-[16px] rounded-[8px] border border-[#E3E0F9] bg-[#fff] font-medium text-[14px] leading-[17px] text-[#2B2436] cursor-pointer;
}
.gift-care-box .gift-select:focus {
  @apply outline-none border-[#6F75F2];
}
.gift-care-box .search-btn {
  @apply flex-shrink-0 h-[44px] px-[16px] rounded-[8px] bg-[#6F75F2] font-bold text-[14px] leading-[17px] text-[#fff] mt-0;
}
.gift-care-box .search-btn:disabled {
  @apply bg-[#C0B8E8] cursor-not-allowed;
}
.delete-account{
  @apply w-full flex justify-center items-center;
}
.delete-account button{
  @apply font-bold text-[16px] leading-[19px] text-[#6B6D95];
}
.progress-group{
  @apply w-full flex gap-14 justify-center items-center mb-5;
}
.progress {
  @apply relative w-[120px] h-[120px] flex justify-center items-center flex-shrink-0;
}
.progress .svg-donut {
  @apply absolute top-0 left-0 w-full h-full;
}
.progress .progress-bar {
  @apply stroke-[#7139FF];
  transition: stroke-dashoffset 0.5s ease-in-out;
}
.progress .progress-bar.complete{
  @apply stroke-[#D657EF];
}
.progress .inner-circle {
  @apply w-[74px] h-[74px] rounded-full flex flex-col justify-center items-center z-[1];
}
.progress strong {
  @apply font-bold text-[24px] leading-[31px] text-[#333333] mb-[1px];
}
.progress p {
  @apply font-normal text-[12px] leading-[18px] text-[#666666];
}
.progress p span {
  @apply text-[#7139FF] font-bold;
}
.progress p span.complete{
  @apply text-[#D657EF];
} 
.progress-group .txt{
  @apply flex flex-col justify-start items-start;
}
.progress-group .txt p{
  @apply mb-4 font-medium text-[16px] leading-[19px] text-[#6B6D95];
}
.progress-group .txt span{
  @apply mb-[10px] font-bold text-[14px] leading-[17px] text-[#6F75F2];
}
.progress-group .txt span.complete{
  @apply text-[#D657EF];
}
.progress-group .txt strong{
  @apply font-medium text-[14px] leading-[17px] text-[#6B6D95];
}
.progress-group .txt strong.complete{
  @apply font-bold text-[#7139FF];
}
.certificate-btn{
  @apply w-full h-[44px] rounded-[10px] bg-[#5D5D8F] font-bold text-[14px] leading-[17px] text-[#fff];
}
.certificate-btn.complete{
  @apply bg-[#7139FF];
}
</style>