<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <SafePlusSubscribeHeader />
    <div class="container">
      <SafePlusTab
        :activeTab="activeTab"
        @change="isSubscribedTabClick"
      />
      <template v-if="activeTab === 'subscribe'">
        <SafePlusSubscribeTop />
        <div class="content">
          <SafePlusSubscribeContent />
        </div>
      </template>
      <template v-else>
        <SafePlusGiftTop />
        <div class="content">
          <SafePlusGiftContent />
        </div>
      </template>
    </div>
    <SubscribeAlarmsModal
      v-if="isAlarmsModalOpen"
      :isModalAni="isModalAni"
      :modalTitle="modalTitle"
      :modalTxt="modalTxt"
      @close-alarmsModal="closeAlarmsModal"
    />
  </div>
</template>

<script>
import SafePlusSubscribeHeader from '~/components/safeplus/SafePlusSubscribeHeader'
import SafePlusSubscribeTop from '~/components/safeplus/SafePlusSubscribeTop'
import SafePlusSubscribeContent from '~/components/safeplus/SafePlusSubscribeContent'
import SafePlusGiftTop from '~/components/safeplus/SafePlusGiftTop'
import SafePlusGiftContent from '~/components/safeplus/SafePlusGiftContent'
import SafePlusTab from '~/components/safeplus/SafePlusTab'
import SubscribeAlarmsModal from '~/components/safeplus/SubscribeAlarmsModal'
// import { useAuthStore } from '~/stores/authStore'

export default {
  components: {
    SafePlusSubscribeHeader,
    SafePlusSubscribeTop,
    SafePlusSubscribeContent,
    SafePlusGiftTop,
    SafePlusGiftContent,
    SafePlusTab,
    SubscribeAlarmsModal,
  },
  data() {
    return {
      activeTab: 'subscribe',
      isSubscribed: true,
      isAlarmsModalOpen: false,
      isModalAni: false,
      modalTitle: '',
      modalTxt: ''
    }
  },
  // computed: {
  //   authStore() {
  //     return useAuthStore()
  //   },
  // },
  // watch: {
  //   activeTab(newTab) {
  //     // 구독자가 구독하기 탭으로 전환하려고 하면 마이페이지로 리다이렉트
  //     if (newTab === 'subscribe' && this.authStore.isSubscriber) {
  //       this.$router.replace(`/${this.$route.params.code}/mypage`)
  //     }
  //   },
  // },
  mounted() {
    if (this.$route.query.tab === 'gift') {
      this.activeTab = 'gift'
    } else if (this.isSubscribed) {
      this.activeTab = 'gift'
    }
  },
  // middleware: ['require-subscription'],
  methods: {
    isSubscribedTabClick(tab) {
      if (tab === 'subscribe' && this.isSubscribed) {
        this.openAlarmsModal(
          '본인 구독 중입니다', 
          '본인이 구독 중인 멤버십이 있어 지금은 선물하기만 이용하실 수 있습니다.<br>본인 구독 정보는 마이페이지에서 확인해 주세요.'
        )
        return
      }
      this.activeTab = tab
    },
    openAlarmsModal(title, txt) {
      this.modalTitle = title
      this.modalTxt = txt
      this.isModalAni = true
      this.isAlarmsModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeAlarmsModal() {
      this.isModalAni = false
      setTimeout(() => {
        this.isAlarmsModalOpen = false
        document.body.style.overflow = ''
      }, 300)
    }
  }
}
</script>

<style scoped>
.wrap {
  @apply w-full max-w-full bg-[#F7F5FF];
}
.container {
  @apply w-full max-w-full;
}
.content {
  @apply w-full max-w-full;
}
</style>
