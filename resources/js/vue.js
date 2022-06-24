import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import PrimeVue from 'primevue/config'
import AutoComplete from 'primevue/autocomplete'
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Dropdown from 'primevue/dropdown'
import Editor from 'primevue/editor'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Tooltip from 'primevue/tooltip'
import TextArea from 'primevue/textarea'
import Message from 'primevue/message'

createInertiaApp({
  title: (title) => `${title} - RSIA Stella Maris`,
  resolve: (name) => import(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(PrimeVue)
      .mixin({ methods: { route } })
      .directive('tooltip', Tooltip)
      .component('AutoComplete', AutoComplete)
      .component('Button', Button)
      .component('Badge', Badge)
      .component('Card', Card)
      .component('Column', Column)
      .component('DataTable', DataTable)
      .component('Dropdown', Dropdown)
      .component('Editor', Editor)
      .component('InputNumber', InputNumber)
      .component('InputText', InputText)
      .component('Message', Message)
      .component('TextArea', TextArea)
      .mount(el)
  },
})

InertiaProgress.init({
  color: '#c32773c4',
})
