<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="content">
        <VDataBriefingContent />
      </div>
    </div>
  </div>
</template>

<script>
import VDataBriefingContent from '~/components/vdata/briefing/VDataBriefingContent'

export default {
  components: {
    VDataBriefingContent
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
