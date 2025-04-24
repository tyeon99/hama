<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <EndPageHeader />
    <div class="container">
      <div class="content">
        <EndPageContent />
      </div>
    </div>
    <NavigationBar :activeIndex="1" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import EndPageHeader from '~/components/end/EndPageHeader'
import EndPageContent from '~/components/end/EndPageContent'

export default {
  components: {
    NavigationBar,
    EndPageHeader,
    EndPageContent
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
