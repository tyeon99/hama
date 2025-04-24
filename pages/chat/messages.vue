<template>
  <div class="wrap">
    <MessagesHeader />
    <div class="container">
      <div class="content">
        <MessagesContent />
      </div>
      <ChatInput />
    </div>
    <ChatNavigationBar />
  </div>
</template>

<script>
import ChatNavigationBar from '~/components/chat/common/ChatNavigationBar'
import MessagesHeader from '~/components/chat/messages/MessagesHeader'
import MessagesContent from '~/components/chat/messages/MessagesContent'
import ChatInput from '~/components/chat/common/ChatInput'

export default {
  components: {
    ChatNavigationBar,
    MessagesHeader,
    MessagesContent,
    ChatInput
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
