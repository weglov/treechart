<template>
  <div id='app'>
    <header></header>
    <div id='chart'></div>
    <legend-data></legend-data>
  </div>

</template>

<script>
import sample_data from './data.js';
import _ from 'lodash';
import legendData from './legend.vue';


export default {
  name: 'app',
  components: {
    legendData
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
      .dev(true)
      .size('value')
      .mouse({                
        'move': false,
        'click': false,
      })
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
    addData() {
      if (this.name.length > 1) {
        this.sample.push({ 'value': 1, 'name': this.name });
        this.name = '';
        this.reRender();
      }
    },
    removeValue(value) {
      _.remove(this.sample, (v) => v.name === value.name);
      this.reRender();
    }
  }
}
</script>

<style lang='scss'>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #chart {
    width: 75vw;
    height: 80vh;
    position: relative;
    display: table-cell;
    vertical-align: top;
  }
  #legend {
    width: 25vw;
    height: 80vh;
    display: table-cell;
    vertical-align: top;
  }

  header {
    height: 10vh;
    display: table-row;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #232323;
    color: #fff;
    display: table;
    padding: 0 25px;
    height: 100vh;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
