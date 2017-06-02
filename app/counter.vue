<template>
  <div class="counter">
    <div class='polls'>POLLS:</div>
    <div class='number'>
      <i-count-up
        v-if='poll'
        v-bind:start='poll'
        v-bind:end='end'
        :decimals='0'
        v-bind:duration='duration'
        :options='options'
        :callback='callback'
      ></i-count-up>
    </div>
  </div>
</template>

<script>
import config from './config.js';
import _ from 'lodash';
import ICountUp from 'vue-countup-v2';

export default {
  components: {
    ICountUp
  },
  data() {
    return {
      poll: 0,
      end: 0,
      duration: config.timer,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  created () {
    this.startPolling()
  },
  methods: {
    callback(ins) {
      this.poll = ins.endVal;
    },
    fetchData(first) {

      this.$http({ url: `${config.baseUrl}poll`, method: 'GET', emulateJSON: true })
        .then((response) => {
          const count = _.toNumber(response.body.totalPollHits);
          if (first) this.poll = this.end = count;
          this.end = count;
        })
    },
    startPolling() {
      this.fetchData(true);
      setInterval(() => this.fetchData(), config.timer * 100); 
    }
  }
}
</script>

<style lang='scss'>
  .counter {
    .polls {
      font-size: 1rem;
      font-weight: bold;
      display: inline-block;
      vertical-align: bottom;
      color: #e3e3e3;
      margin: 0 10px;
      line-height: 2.3;
    }
    .number {
      line-height: 1;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      display: inline-block;
      font-weight: bold; 
      font-style: normal; 
      font-size: 4rem;
      color: #fff;
      text-align: center;
    }
  }
</style>
