<template>
  <div class="wrap" @click="playAudio">
    <div class="container">
      <div class="content">
        <WooriOutgoingCall />
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
import WooriOutgoingCall from '~/components/call/WooriOutgoingCall'

export default {
  components: {
    WooriOutgoingCall
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
