<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="content">
        <VDataPreinfoContent />
      </div>
    </div>
  </div>
</template>

<script>
import VDataPreinfoContent from '~/components/vdata/preinfo/VDataPreinfoContent'

export default {
  components: {
    VDataPreinfoContent
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
