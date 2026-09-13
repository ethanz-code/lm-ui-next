<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
  }>(),
  { title: '' },
);
</script>

<template>
  <div class="lm-card">
    <div class="card-head" v-if="$slots.title || $slots.actions">
      <div class="card-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="card-actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div class="card-foot" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lm-card {
  background: #fff;
  box-shadow: 2px 2px 0 #f3f3f3;
  border: 1px solid #e6e6e6;

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #efefef;

    .card-title {
      font-weight: 600;
    }
  }

  .card-body {
    padding: 20px;
  }

  .card-foot {
    padding: 15px 20px;
    border-top: 1px solid #efefef;
    background: #fafafa;
  }
}
</style>
