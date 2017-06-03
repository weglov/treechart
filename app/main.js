import Vue from 'vue';
import app from './app.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueCookie from 'vue-cookie';



import vote from './components/vote.vue';
import signIn from './components/signIn.vue';
import chart from './components/chart.vue'


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCookie);


const routes = [
  { path: '/vote', component: vote, name: 'vote' },
  { path: '/register', component: signIn, name: 'signin' },
  { path: '/', component: chart, name: 'main' }
];

const router = new VueRouter({
  // mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  render: h => h(app),
}).$mount('#app');
