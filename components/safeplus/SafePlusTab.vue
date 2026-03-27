<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="tab-container">
    <button
      :class="[
        'tab-item',
        { active: activeTab === 'subscribe', disabled: isSubscriber },
      ]"
      :disabled="isSubscriber"
      @click="handleSubscribeClick"
    >
      구독하기
    </button>
    <button
      :class="['tab-item', { active: activeTab === 'gift' }]"
      @click="$emit('change', 'gift')"
    >
      선물하기
    </button>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      default: 'subscribe',
    },
    isSubscriber: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSubscribeClick() {
      if (!this.isSubscriber) {
        this.$emit('change', 'subscribe')
      }
    },
  },
}
</script>

<style scoped>
.tab-container {
  @apply flex w-full px-4 py-9;
}
.tab-item {
  @apply flex-1 py-3 text-center text-[#C0B8E8] bg-white border-2 border-solid border-[#836bff] no-underline text-lg font-extrabold cursor-pointer leading-[21px];
}
.tab-item.active {
  @apply bg-[#836bff] text-white border-0;
}
.tab-item.disabled {
  @apply bg-[#E5E5E5] text-[#999] border-[#D0D0D0] cursor-not-allowed;
}
</style>
