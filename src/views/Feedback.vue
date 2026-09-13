<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref(0);
const progress = ref(68);

const $buefy = (window as unknown as { $buefy: {
  toast: (o: { message: string; type: string }) => void;
  dialog: { confirm: (o: Record<string, unknown>) => void };
} }).$buefy;

function confirmSend() {
  $buefy.dialog.confirm({
    title: '发送确认邮件',
    message: '确定要向 3,204 位订阅者发送吗?',
    confirmText: '发送',
    cancelText: '取消',
    type: 'is-primary',
    onConfirm: () => $buefy.toast({ message: '已开始发送', type: 'is-success' }),
  });
}
</script>

<template>
  <section>
    <lm-page-header title="反馈类组件" />

    <div class="columns is-multiline">
      <div class="column is-half">
        <lm-card title="通知(左侧色条)">
          <b-notification type="is-info" aria-close-label="关闭">草稿已保存</b-notification>
          <b-notification type="is-success" aria-close-label="关闭">订阅者已添加</b-notification>
          <b-notification type="is-danger" aria-close-label="关闭">发送失败,请检查 SMTP 设置</b-notification>
        </lm-card>
      </div>

      <div class="column is-half">
        <lm-card title="Toast 与确认弹窗">
          <div class="buttons">
            <b-button type="is-primary" @click="$buefy.toast({ message: '保存成功', type: 'is-success' })">成功提示</b-button>
            <b-button type="is-danger is-light" @click="$buefy.toast({ message: '发送失败', type: 'is-danger' })">失败提示</b-button>
            <b-button type="is-light is-outlined" @click="confirmSend">确认弹窗</b-button>
          </div>
        </lm-card>
      </div>

      <div class="column is-half">
        <lm-card title="Tabs(带边框内容区)">
          <b-tabs v-model="activeTab" type="is-boxed">
            <b-tab-item label="基本信息"><p class="has-text-grey">这里放基本信息的内容。</p></b-tab-item>
            <b-tab-item label="高级设置"><p class="has-text-grey">这里放高级设置的内容。</p></b-tab-item>
            <b-tab-item label="日志" disabled><p class="has-text-grey">不可用。</p></b-tab-item>
          </b-tabs>
        </lm-card>
      </div>

      <div class="column is-half">
        <lm-card title="进度条">
          <b-progress :value="progress" show-value format="percent" type="is-primary" size="is-medium" />
          <div class="buttons mt-4">
            <b-button size="is-small" @click="progress = Math.max(0, progress - 10)">-10%</b-button>
            <b-button size="is-small" @click="progress = Math.min(100, progress + 10)">+10%</b-button>
          </div>
        </lm-card>
      </div>
    </div>
  </section>
</template>
