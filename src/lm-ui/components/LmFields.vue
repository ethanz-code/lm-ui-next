<script setup lang="ts">
export interface LmField {
  label: string;
  value: string | number;
}

defineProps<{ fields: LmField[] }>();
</script>

<template>
  <div class="lm-fields">
    <p v-for="f in fields" :key="f.label">
      <label>{{ f.label }}</label>
      <span>{{ f.value }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.lm-fields {
  font-size: 0.875rem;

  p {
    line-height: 1.4rem;
    display: flex;
    flex-direction: row;
    padding-bottom: 6px;
  }
  label {
    font-weight: 600;
    min-width: 100px;
  }
}
</style>
