import Vue from 'vue';
import app from './app.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueCookie from 'vue-cookie';



import vote from './components/vote.vue';
import signIn from './components/signIn.vue';
import chart from './components/chart.vue';
import NotFoundComponent from './components/notFound.vue';


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCookie);

const routes = [
  { path: '/', component: vote, name: 'vote' },
  { path: '/register', component: signIn, name: 'signin' },
  { path: '/dikonaprimer', component: chart, name: 'main' },
  { path: '*', component: NotFoundComponent }
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

