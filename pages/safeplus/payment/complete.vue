<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="content">
        <CompleteContent />
      </div>
    </div>
  </div>
</template>

<script>
import CompleteContent from '~/components/safeplus/payment/CompleteContent'

export default {
  components: {
    CompleteContent
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
