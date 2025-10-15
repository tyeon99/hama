<template>
  <div class="wrap">
    <LogInHeader />
    <div class="container">
      <div class="content">
        <LogInContent />
      </div>
    </div>
  </div>
</template>

<script>
import LogInHeader from '~/components/login/LogInHeader'
import LogInContent from '~/components/login/LogInContent'

export default {
  components: {
    LogInHeader,
    LogInContent
  },
  layout: 'default'
}
</script>

<style scoped>

</style>