<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <VDataHeader />
    <div class="container">
      <div class="content">
        <VDataContent />
      </div>
    </div>
    <NavigationBar :activeIndex="1" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import VDataHeader from '~/components/vdata/VDataHeader'
import VDataContent from '~/components/vdata/VDataContent'

export default {
  components: {
    NavigationBar,
    VDataHeader,
    VDataContent
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
