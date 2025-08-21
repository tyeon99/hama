<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="mainHeader">
    <div class="mainHeader__back">
      <button @click="goBack">
        <img width="24" src="~/assets/img/common/header-back.png" alt="뒤로가기">
      </button>
    </div>
    <div class="mainHeader__title">
      하마터면
    </div>
    <div class="mainHeader__close">
      <button>
        <img width="24" src="~/assets/img/common/header-close.png" alt="닫기">
      </button>
    </div>
    <AllMenuOffcanvas 
      v-if="isMenuOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-menuOffcanvas="closeMenuOffcanvas"
    />
  </div>
</template>

<script>
import AllMenuOffcanvas from '~/components/common/AllMenuOffcanvas'

export default {
  components: {
    AllMenuOffcanvas
  },
  data() {
    return {
      isOffcanvasAni: false,
      isMenuOffcanvasOpen: false
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    openMenuOffcanvas() {
      this.isOffcanvasAni = true
      this.isMenuOffcanvasOpen = true
    },
    closeMenuOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isMenuOffcanvasOpen = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.mainHeader{
  @apply w-full p-[14px_20px_14px_16px] flex justify-between items-center sticky top-0 left-0 right-0 bg-[#fff] z-[998];
}
.mainHeader__back, .mainHeader__close{
  @apply flex justify-center items-center;
}
.mainHeader__title{
  @apply font-semibold text-[17px] text-[#343A40] leading-[24px];
}
</style>