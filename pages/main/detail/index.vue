<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <DetailHeader />
    <div class="container">
      <div class="content">
        <DetailContent />
      </div>
    </div>
    <NavigationBar :activeIndex="1" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import DetailHeader from '~/components/main/detail/DetailHeader'
import DetailContent from '~/components/main/detail/DetailContent'

export default {
  components: {
    NavigationBar,
    DetailHeader,
    DetailContent
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
