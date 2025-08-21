<template>
  <div class="vDataContent">
    <div class="vDataContent__top animate__animated animate__fadeInUp">
      <img width="116" src="~/assets/img/vdata/vData-complete-img.png">
      <p>
        하나씩 하나씩<br />
        <span>체험하며 방어능력</span>을 <br />
        키우세요~
      </p>
    </div>
    <div class="vDataContent__data animate__animated animate__fadeInUp animate__delay-01s">
      <div class="example animate__animated animate__fadeInUp">
        <span class="cat cat01">가족사칭</span>
        <div class="title text-truncate" :class="zoomClass">
          중앙지검입니다. 귀하의 여...
        </div>
        <div class="ex-box">
          <div class="ex-img">
            <img src="~/assets/img/main/ex-img01.png" width="60" />
          </div>
          <div class="ex-txt">
            <div class="txt text-truncate2" :class="zoomClass">
              딸의 이름으로 저장된 전화가 걸려..딸
            </div>
            <div class="date" :class="zoomClass">2025.03.11</div>
            <div class="numlike">
              <div class="num" :class="zoomClass">
                체험 <strong>230</strong>
              </div>
              <button class="like">
                <span>좋아요 <strong>2.3천개</strong></span>
                <img width="16" src="~/assets/img/main/like-icon.png" alt="좋아요" />
              </button>
            </div>
          </div>
        </div>
        <div class="ex-detail">
          <div class="line"></div>
          <div class="detail-title">
            <img width="24" src="~/assets/img/main/detail-title.png" alt="자세히보기 타이틀 아이콘" />
            <span :class="zoomClass">디지털 피싱 정보</span>
          </div>
          <div class="detail-txt">
            <div class="txt">
              <span :class="zoomClass">주요피해대상</span>
              <strong :class="zoomClass">유자녀 가정 부모</strong>
            </div>
            <div class="txt">
              <span :class="zoomClass">키워드</span>
              <p :class="zoomClass">가족 사칭, 자녀 납치, 협박, 납치상해, 금전요구</p>
            </div>
            <div class="txt">
              <span :class="zoomClass">요약</span>
              <p class="summary text-truncate3" :class="zoomClass">디지털 피싱은 사이버 범죄자가 신뢰할 수 있는 기관이나 개인을 사칭하여 개인정보, 금융정보, 계정 접근 권한 등을 탈취하는 사이버 공격 방식입니다.</p>
            </div>
          </div>
        </div>
        <div class="ex-detail user">
          <div class="detail-title">
            <img width="24" src="~/assets/img/vdata/tip-img01.png" alt="사용자 정보 아이콘" />
            <span :class="zoomClass">가상 사용자 정보</span>
          </div>
          <div class="detail-txt">
            <div class="txt">
              <span :class="zoomClass">이름</span>
              <p><strong :class="zoomClass">김철수</strong></p>
            </div>
            <div class="txt">
              <span :class="zoomClass">주민등록번호</span>
              <p><strong :class="zoomClass">123456-1234567</strong></p>
            </div>
            <div class="txt">
              <span :class="zoomClass">대출 현황</span>
              <p :class="zoomClass"><strong>5,000만원</strong> 한강저축은행</p>
            </div>
          </div>
        </div>
        <!-- ex-detail -->
      </div>
      <!-- example -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fontSizePercent() {
      return this.$store.state.font.fontSizePercent
    },
    zoomClass() {
      if (this.fontSizePercent === 130) return 'zoom-13'
      if (this.fontSizePercent === 120) return 'zoom-12'
      if (this.fontSizePercent === 110) return 'zoom-11'
      if (this.fontSizePercent === 90) return 'zoom-09'
      if (this.fontSizePercent === 80) return 'zoom-08'
      if (this.fontSizePercent === 70) return 'zoom-07'
      return ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.goLink('/woori/code/vdata/preinfo')
    }, 3000)
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.vDataContent {
  @apply w-full !min-h-[100dvh] p-[40px_20px] bg-[url(~/assets/img/vdata/vData-bg.png)] bg-cover bg-center bg-no-repeat;
}
.vDataContent__top {
  @apply w-full flex justify-start items-end gap-[12px] mb-[40px];
}
.vDataContent__top p {
  @apply leading-[28px] font-[JalnanGothic] text-[20px] text-[#2B2436];
}
.vDataContent__top p span {
  @apply font-[JalnanGothic] text-[#7139FF];
}
.example {
  @apply relative w-full rounded-[16px] border border-[#dee1e6] bg-[#fff] p-[12px_12px_20px_8px];
}
.example .title {
  @apply w-[calc(100%-67px)] text-[#2B2436] text-[18px] font-extrabold leading-[20px] mb-[10px] px-[12px];
}
.example .ex-box {
  @apply w-full flex justify-start items-start gap-[12px] px-[12px];
}
.example .ex-box .ex-img {
  @apply min-w-[60px];
}
.example .ex-box .ex-txt .txt {
  @apply font-medium text-[13px] leading-[16px] text-[#9597BC] mb-[4px];
}
.example .ex-box .ex-txt .date {
  @apply font-medium text-[10px] leading-[12px] text-[#9597BC] mb-[7px];
}
.example .ex-box .ex-txt .numlike {
  @apply flex justify-start items-center gap-[16px];
}
.example .ex-box .ex-txt .numlike .num {
  @apply font-medium text-[10px] leading-[12px] text-[#9597BC];
}
.example .ex-box .ex-txt .numlike .like {
  @apply rounded-[16px] bg-[#F9F6FF] p-[6px_8px_5px] flex justify-center items-start gap-[5px];
}
.example .ex-box .ex-txt .numlike .like span {
  @apply text-[#9597BC] text-[10px] font-medium leading-[12px];
}
.ex-detail{
  @apply w-full mb-[35px] last:mb-0;
}
.ex-detail .line {
  @apply w-[calc(100%-40px)] h-[1px] bg-[#6B6D95] m-[16px_auto];
}
.ex-detail .detail-title {
  @apply w-full flex justify-start items-end gap-[8px] px-[8px] mb-[16px];
}
.ex-detail .detail-title span {
  @apply font-[JalnanGothic] text-[16px] font-normal leading-[20px] tracking-[0.48px] text-[#2B2436];
}
.ex-detail .detail-txt {
  @apply flex flex-col justify-start items-start gap-[8px];
}
.ex-detail .detail-txt .txt {
  @apply flex justify-start items-start last:flex-col last:gap-[8px] first:items-center;
}
.ex-detail .detail-txt .txt span {
  @apply min-w-[112px] pl-[20px] relative text-[#7139FF] block text-[14px] font-extrabold leading-[16px] text-left before:content-[''] before:absolute before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#7139FF] before:top-[6px] before:left-[8px];
}
.ex-detail .detail-txt .txt strong {
  @apply text-[#2B2436] text-[16px] font-extrabold leading-[20px];
}
.ex-detail .detail-txt .txt p {
  @apply text-[#6B6D95] text-[14px] leading-[17px] font-medium;
}
.ex-detail .detail-txt .txt p.summary {
  @apply pl-[22px];
}
.ex-detail.user .detail-txt .txt{
  @apply last:flex-row last:gap-0;
}
.ex-detail.user .detail-txt .txt p{
  @apply font-semibold text-[14px] leading-[17px] text-[#2B2436];
}
</style>