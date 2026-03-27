<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closeManageModal"
  >
    <div
      class="modal-content animate__animated animate__faster"
      :class="{
        animate__fadeInDown: isModalAni,
        animate__fadeOutUp: !isModalAni,
      }"
      @click.stop
    >
      <div class="modal-header" :class="{ 'has-tabs': !isMobileDevice }">
        <!-- 웹에서만 탭 표시 -->
        <div v-if="!isMobileDevice" class="tabs">
          <button
            :class="['tab-text', { active: activeTab === 'web' }]"
            @click="activeTab = 'web'"
          >
            WEB
          </button>
          <span class="tab-divider">|</span>
          <button
            :class="['tab-text', { active: activeTab === 'android' }]"
            @click="activeTab = 'android'"
          >
            Android
          </button>
          <span class="tab-divider">|</span>
          <button
            :class="['tab-text', { active: activeTab === 'ios' }]"
            @click="activeTab = 'ios'"
          >
            iOS
          </button>
        </div>
        <button class="close-btn" @click="closeManageModal">
          <img width="16" src="~/assets/img/safeplus/close-icon.png" />
        </button>
      </div>
      <div class="modal-body">
        <div class="title">
          <strong :class="zoomClass">구독/결제 관리</strong>
          <span :class="zoomClass">{{ currentTabDescription }}</span>
          <div
            v-if="activeTab === 'ios' && isIphone"
            class="subscription-btn-wrapper"
          >
            <button class="subscription-btn" @click="openAppleSubscription">
              Apple 구독 관리로 이동
            </button>
          </div>
        </div>

        <div class="txt-box">
          <!-- WEB 내용 -->
          <div v-if="activeTab === 'web'" class="box-group">
            <div class="box">
              <p>
                <strong>구독상품</strong>
                <span>안심플러스 연간 구독</span>
              </p>
              <p>
                <strong>결제수단</strong>
                <span>삼성카드 ***-3333</span>
              </p>
              <p>
                <strong>다음결제일</strong>
                <span>2027.03.30</span>
              </p>
              <div class="noProduct">현재 구독중인 상품이 없습니다.</div>
              <p>
                <strong>잔여 이용 종료일</strong>
                <span>2027.03.30</span>
              </p>
            </div>
            <div class="box">
              <div class="txt">구독 해지 시 이미 결제된 이용기간 종료 시점까지 서비스 이용이 가능합니다.</div>
              <div class="txt">해지 이후 다음 결제일부터는 자동 결제가 진행되지 않습니다.</div>
            </div>
            <button @click="$emit('open-mypageAlarmModal')">구독 해지</button>
          </div>

          <!-- Android 내용 -->
          <div v-if="activeTab === 'android'" class="p-group">
            <p>
              <strong :class="zoomClass">안드로이드 기기</strong>
              <span :class="zoomClass">
                1. Google Play 스토어 앱 실행<br />
                2. 프로필 아이콘 → 결제 및 정기결제 → 정기결제<br />
                3. 안심플러스 구독 선택 후 구독 취소 또는 옵션 변경
              </span>
            </p>
            <p>
              <strong :class="zoomClass">웹(브라우저)</strong>
              <span :class="zoomClass">
                1. Google Play 구독 관리 페이지 접속<br />
                2. 해당 구독 선택 후 취소/변경
              </span>
            </p>
            <div class="p-box">
              <span :class="zoomClass"
                >모든 결제는 이용하시는 앱 스토어(Google Play / App Store)를
                통해 진행됩니다.</span
              >
              <span :class="zoomClass"
                >결제 즉시 서비스 사용이 시작되며, 시작된 상품은 환불되지
                않습니다.</span
              >
              <span :class="zoomClass"
                >정기결제(구독형 상품)의 경우, 구독 기간에 대한 약정이 없으며
                언제든 해당 앱 스토어를 통해 해지가 가능합니다.
              </span>
              <span :class="zoomClass"
                >해지 후에도 결제월 이용기간까지는 서비스가 제공되며 환불은
                없습니다.</span
              >
            </div>
            <p>
              <span :class="zoomClass"
                >결제 및 모든 결제관리는 Google Play 스토어를 통해 진행
                됩니다.</span
              >
              <b :class="zoomClass"
                >해지 시 다음 결제일부터 청구가 중단되며, 환불/과금 정책은
                스토어 정책을 따릅니다.</b
              >
            </p>
          </div>

          <!-- iOS 내용 -->
          <div v-if="activeTab === 'ios'" class="p-group">
            <p>
              <strong :class="zoomClass">직접 찾아가는 방법</strong>
              <span :class="zoomClass">
                1. 아이폰 기기 [설정] 앱 실행
                <br />
                2. 최상단 [내 이름(Apple ID)] 선택<br />
                3. [구독] 메뉴 선택 후 ‘안심플러스 관리
              </span>
            </p>
            <div class="p-box">
              <span :class="zoomClass"
                >모든 결제 및 환불은 Apple의 이용 약관 및 정책을 따릅니다.</span
              >
              <span :class="zoomClass"
                >개발사는 결제 취소나 환불 권한이 없으므로, 환불 문의는 Apple에
                직접 하셔야 합니다.
              </span>
              <span :class="zoomClass"
                >다음 결제일 24시간 전까지 구독 기능을 끄지 않으면 자동으로
                갱신(결제)됩니다.
              </span>
              <span :class="zoomClass"
                >구독을 취소하더라도 남은 이용 기간까지는 서비스를 계속 이용할
                수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import commonMixin from '~/util/mixins/common'

