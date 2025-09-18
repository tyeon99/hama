<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <WooriHeader />
    <div class="container">
      <MainIntro />
      <div class="banner">
        <button>
          <img src="~/assets/img/main/banner-img.png" alt="설문조사">
        </button>
      </div>
      <div class="content">
        <WooriMainContent />
      </div>
      <WooriFooter />
    </div>
    <WooriNavigationBar :activeIndex="0" />
  </div>
</template>

<script>
import WooriNavigationBar from '~/components/common/WooriNavigationBar'
import WooriHeader from '~/components/common/WooriHeader'
import WooriFooter from '~/components/common/WooriFooter'
import WooriMainContent from '~/components/main/WooriMainContent'

export default {
  components: {
    WooriNavigationBar,
    WooriHeader,
    WooriFooter,
    WooriMainContent
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
.banner{
  @apply w-full p-[16px_22px_0];
}
</style>
