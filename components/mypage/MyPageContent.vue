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
          <button :class="zoomClass" @click="openManageModal">구독/결제 관리</button>
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
          <button :class="zoomClass">더 보기 +</button>
        </div>
      </div>
    </div>

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
    />
  </div>
</template>

<script>
import ManageModal from '~/components/mypage/ManageModal'

export default { 
  components: {
    ManageModal
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
        status: '정기결제/구독 중'
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
      isModalAni: false
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
    }
  }
}
</script>

<style scoped>
.mypageContent{
  @apply w-full p-[32px_18px_118px];
}
.mypageContent .box-wrap{
  @apply w-full flex flex-col justify-start items-start gap-[24px] mb-[52px];
}
.mypageContent .box-group{
  @apply w-full flex flex-col justify-start items-start gap-[12px];
}
.mypageContent .box-group .box{
  @apply w-full rounded-[8px] border border-[#E3E0F9] bg-[#fff] p-[20px];
}
.mypageContent .box-group .title{
  @apply w-full flex justify-between items-center;
}
.mypageContent .box-group .title .left{
  @apply flex justify-start items-center gap-[8px];
}
.mypageContent .box-group .title p{
  @apply font-extrabold text-[16px] leading-[19px] text-[#2B2436];
}
.mypageContent .box-group .title strong{
  @apply text-[#6F75F2] font-extrabold text-[16px] leading-[19px];
}
.mypageContent .box-group .title span{
  @apply p-[4px_8px] rounded-[12px] bg-[#7139FF] font-extrabold text-[11px] leading-[13px] text-[#fff];
}
.mypageContent .box .list-group{
  @apply w-full flex flex-col justify-start items-start gap-[12px];
}
.mypageContent .box .list-group .list{
  @apply w-full flex justify-between items-center;
}
.mypageContent .box .list-group .list .left{
  @apply font-bold text-[12px] leading-[14px] text-[#6B6D95];
}
.mypageContent .box .list-group .list .right{
  @apply flex justify-end items-center gap-[12px] font-normal text-[13px] leading-[16px] text-[#2B2436];
}
.mypageContent .box-group:last-child .box .left{
  @apply font-medium;
}
.mypageContent .box-group:last-child .box .right{
  @apply font-semibold;
}
.mypageContent .box-group:last-child .box button{
  @apply bg-[#fff] border border-[#C0B8E8] text-[#2B2436];
}
.mypageContent .box button{
  @apply w-full h-[44px] rounded-[10px] bg-[#5D5D8F] mt-[25px] font-bold text-[14px] leading-[17px] text-[#fff];
}
.mypageContent .note{
  @apply w-full flex flex-col justify-start items-center gap-[8px];
}
.mypageContent .note p{
  @apply w-full flex justify-center items-center gap-[12px];
}
.mypageContent .note p strong{
  @apply font-extrabold text-[11px] leading-[13px] text-[#ABADC5];
}
.mypageContent .note p span{
  @apply font-medium text-[11px] leading-[13px] text-[#ABADC5];
}
.mypageContent .note p button{
  @apply flex justify-start items-center gap-[12px]
}
.mypageContent .note p button em{
  @apply font-medium text-[11px] leading-[13px] text-[#7139FF];
}
</style>