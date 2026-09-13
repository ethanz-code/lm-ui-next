<script setup lang="ts">
export interface StatDetail {
  label: string;
  value: number | string;
}

withDefaults(
  defineProps<{
    icon: string;
    count: number | string;
    label: string;
    details?: StatDetail[];
  }>(),
  { details: () => [] },
);
</script>

<template>
  <div class="lm-stat-tile">
    <div class="level is-mobile" style="width: 100%">
      <div class="level-left">
        <div>
          <p>
            <b-icon :icon="icon" size="is-medium" />
            <span class="big-count ml-2">{{ count }}</span>
          </p>
          <p class="has-text-grey mt-2">{{ label }}</p>
        </div>
      </div>
      <div class="level-right" v-if="details.length">
        <div class="fields">
          <p v-for="d in details" :key="d.label">
            <label>{{ d.label }}</label>
            <b>{{ d.value }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lm-stat-tile {
  background: #fff;
  box-shadow: 2px 2px 0 #f3f3f3;
  border: 1px solid #e6e6e6;
  padding: 30px;
  display: flex;
  align-items: center;

  .big-count {
    font-size: 2rem;
    font-weight: 700;
    vertical-align: middle;
  }

  .fields {
    font-size: 0.875rem;
    p {
      line-height: 1.6rem;
      display: flex;
      flex-direction: row;
    }
    label {
      font-weight: 600;
      min-width: 90px;
    }
  }
}
</style>
