<template>
  <div class="messagesHeader">
    <div class="left">
      <div class="back">
        <img width="24" src="~/assets/img/chat/messages/back-icon.png" alt="뒤로가기">
      </div>
      <div class="profile">
        <div class="icon"> <!-- 모르는 번호일 때 생략 -->
          <img width="40" src="~/assets/img/common/profile02.png">
        </div>
        <div class="nameNum"> <!-- 모르는 번호일 때 'unknown' 클래스 추가 -->
          <div class="name">신사임당</div>
          <div class="num">국제전화 0068210-332-3232</div>
        </div>
      </div>
    </div>
    <div class="right">
      <img width="24" src="~/assets/img/chat/messages/msg-icon01.png">
      <img width="24" src="~/assets/img/chat/messages/msg-icon02.png">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.messagesHeader{
  @apply w-full h-[64px] bg-[#fff] flex justify-between items-center fixed top-0 left-0 right-0 z-[996] border-b border-[#f5f5f5] px-[16px];
}
.messagesHeader .right{
  @apply flex justify-end items-center gap-[16px];
}
.messagesHeader .left{
  @apply flex justify-start items-center gap-[8px];
}
.messagesHeader .left .profile{
  @apply flex justify-start items-center gap-[8px];
}
.messagesHeader .left .profile .nameNum{
  @apply flex flex-col justify-start items-start;
}
.messagesHeader .left .profile .nameNum .name{
  @apply font-bold text-[16px] leading-[20px] text-[#141414];
}
.messagesHeader .left .profile .nameNum .num{
  @apply font-medium text-[12px] leading-[16px] text-[#727272];
}
.messagesHeader .left .profile .nameNum.unknown .num{
  @apply font-bold text-[16px] leading-[20px] text-[#2B2436];
}
</style>