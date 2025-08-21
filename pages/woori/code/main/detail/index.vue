<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <WooriHeader />
    <div class="container">
      <div class="content">
        <WooriDetailContent />
      </div>
    </div>
    <WooriNavigationBar :activeIndex="1" />
  </div>
</template>

<script>
import WooriNavigationBar from '~/components/common/WooriNavigationBar'
import WooriHeader from '~/components/common/WooriHeader'
import WooriDetailContent from '~/components/main/detail/WooriDetailContent'

export default {
  components: {
    WooriNavigationBar,
    WooriHeader,
    WooriDetailContent
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
