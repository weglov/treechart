<template>
  <div id="legend">
    <h1>Score:</h1>
    <counter></counter>
    <ul class="legend">
      <li v-for="item in data">
      <span class="block" v-bind:style='{ background: item.color }'></span>
      <span class="title">{{ item.placeholder }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import counter from './counter.vue';

export default {
  components: {
    counter
  },
  props: ['data'],
  data() {
    return {
      chart: '',
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
  .legend {
    margin-top: 35px;
    li {
      text-align: left;
      padding: 5px;
      font-weight: bold;
      display: table;
      span {
        display: table-cell;
        &.block {
          width: 25px;
          height: 25px;
        }
        &.title {
          padding-left: 20px;
        }
      }
    }
  }
</style>
