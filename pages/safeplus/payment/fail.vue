<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="content">
        <FailContent />
      </div>
    </div>
  </div>
</template>

<script>
import FailContent from '~/components/safeplus/payment/FailContent'

export default {
  components: {
    FailContent
  }  
}
</script>

<style scoped>
.wrap{
@apply w-full max-w-full bg-[#fff];
}
.container{
@apply w-full max-w-full;
}
.content{
@apply w-full max-w-full;
}
</style>
