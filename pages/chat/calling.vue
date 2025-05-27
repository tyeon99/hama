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
    <ChatNavigationBar />
  </div>
</template>

<script>
import ChatNavigationBar from '~/components/chat/common/ChatNavigationBar'
import CallingHeader from '~/components/chat/calling/CallingHeader'
import CallingContent from '~/components/chat/calling/CallingContent'
import ChatInput from '~/components/chat/common/ChatInput'

export default {
  components: {
    ChatNavigationBar,
    CallingHeader,
    CallingContent,
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
