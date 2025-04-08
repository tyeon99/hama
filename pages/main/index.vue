<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <MainHeader />
    <div class="container">
      <MainIntro />
      <div class="content">
        <MainContent />
      </div>
    </div>
    <NavigationBar :activeIndex="1" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'

export default {
  components: {
    NavigationBar
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
