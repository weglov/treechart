<template>
  <div class="counter">
    <div class='polls'>POLLS:</div>
    <div class='number'>{{ poll }}</div>
  </div>
</template>

<script>
import config from './config.js';
import _ from 'lodash';
import numeral from 'numeral';


export default {
  data() {
    return {
      poll: 1,
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http({ url: `${config.baseUrl}poll`, method: 'GET', emulateJSON: true })
        .then((response) => {
          const count = _.toNumber(response.body.totalPollHits);

          if (count > 1000) {
            this.poll = numeral(count).format('0.0a');
          } else {
            this.poll = count;
          }
        })
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
      vertical-align: middle;
      color: #e3e3e3;
      padding: 3vh 0;
      margin: 0 10px;
    }
    .number {
      line-height: 1;
      display: inline-block;
      font-family: '8BITWONDERNominal'; 
      font-weight: normal; 
      font-style: normal; 
      font-size: 4rem;
      color: #fff;
      text-align: center;
    }
  }
</style>
