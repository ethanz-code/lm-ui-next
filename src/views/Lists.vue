<script setup lang="ts">
import { ref, computed } from 'vue';

interface ListRow {
  id: number;
  name: string;
  tags: string[];
  type: 'public' | 'private';
  typeLabel: string;
  optin: 'single' | 'double';
  optinLabel: string;
  count: number;
  date: string;
}

const rows = ref<ListRow[]>([
  { id: 1, name: '产品更新通知', tags: ['产品'], type: 'public', typeLabel: '公开', optin: 'single', optinLabel: '单次确认', count: 5230, date: '2026-08-01' },
  { id: 2, name: 'VIP 客户', tags: ['内部'], type: 'private', typeLabel: '私有', optin: 'double', optinLabel: '双次确认', count: 342, date: '2026-07-15' },
  { id: 3, name: '每周精选', tags: ['周报', '运营'], type: 'public', typeLabel: '公开', optin: 'double', optinLabel: '双次确认', count: 6908, date: '2026-06-20' },
]);

const checked = ref<ListRow[]>([]);
const query = ref('');
const isEditOpen = ref(false);
const editing = ref<ListRow | null>(null);

const filtered = computed(() =>
  query.value
    ? rows.value.filter((r) => r.name.includes(query.value.trim()))
    : rows.value,
);

const $buefy = (window as unknown as { $buefy: {
  toast: (o: { message: string; type: string }) => void;
  dialog: { confirm: (o: Record<string, unknown>) => void };
} }).$buefy;

function confirmDelete(row: ListRow) {
  $buefy.dialog.confirm({
    title: '删除列表',
    message: `确定要删除「${row.name}」吗?这个操作无法撤销。`,
    confirmText: '删除',
    cancelText: '取消',
    type: 'is-danger',
    onConfirm: () => {
      rows.value = rows.value.filter((r) => r.id !== row.id);
      $buefy.toast({ message: `已删除「${row.name}」`, type: 'is-success' });
    },
  });
}

function saveEdit() {
  isEditOpen.value = false;
  $buefy.toast({ message: '已保存', type: 'is-success' });
}
</script>

<template>
  <section>
    <lm-page-header title="列表" :count="filtered.length">
      <a>归档列表 →</a>
    </lm-page-header>

    <div class="columns mb-0">
      <div class="column is-6">
        <lm-search-box v-model="query" placeholder="搜索列表名称" @search="() => {}" />
      </div>
      <div class="column has-text-right">
        <b-button type="is-primary" icon-left="plus">新建</b-button>
      </div>
    </div>

    <b-table :data="filtered" hoverable checkable paginated per-page="5" pagination-position="both">
      <template #top-left>
        <div class="actions" v-if="checked.length">
          <a class="a has-text-danger" @click="$buefy?.toast && $buefy.toast({ message: `删除 ${checked.length} 条`, type: 'is-danger' })">
            <b-icon icon="trash-can-outline" size="is-small" /> 删除
          </a>
          <span class="a has-text-grey is-size-7">已选 {{ checked.length }} 条</span>
        </div>
      </template>

      <b-table-column v-slot="props" field="name" label="名称" sortable width="30%">
        <a @click="editing = props.row; isEditOpen = true">{{ props.row.name }}</a>
        <b-taglist>
          <b-tag v-for="t in props.row.tags" :key="t" class="is-small">{{ t }}</b-tag>
        </b-taglist>
      </b-table-column>

      <b-table-column v-slot="props" field="type" label="类型" width="22%">
        <div class="tags">
          <lm-status-tag :type="props.row.type === 'public' ? 'info' : 'warning'">{{ props.row.typeLabel }}</lm-status-tag>
          <lm-status-tag :type="props.row.optin === 'double' ? 'success' : ''">
            {{ props.row.optinLabel }}
          </lm-status-tag>
        </div>
      </b-table-column>

      <b-table-column v-slot="props" field="count" label="订阅者" numeric centered sortable>
        {{ props.row.count.toLocaleString() }}
      </b-table-column>

      <b-table-column v-slot="props" field="date" label="创建时间" sortable>{{ props.row.date }}</b-table-column>

      <b-table-column v-slot="props" cell-class="actions" align="right">
        <a @click="editing = props.row; isEditOpen = true"><b-icon icon="pencil-outline" size="is-small" /></a>
        <a @click="confirmDelete(props.row)"><b-icon icon="trash-can-outline" size="is-small" /></a>
      </b-table-column>

      <template #empty>
        <lm-empty-placeholder text="没有匹配的列表" hint="换个关键词试试" />
      </template>
    </b-table>

    <b-modal v-model="isEditOpen" :width="620">
      <div class="modal-card" v-if="editing">
        <div class="modal-card-head">
          <p class="modal-card-title has-text-weight-semibold">编辑「{{ editing.name }}」</p>
        </div>
        <div class="modal-card-body">
          <b-field label="名称">
            <b-input v-model="editing.name" />
          </b-field>
          <b-field label="描述">
            <b-input type="textarea" placeholder="一句话说明这个列表的用途" />
          </b-field>
          <lm-fields :fields="[
            { label: '订阅者', value: editing.count.toLocaleString() },
            { label: '创建时间', value: editing.date },
          ]" />
        </div>
        <div class="modal-card-foot">
          <b-button type="is-primary" @click="saveEdit">保存</b-button>
          <b-button type="is-light" @click="isEditOpen = false">取消</b-button>
        </div>
      </div>
    </b-modal>
  </section>
</template>
