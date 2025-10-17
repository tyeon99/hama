<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="settingContent">
    <div class="title" :class="zoomClass">원하는 알림을 설정해주세요.</div>

    <div class="box-group">
      <!-- 체크박스01 -->
      <div
        v-for="(item, idx) in alarmList"
        :key="idx"
        class="box"
      >
        <div class="txt">
          <strong :class="zoomClass">{{ item.title }}</strong>
          <span :class="zoomClass">{{ item.desc }}</span>
        </div>

        <div class="checkbox custom01">
          <button class="radio-button" type="button">
            <input
              :id="`check0${idx + 1}`"
              v-model="item.checked"
              :name="`check0${idx + 1}`"
              type="checkbox"
            >
            <label :for="`check0${idx + 1}`">
              <span></span>
            </label>
          </button>
        </div>
      </div>
      <!-- 체크박스02 -->
      <div class="box">
        <div class="checkbox custom02">
          <input id="check04" type="checkbox" name="check04">
          <label for="check04" @click="openAlarmModal('marketing')">
            <span :class="zoomClass">마케팅 푸시 알림 수신 동의 (선택)</span>
          </label>
        </div>
        <p :class="zoomClass">
          [선택] 마케팅 푸시 알림 수신 동의  <br />
          - 목적: 이벤트·혜택·프로모션 등 광고성 정보 제공  <br />
          - 수단: 앱 푸시 알림 (이메일.문자.전화 등 다른 채널은 포함되지 않음)  <br />
          - 보유·이용 기간: 서비스 탈퇴 또는 동의 철회 시까지  <br />
          * 동의를 거부하셔도 서비스는 정상 이용이 가능합니다.  <br />
          * 동의 후에도 알림 설정에서 해제하실 수 있습니다.  
        </p>
      </div>
    </div>

    <div class="note">
      <p>
        <strong :class="zoomClass">㈜씽크풀 </strong>
        <span :class="zoomClass">사업자 등록번호 116-81-54775</span>
        <span :class="zoomClass">대표 : 김동진</span>
      </p>
      <p>
        <strong :class="zoomClass">안심플러스 고객센터</strong>
        <button>
          <img width="18" src="~/assets/img/safeplus/kakao-logo.png">
          <em :class="zoomClass">카카오채널 채팅문의</em>
        </button>
      </p>
    </div>
    <!-- 알림 팝업창 -->
    <AlarmModal
      v-if="isAlarmModalOpen"
      :isModalAni="isModalAni"
      :title="typePreeset.title"
      :txt="typePreeset.txt"
      :buttonTxt="typePreeset.buttonTxt"
      @close-alarmModal="closeAlarmModal"
    />
  </div>
</template>

<script>
import AlarmModal from '~/components/alarm/AlarmModal'

