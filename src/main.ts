import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// @TODO: 후에 Any 에서 specific type으로 변경하기
createApp(App as any).use(store).use(router).mount('#app')
