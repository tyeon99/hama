<template>
  <div class="wrap">
    <IntroHeader />
    <div class="container">
      <div class="content">
        <IntroContent />
      </div>
    </div>
    <div
      v-if="showIntroLoading" 
      class="introLoading"
      :class="{ loadingAni: loadingAni }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="19" viewBox="0 0 80 19" fill="none">
        <path d="M61.9808 0.594055H73.5052V1.70293H75.2477V0.594055H79.802V12.7125H75.2477V9.62346H73.5052V10.7323H65.347C63.1293 10.7323 61.9808 9.58386 61.9808 7.36611V0.594055ZM61.9808 11.7224H66.5351V13.5045C66.5351 14.2174 67.0103 14.6926 67.7232 14.6926H80V18.6529H66.3371C63.7233 18.6529 61.9808 16.9103 61.9808 14.2966V11.7224ZM66.5351 6.57406C66.5351 6.89088 66.8123 7.1681 67.1291 7.1681H68.9509V4.15829H66.5351V6.57406ZM73.5052 5.06916V6.25723H75.2477V5.06916H73.5052Z" fill="url(#paint0_linear_2003_279)"/>
        <path d="M47.129 14.8906H52.7129V18.6529H45.7429C43.1291 18.6529 41.3866 16.9103 41.3866 14.2966V0.594055H52.5149V4.35631H45.9409V7.60372H51.1288V11.2472H45.9409V13.7025C45.9409 14.4154 46.4161 14.8906 47.129 14.8906ZM54.6535 18.6529V11.2472H52.0793V7.60372H54.6535V0.594055H59.2078V18.6529H54.6535Z" fill="url(#paint1_linear_2003_279)"/>
        <path d="M20.7923 0.594055H31.9207V18.6529H25.1486C22.5348 18.6529 20.7923 16.9103 20.7923 14.2966V0.594055ZM33.2672 18.6529V0.594055H37.8215V7.14829H39.6036V11.1086H37.8215V18.6529H33.2672ZM25.3466 13.5045C25.3466 14.2174 25.8219 14.6926 26.5347 14.6926H27.3664V4.55432H25.3466V13.5045Z" fill="url(#paint2_linear_2003_279)"/>
        <path d="M0.198013 13.4055V11.1878C0.198013 7.92053 2.35636 5.74239 5.88099 5.74239C9.40563 5.74239 11.564 7.92053 11.564 11.1878V13.4055C11.564 16.6727 9.40563 18.8509 5.88099 18.8509C2.35636 18.8509 0.198013 16.6727 0.198013 13.4055ZM12.6728 18.6529V0.59404H17.2272V7.54431H19.0093V11.5046H17.2272V18.6529H12.6728ZM0 1.38609H3.60384V0H8.15815V1.38609H11.762V5.34636H0V1.38609ZM5.88099 15.2866C6.47503 15.2866 7.00967 14.8906 7.00967 14.1976V10.3957C7.00967 9.70265 6.47503 9.30662 5.88099 9.30662C5.28695 9.30662 4.75232 9.70265 4.75232 10.3957V14.1976C4.75232 14.8906 5.28695 15.2866 5.88099 15.2866Z" fill="url(#paint3_linear_2003_279)"/>
        <defs>
          <linearGradient id="paint0_linear_2003_279" x1="4.11059" y1="1.20789" x2="80.8407" y2="22.6593" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8539FF"/>
            <stop offset="1" stop-color="#D51BFF"/>
          </linearGradient>
          <linearGradient id="paint1_linear_2003_279" x1="4.11053" y1="1.20789" x2="80.8407" y2="22.6593" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8539FF"/>
            <stop offset="1" stop-color="#D51BFF"/>
          </linearGradient>
          <linearGradient id="paint2_linear_2003_279" x1="4.11044" y1="1.20789" x2="80.8406" y2="22.6593" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8539FF"/>
            <stop offset="1" stop-color="#D51BFF"/>
          </linearGradient>
          <linearGradient id="paint3_linear_2003_279" x1="4.11037" y1="1.20788" x2="80.8405" y2="22.6593" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8539FF"/>
            <stop offset="1" stop-color="#D51BFF"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      loadingAni: false,
      showIntroLoading: true
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden'

    // 2초 뒤 애니메이션 시작
    setTimeout(() => {
      this.loadingAni = true

      // 0.6초 뒤 introLoading 요소 제거
      setTimeout(() => {
        this.showIntroLoading = false
        // 스크롤 가능
        document.body.style.overflow = ''
      }, 600)
    }, 2000)
  }
}
</script>

<style scoped>
.wrap{
  @apply relative w-full h-full;
}
.container{
  @apply w-full h-full;
}
.content{
  @apply w-full h-full;
}
</style>
