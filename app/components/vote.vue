<template>
  <div id='app_vote'>
    <div class='button_item' v-for='item in data'>
      <button-component v-bind:show='show' v-bind:alertshow='alertShow' v-bind:info='item'></button-component>  
    </div>
    <a class='logout' v-on:click='logout()'>logout</a>
    <alert v-bind:show='show' v-bind:text='text' v-bind:type='type'></alert>
  </div>
</template>

<script>
import _ from 'lodash';
import sample_data from '../config/data.js';
import buttonComponent from './button.vue';
import alert from './alert.vue';
import headerAdmin from './headerAdmin.vue';


export default {
  components: {
    buttonComponent,
    headerAdmin,
    alert,
  },
  data() {
    return {
      data: sample_data,
      show: false,
      text: 'Something went wrong',
      type: 'error',
    }
  },
  created() {
    const  email = this.$cookie.get('email');
    if (!email) return this.$router.push('/register');
  },
  methods: {
    logout() {
      this.$cookie.delete('email');
      return this.$router.push('/register');
    },
    alertShow(type, text, timer = 15000) {
      this.show = true;
      this.type = type;
      this.text = text;

      setTimeout(() => this.show = false, timer);
    },
  },
}
</script>

<style lang='scss'>
  .button_item {
    display: inline-block;
    width: 50%;
    padding: 2vh;
    margin: 0;
  }
  .logout {
    padding: 20px;
    display: block;
    text-decoration: underline;
  }
</style>
