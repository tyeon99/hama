<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeMenuOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInRight': isOffcanvasAni, 'animate__fadeOutRight': !isOffcanvasAni }" @click.stop
    >
      <div class="offcanvas-close">
        <button @click="closeMenuOffcanvas">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41425 7.00025L13.7072 1.70725C14.0982 1.31625 14.0982 0.68425 13.7072 0.29325C13.3162 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L5.58625 7.00025L0.29325 12.2933C-0.09775 12.6842 -0.09775 13.3162 0.29325 13.7072C0.48825 13.9022 0.74425 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41425L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0002 14.0002C13.2562 14.0002 13.5122 13.9022 13.7072 13.7072C14.0982 13.3162 14.0982 12.6842 13.7072 12.2933L8.41425 7.00025Z" fill="black"/>
          </svg>
        </button>
      </div>
      <div class="offcanvas-header">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="97" height="97" viewBox="0 0 97 97" fill="none">
            <path d="M50 34.0858C50 41.4758 44.26 45.7058 37 46.0858C36.67 46.0858 36.34 46.0858 36 46.0858C34.2908 46.0908 32.5955 45.7788 31 45.1658H30.93C27.119 43.6657 22.881 43.6657 19.07 45.1658H19C17.4045 45.7788 15.7092 46.0908 14 46.0858C13.66 46.0858 13.33 46.0858 13 46.0858C5.74 45.7358 0 41.5058 0 34.0858C0 28.9058 2.81 26.3858 7 23.9658V17.5858C6.99979 14.2265 7.96705 10.9381 9.78616 8.11388C11.6053 5.28965 14.1992 3.04907 17.258 1.65998C20.3167 0.270899 23.7108 -0.207909 27.0344 0.280802C30.358 0.769513 33.4706 2.20506 36 4.41583C36.3 4.67583 36.58 4.93583 36.86 5.21583C37.9918 6.34877 38.9641 7.63054 39.75 9.02583C41.2278 11.6365 42.0031 14.5859 42 17.5858V23.4358C46.73 25.6858 50 28.5058 50 34.0858Z" fill="#B891FF"/>
            <path d="M13.91 3.66578C11.9827 5.12507 10.3817 6.97124 9.21002 9.08578C8.37376 9.03084 7.56945 8.74347 6.88771 8.25603C6.20598 7.76859 5.67391 7.10046 5.35145 6.32691C5.02898 5.55336 4.92895 4.70514 5.0626 3.87779C5.19626 3.05045 5.5583 2.27687 6.10793 1.64421C6.65756 1.01155 7.37295 0.544942 8.17349 0.296963C8.97403 0.0489852 9.82792 0.0294883 10.6389 0.240669C11.45 0.45185 12.1859 0.885317 12.7638 1.49223C13.3418 2.09915 13.7387 2.8554 13.91 3.67578V3.66578Z" fill="#8F66FF"/>
            <path d="M14.5 17.0858C15.8807 17.0858 17 15.9665 17 14.5858C17 13.2051 15.8807 12.0858 14.5 12.0858C13.1193 12.0858 12 13.2051 12 14.5858C12 15.9665 13.1193 17.0858 14.5 17.0858Z" fill="#5536AA"/>
            <path d="M35.5 17.0858C36.8807 17.0858 38 15.9665 38 14.5858C38 13.2051 36.8807 12.0858 35.5 12.0858C34.1193 12.0858 33 13.2051 33 14.5858C33 15.9665 34.1193 17.0858 35.5 17.0858Z" fill="#5536AA"/>
            <path d="M45 4.5858C44.9985 5.23894 44.8551 5.88394 44.5798 6.47623C44.3045 7.06851 43.9039 7.59393 43.4056 8.01616C42.9073 8.43838 42.3232 8.74734 41.6938 8.92167C41.0643 9.09599 40.4045 9.13152 39.76 9.0258C38.9741 7.63051 38.0018 6.34873 36.87 5.2158C36.59 4.9358 36.31 4.6758 36.01 4.4158C36.0326 3.22233 36.5283 2.08669 37.3881 1.25872C38.248 0.430746 39.4015 -0.0217397 40.595 0.000803715C41.7885 0.0233471 42.9241 0.519073 43.7521 1.37893C44.5801 2.23878 45.0326 3.39233 45.01 4.5858H45Z" fill="#8F66FF"/>
            <path d="M18 45.0858V49.0058C18 49.271 17.8946 49.5254 17.7071 49.7129C17.5196 49.9005 17.2652 50.0058 17 50.0058H13C12.7348 50.0058 12.4804 49.9005 12.2929 49.7129C12.1054 49.5254 12 49.271 12 49.0058V46.0058C12.33 46.0058 12.66 46.0058 13 46.0058C14.7092 46.0107 16.4045 45.6988 18 45.0858Z" fill="#8F66FF"/>
            <path d="M38 46.0858V49.0858C38 49.351 37.8946 49.6054 37.7071 49.7929C37.5196 49.9805 37.2652 50.0858 37 50.0858H33C32.7348 50.0858 32.4804 49.9805 32.2929 49.7929C32.1054 49.6054 32 49.351 32 49.0858V45.1658C33.5955 45.7788 35.2908 46.0908 37 46.0858C37.34 46.0858 37.67 46.0858 38 46.0858Z" fill="#8F66FF"/>
            <path d="M11.5 37.0858C12.8807 37.0858 14 35.9665 14 34.5858C14 33.2051 12.8807 32.0858 11.5 32.0858C10.1193 32.0858 9 33.2051 9 34.5858C9 35.9665 10.1193 37.0858 11.5 37.0858Z" fill="white"/>
            <path d="M38.5 37.0858C39.8807 37.0858 41 35.9665 41 34.5858C41 33.2051 39.8807 32.0858 38.5 32.0858C37.1193 32.0858 36 33.2051 36 34.5858C36 35.9665 37.1193 37.0858 38.5 37.0858Z" fill="white"/>
            <path d="M75.1229 74.8058H89.0909V76.1498H91.2029V74.8058H96.7229V89.4938H91.2029V85.7498H89.0909V87.0938H79.2029C76.5149 87.0938 75.1229 85.7018 75.1229 83.0138V74.8058ZM75.1229 88.2938H80.6429V90.4538C80.6429 91.3178 81.2189 91.8938 82.0829 91.8938H96.9629V96.6938H80.4029C77.2349 96.6938 75.1229 94.5818 75.1229 91.4138V88.2938ZM80.6429 82.0538C80.6429 82.4378 80.9789 82.7738 81.3629 82.7738H83.5709V79.1258H80.6429V82.0538ZM89.0909 80.2298V81.6698H91.2029V80.2298H89.0909Z" fill="url(#paint0_linear_2003_415)"/>
            <path d="M57.122 92.1338H63.89V96.6938H55.442C52.274 96.6938 50.162 94.5818 50.162 91.4138V74.8058H63.65V79.3658H55.682V83.3018H61.97V87.7178H55.682V90.6938C55.682 91.5578 56.258 92.1338 57.122 92.1338ZM66.242 96.6938V87.7178H63.122V83.3018H66.242V74.8058H71.762V96.6938H66.242Z" fill="url(#paint1_linear_2003_415)"/>
            <path d="M25.201 74.8058H38.689V96.6938H30.4811C27.3131 96.6938 25.201 94.5818 25.201 91.4138V74.8058ZM40.3211 96.6938V74.8058H45.841V82.7498H48.0011V87.5498H45.841V96.6938H40.3211ZM30.7211 90.4538C30.7211 91.3178 31.297 91.8938 32.161 91.8938H33.169V79.6058H30.7211V90.4538Z" fill="url(#paint2_linear_2003_415)"/>
            <path d="M0.24 90.3338V87.6458C0.24 83.6858 2.856 81.0458 7.128 81.0458C11.4 81.0458 14.016 83.6858 14.016 87.6458V90.3338C14.016 94.2938 11.4 96.9338 7.128 96.9338C2.856 96.9338 0.24 94.2938 0.24 90.3338ZM15.36 96.6938V74.8058H20.88V83.2298H23.04V88.0298H20.88V96.6938H15.36ZM0 75.7658H4.368V74.0858H9.888V75.7658H14.256V80.5658H0V75.7658ZM7.128 92.6138C7.848 92.6138 8.496 92.1338 8.496 91.2938V86.6858C8.496 85.8458 7.848 85.3658 7.128 85.3658C6.408 85.3658 5.76 85.8458 5.76 86.6858V91.2938C5.76 92.1338 6.408 92.6138 7.128 92.6138Z" fill="url(#paint3_linear_2003_415)"/>
            <defs>
              <linearGradient id="paint0_linear_2003_415" x1="4.98193" y1="75.5498" x2="97.9819" y2="101.55" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8539FF"/>
                <stop offset="1" stop-color="#D51BFF"/>
              </linearGradient>
              <linearGradient id="paint1_linear_2003_415" x1="4.98193" y1="75.5498" x2="97.9819" y2="101.55" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8539FF"/>
                <stop offset="1" stop-color="#D51BFF"/>
              </linearGradient>
              <linearGradient id="paint2_linear_2003_415" x1="4.98193" y1="75.5498" x2="97.9819" y2="101.55" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8539FF"/>
                <stop offset="1" stop-color="#D51BFF"/>
              </linearGradient>
              <linearGradient id="paint3_linear_2003_415" x1="4.98193" y1="75.5498" x2="97.9819" y2="101.55" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8539FF"/>
                <stop offset="1" stop-color="#D51BFF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="line"></div>
      </div>
      <div class="offcanvas-body">
        <div class="menu-group">
          <button
            v-for="(item, idx) in menuItems"
            :key="idx"
            class="animate__animated animate__fadeInRight"
            :style="{ animationDelay: `${idx * 0.1}s` }"
            @click="idx === 4 ? openPreparingModal() : goLink(item.link)"
          >
            <span>{{ item.label }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M12.328 6.46731C12.0338 6.17572 11.5589 6.17784 11.2673 6.47204C10.9757 6.76624 10.9778 7.24111 11.272 7.53269L12.6824 8.93054C13.2573 9.50033 13.6427 9.88386 13.9018 10.2065C13.9137 10.2213 13.9251 10.2358 13.9362 10.25L7 10.25C6.58579 10.25 6.25 10.5858 6.25 11C6.25 11.4142 6.58579 11.75 7 11.75L13.9362 11.75C13.9251 11.7642 13.9137 11.7787 13.9018 11.7935C13.6427 12.1161 13.2573 12.4997 12.6824 13.0695L11.272 14.4673C10.9778 14.7589 10.9757 15.2338 11.2673 15.528C11.5589 15.8222 12.0338 15.8243 12.328 15.5327L13.7691 14.1043C14.3053 13.573 14.7525 13.1298 15.0713 12.7328C15.4057 12.3163 15.6601 11.8787 15.7281 11.3455C15.7427 11.2308 15.75 11.1154 15.75 11C15.75 10.8846 15.7427 10.7692 15.7281 10.6545C15.6601 10.1213 15.4057 9.68367 15.0713 9.26724C14.7525 8.87023 14.3053 8.42705 13.7691 7.89568L12.328 6.46731Z" fill="#2B2436"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM1.75 11C1.75 5.89137 5.89137 1.75 11 1.75C16.1086 1.75 20.25 5.89137 20.25 11C20.25 16.1086 16.1086 20.25 11 20.25C5.89137 20.25 1.75 16.1086 1.75 11Z" fill="#2B2436"/>
            </svg>
          </button>
        </div>
      </div>
      <!-- <div class="offcanvas-footer">
        <button @click="goLink('/main')">체험을 시작하세요</button>
      </div> -->
    </div>
    <PreparingModal
      v-if="isPreparingModalOpen"
      :isModalAni="isModalAni"
      @close-preparingModal="closePreparingModal"
    />
  </div>
</template>

<script>
import PreparingModal from '~/components/common/PreparingModal'

export default {
  components: {
    PreparingModal
  },
  props: {
    isOffcanvasAni: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuItems: [
        { label: 'AI 피싱 체험', link: '/main' },
        { label: '서비스 소개', link: '/guide/intro' },
        { label: '오프라인 교육안내', link: '/guide/education' },
        { label: '협력 파트너', link: '/guide/partner' },
        { label: '안드로이드 앱 다운로드', link: '/guide/download' },
        { label: 'Contact Us', link: '/guide/inquiry' },
        { label: '약관 및 정책', link: '/guide/terms' }
      ],
      isModalAni: false,
      isPreparingModalOpen: false
    }
  },
  methods: {
    closeMenuOffcanvas() {
      this.$emit('close-menuOffcanvas')
    },
    goLink(path) {
      this.closeMenuOffcanvas()
      this.$router.push(path)
    },
    openPreparingModal () {
      this.isModalAni = true
      this.isPreparingModalOpen = true
    },
    closePreparingModal () {
      this.isModalAni = false
      setTimeout(() => {
        this.isPreparingModalOpen = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-end items-center z-[999] pl-[55px];
  overscroll-behavior: contain; /* or none */
  touch-action: none; /* 터치로 인한 브라우저 액션 방지 */
}
.offcanvas-content{
  @apply w-[320px] h-full bg-[#fff] p-[28px_12px] overflow-y-auto;
}
.offcanvas-close{
  @apply pl-[12px] mb-[24px];
}
.offcanvas-header{
  @apply pl-[12px] mb-[36px];
}
.offcanvas-header .logo{
  @apply mb-[28px];
}
.offcanvas-header .line{
  @apply w-[140px] h-[3px] bg-[#2c2c2c];
}
.offcanvas-body{
  @apply w-full pl-[12px];
}
.offcanvas-body .menu-group{
  @apply flex flex-col justify-start items-start gap-[24px];
}
.offcanvas-body .menu-group button{
  @apply w-full flex justify-start items-center gap-[16px];
}
.offcanvas-body .menu-group button span{
  @apply text-[#2c2c2c] font-extrabold text-[20px] leading-[24px];
}
.offcanvas-footer{
  @apply absolute bottom-[10%] left-[50%] translate-x-[-50%];
}
.offcanvas-footer button{
  @apply w-[296px] h-[48px] border-[2px] border-[#7139FF] bg-[#fff] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] text-[#7139FF] text-[16px] font-extrabold leading-[20px];
}
</style>