import type { App, Plugin } from 'vue';
import Buefy from '@ntohq/buefy-next';
import LmPageHeader from './components/LmPageHeader.vue';
import LmSidebar from './components/LmSidebar.vue';
import LmStatusTag from './components/LmStatusTag.vue';
import LmEmptyPlaceholder from './components/LmEmptyPlaceholder.vue';
import LmStatTile from './components/LmStatTile.vue';
import LmSearchBox from './components/LmSearchBox.vue';
import LmCard from './components/LmCard.vue';
import LmCopyText from './components/LmCopyText.vue';
import LmFields from './components/LmFields.vue';

export {
  LmPageHeader,
  LmSidebar,
  LmStatusTag,
  LmEmptyPlaceholder,
  LmStatTile,
  LmSearchBox,
  LmCard,
  LmCopyText,
  LmFields,
};

export interface LmUIOptions {
  /** 传给 Buefy 的选项,如 { defaultIconPack: 'mdi' } */
  buefy?: Record<string, unknown>;
}

const plugin: Plugin = {
  install(app: App, options: LmUIOptions = {}) {
    app.use(Buefy, { defaultIconPack: 'mdi', ...options.buefy });
    app
      .component('LmPageHeader', LmPageHeader)
      .component('LmSidebar', LmSidebar)
      .component('LmStatusTag', LmStatusTag)
      .component('LmEmptyPlaceholder', LmEmptyPlaceholder)
      .component('LmStatTile', LmStatTile)
      .component('LmSearchBox', LmSearchBox)
      .component('LmCard', LmCard)
      .component('LmCopyText', LmCopyText)
      .component('LmFields', LmFields);
  },
};

export default plugin;
