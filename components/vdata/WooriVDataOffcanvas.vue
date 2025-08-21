<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{
      animate__fadeIn: isOffcanvasAni,
      animate__fadeOut: !isOffcanvasAni,
    }"
    @click="closeVDataOffcanvas"
  >
    <div
      ref="offcanvas"
      class="offcanvas-content animate__animated animate__faster"
      :class="{
        animate__fadeInUp: isOffcanvasAni,
        animate__fadeOutDown: !isOffcanvasAni,
      }"
      :style="{ transform: `translateY(${translateY}px)` }"
      @click.stop
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="offcanvas-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="5"
          viewBox="0 0 48 5"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 2.5C0 1.11929 1.11929 0 2.5 0H45.5C46.8807 0 48 1.11929 48 2.5C48 3.88071 46.8807 5 45.5 5H2.5C1.11929 5 0 3.88071 0 2.5Z"
            fill="#CDCFD0"
          />
        </svg>
      </div>
      <div class="offcanvas-body">
        <div class="choice-box">
          <div class="title">🧑‍🤝‍🧑 성별을 선택해 주세요.</div>
          <div class="input-group01">
            <div
              v-for="(option, idx) in genderOptions"
              :key="option.value"
              class="input-item"
            >
              <input
                :id="'gender-' + idx"
                v-model="selectedGender"
                type="radio"
                name="gender"
                :value="option.value"
                hidden
              />
              <label
                :for="'gender-' + idx"
                :class="{ 'selected': selectedGender === option.value }"
              >
                <img
                  width="56"
                  :src="require(`~/assets/img/vdata/${option.value}-icon.png`)"
                />
                <span>{{ option.label }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="choice-box">
          <div class="title">📆 연령대를 선택해 주세요.</div>
          <div class="input-group02">
            <div
              v-for="(option, idx) in ageOptions"
              :key="option.value"
              class="input-item"
            >
              <input
                :id="'age-' + idx"
                v-model="selectedAge"
                type="radio"
                name="age"
                :value="option.value"
                hidden
              />
              <label
                :for="'age-' + idx"
                :class="{ 'selected': selectedAge === option.value }"
              >
                {{ option.label }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas-footer">
        <button
          :class="{ active: isSelectionComplete }"
          :disabled="!isSelectionComplete"
          @click="goLink('/woori/code/vdata/user')"
        >
          선택을 완료합니다.
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOffcanvasAni: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      genderOptions: [
        { label: '남성', value: 'male' },
        { label: '여성', value: 'female' }
      ],
      ageOptions: [
        { label: '20대 미만', value: 'under20' },
        { label: '20대', value: '20s' },
        { label: '30대', value: '30s' },
        { label: '40대', value: '40s' },
        { label: '50대', value: '50s' },
        { label: '60대', value: '60s' },
        { label: '70대 이상', value: '70plus' }
      ],
      translateY: 0,
      selectedGender: null,
      selectedAge: null
    }
  },
  computed: {
    isSelectionComplete () {
      // 성별과 연령대가 모두 선택된 경우 'active' 클래스 추가
      return this.selectedGender && this.selectedAge;
    }
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    closeVDataOffcanvas () {
      this.$emit('close-vDataOffcanvas')
    },
    onTouchStart (e) {
      this.touchStartY = e.touches[0].clientY
      this.isDragging = true
    },
    onTouchMove (e) {
      if (!this.isDragging) return
      const touchY = e.touches[0].clientY
      const deltaY = touchY - this.touchStartY
      if (deltaY > 0) {
        this.translateY = deltaY
      }
    },
    onTouchEnd () {
      this.isDragging = false
      if (this.translateY > 100) {
        // 100px 이상 내려가면 닫기
        this.closeVDataOffcanvas()
      } else {
        // 아니면 원래 위치로 복귀
        this.translateY = 0
      }
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-start items-end z-[999];
  overscroll-behavior: contain; /* or none */
  touch-action: none; /* 터치로 인한 브라우저 액션 방지 */
}
.offcanvas-content {
  @apply relative w-full bg-[#fff] p-[0px_16px_35px] rounded-t-[24px];
  transition: transform 0.3s ease;
}
.offcanvas-header {
  @apply flex justify-center items-center p-[8px_0_11px] mb-[40px];
}
.offcanvas-body {
  @apply w-full flex flex-col justify-start items-center mb-[42px];
}
.offcanvas-body .title {
  @apply w-full text-center font-[JalnanGothic] mb-[24px] text-[#2B2436] text-[18px] font-normal leading-[20px];
}
.choice-box{
  @apply w-full mb-[48px] last:mb-0;
}
.input-group01 input, .input-group02 input{
  @apply hidden;
}
.input-group01{
  @apply w-full flex justify-center items-center gap-[32px];
}
.input-group01 label{
  @apply w-[120px] h-[109px] flex flex-col justify-center items-center gap-[8px] rounded-[16px] bg-[#F7F5FF] cursor-pointer;
}
.input-group01 label span{
  @apply font-extrabold text-[18px] leading-[20px] text-[#2B2436];
}
.input-group01 label.selected{
  @apply shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
  background: linear-gradient(180deg, #8B64F8 0%, #5D68FF 100%);
}
.input-group01 label.selected span{
  @apply text-[#fff];
}
.input-group01 label:hover{
  @apply border-[3px] border-[#7139FF];
}
.input-group01 label:hover span{
  @apply text-[#7139FF];
}
.input-group01 label.selected:hover{
  @apply border-none;
}
.input-group01 label.selected:hover span{
  @apply text-[#fff];
}
.input-group02{
  @apply w-full flex flex-wrap gap-[12px] justify-start items-start;
}
.input-group02 label{
  @apply flex justify-center items-center h-[56px] p-[16px_18px] bg-[#fff] border-[2px] border-[#2B2436] rounded-[12px] font-extrabold text-[18px] leading-[20px] text-[#2B2436] cursor-pointer;
}
.input-group02 label.selected{
  @apply shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)] bg-[#846BFF] text-[#fff] border-none;
}
.input-group02 label:hover{
  @apply border-[2px] border-[#846BFF] text-[#7B61FF];
}
.input-group02 label.selected:hover{
  @apply border-none text-[#fff];
}
.offcanvas-footer {
  @apply w-full flex justify-center items-center;
}
.offcanvas-footer button {
  @apply w-[280px] h-[42px] pt-[3px] rounded-[48px] bg-[#AFB2EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] text-[14px] font-normal leading-[18px] text-[#fff];
}
.offcanvas-footer button.active{
  @apply bg-[#6B4EFF];
}
</style>