export default { 
  components: {
    AlarmModal
  },
  data() {
    return {
      alarmList: [
        {
          title: '필수 알림',
          desc: '서비스 공지사항, 앱 업데이트, 보안 공지는 해제할 수 없습니다.',
          checked: true
        },
        {
          title: '컨텐츠 알림',
          desc: '신규 체험 시나리오, 피싱 최신 정보',
          checked: false
        },
        {
          title: '이벤트 및 혜택 알림',
          desc: '멤버십 할인, 프로모션, 특별 이벤트',
          checked: false
        }
      ],
      modalPresets: {
        system: {
          title: '시스템 알림 권한 안내',
          txt:
            '현재 <strong>이 앱의 알림 권한이 허용되어 있지 않아</strong> 알림 설정을 변경할 수 없습니다.<br /> 알림을 받으려면 시스템에서 알림 권한을 허용해 주세요. 안드로이드 기종과 버전에 따라 아래 경로를 참고하세요.<br /><br /><span><strong>빠른 방법</strong> : ‘앱 알림 설정 열기’ 버튼으로 이동</span><span><strong>수동 방법</strong> : 설정 → 앱(애플리케이션) → 하마터면 앱 → 알림 → 허용</span><br>권한을 허용한 뒤 이 화면으로 돌아오면 자동으로 확인되어 알림 설정을 이용할 수 있습니다. ',
          buttonTxt: '앱 알림 설정'
        },
        marketing: {
          title: '마케팅 푸시 알림 수신 동의',
          txt:
            '광고성 정보(이벤트·혜택·프로모션)를 <strong>앱 푸시</strong>로 받으시려면 수신 동의가 필요합니다.<br><br><span>목적 : 광고성 정보 제공(이벤트·혜택·프로모션)</span><span>수단 : 앱 푸시 알림(이메일·문자·전화 등 다른 채널 제외)</span><span>보유·이용 기간: 서비스 탈퇴 또는 동의 철회 시까지</span><span>철회 : 언제든 설정에서 변경/철회 가능(철회해도 기본 서비스 이용 제한 없음)</span>',
          buttonTxt: '동의하고 켜기'
        }
      },
      modalType: '',
      isAlarmModalOpen: false,
      isModalAni: false
    }
  },
  computed: {
    // 타입에 맞는 프리셋 반환
    typePreeset() {
      return this.modalPresets[this.modalType] || this.modalPresets.system
    },
    // 글자크기
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
    this.openAlarmModal('system')
  },
  methods: {
    openAlarmModal(type) {
      this.modalType = type
      this.isModalAni = true
      this.isAlarmModalOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeAlarmModal(){
      this.isModalAni = false
      setTimeout(() => {
        this.isAlarmModalOpen = false
        document.body.style.overflow = ''
      }, 300)
    }
  }
}
</script>

<style scoped>
.settingContent{
  @apply w-full p-[32px_18px_118px];
}
.settingContent .title{
  @apply w-full font-extrabold text-[16px] leading-[19px] text-[#2B2436] mb-[12px];
}
.settingContent .box-group{
  @apply w-full mb-[52px] flex flex-col justify-start items-start gap-[12px];
}
.settingContent .box-group .box{
  @apply w-full rounded-[8px] border border-[#E3E0F9] bg-[#fff] p-[20px] flex justify-between items-end gap-[30px] last:flex-col last:gap-[8px];
}
.settingContent .box-group .box .txt{
  @apply flex flex-col justify-start items-start gap-[8px]
}
.settingContent .box-group .box .txt strong{
  @apply font-extrabold text-[16px] leading-[19px] text-[#2B2436];
}
.settingContent .box-group .box .txt span{
  @apply font-normal text-[13px] leading-[16px] text-[#6B6D95];
}
.settingContent .box-group .box p{
  @apply w-full font-normal text-[13px] leading-[16px] text-[#6B6D95];
}
.settingContent .note{
  @apply w-full flex flex-col justify-start items-center gap-[8px];
}
.settingContent .note p{
  @apply w-full flex justify-center items-center gap-[12px];
}
.settingContent .note p strong{
  @apply font-extrabold text-[11px] leading-[13px] text-[#ABADC5];
}
.settingContent .note p span{
  @apply font-medium text-[11px] leading-[13px] text-[#ABADC5];
}
.settingContent .note p button{
  @apply flex justify-start items-center gap-[12px]
}
.settingContent .note p button em{
  @apply font-medium text-[11px] leading-[13px] text-[#7139FF];
}
.checkbox input[type=checkbox]{
  @apply hidden;
}
.checkbox.custom01 input[type=checkbox] + label{
  @apply relative block w-[32px] h-[20px] bg-[#E3E0F9] rounded-[100px] transition-[0.2s]
}
.checkbox.custom01 input[type=checkbox]:checked + label{
  @apply bg-[#7139FF];
}
.checkbox.custom01 input[type=checkbox] + label span{
  @apply absolute top-[5px] left-[5px] inline-block w-[10px] h-[10px] rounded-full bg-white transition-[0.2s];
}
.checkbox.custom01 input[type=checkbox]:checked + label span{
  @apply left-[17px];
}
.checkbox.custom02{
  @apply w-full;
}
.checkbox.custom02 input[type=checkbox] + label{
  @apply w-full block pl-[28px] font-semibold text-[14px] leading-[20px] text-[#2B2436] bg-[url(~/assets/img/alarm/checkbox.png)] bg-left bg-[length:20px] bg-no-repeat;
}
.checkbox.custom02 input[type=checkbox]:checked + label{
  @apply bg-[url(~/assets/img/alarm/checkbox-checked.png)];
}
</style>