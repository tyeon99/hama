<template>
  <div class="mainContent">
    <div class="mainContent__box animate__animated animate__fadeInUp">
      <div class="top">
        <div class="title">이런사례들이 있어요</div>
        <div class="items">
          <strong>{{ examples.length }}</strong> items
        </div>
      </div>
      <div class="bottom">
        <div
          v-for="(item, idx) in examples"
          :key="idx"
          class="example animate__animated animate__fadeInUp"
          :style="{ animationDelay: `${(idx + 1) * 0.1}s` }"
          @click="openDetail(idx)"
        >
          <span :class="['cat', item.catClass]">{{ item.cat }}</span>
          <div class="title text-truncate" :class="zoomClass">
            {{ item.title }}
          </div>
          <div class="ex-box">
            <div class="ex-img">
              <img
                :src="require(`~/assets/img/main/ex-img0${item.imgNum}.png`)"
                width="60"
              />
            </div>
            <div class="ex-txt">
              <div class="txt text-truncate2" :class="zoomClass">
                {{ item.text }}
              </div>
              <div class="date" :class="zoomClass">{{ item.date }}</div>
              <div class="numlike">
                <div class="num" :class="zoomClass">
                  체험 <strong>{{ item.views }}</strong>
                </div>
                <button class="like" @click.stop>
                  <span
                    >좋아요 <strong>{{ formatLikes(item.likes) }}</strong></span
                  >
                  <img
                    width="16"
                    src="~/assets/img/main/like-icon.png"
                    alt="좋아요"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="more">
            <svg
              :class="{ rotated: item.isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 12C2 6.47784 6.47673 2 12 2C17.5222 2 22 6.47779 22 12C22 17.5222 17.5222 22 12 22C6.47673 22 2 17.5222 2 12ZM12 3.5C7.30527 3.5 3.5 7.30616 3.5 12C3.5 16.6938 7.30527 20.5 12 20.5C16.6938 20.5 20.5 16.6938 20.5 12C20.5 7.30621 16.6938 3.5 12 3.5Z"
                fill="#6B6D95"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.53121 9.49696L11.9999 12.9807L15.4686 9.49696L16.5316 10.5553L11.9999 15.1066L7.46826 10.5553L8.53121 9.49696Z"
                fill="#6B6D95"
              />
            </svg>
          </div>
          <div
            ref="detailBox"
            class="ex-detail"
            :style="{ maxHeight: item.detailHeight }"
          >
            <div class="line"></div>
            <div class="detail-title">
              <img
                width="24"
                src="~/assets/img/main/detail-title.png"
                alt="자세히보기 타이틀 아이콘"
              />
              <span :class="zoomClass">디지털 피싱 정보</span>
            </div>
            <div class="detail-txt">
              <div class="txt">
                <span :class="zoomClass">주요피해대상</span>
                <strong :class="zoomClass">{{ item.target }}</strong>
              </div>
              <div class="txt">
                <span :class="zoomClass">키워드</span>
                <p :class="zoomClass">{{ item.keywords }}</p>
              </div>
              <div class="txt">
                <span :class="zoomClass">요약</span>
                <p class="summary text-truncate3" :class="zoomClass">{{ item.summary }}</p>
              </div>
            </div>
            <div class="detail-btn">
              <button class="fill" @click="goLink('/vdata')">체험 하러 가기</button>
              <button @click="goLink('/main/detail')">자세히 보러가기</button>
            </div>
          </div>
          <!-- ex-detail -->
        </div>
        <!-- example -->
      </div>
      <!-- bottom -->
    </div>
    <!-- mainContent__box -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      examples: [
        {
          cat: '자녀납치협박',
          catClass: 'cat01',
          title: '"아빠, 나 사채업자에게 납치됐어…"',
          imgNum: 1,
          text: '사채업자 사칭, 자녀 납치를 가장한 협박형 보이스피싱',
          date: '2025.03.11',
          views: 230,
          likes: '2300',
          target: '유자녀 가정 부모',
          keywords: '가족 사칭, 자녀 납치, 협박, 납치상해, 금전요구',
          summary: '딸을 사칭한 전화로 납치 상황을 연출하고, 사채업자를 사칭한 공범이 신상정보와 폭력적 협박으로 현실감을 높입니다. 구체적인 금액 요구와 시간 압박으로 피해자의 공포심을 극대화해 송금을 유도하는 수법입니다.',
          isOpen: false,
          detailHeight: '0px'
        },
        {
          cat: '기관사칭',
          catClass: 'cat02',
          title: '중앙지검입니다. 귀하의 여...중앙지검입니다. 귀하의 여...',
          imgNum: 2,
          text: '딸의 이름으로 저장된 전화가 걸려..딸의 이름으로 저장된 전화가 걸려..',
          date: '2025.03.12',
          views: 150,
          likes: '120',
          target: '중장년층',
          keywords: '기관 사칭, 스미싱, 납부 유도',
          summary: '공공기관을 사칭하여 납부 안내를 보내며 개인정보를 탈취하는 수법입니다.',
          isOpen: false,
          detailHeight: '0px'
        },
        {
          cat: '카드사기',
          catClass: 'cat03',
          title: '나 폰 고장나서 번호 바꿨어~',
          imgNum: 3,
          text: '지인이라고 하며 메신저로 돈을 빌려달라는 요청이 옴...',
          date: '2025.03.14',
          views: 360,
          likes: '3100',
          target: '전 연령층',
          keywords: '지인 사칭, 메신저 피싱, 금전 요구',
          summary: '실제 지인을 사칭하여 SNS, 메신저로 금전을 요구하는 피싱 수법입니다.',
          isOpen: false,
          detailHeight: '0px'
        },
        {
          cat: '리딩방',
          catClass: 'cat04',
          title: '배송불가 안내드립니다. 링크 확인 부탁드려요',
          imgNum: 4,
          text: '택배사 사칭 문자에 속아 앱을 설치했더니...',
          date: '2025.03.15',
          views: 420,
          likes: '380',
          target: '스마트폰 사용자',
          keywords: '택배 사칭, 스미싱, 악성 앱',
          summary: '택배 회사를 사칭한 문자로 악성 앱 설치를 유도하여 개인정보를 탈취하는 수법입니다.',
          isOpen: false,
          detailHeight: '0px'
        }
      ],
      isOpen: false,
      detailHeight: '0px',
      // fontSizePercent: 100  // 기본값
    }
  },
  computed: {
    detailStyle () {
      return {
        maxHeight: this.detailHeight,
        overflow: 'hidden',
        transition: 'max-height 0.3s ease'
      }
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
  beforeMount () {
    this.onEventBus()
  },
  destroyed () {
    this.offEventBus()
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    formatLikes (num) {
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + '천개';
      }
      return num + '개';
    },
    openDetail (idx) {
      const item = this.examples[idx]
      item.isOpen = !item.isOpen

      this.$nextTick(() => {
        const el = this.$refs.detailBox[idx]
        if (item.isOpen) {
          item.detailHeight = el.scrollHeight + 'px'
        } else {
          item.detailHeight = '0px'
        }
      })
    },
    onEventBus () {
      this.$eventBus.$on('fontSizeChange', () => {

        this.$nextTick(() => {
          // 열린 디테일 박스들만 다시 높이 계산
          this.examples.forEach((item, idx) => {
            if (item.isOpen) {
              const el = this.$refs.detailBox[idx]
              if (el) {
                item.detailHeight = el.scrollHeight + 'px'
              }
            }
          })
        })
      })
    },
    offEventBus () {
      this.$eventBus.$off('fontSizeChange')
    }
  }
}
</script>

