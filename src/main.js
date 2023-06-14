import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'
import { createAuth0 } from '@auth0/auth0-vue';

createApp(App).use(bootstrap).use(
    createAuth0({
        domain: "dev-oempr7he.eu.auth0.com",
        clientId: "noc9WVhpChShUB5upXEeEEXKxvJNmL8j",
        authorizationParams: {
          redirect_uri: window.location.origin,
          audience: "http://localhost:8080/~/api/",
        }
    })
).mount('#app')