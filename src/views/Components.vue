<script setup lang="ts">
import { reactive, computed } from 'vue';

// 基础控件演示数据
const state = reactive({
  switchOn: true,
  checked: true,
  sliderVal: 60,
  num: 50,
  date: new Date() as Date | null,
  time: null as Date | null,
  file: null as File | null,
  tags: ['Vue', 'TypeScript'] as string[],
  progress: 68,
  activeTab: 0,
  page: 2,
});

const crumbs = [
  { label: '首页' },
  { label: '组件' },
  { label: '总览' },
];

const buefy = (window as any).$buefy;

function toast(type: string) {
  buefy?.toast?.({ message: `${type} 提示`, type });
}

function confirmDemo() {
  buefy?.dialog?.confirm({
    title: '确认操作',
    message: '确定要执行吗?',
    confirmText: '确定',
    cancelText: '取消',
    type: 'is-primary',
  });
}
</script>

<template>
  <section>
    <lm-page-header title="组件总览">
      <span class="has-text-grey">库内组件与 Buefy 主题控件的完整陈列</span>
    </lm-page-header>

    <!-- ============ 库内组件 ============ -->

    <h2 class="title is-6 has-text-grey mt-5 mb-3">库内组件</h2>

    <div class="columns is-multiline">
      <div class="column is-6">
        <lm-card title="LmPageHeader 页头">
          <lm-page-header title="页面标题" subtitle="副标题" :count="12">
            <span class="is-size-7 has-text-grey">支持副标题、计数与操作插槽</span>
          </lm-page-header>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="LmStatTile 统计瓦片">
          <lm-stat-tile
            icon="account-multiple"
            :count="12480"
            label="订阅者"
            :details="[{ label: '已确认', value: 9821 }, { label: '已退订', value: 63 }]"
          />
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="LmStatusTag 状态胶囊">
          <div class="tags">
            <lm-status-tag type="success">成功</lm-status-tag>
            <lm-status-tag type="info">信息</lm-status-tag>
            <lm-status-tag type="warning">警告</lm-status-tag>
            <lm-status-tag type="danger">危险</lm-status-tag>
            <lm-status-tag>默认</lm-status-tag>
            <b-tag class="is-small">小号</b-tag>
          </div>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="LmSearchBox 搜索组合">
          <lm-search-box placeholder="输入后回车触发 search 事件" />
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="LmFields 明细网格">
          <lm-fields :fields="[
            { label: '名称', value: 'lm-ui-next' },
            { label: '协议', value: 'MIT' },
            { label: '仓库', value: 'ethanz-code/lm-ui-next' },
          ]" />
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="LmCopyText 点击复制">
          <p>
            API Token:<lm-copy-text text="lm-ui-next-demo-token-2026" />
            <span class="is-size-7 has-text-grey ml-2">悬停出现复制图标</span>
          </p>
        </lm-card>
      </div>

      <div class="column is-12">
        <lm-card title="LmEmptyPlaceholder 空态">
          <lm-empty-placeholder text="暂无数据" hint="数据产生后会显示在这里" />
        </lm-card>
      </div>
    </div>

    <!-- ============ 基础 ============ -->

    <h2 class="title is-6 has-text-grey mt-5 mb-3">基础</h2>

    <div class="columns is-multiline">
      <div class="column is-6">
        <lm-card title="Button 按钮">
          <div class="buttons">
            <b-button type="is-primary">主要</b-button>
            <b-button type="is-light is-outlined">次要</b-button>
            <b-button type="is-danger is-light">危险</b-button>
            <b-button type="is-primary" loading>加载中</b-button>
            <b-button type="is-primary" disabled>禁用</b-button>
            <b-button type="is-primary" size="is-small">小号</b-button>
            <b-button type="is-primary" icon-left="plus">带图标</b-button>
          </div>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Tooltip 文字提示">
          <p>
            悬停查看
            <b-tooltip label="我是提示内容" type="is-dark">
              <a>这里</a>
            </b-tooltip>
          </p>
        </lm-card>
      </div>
    </div>

    <!-- ============ 数据录入 ============ -->

    <h2 class="title is-6 has-text-grey mt-5 mb-3">数据录入</h2>

    <div class="columns is-multiline">
      <div class="column is-6">
        <lm-card title="Input / Select / Textarea">
          <b-field label="输入框">
            <b-input placeholder="常规输入" />
          </b-field>
          <b-field label="下拉选择">
            <b-select expanded>
              <option>选项一</option>
              <option>选项二</option>
            </b-select>
          </b-field>
          <b-field label="多行文本">
            <b-input type="textarea" placeholder="描述…" />
          </b-field>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Switch / Checkbox / Taginput">
          <b-field grouped>
            <b-switch v-model="state.switchOn" type="is-primary">开关</b-switch>
            <b-checkbox v-model="state.checked">复选框</b-checkbox>
          </b-field>
          <b-field label="标签输入">
            <b-taginput v-model="state.tags" icon="label-outline" placeholder="回车添加" />
          </b-field>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Datepicker / Timepicker">
          <b-field label="日期">
            <b-datepicker v-model="state.date" icon="calendar-today" locale="zh-CN" editable />
          </b-field>
          <b-field label="时间">
            <b-timepicker v-model="state.time" icon="clock-outline" locale="zh-CN" />
          </b-field>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Slider / Numberinput / Upload">
          <b-field label="滑块">
            <b-slider v-model="state.sliderVal" type="is-primary" show-value />
          </b-field>
          <b-field label="数字">
            <b-numberinput v-model="state.num" type="is-primary" min="0" max="100" />
          </b-field>
          <b-field label="上传">
            <b-upload v-model="state.file" type="is-primary">
              <a class="button is-light is-outlined">
                <b-icon icon="upload" size="is-small" />
                <span class="ml-1">{{ file ? file.name : '选择文件' }}</span>
              </a>
            </b-upload>
          </b-field>
        </lm-card>
      </div>
    </div>

    <!-- ============ 反馈 ============ -->

    <h2 class="title is-6 has-text-grey mt-5 mb-3">反馈</h2>

    <div class="columns is-multiline">
      <div class="column is-6">
        <lm-card title="Notification 通知">
          <b-notification type="is-info" aria-close-label="关闭">信息通知</b-notification>
          <b-notification type="is-success" aria-close-label="关闭">成功通知</b-notification>
          <b-notification type="is-danger" aria-close-label="关闭">危险通知</b-notification>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Toast / Dialog">
          <div class="buttons">
            <b-button type="is-success" @click="toast('is-success')">成功</b-button>
            <b-button type="is-danger is-light" @click="toast('is-danger')">失败</b-button>
            <b-button
              type="is-light is-outlined"
              @click="buefy?.dialog?.confirm({
                title: '确认操作',
                message: '确定要执行吗?',
                confirmText: '确定',
                cancelText: '取消',
                type: 'is-primary',
              })"
            >确认弹窗</b-button>
          </div>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Progress 进度条">
          <b-progress :value="state.progress" show-value format="percent" type="is-primary" />
          <div class="buttons mt-3">
            <b-button size="is-small" @click="state.progress = Math.max(0, state.progress - 10)">-10</b-button>
            <b-button size="is-small" @click="state.progress = Math.min(100, state.progress + 10)">+10</b-button>
          </div>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Skeleton 骨架屏">
          <b-skeleton :animated="true" width="90%" />
          <b-skeleton :animated="true" width="70%" />
          <b-skeleton :animated="true" width="45%" />
        </lm-card>
      </div>
    </div>

    <!-- ============ 导航与数据展示 ============ -->

    <h2 class="title is-6 has-text-grey mt-5 mb-3">导航与数据展示</h2>

    <div class="columns is-multiline">
      <div class="column is-6">
        <lm-card title="Tabs 标签页">
          <b-tabs v-model="state.activeTab" type="is-boxed">
            <b-tab-item label="标签一"><p class="has-text-grey">内容一</p></b-tab-item>
            <b-tab-item label="标签二"><p class="has-text-grey">内容二</p></b-tab-item>
          </b-tabs>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Pagination 分页">
          <b-pagination v-model="state.page" :total="86" :per-page="10" range-before="1" range-after="1" />
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Dropdown 下拉菜单">
          <b-dropdown aria-modal="true">
            <template #trigger>
              <b-button type="is-light is-outlined" icon-left="dots-horizontal">操作</b-button>
            </template>
            <b-dropdown-item icon="pencil-outline">编辑</b-dropdown-item>
            <b-dropdown-item icon="content-copy">复制</b-dropdown-item>
            <b-dropdown-item icon="trash-can-outline">删除</b-dropdown-item>
          </b-dropdown>
        </lm-card>
      </div>

      <div class="column is-6">
        <lm-card title="Breadcrumb 面包屑">
          <b-breadcrumb :model-value="crumbs" />
        </lm-card>
      </div>
    </div>
  </section>
</template>
