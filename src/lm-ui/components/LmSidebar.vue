<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

export interface LmMenuItem {
  label: string;
  icon?: string;
  /** 顶级路由项(激活时有右蓝条) */
  to?: string;
  /** 折叠子项(父项激活=蓝字浅灰底无蓝条;子项 exact-active 有蓝条) */
  children?: LmMenuItem[];
}

export interface LmMenuGroup {
  items: LmMenuItem[];
}

const props = defineProps<{ groups: LmMenuGroup[] }>();

const route = useRoute();
const expanded = reactive<Record<string, boolean>>({});

function isActive(item: LmMenuItem): boolean {
  return item.to !== undefined && route.path === item.to;
}

function isGroupActive(item: LmMenuItem): boolean {
  return (item.children ?? []).some((c) => isActive(c));
}

function isExpanded(item: LmMenuItem): boolean {
  if (!(item.label in expanded)) return isGroupActive(item);
  return expanded[item.label];
}

function onGroupToggle(item: LmMenuItem, state: boolean) {
  expanded[item.label] = state;
}

void props;
</script>

<template>
  <b-sidebar
    position="static"
    :fullheight="true"
    :overlay="false"
    :model-value="true"
  >
    <div class="pt-6">
      <b-menu>
        <b-menu-list v-for="(group, gi) in groups" :key="gi">
          <template v-for="item in group.items" :key="item.label">
            <b-menu-item
              v-if="item.children && item.children.length"
              :icon="item.icon"
              :label="item.label"
              :model-value="isGroupActive(item)"
              :expanded="isExpanded(item)"
              @update:model-value="(s: boolean) => onGroupToggle(item, s)"
            >
              <b-menu-item
                v-for="child in item.children"
                :key="child.label"
                :icon="child.icon"
                :label="child.label"
                :to="child.to"
                tag="router-link"
                :model-value="isActive(child)"
              />
            </b-menu-item>
            <b-menu-item
              v-else
              :icon="item.icon"
              :label="item.label"
              :to="item.to"
              tag="router-link"
              :model-value="isActive(item)"
            />
          </template>
        </b-menu-list>
      </b-menu>
    </div>
  </b-sidebar>
</template>
