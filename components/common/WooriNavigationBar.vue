<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="navigationBar">
    <div class="navigationBar__nav">
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
        { label: 'AI피싱체험', img: 'wooriNav-home', link: '/woori/code/main' },
        { label: '하마터면', img: 'wooriNav-intro', link: '/woori/code/guide/intro' },
        { label: '이용약관', img: 'wooriNav-terms', link: '/woori/code/guide/terms' },
        { label: '글자크기', img: 'wooriNav-fontsize' }
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
  @apply w-full fixed bottom-0 flex justify-center items-center z-[997];
}
.navigationBar__nav {
  @apply w-full h-[73px] bg-[#F7F5FF] p-[12px] flex justify-center items-center;
}
.navigationBar__nav button {
  @apply w-[calc(100%/4)] flex flex-col justify-center items-center gap-[6px];
}
.navigationBar__nav button span {
  @apply text-[#6B6D95] text-[12px] font-medium leading-[14px];
}
.navigationBar__nav button.active span {
  @apply text-[#539DF3];
}
</style>