<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ placeholder?: string }>();
const emit = defineEmits<{ search: [query: string] }>();

const query = ref('');

function submit() {
  emit('search', query.value);
}
</script>

<template>
  <form @submit.prevent="submit">
    <b-field class="lm-search-box">
      <b-input v-model="query" expanded icon="magnify" :placeholder="props.placeholder ?? '搜索关键词'" />
      <p class="controls">
        <b-button native-type="submit" type="is-primary" icon-left="magnify" />
      </p>
    </b-field>
  </form>
</template>
