<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div ref="chatContent" class="callingContent">
    <div class="callingContent__state">
      <img width="16" src="~/assets/img/chat/calling/state-img.png">
      <span :class="zoomClass">모의체험 중</span>
    </div>
    <div class="callingContent__chat">
      <div
        v-for="(msg, idx) in aiMessages"
        v-show="msg.typingText.length > 0"
        :key="idx"
        class="aiChat"
      >
        <p :class="zoomClass" v-html="msg.typingText"></p>
      </div>
      <div v-show="showMessage01" class="userChat"> <!--v-show 생략(밑에것들 까지 / 보여주기용입니당)-->
        <p :class="zoomClass">우리딸이라며?</p>
      </div>
      <div v-show="showMessage02" class="aiChat img">  <!--ai채팅에 이미지가 들어갈 경우 (타이핑 효과 X)-->
        <p>
          <button @click="openChatImgModal(require('~/assets/img/chat/calling/ex-img01.png'))">
            <img src="~/assets/img/chat/calling/ex-img01.png" alt="예시 이미지01">
          </button>
        </p>
      </div>
      <!-- <div v-show="showMessage03" class="aiChat link">
        <p :class="zoomClass">
          <button @click="openChatImgModal(require('~/assets/img/chat/calling/ex-img02.png'))">
            대법원사건조회.kr
          </button>
        </p>
      </div> -->
      <div v-show="showMessage04" class="aiChat end">  <!--관계없는 발화 횟수 초과 종료 처리 전 마지막 메세지 (타이핑 효과 X)-->
        <p :class="zoomClass">
          ...
          <img width="16" src="~/assets/img/common/chat_end-icon.png">
        </p>
      </div>
    </div>

    <!-- UI 버튼 모음 (생략) -->
    <div class="showButton">
      <button @click="openChatVoiceAnimation">음성입력</button>
      <button @click="openChatChoiceOffcanvas">답변선택</button>
      <button @click="openChatKeypadOffcanvas">키패드</button>
      <button @click="openChatNumOverOffcanvas">횟수초과</button>
      <button @click="openChatTimeOutWarning">타임아웃경고</button>
      <button @click="openChatTimeOutEndModal">타임아웃종료</button>
    </div>

    <!-- 이미지 모달 -->
    <ChatImgModal 
      v-if="isChatImgModalOpen"
      :isModalAni="isModalAni"
      :modalImgSrc="modalImgSrc"
      @close-chatImgModal="closeChatImgModal"
    />

    <!-- 링크 모달 -->
    <ChatLinkModal 
      v-if="isChatLinkModalOpen"
      :isModalAni="isModalAni"
      :modalLinkSrc="modalLinkSrc"
      @close-chatLinkModal="closeChatLinkModal"
    />

    <!-- 음성 입력 애니메이션 -->
    <ChatVoiceAnimation 
      v-if="isChatVoiceAnimationOpen"
      :isModalAni="isModalAni"
    />

    <!-- 답변 선택창 -->
    <ChatChoiceOffcanvas
      v-if="isChatChoiceOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-chatChoiceOffcanvas="closeChatChoiceOffcanvas"
      @update-height="updateChatChoiceHeight"
    />

    <!-- 보안키패드 (6 / 13 구분 추가) -->
    <ChatKeypadOffcanvas
      v-if="isChatKeypadOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      :maxLength="6"
      @close-chatKeypadOffcanvas="closeChatKeypadOffcanvas"
    />

    <!-- 관계없는 발화 횟수 초과 종료 알림 -->
    <ChatNumOverOffcanvas
      v-if="isChatNumOverOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-chatNumOverOffcanvas="closeChatNumOverOffcanvas"
    />

    <!-- 타임아웃 경고 -->
    <ChatTimeOutWarning 
      v-if="isChatTimeOutWarningOpen"
      :isOffcanvasAni="isOffcanvasAni"
    />

    <!-- 타임아웃 종료 -->
    <ChatTimeOutEndModal 
      v-if="isChatTimeOutEndModalOpen"
      :isOffcanvasAni="isOffcanvasAni"
    />
  </div>
