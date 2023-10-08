import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTodo from '@/views/AllTodo'
import ActiveTodo from '@/views/ActiveTodo'
import CompletedTodo from '@/views/CompletedTodo'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/all' },
    { path: '/all', component: AllTodo },
    { path: '/active', component: ActiveTodo },
    { path: '/completed', component: CompletedTodo },
  ]
})

export default router