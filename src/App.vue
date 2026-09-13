<script setup lang="ts">
import type { LmMenuGroup } from './lm-ui/components/LmSidebar.vue';

const menu: LmMenuGroup[] = [
  {
    items: [
      { label: '总览', icon: 'view-dashboard-variant-outline', to: '/' },
      {
        label: '案例',
        icon: 'shape-plus-outline',
        children: [
          { label: '组件总览', icon: 'shape-plus-outline', to: '/components' },
          { label: '列表管理', icon: 'format-list-bulleted-square', to: '/lists' },
          { label: '表单', icon: 'form-select', to: '/form' },
          { label: '反馈', icon: 'message-alert-outline', to: '/feedback' },
        ],
      },
    ],
  },
];
</script>

<template>
  <div id="app">
    <nav class="navbar" role="navigation">
      <div class="navbar-brand">
        <span class="app-logo">
          <span class="logo-ring"></span>
          lm-ui-next
        </span>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end pr-4">
          <a class="navbar-item" @click.prevent="$router.go(0)">
            <b-icon icon="refresh" />
          </a>
          <a class="navbar-item">
            <span class="user-avatar"><span>N</span></span>
          </a>
        </div>
      </div>
    </nav>

    <div class="wrapper">
      <aside class="sidebar">
        <lm-sidebar :groups="menu" />
      </aside>
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1.35rem;
  color: #171717;

  .logo-ring {
    display: inline-block;
    width: 13px;
    height: 13px;
    border: 4px solid #0055d4;
    border-radius: 100%;
  }
}

.user-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: #ddd;
  font-size: 0.875rem;
  font-weight: bold;
}
</style>
