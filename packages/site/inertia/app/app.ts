/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '@/css/globals.css';
import { createSSRApp, h } from 'vue';
import type { DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from '@adonisjs/inertia/helpers';

import { InertiaProgress } from '@inertiajs/progress';
const appName = import.meta.env.VITE_APP_NAME || '';

import.meta.glob(['./assets/**']);

InertiaProgress.init();

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title}${appName && ' - ' + appName}`,

  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.vue`,
      import.meta.glob<DefineComponent>('../pages/**/*.vue')
    );
  },

  setup({ el, App, props, plugin }) {
    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
