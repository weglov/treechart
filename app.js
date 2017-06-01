import Vue from 'vue';
import _ from 'lodash';
import dataList from './app/dataList.js';

const sample_data = [
  {"value": 4, "name": "alpha"},
  {"value": 2, "name": "beta"},
];

const visualization = d3plus.viz()
  .container("#chart")
  .data(sample_data)
  .type("tree_map")
  .id("name")
  .size("value")
  .mouse({                
    "move": false,
  })
  .draw()

const add = (e) => {
  sample_data.push({"value": 45, "name": "HEEELOO"})
  sample_data[4].value = 444;

  visualization
    .data(sample_data)
    .y({"scale": "share"})
    .draw();
};


const app = new Vue({
  el: '#app',
  data() {
    return {
      sample: sample_data,
      name: '',
    }
  },
  components: {
    dataList,
  },
  methods: {
    reRender() {
      visualization
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
      console.log(this.sample);
      this.reRender();
    }
  }
}).$mount('#app')