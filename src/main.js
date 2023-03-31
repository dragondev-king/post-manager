import { createApp } from 'vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import store from './store'
import router from './router'

const vuetify = createVuetify({
  components,
  directives
})

createApp(App).use(router).use(store).use(vuetify).mount('#app');
