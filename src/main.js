import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from '@/locale'
import router from './router'
import NProgress from 'nprogress'
import VueCompositionAPI from '@vue/composition-api'
import VueLazyload from 'vue-lazyload'
import VueGtag from 'vue-gtag'
import { dailyTask } from '@/utils/common'
import { createApp, h } from 'vue-demi'
import '@/utils/filters'
import '@/assets/css/normalize.scss'
import '@/assets/css/global.scss'
import '@/assets/css/nprogress.css'
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

Vue.config.productionTip = false
Vue.config.devtools = true

Sentry.init({
  Vue,
  dsn: "https://b8d5df51c46a4b7a99e1544caf993039@o1130720.ingest.sentry.io/6174836",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

window.resetApp = () => {
  localStorage.clear()
  indexedDB.deleteDatabase('Music')
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
  })
  return '已重置应用，请刷新页面（按Ctrl/Command + R）'
}
console.log(
  '如出现问题，可尝试在本页输入 %cresetApp()%c 然后按回车重置应用。',
  'background: #eaeffd;color:#335eea;padding: 4px 6px;border-radius:3px;',
  'background:unset;color:unset;'
)

Vue.use(VueGtag, {
  config: { id: 'G-56ZKK4HM2V' },
})
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: errorimage,
  // loading: loadimage,
  attempt: 1,
})
Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

NProgress.configure({ showSpinner: false, trickleSpeed: 100 })
dailyTask()

createApp({
  i18n,
  store,
  router,
  render: () => h(App),
}).mount('#app')
