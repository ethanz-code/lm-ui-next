/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>;
  export default component;
}

declare module '@ntohq/buefy-next' {
  import type { Plugin } from 'vue';
  const Buefy: Plugin;
  export default Buefy;
}

declare module '@ntohq/buefy-next/src/scss/buefy.scss';
