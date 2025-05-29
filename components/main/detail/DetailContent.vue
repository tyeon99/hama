<template>
  <div class="detailContent">
    <div class="detailContent__box animate__animated animate__fadeInUp">
      <span class="cat cat01">가족사칭</span>
      <!-- 상세정보 -->
      <div class="title-box">
        <div class="title-box_title">
          <div class="title" :class="zoomClass">엄마 나 납치됐어!!!</div>
          <div class="info">
            <div class="date" :class="zoomClass">2025.03.11</div>
            <div class="num" :class="zoomClass">체험 <strong>230</strong></div>
            <button class="like">
              <span>좋아요 <strong>2.3천개</strong></span>
              <img width="16" src="~/assets/img/main/like-icon.png" alt="좋아요" />
            </button>
          </div>
        </div>
        <div class="title-box_img">
          <img src="~/assets/img/main/detail/detailImg.png" />
        </div>
        <div class="title-box_detail">
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
              <p class="summary text-truncate3" :class="zoomClass">
                디지털 피싱은 사이버 범죄자가 신뢰할 수 있는 기관이나 개인을 사칭하여 개인정보, 금융정보, 계정 접근 권한 등을 탈취하는 사이버 공격 방식입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- title-box -->

      <!-- 관련 뉴스 -->
      <div class="related-box news">
        <div class="title">
          <img width="24" src="~/assets/img/main/detail/detail-news.png" alt="관련 뉴스">
          <span :class="zoomClass">관련 뉴스</span>
        </div>
        <div class="list">
          <button
            v-for="(news, index) in newsList"
            :key="'news-' + index"
            class="list-box"
          >
            <div class="list-box_title text-truncate2" :class="zoomClass">{{ news.title }}</div>
            <div class="list-box_info">
              <span :class="zoomClass">{{ news.platform }}</span>
              <em :class="zoomClass">{{ news.date }}</em>
            </div>
          </button>
        </div>
      </div>
      <!-- related-box -->

      <!-- 관련 동영상 -->
      <div class="related-box video">
        <div class="title">
          <img width="24" src="~/assets/img/main/detail/detail-video.png" alt="관련 동영상">
          <span :class="zoomClass">관련 동영상</span>
        </div>
        <div class="list">
          <button
            v-for="(video, index) in videoList"
            :key="'video-' + index"
            class="list-box"
          >
            <div class="list-box_title text-truncate2" :class="zoomClass">{{ video.title }}</div>
            <div class="list-box_source" :class="zoomClass">{{ video.source }}</div>
            <div class="list-box_info">
              <span :class="zoomClass">{{ video.platform }}</span>
              <em :class="zoomClass">{{ video.date }}</em>
            </div>
          </button>
        </div>
      </div>
      <!-- related-box -->
    </div>
    <!-- detailContent__box -->
    <div class="detailContent__btn  animate__animated animate__fadeInUp animate__delay-03s">
      <button class="fill" @click="goLink('/vdata')">체험하러 가기</button>
      <button @click="goLink('/main')">AI피싱 다른 사례 보기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          title: '라바웨이브, 충남대 총학생회와 맞손…"디지털 성범죄 피해 사전예방"',
          platform: 'news1',
          date: '2025.04.04'
        },
        {
          title: '퍼블소프트, AI 기반 몸캠피싱 방지 솔루션 ',
          platform: '스포츠한국',
          date: '2025.04.04'
        },
        {
          title: '외국인 관광객, 알고 보니 보이스피싱 조직원... 무더기 검거',
          platform: 'news1',
          date: '2025.04.04'
        }
      ],
      videoList: [
        {
          title: '스마트폰 피싱 문자로부터 개인 정보 보호하는 방법💥(삼성 갤럭시 업데이트)',
          source: '정말쉬운디지털',
          platform: 'news1',
          date: '2025.04.04'
        },
        {
          title: '[라떼TV] 개인정보 빼내는 수법 ',
          source: '케이블티비 및 디지털방송 인터넷정보공유카페 ',
          platform: '네이버카페',
          date: '2025.04.04'
        },
        {
          title: '[인피니그루] 보이스피싱 등, 디지털 범죄 민간 공동 예방 및 대응 플랫폼 - 서울핀테크랩',
          source: '서민금융지원',
          platform: 'Youtube',
          date: '2025.04.04'
        }
      ]
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
.detailContent {
  @apply w-full p-[32px_20px_90px] bg-[#F7F5FF];
}
.detailContent__box {
  @apply relative w-full p-[40px_12px] border border-[#DEE1E6] bg-[#fff] rounded-[16px] flex flex-col justify-start items-start gap-[40px] mb-[24px];
}
.detailContent__box .title-box {
  @apply w-full flex flex-col justify-start items-start gap-[24px];
}
.title-box_title {
  @apply w-full flex flex-col justify-start items-start gap-[8px] px-[8px];
}
.title-box_title .title {
  @apply w-full font-extrabold text-[20px] leading-[24px] text-[#2B2436];
}
.title-box_title .info {
  @apply w-full flex justify-start items-center gap-[12px];
}
.title-box_title .info .date {
  @apply font-medium text-[10px] leading-[12px] text-[#9597BC];
}
.title-box_title .info .num {
  @apply font-medium text-[10px] leading-[12px] text-[#9597BC];
}
.title-box_title .info .like {
  @apply rounded-[16px] bg-[#F9F6FF] p-[6px_8px_5px] flex justify-center items-start gap-[5px];
}
.title-box_title .info .like span {
  @apply text-[#9597BC] text-[10px] font-medium leading-[12px];
}
.title-box_detail{
  @apply w-full px-[8px];
}
.title-box_detail .detail-title {
  @apply w-full flex justify-start items-end gap-[8px] px-[8px] mb-[16px];
}
.title-box_detail .detail-title span {
  @apply font-[JalnanGothic] text-[16px] font-normal leading-[20px] tracking-[0.48px] text-[#2B2436];
}
.title-box_detail .detail-txt {
  @apply flex flex-col justify-start items-start gap-[8px];
}
.title-box_detail .detail-txt .txt {
  @apply flex justify-start items-start last:flex-col last:gap-[8px] first:items-center;
}
.title-box_detail .detail-txt .txt span {
  @apply min-w-[112px] pl-[20px] relative text-[#7139FF] block text-[14px] font-extrabold leading-[16px] text-left before:content-[''] before:absolute before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#7139FF] before:top-[6px] before:left-[8px];
}
.title-box_detail .detail-txt .txt strong {
  @apply text-[#2B2436] text-[16px] font-extrabold leading-[20px];
}
.title-box_detail .detail-txt .txt p {
  @apply text-[#6B6D95] text-[14px] leading-[17px] font-medium;
}
.title-box_detail .detail-txt .txt p.summary {
  @apply pl-[22px];
}
.related-box {
  @apply w-full;
}
.related-box .title {
  @apply w-full px-[4px] flex justify-start items-end gap-[8px] mb-[16px];
}
.related-box .title span{
  @apply font-[JalnanGothic] text-[16px] font-normal leading-[20px] tracking-[0.48px] text-[#2B2436];
}
.related-box .list{
  @apply w-full flex flex-col justify-start items-center gap-[12px];
}
.related-box .list .list-box{
  @apply w-full p-[12px] rounded-[12px] text-left;
}
.related-box .list .list-box .list-box_title{
  @apply w-full font-bold text-[16px] leading-[20px] mb-[8px];
}
.related-box.news .list .list-box{
  @apply bg-[#F5FAFF];
}
.related-box.news .list .list-box .list-box_title{
  @apply text-[#2687F5];
}
.related-box.video .list .list-box{
  @apply bg-[#F9F5FF];
}
.related-box.video .list .list-box .list-box_title{
  @apply text-[#9B44FF];
}
.related-box .list .list-box .list-box_info{
  @apply w-full flex justify-start items-center gap-[16px];
}
.related-box .list .list-box .list-box_info span{
  @apply font-bold text-[12px] leading-[14px] text-[#9597BC];
}
.related-box .list .list-box .list-box_info em{
  @apply font-medium text-[12px] leading-[14px] text-[#9597BC];
}
.related-box .list .list-box .list-box_source{
  @apply font-bold text-[12px] leading-[14px] text-[#9597BC] mb-[4px];
}
.detailContent__btn{
  @apply w-full px-[4px] flex flex-col justify-start items-center gap-[16px];
}
.detailContent__btn button{
  @apply w-full h-[52px] pt-[4px] bg-[#fff] rounded-[48px] border-[2px] border-[#AFB2EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] font-normal text-[16px] leading-[20px] tracking-[3%] text-[#7139FF];
}
.detailContent__btn button.fill{
  @apply border-none bg-[#6B4EFF] text-[#fff];
}
</style>