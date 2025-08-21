<template>
  <div class="wrap" @click="playAudio">
    <div class="container">
      <div class="content">
        <WooriIncomingCall />
        <audio
          ref="bgAudio"
          src="/sounds/incoming-call.mp3"
          autoplay
          loop
        ></audio>
      </div>
    </div>
  </div>
</template>

<script>
import WooriIncomingCall from '~/components/call/WooriIncomingCall'

export default {
  components: {
    WooriIncomingCall
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
