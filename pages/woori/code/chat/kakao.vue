<template>
  <div class="wrap">
    <KakaoHeader />
    <div class="container">
      <div class="content">
        <KakaoContent ref="chatContent" />
      </div>
      <WooriChatInput
        @input-focus="inputFocus"
      />
    </div>
    <WooriChatNavigationBar />
  </div>
</template>

<script>
import WooriChatNavigationBar from '~/components/chat/common/WooriChatNavigationBar'
import KakaoHeader from '~/components/chat/kakao/KakaoHeader'
import KakaoContent from '~/components/chat/kakao/KakaoContent'
import WooriChatInput from '~/components/chat/common/WooriChatInput'

export default {
  components: {
    WooriChatNavigationBar,
    KakaoHeader,
    KakaoContent,
    WooriChatInput
  },
  methods: {
    inputFocus() {
      this.$refs.chatContent.scrollToBottom()
    }
  }
}
</script>

<style scoped>
.wrap{
@apply w-full max-w-full;
}
.container{
@apply w-full max-w-full;
}
.content{
@apply w-full max-w-full;
}
</style>