</template>

<script>
import ChatImgModal from '~/components/chat/common/ChatImgModal'
import ChatLinkModal from '~/components/chat/common/ChatLinkModal'
import ChatVoiceAnimation from '~/components/chat/common/ChatVoiceAnimation'
import ChatChoiceOffcanvas from '~/components/chat/common/ChatChoiceOffcanvas'
import ChatKeypadOffcanvas from '~/components/chat/common/ChatKeypadOffcanvas'
import ChatNumOverOffcanvas from '~/components/chat/common/ChatNumOverOffcanvas'
import ChatTimeOutWarning from '~/components/chat/common/ChatTimeOutWarning'
import ChatTimeOutEndModal from '~/components/chat/common/ChatTimeOutEndModal'

export default {
  components: {
    ChatImgModal,
    ChatLinkModal,
    ChatVoiceAnimation,
    ChatChoiceOffcanvas,
    ChatKeypadOffcanvas,
    ChatNumOverOffcanvas,
    ChatTimeOutWarning,
    ChatTimeOutEndModal
  },
  data() {
    return {
      isOffcanvasAni: false,
      isChatImgModalOpen: false,
      isChatLinkModalOpen: false,
      isChatVoiceAnimationOpen: false,
      isChatChoiceOffcanvasOpen: false,
      openChoiceChatPadding: '166px',
      isChatKeypadOffcanvasOpen: false,
      isChatNumOverOffcanvasOpen: false,
      isChatTimeOutWarningOpen: false,
      isChatTimeOutEndModalOpen: false,
      modalImgSrc: null,
      modalLinkSrc: null,
      isModalAni: 'animate__zoomIn',
      aiMessages: [
        {
          fullText: '고객님 안녕하세요 정부지원 대출 상담원 박대출 이올시다.',
          typingText: ''
        },
        {
          fullText: '검찰에서 발급된 공식 신분증을 카카오톡으로 보내드렸습니다.',
          typingText: ''
        },
        {
          fullText: '이 사건은 <button class="chatLink" data-link="https://chatbot-files.thinkpool.com/files/images/008/qr_img.png">대법원사건조회.kr</button> 에서 확인하실 수 있습니다.',
          typingText: ''
        },
        {
          fullText: '이 사건은 <button class="chatLink" data-link="https://hama.thinkpool.com/html/caseInquiry/index.html">씽크풀.kr</button> 에서 확인하실 수 있습니다.',
          typingText: ''
        }
      ],
      currentTypingIndex: 0,
      typingInterval: null,
      showMessage01: false, // 생략
      showMessage02: false, // 생략
      showMessage03: false, // 생략
      showMessage04: false // 생략
    }
  },
  computed: {
    fontSizePercent () {
      return this.$store.state.font.fontSizePercent
    },
    zoomClass () {
      if (this.fontSizePercent === 130) return 'zoom-13'
      if (this.fontSizePercent === 120) return 'zoom-12'
      if (this.fontSizePercent === 110) return 'zoom-11'
      if (this.fontSizePercent === 90) return 'zoom-09'
      if (this.fontSizePercent === 80) return 'zoom-08'
      if (this.fontSizePercent === 70) return 'zoom-07'
      return ''
    }
  },
  mounted() {
    this.startTyping()
    this.chatLinkClick()
  },
  methods: {
    showMessages() {  // 생략 (나머지 메세지들 보여주기용입니다)
      this.showMessage01 = true
      this.scrollToBottom()
      setTimeout(() => {
        this.showMessage02 = true
        this.scrollToBottom()
      }, 1000)
      setTimeout(() => {
        this.showMessage03 = true
        this.scrollToBottom()
      }, 2000)
      setTimeout(() => {
        this.showMessage04 = true
        this.scrollToBottom()
      }, 3000)
    },
    // 채팅화면 아래로 스크롤
    scrollToBottom() {
      this.$nextTick(() => {
        const chatContent = this.$refs.chatContent
        chatContent.scrollTo({
          top: chatContent.scrollHeight,
          behavior: 'smooth'
        })
      })
    },
    // ai채팅 타이핑
    startTyping() {
      this.typeNextMessage(this.currentTypingIndex)
    },
    async typeNextMessage(index) {
      if (index >= this.aiMessages.length) {
        this.showMessages() // 생략 (나머지 메세지들 보여주기용입니다)
        return
      }

      const message = this.aiMessages[index]
      message.typingText = ''

      // 태그 분리 후 타이핑
      const regex = /<\/?[^>]+>|[^<>]+/g
      const parts = message.fullText.match(regex) || []

      let partIndex = 0
      let charIndex = 0

      await new Promise((resolve) => {
        this.typingInterval = setInterval(() => {
          if (partIndex < parts.length) {
            const part = parts[partIndex]
            if (part.startsWith('<')) {
              message.typingText += part
              partIndex++
              charIndex = 0
            } else if (charIndex < part.length) {
              message.typingText += part[charIndex++]
            } else {
              partIndex++
              charIndex = 0
            }
            this.scrollToBottom()
          } else {
            clearInterval(this.typingInterval)
            this.scrollToBottom()

            // 1초 대기 후 resolve
            setTimeout(resolve, 1000)
          }
        }, 105)
      })

      // 다음 메시지로 이동 (타이핑이 완전히 끝난 후)
      this.currentTypingIndex++
      await this.typeNextMessage(this.currentTypingIndex)
    },
    // 이미지 열고 닫기기
    openChatImgModal(src) {
      this.modalImgSrc = src
      this.isModalAni = 'animate__zoomIn'
      this.isChatImgModalOpen = true
    },
    closeChatImgModal() {
      this.isModalAni = 'animate__zoomOut'

      setTimeout(() => {
        this.isChatImgModalOpen = false
        this.modalImgSrc = null
      }, 300)
    },

    // 링크 열고 닫기기
    openChatLinkModal(src) {
      this.modalLinkSrc = src
      this.isModalAni = 'animate__zoomIn'
      this.isChatLinkModalOpen = true
    },
    closeChatLinkModal() {
      this.isModalAni = 'animate__zoomOut'

      setTimeout(() => {
        this.isChatLinkModalOpen = false
        this.modalImgSrc = null
      }, 300)
    },
    chatLinkClick() {
      this.$nextTick(() => {
        const chatContent = this.$refs.chatContent
        chatContent.addEventListener('click', (event) => {
          if (event.target.classList.contains('chatLink')) {
            const link = event.target.dataset.link
            if (link) {
              this.openChatLinkModal(link)
            }
          }
        })
      })
    },

    // 음성 인식 애니메이션 열고 닫기
    openChatVoiceAnimation() {
      this.isModalAni = 'animate__zoomIn'
      this.isChatVoiceAnimationOpen = true
    },
    closeChatVoiceAnimation() {
      this.isModalAni = 'animate__zoomOut'

      setTimeout(() => {
        this.isChatVoiceAnimationOpen = false
      }, 300)
    },

    // 답변 선택창 열고 닫기
    openChatChoiceOffcanvas () {
      this.isOffcanvasAni = true
      this.isChatChoiceOffcanvasOpen = true
    },
    closeChatChoiceOffcanvas () {
      this.isOffcanvasAni = false
      this.openChoiceChatPadding = '166px'
      this.$refs.chatContent.style.paddingBottom = this.openChoiceChatPadding
      this.scrollToBottom()
      setTimeout(() => {
        this.isChatChoiceOffcanvasOpen = false
      }, 300)
    },
    updateChatChoiceHeight(height) {
      const extraPadding = 20
      const total = height + extraPadding
      this.openChoiceChatPadding = `${total}px`
      this.$refs.chatContent.style.paddingBottom = this.openChoiceChatPadding
      this.scrollToBottom()
    },

    // 보안 키패드 열고 닫기
    openChatKeypadOffcanvas () {
      this.isOffcanvasAni = true
      this.isChatKeypadOffcanvasOpen = true
      this.$refs.chatContent.style.paddingBottom = '305px'
      this.scrollToBottom()
    },
    closeChatKeypadOffcanvas () {
      this.isOffcanvasAni = false
      this.$refs.chatContent.style.paddingBottom = '166px'
      this.scrollToBottom()
      setTimeout(() => {
        this.isChatKeypadOffcanvasOpen = false
      }, 300)
    },

    // 관계없는 발화 횟수 초과 종료 알림창 열고 닫기
    openChatNumOverOffcanvas () {
      this.isOffcanvasAni = true
      this.isChatNumOverOffcanvasOpen = true
    },
    closeChatNumOverOffcanvas () {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isChatNumOverOffcanvasOpen = false
      }, 300)
    },

    // 타임아웃 경고 열고 닫기
    openChatTimeOutWarning () {
      this.isOffcanvasAni = true
      this.isChatTimeOutWarningOpen = true
    },
    closeChatTimeOutWarning () {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isChatTimeOutWarningOpen = false
      }, 300)
    },

    // 타임아웃 종료 열고 닫기
    openChatTimeOutEndModal () {
      this.isOffcanvasAni = true
      this.isChatTimeOutEndModalOpen = true
    },
    closeChatTimeOutEndModal () {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isChatTimeOutEndModalOpen = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.callingContent{
  @apply w-full h-[100dvh] px-[16px] overflow-y-auto pt-[74px] pb-[166px] bg-[url(~/assets/img/chat/calling/calling-bg.png)] bg-cover bg-center bg-no-repeat;
}
.callingContent__state{
  @apply w-fit m-[0_auto] flex justify-center items-center gap-[8px] p-[6px_20px] bg-[rgba(21,21,83,0.4)] rounded-[16px] mb-[20px];
}
.callingContent__state span{
  @apply font-semibold text-[13px] leading-[16px] text-[#fff];
}
.callingContent__chat{
  @apply w-full flex flex-col justify-start items-start gap-[20px];
}
.callingContent__chat .aiChat{
  @apply w-full pr-[28px] flex justify-start items-center;
}
.callingContent__chat .aiChat p{
  @apply relative bg-[#fff] p-[16px_24px] rounded-[16px] font-medium text-[16px] leading-[19px] text-[#2B2436] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)] before:content-[''] before:absolute before:w-[20.72px] before:h-[34.64px] before:bottom-0 before:left-[-7.72px] before:bg-[url(~/assets/img/chat/calling/aiChat-tail.png)] before:bg-cover before:bg-center before:bg-no-repeat;
}
.callingContent__chat .aiChat p button{
  @apply text-[#2687F5];
}
.callingContent__chat .aiChat.img p{
  @apply p-0 max-w-[250px] rounded-none bg-transparent before:content-none
}
.callingContent__chat .aiChat.end p{
  @apply flex justify-start items-center;
}
.callingContent__chat .userChat{
  @apply w-full pl-[28px] flex justify-end items-center;
}
.callingContent__chat .userChat p{
  @apply relative bg-[#7782FF] p-[16px_24px] rounded-[16px] font-medium text-[16px] leading-[19px] text-[#fff] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)] after:content-[''] after:absolute after:w-[20.72px] after:h-[34.64px] after:bottom-0 after:right-[-7.72px] after:bg-[url(~/assets/img/chat/calling/userChat-tail.png)] after:bg-cover after:bg-center after:bg-no-repeat;
}
</style>