<template>
  <button class='voteButton btn' v-on:click='vote(info.id)' v-bind:style='{ background: info.color }'>
    {{ info.placeholder }}
  </button>
</template>

<script>
import config from '../config.js';

export default {
  props: ['info'],
  data() {
    return {}
  },
  methods: {
    vote(id) {
      const body = {
        email: 'vscheglov@odin.com',
        language: id,
      };

      this.$http.post(`${config.baseUrl}poll`, body)
        .then((res) => {
          console.log(res);
        });
    }
  }
}
</script>

<style lang='scss'>
  .voteButton {
    width: 100%;
    height: 10vh;
    font-size: 8vh;
    display: inline-block;
    position: relative;
    border: none;
  }
  .btn {
    outline: none;
    border-radius: 5px;
    padding: 15px 25px;
    font-size: 22px;
    text-decoration: none;
    color: #fff;
    position: relative;
    display: inline-block;
  }

  .btn:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 4px 0px 0px #000;
  }

</style>
