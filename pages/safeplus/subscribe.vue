<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <SafePlusSubscribeHeader />
    <div class="container">
      <SafePlusTab
        :activeTab="activeTab"
        @change="activeTab = $event"
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
  </div>
</template>

<script>
import SafePlusSubscribeHeader from '~/components/safeplus/SafePlusSubscribeHeader'
import SafePlusSubscribeTop from '~/components/safeplus/SafePlusSubscribeTop'
import SafePlusSubscribeContent from '~/components/safeplus/SafePlusSubscribeContent'
import SafePlusGiftTop from '~/components/safeplus/SafePlusGiftTop'
import SafePlusGiftContent from '~/components/safeplus/SafePlusGiftContent'
import SafePlusTab from '~/components/safeplus/SafePlusTab'
// import { useAuthStore } from '~/stores/authStore'

export default {
  components: {
    SafePlusSubscribeHeader,
    SafePlusSubscribeTop,
    SafePlusSubscribeContent,
    SafePlusGiftTop,
    SafePlusGiftContent,
    SafePlusTab,
  },
  data() {
    return {
      activeTab: 'subscribe',
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
  // mounted() {
  //   if (this.$route.query.tab === 'gift') {
  //     this.activeTab = 'gift'
  //   }
  // },
  // middleware: ['require-subscription'],
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
