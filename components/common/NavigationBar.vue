<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="navigationBar">
    <div
      class="navigationBar__nav animate__animated animate__bounceInUp animate__delay-1s animate__customBounceInUp"
    >
      <button
        v-for="(item, idx) in navItems"
        :key="idx"
        class="nav"
        :class="{ active: activeIndex === idx }"
        @click="idx === 3 ? openFontSizeOffcanvas() : goLink(item.link)"
      >
        <img
          width="24"
          :src="imgSrc(item.img, activeIndex === idx)"
          :alt="item.label"
        />
        <span>{{ item.label }}</span>
      </button>
    </div>
    <FontSizeOffcanvas
      v-if="isFontSizeOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-fontSizeOffcanvas="closeFontSizeOffcanvas"
    />
  </div>
</template>

<script>
import FontSizeOffcanvas from '~/components/common/FontSizeOffcanvas'

export default {
  components: {
    FontSizeOffcanvas
  },
  props: {
    activeIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      navItems: [
        { label: '홈', img: 'nav-home', link: '/' },
        { label: 'AI피싱체험', img: 'nav-ai', link: '/main' },
        { label: '하마터면', img: 'nav-intro', link: '/' },
        { label: '글자크기', img: 'nav-fontsize' }
      ],
      isOffcanvasAni: false,
      isFontSizeOffcanvasOpen: false
    }
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    imgSrc (imgName, isActive) {
      const active = isActive ? '_atv' : ''
      return require(`~/assets/img/common/${imgName}${active}.png`)
    },
    openFontSizeOffcanvas () {
      this.isOffcanvasAni = true
      this.isFontSizeOffcanvasOpen = true
    },
    closeFontSizeOffcanvas () {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isFontSizeOffcanvasOpen = false
      }, 300)
    }
  }
};
</script>

<style scoped>
.navigationBar {
  @apply w-full fixed bottom-[13px] flex justify-center items-center z-[997];
}
.navigationBar__nav {
  @apply w-[calc(100%-16px)] h-[73px] bg-[#fff] rounded-[75px] px-[30px] flex justify-center items-center;
  box-shadow: 0px 1px 8px 0px rgba(45, 39, 80, 0.2);
}
.navigationBar__nav button {
  @apply w-[calc(100%/4)] h-[73px] flex flex-col justify-center items-center gap-[7px];
}
.navigationBar__nav button.active {
  @apply relative overflow-hidden before:content-[''] before:absolute before:w-[12px] before:h-[12px] before:rounded-full before:bg-[#7139FF] before:bottom-[-6px] before:left-[50%] before:translate-x-[-50%];
}
.navigationBar__nav button span {
  @apply text-[#AFB2EC] text-[12px] font-bold leading-[14px];
}
.navigationBar__nav button.active span {
  @apply text-[#7139FF];
}
</style>