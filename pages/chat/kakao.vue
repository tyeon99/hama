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
    <ChatNavigationBar />
  </div>
</template>

<script>
import ChatNavigationBar from '~/components/chat/common/ChatNavigationBar'
import KakaoHeader from '~/components/chat/kakao/KakaoHeader'
import KakaoContent from '~/components/chat/kakao/KakaoContent'
import ChatInput from '~/components/chat/common/ChatInput'

export default {
  components: {
    ChatNavigationBar,
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
