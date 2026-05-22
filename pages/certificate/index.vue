<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <CertificateHeader />
    <div class="container">
      <div class="content">
        <CertificateContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import CertificateHeader from '~/components/certificate/CertificateHeader'
import CertificateContent from '~/components/certificate/CertificateContent.vue'
import NavigationBar from '~/components/common/NavigationBar'

export default {
  components: {
    NavigationBar,
    CertificateHeader,
    CertificateContent
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
