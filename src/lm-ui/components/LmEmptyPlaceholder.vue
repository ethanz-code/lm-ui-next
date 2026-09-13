<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string;
    hint?: string;
  }>(),
  { text: '这里还是空的', hint: '' },
);
</script>

<template>
  <div class="has-text-centered p-6">
    <div class="mb-4">
      <b-icon icon="tray-remove" size="is-large" type="is-grey-light" />
    </div>
    <p class="has-text-grey">{{ text }}</p>
    <p class="has-text-grey-light is-size-7 mt-2" v-if="hint">{{ hint }}</p>
  </div>
</template>
