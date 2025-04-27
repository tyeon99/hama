<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div ref="chatContent" class="kakaoContent">
    <div class="kakaoContent__state">
      <img width="16" src="~/assets/img/chat/calling/state-img.png">
      <span :class="zoomClass">모의체험 중</span>
    </div>
    <div class="kakaoContent__chat">
      <div
        v-for="(msg, idx) in aiMessages"
        v-show="msg.typingText.length > 0"
        :key="idx"
        class="aiChat"
      >
        <div class="profile">
          <img width="32" src="~/assets/img/common/profile02.png">
          <span :class="zoomClass">한사기 부장</span>
        </div>
        <div class="chat">
          <p :class="zoomClass" v-html="msg.typingText"></p>
          <div class="time" :class="zoomClass">오전 11:29</div>
        </div>
      </div>
      <div v-show="showMessage01" class="userChat"> <!--v-show 생략(밑에것들 까지 / 보여주기용입니당)-->
        <div class="time" :class="zoomClass">오전 11:29</div>
        <p :class="zoomClass">우리딸이라며?</p>
      </div>
      <div v-show="showMessage02" class="aiChat img"> <!--ai채팅에 이미지가 들어갈 경우 (타이핑 효과 X)-->
        <div class="profile">
          <img width="32" src="~/assets/img/common/profile02.png">
          <span :class="zoomClass">한사기 부장</span>
        </div>
        <div class="chat">
          <p>
            <button @click="openChatImgModal(require('~/assets/img/chat/calling/ex-img01.png'))">
              <img src="~/assets/img/chat/calling/ex-img01.png" alt="예시 이미지01">
            </button>
          </p>
          <div class="time" :class="zoomClass">오전 11:29</div>
        </div>
      </div>
      <div v-show="showMessage03" class="aiChat link">  <!--ai채팅에 링크가 들어갈 경우 (타이핑 효과 X)-->
        <div class="profile">
          <img width="32" src="~/assets/img/common/profile02.png">
          <span :class="zoomClass">한사기 부장</span>
        </div>
        <div class="chat">
          <p :class="zoomClass">
            <button @click="openChatImgModal(require('~/assets/img/chat/calling/ex-img02.png'))">
              대법원사건조회.kr
            </button>
          </p>
          <div class="time" :class="zoomClass">오전 11:29</div>
        </div>
      </div>
      <div v-show="showMessage04" class="aiChat">  <!--관계없는 발화 횟수 초과 종료 처리 전 마지막 메세지 (타이핑 효과 X)-->
        <div class="profile">
          <img width="32" src="~/assets/img/common/profile02.png">
          <span :class="zoomClass">한사기 부장</span>
        </div>
        <div class="chat">
          <p :class="zoomClass">
            ...
            <img width="16" src="~/assets/img/common/chat_end-icon.png">
          </p>
          <div class="time" :class="zoomClass">오전 11:29</div>
        </div>
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
    />

    <!-- 보안키패드 -->
    <ChatKeypadOffcanvas
      v-if="isChatKeypadOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
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
import ChatVoiceAnimation from '~/components/chat/common/ChatVoiceAnimation'
import ChatChoiceOffcanvas from '~/components/chat/common/ChatChoiceOffcanvas'
import ChatKeypadOffcanvas from '~/components/chat/common/ChatKeypadOffcanvas'
import ChatNumOverOffcanvas from '~/components/chat/common/ChatNumOverOffcanvas'
import ChatTimeOutWarning from '~/components/chat/common/ChatTimeOutWarning'
import ChatTimeOutEndModal from '~/components/chat/common/ChatTimeOutEndModal'

