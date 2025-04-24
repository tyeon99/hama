<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="chatNavigationBar">
    <div class="chatNavigationBar__nav">
      <button
        v-for="(item, idx) in navItems"
        :key="idx"
        @click="navClick(item.action)"
      >
        <img width="32" :src="item.img" />
        <span>{{ item.label }}</span>
      </button>
    </div>

    <ChatOutOffcanvas
      v-if="isChatOutOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-chatOutOffcanvas="closeChatOutOffcanvas"
    />
    <FontSizeOffcanvas
      v-if="isFontSizeOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-fontSizeOffcanvas="closeFontSizeOffcanvas"
    />
    <UserInfoOffcanvas
      v-if="isUserInfoOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-userInfoOffcanvas="closeUserInfoOffcanvas"
    />
  </div>
</template>

<script>
import ChatOutOffcanvas from '~/components/chat/common/ChatOutOffcanvas'
import FontSizeOffcanvas from '~/components/common/FontSizeOffcanvas'
import UserInfoOffcanvas from '~/components/chat/common/UserInfoOffcanvas'

export default {
  components: {
    ChatOutOffcanvas,
    FontSizeOffcanvas,
    UserInfoOffcanvas
  },
  data() {
    return {
      isOffcanvasAni: false,
      isFontSizeOffcanvasOpen: false,
      isChatOutOffcanvasOpen: false,
      isUserInfoOffcanvasOpen: false,
      isVoiceOn: false
    }
  },
  computed: {
    navItems() {
      return [
        {
          img: require('~/assets/img/common/chat_out-img.png'),
          label: '중단하고 나가기',
          action: 'openChatOut'
        },
        {
          img: require('~/assets/img/common/chat_fz-img.png'),
          label: '글자 크기',
          action: 'openFontSize'
        },
        {
          img: require('~/assets/img/common/chat_user-img.png'),
          label: '가상 사용자 정보',
          action: 'openUserInfo'
        },
        {
          img: this.isVoiceOn
            ? require('~/assets/img/common/chat_voiceoff-img.png')
            : require('~/assets/img/common/chat_voiceon-img.png'),
          label: '음성 출력',
          action: 'clickVoice'
        }
      ]
    }
  },
  methods: {
    navClick(action) {
      const actions = {
        openChatOut: this.openChatOutOffcanvas,
        openFontSize: this.openFontSizeOffcanvas,
        openUserInfo: this.openUserInfoOffcanvas,
        clickVoice: this.clickVoice
      }

      const fn = actions[action]
      if (fn) {
        fn()
      }
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
    },
    openChatOutOffcanvas () {
      this.isOffcanvasAni = true
      this.isChatOutOffcanvasOpen = true
    },
    closeChatOutOffcanvas () {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isChatOutOffcanvasOpen = false
      }, 300)
    },
    openUserInfoOffcanvas () {
      this.isOffcanvasAni = true
      this.isUserInfoOffcanvasOpen = true
    },
    closeUserInfoOffcanvas () {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isUserInfoOffcanvasOpen = false
      }, 300)
    },
    clickVoice() {
      this.isVoiceOn = !this.isVoiceOn
    }
  }
}
</script>

<style scoped>
.chatNavigationBar {
  @apply w-full fixed bottom-0 flex justify-center items-center z-[997];
}
.chatNavigationBar__nav {
  @apply w-full h-[76px] bg-[#fff] flex justify-center items-center px-[20px];
  box-shadow: -0.3px 1.2px 0.2px 0px rgba(151, 151, 151, 0.2);
}
.chatNavigationBar__nav button {
  @apply w-[calc(100%/4)] h-[76px] flex flex-col justify-center items-center gap-[8px];
}
.chatNavigationBar__nav button span {
  @apply text-[#2B2436] text-[12px] font-semibold leading-[14px];
}
</style>