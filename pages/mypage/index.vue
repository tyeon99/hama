<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <MyPageHeader />
    <div class="container">
      <div class="content">
        <MyPageContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import MyPageHeader from '~/components/mypage/MyPageHeader'
import MyPageContent from '~/components/mypage/MyPageContent'

export default {
  components: {
    NavigationBar,
    MyPageHeader,
    MyPageContent
  }  
}
</script>

<style scoped>
.wrap{
@apply w-full max-w-full bg-[#F7F5FF];
}
.container{
@apply w-full max-w-full;
}
.content{
@apply w-full max-w-full;
}
</style>
