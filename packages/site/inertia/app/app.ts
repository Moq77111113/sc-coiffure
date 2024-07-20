/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '@/css/globals.css'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/vue3'
import { MotionPlugin } from '@vueuse/motion'
import type { DefineComponent } from 'vue'
import { createSSRApp, h } from 'vue'
const appName = import.meta.env.VITE_APP_NAME || ''

import.meta.glob(['./assets/**'])

InertiaProgress.init()

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title}${appName && ' - ' + appName}`,

  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.vue`,
      import.meta.glob<DefineComponent>('../pages/**/*.vue'),
    )
  },

  setup({ el, App, props, plugin }) {
    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .use(MotionPlugin)
      .mount(el)
  },
})
