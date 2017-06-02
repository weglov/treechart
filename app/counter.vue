<template>
  <div class="counter">
    <span>{{ poll }}</span>
  </div>
</template>

<script>
import config from './config.js';

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
      this.$http({ url: `${config.baseUrl}poll`, method: 'GET' })
        .then((response) => {
          this.poll = response.body.totalPollHits;
        })
    }
  }
}
</script>

<style lang='scss'>
  .counter {
    font-family: '8BITWONDERNominal'; 
    font-weight: normal; 
    font-style: normal; 
    font-size: 60px;
    color: #fff;
    text-align: center;
  }
</style>
