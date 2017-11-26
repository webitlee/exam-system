import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/pages/nav/Nav'
import Footer from '@/pages/footer/Footer'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default : Login,
        nav : Nav,
        footer : Footer
      }
    }
  ]
})
