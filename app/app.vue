<template>
  <div id='app'>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import sample_data from './config/data.js';
import _ from 'lodash';


export default {
  name: 'app',
}
</script>

<style lang='scss'>
  body {
    background: #232323;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: top;
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #232323;
    color: #fff;
    display: block;
    position: relative;
    padding: 25px;
    height: 100vh;
    width: 100%;
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

  .logo {
    text-indent: -99999px;
    background: url(assets/ingram-micro-logo.svg) no-repeat center left;
    width: 30vw;
    height: 6vh;
    background-size: contain;
    display: table-cell;
  }
</style>