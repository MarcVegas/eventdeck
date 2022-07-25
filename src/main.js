import { createApp } from 'vue'
import App from './App.vue'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
//Icons
import ViewDashboard from 'vue-material-design-icons/ViewDashboard.vue'
import Feather from 'vue-material-design-icons/Feather.vue'
import Poll from 'vue-material-design-icons/Poll.vue'
import AccountCog from 'vue-material-design-icons/AccountCog.vue'
import TuneVariant from 'vue-material-design-icons/TuneVariant.vue'

import './index.css'
import './css/shared.css'

const app = createApp(App)
app.component('ViewDashboard', ViewDashboard)
    .component('Feather', Feather)
    .component('Poll', Poll)
    .component('AccountCog', AccountCog)
    .component('TuneVariant', TuneVariant)

app.use(VueChartkick)

app.mount('#app')
