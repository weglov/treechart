import Vue from 'vue';
import app from './app.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';



import vote from './vote.vue';
import signIn from './signIn.vue';
import chart from './chart.vue'


Vue.use(VueResource);
Vue.use(VueRouter);


const routes = [
  { path: '/vote', component: vote, name: 'vote' },
  { path: '/signin', component: signIn, name: 'signin' },
  { path: '/', component: chart, name: 'main' }
];

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  render: h => h(app),
}).$mount('#app');
