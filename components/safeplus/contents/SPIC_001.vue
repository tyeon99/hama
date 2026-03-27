<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="spContent">
    <div class="p-intro">
      <div 
        v-for="(item, idx) in boxes" 
        :key="idx" 
        class="box"
      >
        <img width="60" :src="require(`~/assets/img/safeplus/${item.img}`)">
        <div class="txt">
          <strong :class="zoomClass" v-html="item.title"></strong>
          <span :class="zoomClass" v-html="item.txt"></span>
        </div>
        <div class="btn-group">
          <button
            v-if="item.showPreview"
            class="preview"
            @click="openPreview(item)"
          >
            미리보기
          </button>
          <button @click="openDetailOffcanvas(item)">상세보기</button>
        </div>
      </div>
    </div>
    <!-- 상세보기 바텀시트 -->
    <DetailOffcanvas
      v-if="isDetailOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      :contentData="detailContent"
      @close-detailOffcanvas="closeDetailOffcanvas"
    />
  </div>
</template>

<script>
import DetailOffcanvas from '~/components/common/DetailOffcanvas'

export default {
    components: {
      DetailOffcanvas
    },
  data() {
    return {
      isOffcanvasAni: false,
      isDetailOffcanvasOpen: false,
      detailContent: {},
      boxes: [
        {
          img: 'sp-pbox-img01.png',
          title: '보이스피싱 피해 보상',
          txt: '사고당 최대 500만원 피싱·스미싱 피해 보상<br> (본인부담금 5만원)',
          showPreview: false,
          detailTitle: '보이스피싱 피해 보상',
          detailTxts: [
            '보상 대상: 하마터면 안심플러스 구독 고객이며, 선물받기 구독 고객도 포함됩니다.',
            '보상 범위: 보이스피싱, 파밍, 스미싱, 메모리해킹 등 사이버 금융범죄 피해를 대상으로 합니다.<br>보상 한도: 사고당 최대 500만원까지 보상되며, 본인 부담금은 사고당 5만원 공제됩니다.',
            '보상 적용 조건: 서비스 구독 유지 기간 중 사고가 발생해야 하며, 구독 후 익일 0시부터 효력이 발생합니다.',
            '보상 조건: 사고 발생 시점에 최근 1년 내 완료한 AI피싱체험 이력이 5종 이상일 때 적용됩니다.',
            '피해 보상 절차: 피해 발생 시 즉시 경찰서에 신고하고 사건사고사실확인원 등 증빙을 발급받은 뒤, 하마터면 안심플러스 고객센터를 통해 보상을 접수합니다.',
            '심사 및 지급: 사고 조사와 지급 심사 후 보상금이 지급됩니다.<br>보상 제외: 고의·공모, 개인정보 자진 노출로 인한 사고, 해외 사고, 법인계좌 피해, 가상화폐 관련 피해, 인터넷 직거래 사기 및 인터넷 쇼핑몰 사기 등은 제외됩니다.',
            '유의사항: 유사한 보상 서비스를 여러 개 가입했더라도 비례 보상 원칙에 따라 실제 손해 비용 내에서 나누어 지급되며, 상세 내용은 서비스 이용약관에 따릅니다.<br>보상서비스는 가입자에게 무료로 제공하는 서비스로 서비스 공급사인 (주)씽크풀의 사정에 따라 변경 또는 종료될 수 있으며, 그 내용을 사전에 알려드립니다.'
          ]
        },
        {
          img: 'sp-pbox-img02.png',
          title:'부모님, 가족에게 선물하기',
          txt: '휴대폰 번호만으로 부모님이나 가족에게 안심플러스를 선물할 수 있습니다.<br>선물받은 구독자의 체험 결과를 공유받고 대응 상태를 케어할 수 있습니다.',
          showPreview: false,
          detailTitle: '부모님, 가족에게 선물하기',
          detailTxts: [
            '휴대폰 번호만으로 부모님과 가족에게 안심플러스를 간편하게 선물할 수 있습니다.',
            '보이스피싱 피해는 금전 손실을 넘어 죄책감과 불안으로 이어질 수 있습니다. 안심플러스는 피해 시 보상과 함께 다시 안심할 수 있도록 돕습니다.',
            '선물받는 분에게는 별도의 요금이 청구되지 않으며, 결제와 정기결제 관리는 선물한 분 계정에서 진행됩니다.',
            '선물받는 분이 5일 내 등록하지 않으면 선물과 결제가 자동으로 취소됩니다.'
          ]
        },
        {
          img: 'sp-pbox-img03.png',
          title: '하마터면 AI 예방 체험',
          txt: '최신 피싱 사례를 AI와 대화형으로 체험하는 실전 예방 훈련<br>(AI피싱체험 2종 무료체험 / 전체 체험은 구독 이용)',
          showPreview: true,
          previewUrl: 'https://hama.thinkpool.com/TP01004A/main',
          detailTitle: '하마터면 AI 예방 체험',
          detailTxts: [
            '하마터면 AI피싱체험 메뉴에서 사용',
            '최신 피싱 사례를 AI와 채팅·음성대화로 체험할 수 있는 대화형 시뮬레이션입니다.',
            '실제와 유사한 사기 수법을 안전하게 경험하며 실전 대응력을 높일 수 있습니다.',
            '체험을 마치면 결과 평가와 함께 사기 수법, 예방법, 대처법을 확인할 수 있습니다.',
            '구독회원은 하마터면 AI피싱체험에서 제공하는 모든 유료전용 체험을 이용할 수 있습니다.',
            '선물받은 구독자의 체험 결과를 공유받아 예방 대응 상태를 살피고, 필요한 케어까지 이어갈 수 있습니다.'
          ]
        },
        {
          img: 'sp-pbox-img04.png',
          title: '피싱 정보',
          txt: '실시간 피싱 주의보와 최신 피해 사례를 빠르게 확인<br>앱 설치 시 푸시 알림 제공',
          showPreview: true,
          previewUrl: 'https://hama.thinkpool.com/TP01004A/main',
          detailTitle: '피싱 정보',
          detailTxts: [
            '하마터면 오늘의 보이스 피싱 경보 메뉴에서 조회',
            '최신 보이스피싱·스미싱 사례와 주의 정보를 한곳에서 빠르게 확인할 수 있습니다.',
            '새롭게 등장하는 사기 수법과 실제 피해 사례를 통해 현재 어떤 위험이 반복되는지 파악할 수 있습니다.',
            '각 사례별 핵심 수법, 주의 포인트, 예방법을 함께 확인하며 실생활 대응에 바로 활용할 수 있습니다.',
            '실시간에 가까운 정보 흐름을 바탕으로 변화하는 피싱 위협에 꾸준히 대비할 수 있으며, 앱 설치 시 푸시 알림으로도 받아볼 수 있습니다.'
          ]
        }
      ]
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
  methods: {
    openDetailOffcanvas (item) {
      this.detailContent = item
      this.isOffcanvasAni = true
      this.isDetailOffcanvasOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeDetailOffcanvas () {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isDetailOffcanvasOpen = false
        document.body.style.overflow = ''
      }, 300)
    },
    openPreview(item){
      const width = 674;
      const height = 800;
      
      // 중앙 정렬
      const left = (window.screen.width / 2) - (width / 2);
      const top = (window.screen.height / 2) - (height / 2);
      const specs = `width=${width},height=${height},left=${left},top=${top},location=no,toolbar=no,menubar=no,status=no`;
      const url = item.previewUrl

      window.open(url, '_blank', specs);
    }
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full p-[24px_16px_40px];
}
.spContent .p-intro{
  @apply w-full flex flex-col justify-start items-start gap-[12px];
}
.spContent .p-intro .box{
  @apply relative flex-1 w-full p-[12px_16px] rounded-[12px] bg-[#fff] flex justify-start items-center gap-[15px];
  box-shadow: 0px 0px 8px 0px #00000014;
}
.spContent .p-intro .box .txt{
  @apply flex flex-col justify-start items-start gap-2 pb-[25px];
}
.spContent .p-intro .box .txt strong{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#2B2436];
}
.spContent .p-intro .box .txt span{
  @apply font-medium text-[13px] leading-[17px] text-[#6B6D95];
}
.spContent .p-intro .box .btn-group{
  @apply absolute bottom-3 right-3 flex justify-end items-center gap-1;
}
.spContent .p-intro .box .btn-group button{
  @apply p-[4px_12px] rounded-[100px] bg-[#6B4EFF] text-[#fff] font-extrabold text-[11px] leading-[13px];
}
.spContent .p-intro .box .btn-group button.preview{
  @apply bg-[#FF507A];
}
</style>