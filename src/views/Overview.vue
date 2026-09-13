<script setup lang="ts">
import { ref } from 'vue';
import type { StatDetail } from '../lm-ui/components/LmStatTile.vue';

interface SubscriberRow {
  name: string;
  email: string;
  status: string;
  type: 'success' | 'warning' | 'danger';
  date: string;
}

const stats: Array<{ icon: string; count: number | string; label: string; details: StatDetail[] }> = [
  { icon: 'format-list-bulleted-square', count: 3, label: '列表', details: [
    { label: '公开', value: 1 }, { label: '私有', value: 2 },
  ] },
  { icon: 'account-multiple', count: 12480, label: '订阅者', details: [
    { label: '已确认', value: 9821 }, { label: '已退订', value: 63 },
  ] },
  { icon: 'rocket-launch-outline', count: 2, label: '进行中的活动', details: [
    { label: '今日发送', value: 3204 },
  ] },
  { icon: 'email-outline', count: '99.2%', label: '到达率', details: [] },
];

const rows = ref<SubscriberRow[]>([
  { name: '王小明', email: 'xiaoming@example.com', status: '已确认', type: 'success', date: '2026-09-13 10:24' },
  { name: '李华', email: 'lihua@example.com', status: '待确认', type: 'warning', date: '2026-09-13 09:18' },
  { name: '张三', email: 'zhangsan@example.com', status: '已退订', type: 'danger', date: '2026-09-12 22:40' },
]);
</script>

<template>
  <section>
    <lm-page-header title="总览" count="12,480">
      <span class="has-text-grey">数据每天凌晨更新</span>
    </lm-page-header>

    <div class="columns is-multiline mb-0">
      <div class="column is-6" v-for="s in stats" :key="s.label">
        <lm-stat-tile :icon="s.icon" :count="s.count" :label="s.label" :details="s.details" />
      </div>
    </div>

    <lm-card title="最近订阅">
      <template #actions>
        <router-link to="/lists" class="is-size-7">查看全部 →</router-link>
      </template>
      <b-table :data="rows" hoverable>
        <b-table-column v-slot="props" field="name" label="姓名">{{ props.row.name }}</b-table-column>
        <b-table-column v-slot="props" field="email" label="邮箱">{{ props.row.email }}</b-table-column>
        <b-table-column v-slot="props" field="status" label="状态">
          <lm-status-tag :type="props.row.type">{{ props.row.status }}</lm-status-tag>
        </b-table-column>
        <b-table-column v-slot="props" field="date" label="时间" width="180">{{ props.row.date }}</b-table-column>
      </b-table>
    </lm-card>
  </section>
</template>