export default {
  components: {
    ChatImgModal,
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
      isChatVoiceAnimationOpen: false,
      isChatChoiceOffcanvasOpen: false,
      isChatKeypadOffcanvasOpen: false,
      isChatNumOverOffcanvasOpen: false,
      isChatTimeOutWarningOpen: false,
      isChatTimeOutEndModalOpen: false,
      modalImgSrc: null,
      isModalAni: 'animate__zoomIn',
      aiMessages: [
        {
          fullText: '고객님 안녕하세요 정부지원 대출 상담원 박대출 이올시다.',
          typingText: ''
        },
        {
          fullText: '검찰에서 발급된 공식 신분증을 카카오톡으로 보내드렸습니다.',
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
    typeNextMessage(index) {
      if (index >= this.aiMessages.length) {
        this.showMessages() // 생략 (나머지 메세지들 보여주기용입니다)
        return
      }
      const message = this.aiMessages[index]
      message.typingText = ''

      let charIndex = 0
      clearInterval(this.typingInterval)

      this.typingInterval = setInterval(() => {
        if (charIndex < message.fullText.length) {
          message.typingText += message.fullText[charIndex++]
          this.scrollToBottom()
        } else {
          clearInterval(this.typingInterval)
          this.scrollToBottom()

          // 2초 후 다음 메시지 타이핑
          setTimeout(() => {
            this.currentTypingIndex++
            this.typeNextMessage(this.currentTypingIndex)
          }, 1000)
        }
      }, 100)
    },
    // 이미지, 링크 열고 닫기기
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
      setTimeout(() => {
        this.isChatChoiceOffcanvasOpen = false
      }, 300)
    },

    // 보안 키패드 열고 닫기
    openChatKeypadOffcanvas () {
      this.isOffcanvasAni = true
      this.isChatKeypadOffcanvasOpen = true
    },
    closeChatKeypadOffcanvas () {
      this.isOffcanvasAni = false
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
.kakaoContent{
  @apply w-full h-[100dvh] px-[16px] overflow-y-auto pt-[74px] pb-[166px] bg-[#A5C0E2];
}
.kakaoContent__state{
  @apply w-fit m-[0_auto] flex justify-center items-center gap-[8px] p-[6px_20px] bg-[rgba(21,21,83,0.4)] rounded-[16px] mb-[20px];
}
.kakaoContent__state span{
  @apply font-semibold text-[13px] leading-[16px] text-[#fff];
}
.kakaoContent__chat{
  @apply w-full flex flex-col justify-start items-start gap-[20px];
}
.kakaoContent__chat .aiChat{
  @apply w-full pr-[40px] flex flex-col justify-start items-start gap-[8px];
}
.kakaoContent__chat .aiChat p{
  @apply relative bg-[#fff] p-[16px_24px] rounded-[16px] font-medium text-[16px] leading-[19px] text-[#2B2436] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)] flex justify-start items-center before:content-[''] before:absolute before:w-[20.72px] before:h-[34.64px] before:top-0 before:left-[-7.72px] before:bg-[url(~/assets/img/chat/kakao/aiChat-tail.png)] before:bg-cover before:bg-center before:bg-no-repeat;
}
.kakaoContent__chat .aiChat.img p{
  @apply p-0 max-w-[250px] rounded-none bg-transparent before:content-none
}
.kakaoContent__chat .aiChat.link p{
  @apply text-[#2687F5];
}
.kakaoContent__chat .userChat{
  @apply w-full pl-[40px] flex justify-end items-end gap-[8px];
}
.kakaoContent__chat .userChat p{
  @apply relative bg-[#FFDA55] p-[16px_24px] rounded-[16px] font-medium text-[16px] leading-[19px] text-[#2B2436] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)] after:content-[''] after:absolute after:w-[20.72px] after:h-[34.64px] after:bottom-0 after:right-[-7.72px] after:bg-[url(~/assets/img/chat/kakao/userChat-tail.png)] after:bg-cover after:bg-center after:bg-no-repeat;
}
.kakaoContent__chat .time{
  @apply min-w-[55px] font-medium text-[12px] leading-[14px] text-[#2B2436];
}
.kakaoContent__chat .aiChat .profile{
  @apply w-full flex justify-start items-center gap-[8px];
}
.kakaoContent__chat .aiChat .profile span{
  @apply font-bold text-[14px] leading-[17px] text-[#2B2436];
}
.kakaoContent__chat .aiChat .chat{
  @apply w-full flex justify-start items-end gap-[8px];
}
</style>