<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="content">
        <WooriVDataPreinfoContent />
      </div>
    </div>
  </div>
</template>

<script>
import WooriVDataPreinfoContent from '~/components/vdata/preinfo/WooriVDataPreinfoContent'

export default {
  components: {
    WooriVDataPreinfoContent
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
