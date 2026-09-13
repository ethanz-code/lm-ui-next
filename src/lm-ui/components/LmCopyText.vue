<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ text: string }>();

const copied = ref(false);

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text);
  } catch {
    const el = document.createElement('textarea');
    el.value = props.text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  copied.value = true;
  setTimeout(() => (copied.value = false), 1500);
}
</script>

<template>
  <a class="lm-copy-text" @click.prevent="copy" title="点击复制">
    <span class="text">{{ text }}</span>
    <b-icon :icon="copied ? 'check' : 'content-copy'" size="is-small" class="ml-1" />
  </a>
</template>

<style lang="scss" scoped>
.lm-copy-text {
  color: inherit;
  cursor: pointer;

  .icon {
    visibility: hidden;
  }
  &:hover {
    color: #0055d4;
    .icon {
      visibility: visible;
    }
  }
}
</style>
