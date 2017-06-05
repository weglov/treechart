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
        .id('id')
        .color('color')
        .text('name')
        .size('value')
        .messages(false)
        .mouse({                
          'move': false,
          'click': false,
        })
        .font({ weight: 'bold', 'text-transform': "uppercase" })
        .background('#323232')
        .class((d) => {
          const font = `font${_.floor(d.d3plus.width, -2)}`;
          if (d.d3plus.height > 100) {
            return font;
          }

          return null;
        })
        .labels({
          align: 'middle',
          valign: 'top',
        })
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
      setInterval(() => this.getResult(), config.rerender); 
    }
  }
}
</script>

<style lang='scss'>
    #chart {
    width: 100%;
    height: 80vh;
    position: relative;
    display: block;
    vertical-align: top;
    > div {
      margin: 0 auto;
    }
    text {
      text-transform: uppercase;
    }
  }
  .font700, .font600, .font800 {
    text.d3plus_label {
      font-size: 90px !important;
    }
  }
  .font900, .font1000 {
    text.d3plus_label {
      font-size: 140px !important;
    }
  }
  .font500, .font400 {
    text.d3plus_label {
      font-size: 70px !important;
    }
  }
</style>