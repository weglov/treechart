import Vue from 'vue';

const dataList = Vue.component('todo-item', {
  props: ['data', 'render', 'remove'],
  template: `<li v-if='data.value'>{{ data.name }}
  <button v-on:click="upValue(data)">+</button>
  <button v-on:click="downValue(data)">-</button>
  <button v-on:click="remove(data)">x</button>
  </li>`,
  methods: {
    upValue(data) {
      data.value = data.value + 1;
      return this.render();
    },
    downValue(data) {
      data.value = data.value === 0 ? data.value - 1 : data.value;
      return this.render();
    },
  }
});

export default dataList;