export default {
  // mixins: [commonMixin],
  props: {
    isModalAni: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      activeTab: 'web',
    }
  },
  computed: {
    isMobileDevice () {
      return this.isAndroid || this.isIphone
    },
    currentTabDescription () {
    if (this.activeTab === 'web') {
      return '웹에서 결제한 안심플러스 구독은 이 페이지에서 해지 할 수 있습니다.'
    } else if (this.activeTab === 'android') {
      return '안심플러스 구독의 해지/변경은 Google Play에서 처리됩니다.'
    } else if (this.activeTab === 'ios') {
      return '안심플러스 구독의 해지/변경은 Apple에서 진행됩니다.'
    }
    return ''
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
    },
  },
  mounted () {
    document.body.appendChild(this.$el)

    // 모바일 기기인 경우 자동으로 해당 OS 탭 선택
    if (this.isIphone) {
      this.activeTab = 'ios'
    } else if (this.isAndroid) {
      this.activeTab = 'android'
    }
  },
  methods: {
    closeManageModal () {
      this.$emit('close-manageModal')
    },
    async openAppleSubscription () {
      if (this.$flutter?.isFlutterApp()) {
        await this.$flutter.openSubscriptionManagement()
      } else {
        window.open('https://apps.apple.com/account/subscriptions', '_blank')
      }
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[9999] px-[30px];
}
.modal-content {
  @apply w-full bg-[#fff] rounded-[4px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)] border-b-[5px] border-[#7139FF];
}
.modal-header {
  @apply w-full p-[12px_16px] flex justify-end items-center;
}
.modal-header.has-tabs {
  @apply justify-between;
}
.modal-header .tabs {
  @apply flex justify-start items-center gap-[8px];
}
.modal-header .tabs .tab-text {
  @apply font-semibold text-[14px] leading-[17px] text-[#ABADC5] transition-colors;
}
.modal-header .tabs .tab-text.active {
  @apply text-[#7139FF];
}
.modal-header .tabs .tab-divider {
  @apply text-[#E3E0F9] font-normal text-[14px] leading-[17px];
}
.modal-header .close-btn {
  @apply cursor-pointer;
}
.modal-body {
  @apply relative w-full p-[30px_16px_40px];
}
.modal-body .title {
  @apply w-full pb-[20px] border-b border-[#C0B8E8] text-center mb-[20px] flex flex-col justify-start items-center gap-[8px];
}
.modal-body .title strong {
  @apply font-extrabold text-[16px] leading-[19px] text-[#2B2436];
}
.modal-body .title span {
  @apply font-extrabold text-[13px] leading-[16px] text-[#6B6D95] text-center;
}
.modal-body .subscription-btn-wrapper {
  @apply w-full flex justify-center items-center mt-[10px];
}
.modal-body .subscription-btn {
  @apply px-[24px] py-[12px] bg-[#7139FF] rounded-[8px] font-semibold text-[14px] leading-[17px] text-[#fff] transition-all hover:bg-[#5d2dd8];
}
.modal-body .txt-box {
  @apply w-full max-h-[378px] overflow-y-auto;
}
.modal-body .txt-box .p-group {
  @apply w-full flex flex-col justify-start items-start gap-[16px];
}
.modal-body .txt-box .p-group p {
  @apply w-full flex flex-col justify-start items-start gap-[8px] text-[#6B6D95];
}
.modal-body .txt-box .p-group p strong {
  @apply font-bold text-[14px] leading-[17px];
}
.modal-body .txt-box .p-group p span {
  @apply font-normal text-[12px] leading-[14px];
}
.modal-body .txt-box .p-group p b {
  @apply block w-full relative pl-[18px] font-semibold text-[12px] leading-[14px] text-[#6B6D95] before:content-[''] before:absolute before:left-[8px] before:top-[5px] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#6B6D95];
}
.modal-body .txt-box .p-group .p-box {
  @apply w-full rounded-[8px] border border-[#C0B8E8] p-[16px_12px];
}
.modal-body .txt-box .p-group .p-box span {
  @apply block w-full relative pl-[18px] font-normal text-[12px] leading-[14px] text-[#6B6D95] before:content-[''] before:absolute before:left-[8px] before:top-[5px] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#6B6D95];
}
.modal-body .txt-box .box-group{
  @apply w-full flex flex-col justify-start items-center gap-[10px];
}
.modal-body .txt-box .box-group .box{
  @apply w-full border border-[#E3E0F9] p-[20px_16px] rounded-[8px] flex flex-col justify-center items-center gap-[12px];
}
.modal-body .txt-box .box-group .box p{
  @apply w-full flex justify-between items-center;
}
.modal-body .txt-box .box-group .box p strong{
  @apply font-bold text-[12px] leading-[14px] text-[#6B6D95];
}
.modal-body .txt-box .box-group .box p span{
  @apply font-normal text-[13px] leading-[16px] text-[#2B2436];
}
.modal-body .txt-box .box-group .box .noProduct{
  @apply w-full text-center font-normal text-[13px] leading-[16px] text-[#2B2436] pb-[18px];
}
.modal-body .txt-box .box-group .box .txt{
  @apply relative w-full pl-[7px] font-medium text-[13px] leading-[18px] text-[#6B6D95] before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#6B6D95];
}
.modal-body .txt-box .box-group button{
  @apply mt-[30px] w-[115px] h-[44px] rounded-[15px] bg-[#7139FF] font-bold text-[14px] leading-[17px] text-[#fff];
}
</style>
