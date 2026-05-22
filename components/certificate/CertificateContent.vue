<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="CertificateContent">

    <!-- 수료증 영역 -->
    <div ref="certificateRef" class="certificate">
      <img src="~/assets/img/common/certificate.png" alt="수료증">
      <div class="name">홍 길 동</div>
      <div class="date">2026년 05월 19일</div>
    </div>

    <!-- 다운로드 버튼 -->
    <div class="download">
      <button @click="downloadCertificate">
        수료증 다운로드
      </button>
      <p>수료증 이미지를 다운로드 할 수 있습니다.</p>
    </div>

    <div class="note">
      <p>
        <strong>(주)씽크풀 </strong>
        <span>사업자 등록번호 116-81-54775</span>
        <span>대표 : 김동진</span>
      </p>
      <p>
        <strong>안심플러스 고객센터</strong>
        <button>
          <img width="18" src="~/assets/img/safeplus/kakao-logo.png" />
          <em>카카오채널 채팅문의</em>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async downloadCertificate() {
      if (!window.html2canvas) {
        alert('라이브러리가 아직 로드되지 않았습니다. 잠시 후 다시 시도해 주세요.')
        return
      }

      const target = this.$refs.certificateRef
      if (!target) return

      try {
        // html2canvas 옵션 추가
        const canvas = await window.html2canvas(target, {
          useCORS: true,
          scale: 2, // 고화질
          logging: false,
          
          onclone: (clonedDocument) => {
            const clonedName = clonedDocument.querySelector('.certificate .name')
            const clonedDate = clonedDocument.querySelector('.certificate .date')
            
            if (clonedName) {
              clonedName.style.setProperty('margin-top', '-16px', 'important')
            }
            
            if (clonedDate) {
              clonedDate.style.setProperty('margin-top', '-12px', 'important')
            }
          }
        })

      canvas.toBlob((blob) => {
          if (!blob) {
            alert('이미지 변환에 실패했습니다.')
            return
          }

          const blobUrl = URL.createObjectURL(blob)
          
          const link = document.createElement('a')
          link.href = blobUrl
          link.download = '피싱_예방_체험_수료증.png'
          
          document.body.appendChild(link)
          link.click()
          
          document.body.removeChild(link)
          URL.revokeObjectURL(blobUrl)
        }, 'image/png')
        
      } catch (error) {
        alert('수료증 다운로드에 실패했습니다.')
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

.CertificateContent {
  @apply w-full flex flex-col justify-start items-center p-[36px_16px_109px];
}
.certificate{
  @apply w-full max-w-[600px] mb-9 relative mx-auto;
}
.certificate img {
  @apply w-full h-auto block; 
}
.certificate .name {
  @apply font-extrabold text-[#101B27] absolute left-[50%] -translate-x-[50%];
  font-family: 'Nanum Myeongjo', serif;
  font-size: 6.5vw; 
  top: 36%;
}
.certificate .date {
  @apply font-bold text-[#101B27] tracking-[10%] absolute left-[50%] -translate-x-[50%];
  font-family: 'Nanum Myeongjo', serif;
  font-size: 3vw; 
  top: 70%;
}
@media (min-width: 674px) {
  .certificate .name {
    font-size: 44px; 
    top: 36%;
  }
  .certificate .date {
    font-size: 18px;
    top: 70%;
  }
}
.CertificateContent .download {
  @apply w-full pb-[62px] px-[8px];
}
.CertificateContent .download button {
  @apply w-full h-[52px] border-2 border-[#6B4EFF] rounded-[48px] bg-[#6B4EFF] font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#fff] pt-[3px] tracking-wide mb-5;
  box-shadow: 0px 4px 4px 0px #00000024;
  transition: background-color 0.3s ease, border-color 0.3s ease,
    opacity 0.3s ease;
}
.CertificateContent .download button.disabled {
  @apply bg-[#D2D4EF] border-[#D2D4EF] cursor-not-allowed opacity-60;
}
.CertificateContent .download p{
  @apply w-full text-center font-normal text-[14px] leading-[20px] text-[#6B6D95];
}
.CertificateContent .note {
  @apply w-full flex flex-col justify-start items-center gap-[8px];
}
.CertificateContent .note p {
  @apply w-full flex justify-center items-center gap-[12px];
}
.CertificateContent .note p strong {
  @apply font-extrabold text-[11px] leading-[13px] text-[#ABADC5];
}
.CertificateContent .note p span {
  @apply font-medium text-[11px] leading-[13px] text-[#ABADC5];
}
.CertificateContent .note p button {
  @apply flex justify-start items-center gap-[12px];
}
.CertificateContent .note p button em {
  @apply font-medium text-[11px] leading-[13px] text-[#7139FF];
}
</style>
