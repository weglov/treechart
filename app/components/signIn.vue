<template>
  <div id='app_vote'>
    <header-admin title='SIGN IN'></header-admin>
    <form v-on:submit.prevent='submitUser'>
      <div class="form-element">
        <label for='email'>You email:</label>
        <input type='email' id='email' value='email' v-model='email'>
      </div>
      <div class="form-element">
        <label for='email'>You name:</label>
        <input type='text' id='name' value='name' v-model='name'>
      </div>
      <div class="enter-to-vote">
        <button>Enter</button>
      </div>
    </form>
    <alert v-bind:show='show' v-bind:text='text' v-bind:type='type'></alert>
  </div>
</template>

<script>
import _ from 'lodash';
import headerAdmin from './headerAdmin.vue';
import alert from './alert.vue';
import config from '../config/';


export default {
  components: {
    headerAdmin,
    alert
  },
  data() {
    return {
      email: '',
      name: '',
      show: false,
      text: 'Something went wrong',
      type: 'error',
    }
  },
  created() {
    const  email = this.$cookie.get('email');
    if (email) return this.$router.push('/vote');
  },
  methods: {
    submitUser() {
      this.show = false;
      const body = {
        email: this.email,
        name: this.name,
      };

      return this.$http.post(`${config.baseUrl}register`, body)
        .then((res) => {
          this.$cookie.set('email', this.email, 7);
          this.$router.push('/vote');
        })
        .catch((res) => {
          this.show = true;
          if (res,status === 400) {
            this.$cookie.set('email', this.email, 7);
            this.$router.push('/vote');
          }

          this.text = _.get(res, 'body.errors[0].msg', 'Something went wrong');
          setTimeout(() => this.show = false, 5000)
        });
    },
  },
}
</script>

<style lang='scss'>
  .enter-to-vote {
    position: relative;
    display: block;
    margin: 4vh 0;
    button {
      width: 100%;
      padding: 2vh;
      font-size: 3vh;
      background: #0054c5;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      border: none;
    }
  }
  .form-element {
    display: block;
    margin: 2vh 0;
    label {
      display: block;
      margin: 5px 0;
      text-align: left;
      font-size: 3vh;
    }
    input {
      padding: 2vh;
      border: none;
      width: 100%;
      font-size: 3vh;
    }
  }
</style>
