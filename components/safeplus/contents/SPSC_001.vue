<template>
  <div class="spContent">
    <div class="title" :class="zoomClass">구독 상품 선택</div>

    <div class="product-list">
      <div
        v-for="(item, idx) in products"
        :key="idx"
        class="product"
        :class="{ selected: selectedIdx === idx }"
        @click="selectedIdx = idx"
      >
        <div class="left">
          <strong :class="zoomClass">
            <em v-if="item.recommend">추천</em>{{ item.title }}
          </strong>
          <span :class="zoomClass">{{ item.subtitle }}</span>
          <b v-if="item.desc" :class="zoomClass">{{ item.desc }}</b>
        </div>
        <div class="right" :class="zoomClass">{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIdx: null,
      products: [
        {
          title: '월간 구독',
          subtitle: '매월 정기결제',
          price: '3,300원',
          recommend: false
        },
        {
          title: '6개월 구독',
          subtitle: '6개월씩 정기결제',
          desc: '월 2,933원 (11% 할인)',
          price: '17,600원',
          recommend: false
        },
        {
          title: '연간 구독',
          subtitle: '1년씩 정기결제',
          desc: '월 2,750원 (17% 할인)',
          price: '33,000원',
          recommend: true
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
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full mb-[44px];
}
.spContent .title{
  @apply w-full mb-[20px] font-bold text-[20px] leading-[24px] text-[#212121];
}
.product-list{
  @apply w-full flex flex-col justify-start items-start gap-[16px];
}
.product-list .product{
  @apply w-full bg-[#fff] p-[14px] pl-[16px] rounded-[10px] border border-[#E3E0F9] flex justify-between items-center;
}
.product-list .product.selected{
  @apply border-2 border-[#6F75F2] bg-[#EDEEFF] py-[13px];
}
.product-list .product .left{
  @apply flex flex-col justify-start items-start gap-[4px];
}
.product-list .product .left strong{
  @apply font-bold text-[16px] leading-[19px] text-[#2B2436] flex justify-start items-center gap-[8px];
}
.product-list .product .left strong em{
  @apply p-[6px_12px] inline-block rounded-[100px] bg-[#7139FF] font-extrabold text-[11px] leading-[13px] text-[#fff];
}
.product-list .product .left span{
  @apply font-medium text-[12px] leading-[14px] text-[#6F75F2];
}
.product-list .product .left b{
  @apply font-extrabold text-[12px] leading-[14px] text-[#6F75F2];
}
.product-list .product .right{
  @apply font-extrabold text-[20px] leading-[30px] text-[#2B2436];
}
</style>