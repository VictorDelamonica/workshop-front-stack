import { createApp } from 'vue'

import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/svg-fontawesome-v6'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
    plugins: {},
    iconSet: quasarIconSet,
})
app.mount('#app')
