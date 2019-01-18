import Vue from 'vue'
import Router from 'vue-router'

import TG from '@/components/TG'
import LS from '@/components/LS'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: TG
        },
        {
            path: '/LS',
            component: LS
        }
    ]
})