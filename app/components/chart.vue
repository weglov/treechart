<template>
  <div>
    <header-component></header-component>
    <div id='chart'></div>
  </div>
</template>

<script>
import config from '../config/';
import sample_data from '../config/data.js';
import _ from 'lodash';
import headerComponent from './header.vue';


export default {
  components: {
    headerComponent,
  },
  data() {
    return {
      sample: sample_data,
      chart: '',
    }
  },
  mounted() {
    this.startPolling()
  },
  methods: {
    renderChart() {
      this.chart =d3plus.viz()
        .container('#chart')
        .data(this.sample)
        .type('tree_map')
        .id('name')
        .color('color')
        .text('placeholder')
        .size('value')
        .messages(false)
        .mouse({                
          'move': false,
          'click': false,
        })
        .font({ weight: 'bold' })
        .background('#323232')
        .legend(false)
        .draw();
    },
    reRender() {
      this.chart
        .data(this.sample)
        .draw();
    },
    getResult(first) {
      this.$http({ url: `${config.baseUrl}poll?full=true`, method: 'GET', emulateJSON: true })
        .then((response) => {
          const votes = _.get(response, 'body.votes');
          this.sample = _.map(this.sample, (val, key) => {
            val.value = votes[val.id];
            return val;
          });

          if (first) return this.renderChart();

          return this.reRender();
        })
    },
    startPolling() {
      this.getResult(true);
      setInterval(() => this.getResult(), 20000); 
    }
  }
}
</script>

<style lang='scss'>
    #chart {
    width: 100%;
    height: 85vh;
    position: relative;
    display: block;
    vertical-align: top;
    > div {
      margin: 0 auto;
    }
  }
</style>