<template>
  <div class="wrap">
    <MessagesHeader />
    <div class="container">
      <div class="content">
        <MessagesContent ref="chatContent" />
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
import MessagesHeader from '~/components/chat/messages/MessagesHeader'
import MessagesContent from '~/components/chat/messages/MessagesContent'
import WooriChatInput from '~/components/chat/common/WooriChatInput'

export default {
  components: {
    WooriChatNavigationBar,
    MessagesHeader,
    MessagesContent,
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
