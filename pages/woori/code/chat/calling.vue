<template>
  <div class="wrap">
    <CallingHeader />
    <div class="container">
      <div class="content">
        <CallingContent ref="chatContent" />
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
import CallingHeader from '~/components/chat/calling/CallingHeader'
import CallingContent from '~/components/chat/calling/CallingContent'
import ChatInput from '~/components/chat/common/ChatInput'

export default {
  components: {
    WooriChatNavigationBar,
    CallingHeader,
    CallingContent,
    ChatInput
  },
  methods: {
    inputFocus () {
      setTimeout(() => {
        this.$refs.chatContent.scrollToBottom()

        // 시각적 뷰포트 기준으로 스크롤
        const scrollOffset = window.visualViewport?.height || window.innerHeight;
        window.scrollTo({
          top: document.body.scrollHeight - scrollOffset,
          behavior: 'smooth'
        });
      }, 300)
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
