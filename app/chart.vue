<template>
  <div>
    <header-component></header-component>
    <div id='chart'></div>
  </div>
</template>

<script>
import sample_data from './data.js';
import _ from 'lodash';
import headerComponent from './header.vue';


export default {
  components: {
    headerComponent,
  },
  data() {
    return {
      sample: sample_data,
      counter: 125,
      chart: '',
    }
  },
  mounted() {
    this.chart = d3plus.viz()
      .container('#chart')
      .data(sample_data)
      .type('tree_map')
      .id('name')
      .color('color')
      .text('placeholder')
      .size('value')
      .mouse({                
        'move': false,
        'click': false,
      })
      .font({ 'weight': 'bold' })
      .background('#323232')
      .legend(false)
      .draw();
  },
  methods: {
    reRender() {
      this.chart
        .data(this.sample)
        .draw();
    },
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