<template>
  <div class="counter">
    <span>{{ poll }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poll: 256,
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.poll = null;
      this.$http({ url: 'http://stats.df.wtf/api/v1/poll', method: 'GET' })
        .then((response) => {
          console.log(response);
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
