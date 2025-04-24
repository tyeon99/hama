<template>
  <div class="wrap" @click="playAudio">
    <div class="container">
      <div class="content">
        <OutgoingCall />
        <audio
          ref="bgAudio"
          src="/sounds/outgoing-call.mp3"
          autoplay
          loop
        ></audio>
      </div>
    </div>
  </div>
</template>

<script>
import OutgoingCall from '~/components/call/OutgoingCall'

export default {
  components: {
    OutgoingCall
  },
  methods: {
    playAudio() {
      this.$refs.bgAudio.play()
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
