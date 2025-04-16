<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <VDataHeader />
    <div class="container">
      <div class="content">
        <VDataUserContent />
      </div>
    </div>
    <NavigationBar :activeIndex="1" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import VDataHeader from '~/components/vdata/VDataHeader'
import VDataUserContent from '~/components/vdata/user/VDataUserContent'

export default {
  components: {
    NavigationBar,
    VDataHeader,
    VDataUserContent
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
