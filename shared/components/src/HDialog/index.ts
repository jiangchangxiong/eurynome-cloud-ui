import type { App } from 'vue';

import HDialog from './HDialog.vue';

HDialog.install = (app: App): void => {
  app.component(HDialog.name, HDialog);
};

export { HDialog };
