import Vue from 'vue';
import app from './app.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueCookie from 'vue-cookie';
import _ from 'lodash';



import vote from './components/vote.vue';
import signIn from './components/signIn.vue';
import chart from './components/chart.vue';
import d from './components/d.vue';


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCookie);

if (_.includes(window.location.href, 'api')) {
  window.location.href = 'http://docs.dikonaprimer.apiary.io/';
} else {
  const routes = [
    { path: '/', component: vote, name: 'vote' },
    { path: '/register', component: signIn, name: 'signin' },
    { path: '/naprimer', component: d, name: 'd' },
    { path: '/dikonaprimer', component: chart, name: 'main' }
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
}

