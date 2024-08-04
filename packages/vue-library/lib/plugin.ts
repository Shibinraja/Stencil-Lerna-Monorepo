import { Plugin } from 'vue';
import { defineCustomElements } from '@workspace/stencil/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};
