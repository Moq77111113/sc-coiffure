import { PageProps } from '@adonisjs/inertia/types'
import { Page } from '@inertiajs/core'
import { createInertiaApp } from '@inertiajs/vue3'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h, type DefineComponent } from 'vue'

export default function render(page: Page<PageProps>) {
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue', {
        eager: true,
      })
      return pages[`../pages/${name}.vue`]
    },

    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin)
    },
  })
}
