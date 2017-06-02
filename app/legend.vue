<template>
  <div id="legend">
    <h1>Score:</h1>
    <counter></counter>
  </div>
</template>

<script>
import counter from './counter.vue';

export default {
  components: {
    counter
  },
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

</style>
