import Vue from 'vue'
import Router from 'vue-router'

import TG from '@/components/TG'
import LS from '@/components/LS'
import ResultTG from '@/components/ResultTG'
import ResultLS from '@/components/ResultLS'

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
        },
        {
            path: '/resultTG',
            component: ResultTG
        },
        {
            path: '/resultLS',
            component: ResultLS
        }
    ]
})