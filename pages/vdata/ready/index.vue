<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="content">
        <VDataReadyContent />
      </div>
    </div>
  </div>
</template>

<script>
import VDataReadyContent from '~/components/vdata/ready/VDataReadyContent'

export default {
  components: {
    VDataReadyContent
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
