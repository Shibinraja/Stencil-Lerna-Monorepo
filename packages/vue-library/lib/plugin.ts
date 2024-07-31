import { Plugin } from 'vue';
import { defineCustomElements } from 'gantt-component/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};
