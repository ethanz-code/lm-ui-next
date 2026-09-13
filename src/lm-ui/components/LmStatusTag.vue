<script setup lang="ts">
withDefaults(
  defineProps<{
    /** 状态色,对应 lm.scss 中的胶囊底色 */
    type?: '' | 'success' | 'info' | 'warning' | 'danger' | 'primary';
    size?: '' | 'is-small' | 'is-medium';
  }>(),
  { type: '', size: '' },
);
</script>

<template>
  <b-tag :class="type" :size="size">
    <slot />
  </b-tag>
</template>
