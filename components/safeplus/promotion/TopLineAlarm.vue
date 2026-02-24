<template>
  <div class="topLineAlarm">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.topLineAlarm{
  @apply w-full h-9 fixed top-0 left-0 right-0 flex justify-center items-center rounded-b-lg z-[99] max-w-[674px] m-[0_auto];
}
.alarm01{
  @apply bg-[#897260];
}
.alarm02{
  @apply bg-[#C08D50];
}
.alarm03{
  @apply bg-[#2C2E5B];
}
p{
  @apply font-medium text-sm tracking-[-6%];
}
.alarm01 p{
  @apply text-[#fff];
}
.alarm01 p span{
  @apply text-[#FFE656];
}
.alarm02 p{
  @apply text-[#FFEC9F];
}
.alarm02 p span{
  @apply text-[#fff] font-bold;
}
.alarm03 p{
  @apply text-[#FFEC9F];
}
.alarm03 p span{
  @apply text-[#fff] font-bold;
}
</style>