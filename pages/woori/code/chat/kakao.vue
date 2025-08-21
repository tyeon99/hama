<template>
  <div class="wrap">
    <KakaoHeader />
    <div class="container">
      <div class="content">
        <KakaoContent ref="chatContent" />
      </div>
      <ChatInput
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
import ChatInput from '~/components/chat/common/ChatInput'

export default {
  components: {
    WooriChatNavigationBar,
    KakaoHeader,
    KakaoContent,
    ChatInput
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
