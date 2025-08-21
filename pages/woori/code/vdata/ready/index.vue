<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="content">
        <WooriVDataReadyContent />
      </div>
    </div>
  </div>
</template>

<script>
import WooriVDataReadyContent from '~/components/vdata/ready/WooriVDataReadyContent'

export default {
  components: {
    WooriVDataReadyContent
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
