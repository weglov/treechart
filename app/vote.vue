<template>
  <div id='app_vote'>
    <div class='logo'>Ingrammicrocloud</div>
    <h1>VOTE:</h1>
    <div class='button_item' v-for='item in data'>
      <button-component v-bind:info='item'></button-component>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import sample_data from './data.js';
import buttonComponent from './components/button.vue';


export default {
  components: {
    buttonComponent,
  },
  data() {
    return {
      data: sample_data,
    }
  },
}
</script>

<style lang='scss'>
  h1 {
    font-size: 50px;
    font-weight: bold;
  }

  .button_item {
    display: inline-block;
    width: 50%;
    padding: 2vh;
    margin: 0;
  }
</style>
