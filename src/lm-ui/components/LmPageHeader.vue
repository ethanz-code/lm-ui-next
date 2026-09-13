<script setup lang="ts">
defineProps<{
  /** 页面标题 */
  title: string;
  /** 副标题(灰色,跟在标题后) */
  subtitle?: string;
  /** 标题后括号里的计数 */
  count?: number | string | null;
}>();
</script>

<template>
  <header class="columns page-header">
    <div class="column">
      <h1 class="title is-4 mb-2">
        {{ title }}
        <span v-if="subtitle" class="has-text-grey-light">/ {{ subtitle }}</span>
        <span v-if="count !== undefined && count !== null">({{ count }})</span>
      </h1>
      <div class="is-size-7" v-if="$slots.default">
        <slot />
      </div>
    </div>
    <div class="column has-text-right" v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </header>
</template>
