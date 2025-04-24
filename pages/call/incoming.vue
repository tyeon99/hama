<template>
  <div class="wrap" @click="playAudio">
    <div class="container">
      <div class="content">
        <IncomingCall />
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
import IncomingCall from '~/components/call/IncomingCall'

export default {
  components: {
    IncomingCall
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