<style scoped>
.mainContent {
  @apply w-full p-[36px_20px_109px] bg-[#F7F5FF];
}
.mainContent__box {
  @apply w-full rounded-[16px];
}
.mainContent__box .top {
  @apply w-full rounded-[16px_16px_0_0] bg-[#7139FF] p-[18px_15px_12px] flex justify-between;
}
.mainContent__box .top .title {
  @apply font-[JalnanGothic] text-[#fff] leading-[20px] text-[18px] font-normal tracking-[0.36px];
}
.mainContent__box .top .items {
  @apply font-medium text-[14px] leading-[16px] text-[#fff];
}
.mainContent__box .bottom {
  @apply w-full bg-[#fff] rounded-[0px_0px_16px_16px] border border-[#CED0F8] p-[20px_12px] border-t-0 flex flex-col justify-start items-center gap-[20px];
}
.mainContent__box .bottom .example {
  @apply relative w-full rounded-[16px] border border-[#dee1e6] bg-[#fff] p-[12px_8px_8px] cursor-pointer;
}
.mainContent__box .bottom .example .title {
  @apply w-[calc(100%-67px)] text-[#2B2436] text-[18px] font-extrabold leading-[20px] mb-[10px] px-[12px];
}
.mainContent__box .bottom .example .ex-box {
  @apply w-full flex justify-start items-start gap-[12px] px-[12px];
}
.mainContent__box .bottom .example .ex-box .ex-img {
  @apply min-w-[60px];
}
.mainContent__box .bottom .example .ex-box .ex-txt .txt {
  @apply font-medium text-[13px] leading-[16px] text-[#9597BC] mb-[4px];
}
.mainContent__box .bottom .example .ex-box .ex-txt .date {
  @apply font-medium text-[10px] leading-[12px] text-[#9597BC] mb-[7px];
}
.mainContent__box .bottom .example .ex-box .ex-txt .numlike {
  @apply flex justify-start items-center gap-[16px];
}
.mainContent__box .bottom .example .ex-box .ex-txt .numlike .num {
  @apply font-medium text-[10px] leading-[12px] text-[#9597BC];
}
.mainContent__box .bottom .example .ex-box .ex-txt .numlike .like {
  @apply rounded-[16px] bg-[#F9F6FF] p-[6px_8px_5px] flex justify-center items-start gap-[5px];
}
.mainContent__box .bottom .example .ex-box .ex-txt .numlike .like span {
  @apply text-[#9597BC] text-[10px] font-medium leading-[12px];
}
.more {
  @apply absolute bottom-[8px] right-[8px];
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
  @apply flex flex-col justify-start items-start gap-[8px] mb-[18px];
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
.ex-detail .detail-btn {
  @apply flex flex-col justify-center items-center gap-[16px] pb-[17px];
}
.ex-detail .detail-btn button {
  @apply w-[180px] h-[42px] pt-[3px] rounded-[48px] font-[JalnanGothic] text-[#7139FF] text-[14px] font-normal leading-[16px] tracking-[0.42px] border border-[#7139FF] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)];
}
.ex-detail .detail-btn button.fill {
  @apply bg-[#6B4EFF] text-[#fff] border-none;
}
</style>