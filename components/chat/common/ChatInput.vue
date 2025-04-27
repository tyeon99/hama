<template>
  <div class="chatInput">
    <div class="chatInput__box">
      <span v-if="!isFocused">
        <img width="17" src="~/assets/img/common/chat_input-default01.png" alt="텍스트로 변환" />
      </span>
      <input
        v-model="inputText"
        type="text"
        :class="{ focused: isFocused }"
        :placeholder="placeholderText"
        @focus="onInputFocus"
        @blur="onInputBlur"
        @keyup.enter="onInputSend"
      />
      <button @mousedown="onInputButtonClick">
        <img width="49" :src="buttonImgSrc" alt="input 버튼" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocused: false,
      buttonImgSrc: require('~/assets/img/common/chat_input-default.png'),
      placeholderText: '' ,
      inputText: ''
    }
  },
  methods: {
    onInputFocus() {
      this.isFocused = true
      this.buttonImgSrc = require('~/assets/img/common/chat_input-txt.png')
      this.placeholderText = ''
    },
    onInputBlur() {
      this.isFocused = false
      this.buttonImgSrc = require('~/assets/img/common/chat_input-default.png')
      this.placeholderText = ''
    },
    onInputButtonClick() {
      if (this.isFocused) {
        this.onInputSend()
      } else {
        this.onInputVoice()
      }
    },
    onInputVoice() {
      this.buttonImgSrc = require('~/assets/img/common/chat_input-voice.png')
      this.placeholderText = '듣고 있어요'
    },
    onInputSend() {
      this.inputText = ''
      this.onInputBlur()
    }
  }
}
</script>

<style scoped>
.chatInput {
  @apply w-full h-[57px] fixed bottom-[89px] left-0 right-0 max-w-[480px] m-[0_auto] z-[996] px-[12px];
}
.chatInput__box {
  @apply relative;
}
.chatInput__box input {
  @apply w-full h-[57px] bg-[#fff] rounded-[40px] p-[16px_58px_16px_44px] font-medium text-[20px] leading-[24px] text-[#2B2436] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.08)] placeholder:text-[#7139FF];
}
.chatInput__box input.focused {
  @apply pl-[32px];
}
.chatInput__box span {
  @apply absolute top-[20px] left-[20px];
}
.chatInput__box button {
  @apply absolute top-[4px] right-[4px];
}
</style>
