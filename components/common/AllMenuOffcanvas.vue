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
          <img width="140" src="~/assets/img/common/menu-logo.png" alt="하마터면">
        </div>
        <div class="line"></div>
      </div>
      <div class="offcanvas-body">
        <div class="menu-group">
          <div
            v-for="(groups, gidx) in menuGroups"
            :key="gidx"
            class="menu-box"
          >
            <button
              v-for="(item, idx) in groups"
              :key="idx"
              class="animate__animated animate__fadeInRight"
              :style="{ animationDelay: getAnimationDelay(gidx, idx) }"
              @click="menuClick(item)"
            >
              <span>{{ item.label }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M12.328 6.46731C12.0338 6.17572 11.5589 6.17784 11.2673 6.47204C10.9757 6.76624 10.9778 7.24111 11.272 7.53269L12.6824 8.93054C13.2573 9.50033 13.6427 9.88386 13.9018 10.2065C13.9137 10.2213 13.9251 10.2358 13.9362 10.25L7 10.25C6.58579 10.25 6.25 10.5858 6.25 11C6.25 11.4142 6.58579 11.75 7 11.75L13.9362 11.75C13.9251 11.7642 13.9137 11.7787 13.9018 11.7935C13.6427 12.1161 13.2573 12.4997 12.6824 13.0695L11.272 14.4673C10.9778 14.7589 10.9757 15.2338 11.2673 15.528C11.5589 15.8222 12.0338 15.8243 12.328 15.5327L13.7691 14.1043C14.3053 13.573 14.7525 13.1298 15.0713 12.7328C15.4057 12.3163 15.6601 11.8787 15.7281 11.3455C15.7427 11.2308 15.75 11.1154 15.75 11C15.75 10.8846 15.7427 10.7692 15.7281 10.6545C15.6601 10.1213 15.4057 9.68367 15.0713 9.26724C14.7525 8.87023 14.3053 8.42705 13.7691 7.89568L12.328 6.46731Z" fill="#2B2436"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM1.75 11C1.75 5.89137 5.89137 1.75 11 1.75C16.1086 1.75 20.25 5.89137 20.25 11C20.25 16.1086 16.1086 20.25 11 20.25C5.89137 20.25 1.75 16.1086 1.75 11Z" fill="#2B2436"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="offcanvas-footer">
        <button @click="goLink('/main')">체험을 시작하세요</button>
      </div> -->
    </div>
    <LogOutModal
      v-if="isLogOutModalOpen"
      :isModalAni="isModalAni"
      @close-logOutModal="closeLogOutModal"
    />
  </div>
</template>

<script>
import LogOutModal from '~/components/common/LogOutModal'

export default {
  components: {
    LogOutModal
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
        { label: '로그아웃', action: 'logout' },
        { label: '로그인', action: 'login' },
        { label: '마이 페이지', link: '/' },
        { label: '알림 설정', link: '/' },
        { label: 'AI 피싱 체험', link: '/main' },
        { label: '안심 플러스', link: '/' },
        { label: '오늘의 보이스피싱 경보', link: '/' },
        { label: '서비스 소개', link: '/guide/intro' },
        { label: '안드로이드 앱 다운로드', link: '/guide/download' },
        { label: '오프라인 교육안내', link: '/guide/education' },
        { label: 'Contact Us', link: '/guide/inquiry' },
        { label: '협력 파트너', link: '/guide/partner' },
        { label: '약관 및 정책', link: '/guide/terms' }
      ],
      isLogOutModalOpen: false,
      isModalAni: false
    }
  },
  computed: {
    menuGroups() {
      const arr = this.menuItems
      const lastCount = 6
      const middleCount = 3

      const total = arr.length
      const firstEnd = total - (lastCount + middleCount)
      const middleEnd = total - lastCount

      return [
        arr.slice(0, firstEnd),          // 첫 번째 (유동)
        arr.slice(firstEnd, middleEnd),  // 두 번째 (고정 3개)
        arr.slice(middleEnd)             // 세 번째 (고정 6개)
      ]
    },
    groupStarts() {
      const starts = []
      let acc = 0
      for (const g of this.menuGroups) {
        starts.push(acc)
        acc += g.length
      }
      return starts
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
    getAnimationDelay(gidx, idx) {
      const globalIdx = (this.groupStarts[gidx] || 0) + idx
      return `${globalIdx * 0.1}s`
    },
    // 메뉴클릭 나누기
    menuClick(item) {
      if (item.action === 'logout') return this.logOutAction()
      if (item.action === 'login') return this.logInAction()
      if (item.link) return this.goLink(item.link)
    },
    // 로그인
    logInAction() {
      console.log('로그인')
    },
    // 로그아웃
    logOutAction() {
      // console.log('로그아웃')
      this.openLogOutModal()
      // this.closeMenuOffcanvas()
    },
    openLogOutModal() {
      this.isModalAni = true
      this.isLogOutModalOpen = true
    },
    closeLogOutModal(){
      this.isModalAni = false
      setTimeout(() => {
        this.isLogOutModalOpen = false
        this.closeMenuOffcanvas()
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
  @apply w-full pl-[12px] pr-[20px];
}
.offcanvas-body .menu-box{
  @apply flex flex-col justify-start items-start gap-[12px] py-[24px] border-b border-b-[#C0B8E8] last:border-b-0 first:pt-0 last:pb-0;
}
.offcanvas-body .menu-box button{
  @apply w-full flex justify-between items-center gap-[16px];
}
.offcanvas-body .menu-box button span{
  @apply text-[#2c2c2c] font-extrabold text-[16px] leading-[20px];
}
.offcanvas-footer{
  @apply absolute bottom-[10%] left-[50%] translate-x-[-50%];
}
.offcanvas-footer button{
  @apply w-[296px] h-[48px] border-[2px] border-[#7139FF] bg-[#fff] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] text-[#7139FF] text-[16px] font-extrabold leading-[20px];
}
</style>