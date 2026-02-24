<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="promotionBottom">
    <div class="txt">
      <p>
        혼자만 쓰기 아깝다면?<br />
        지인과 부모님께도 '<strong>안심</strong>'을 '<strong>무료</strong>'로 선물하세요.
      </p>
    </div>
    <div class="link-group">
      <button>
        <img width="109" src="~/assets/img/safeplus/promotion/link-kakao.png">
      </button>
      <button>
        <img width="32" src="~/assets/img/safeplus/promotion/link-blog.png">
      </button>
      <button>
        <img width="32" src="~/assets/img/safeplus/promotion/link-cafe.png">
      </button>
      <button>
        <img width="32" src="~/assets/img/safeplus/promotion/link-band.png">
      </button>
      <button
        @click="openCopyModal('추천 문구와 링크가 [복사]되었습니다.<br>인스타그램을 열고 [붙여넣기] 하세요.', true)"
      >
        <img width="32" src="~/assets/img/safeplus/promotion/link-instagram.png">
      </button>
      <button
        @click="openCopyModal('추천 문구와 링크가 [복사]되었습니다.<br>원하시는 곳에 [붙여넣기] 하세요', false)"
      >
        <img width="32" src="~/assets/img/safeplus/promotion/link-copy.png">
      </button>
    </div>
    <div class="copyright">
      <p>본 페이지의 인물 모델은 AI로 생성되었습니다. </p>
      <p>Copyright since 1999 © ThinkPool Co.,Ltd. All Rights Reserved.</p>
    </div>
    <!-- 복사 모달 -->
    <PromotionCopyModal
      v-if="isCopyModalOpen"
      :isModalAni="isModalAni"
      :message="modalMessage"
      :isShowSubBtn="isShowSubBtn"
      @close-copyModal="closeCopyModal"
    />
  </div>
</template>

<script>
import PromotionCopyModal from '~/components/safeplus/promotion/PromotionCopyModal'

export default {
  components: {
    PromotionCopyModal
  },
  data() {
    return {
      isCopyModalOpen: false,
      isModalAni: false,
      modalMessage: '',
      isShowSubBtn: false
    }
  },
  methods: {
    openCopyModal(message, showBtn = false) {
      this.modalMessage = message
      this.isShowSubBtn = showBtn
      this.isModalAni = true
      this.isCopyModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeCopyModal(){
      this.isModalAni = false
      setTimeout(() => {
        this.isCopyModalOpen = false
        document.body.style.overflow = ''
      }, 300)
    }
  }
}
</script>

<style scoped>
.promotionBottom{
  @apply w-full p-[18px_0px] bg-[#434343] flex flex-col justify-center items-center gap-[16px];
}
.txt p{
  @apply font-normal text-[14px] leading-[20px] text-[#EAEAEA] text-center;
}
.link-group{
  @apply w-full flex justify-center items-center gap-[8px];
}
.copyright{
  @apply w-full flex flex-col justify-center items-center gap-[2px];
}
.copyright p{
  @apply font-normal text-[10px] leading-[13px] tracking-[-3%] text-[#999];
}
</style>