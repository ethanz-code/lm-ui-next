<script setup lang="ts">
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  type: 'public',
  desc: '',
  enabled: true,
  optin: true,
  tags: ['产品', '周报'] as string[],
});

const submitted = ref(false);

function save() {
  submitted.value = true;
}
</script>

<template>
  <section>
    <lm-page-header title="新建列表" />

    <lm-card>
      <b-field label="名称" message="会在订阅页面显示,建议短一点">
        <b-input v-model="form.name" placeholder="例如:产品更新通知" />
      </b-field>

      <b-field label="类型">
        <b-select v-model="form.type" expanded>
          <option value="public">公开</option>
          <option value="private">私有</option>
        </b-select>
      </b-field>

      <b-field label="描述">
        <b-input v-model="form.desc" type="textarea" placeholder="一句话说明这个列表的用途" />
      </b-field>

      <b-field label="标签">
        <b-taginput v-model="form.tags" icon="label-outline" placeholder="回车添加" />
      </b-field>

      <b-field grouped>
        <b-checkbox v-model="form.enabled">启用</b-checkbox>
        <b-switch v-model="form.optin" type="is-primary">需要二次确认</b-switch>
      </b-field>

      <div class="buttons">
        <b-button type="is-primary" @click="save">保存</b-button>
        <b-button type="is-light">取消</b-button>
      </div>
    </lm-card>

    <p class="has-text-success mt-4" v-if="submitted">
      已保存:{{ form.name || '(未命名)' }} / {{ form.type }} / 标签 {{ form.tags.join('、') || '无' }}
    </p>
  </section>
</template>
