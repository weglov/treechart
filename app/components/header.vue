<template>
    <header>
      <p>🙀🤖<span> Проголосуй на <b><a href='/'>ODN.PW</a></b> и выиграй</span> 🏆</p>
      <counter-component v-if=''></counter-component>
    </header>
</template>

<script>
import counterComponent from './counter.vue';

export default {
  components: {
    counterComponent,
  }, 
};

</script>

<style lang='scss'>
  header {
    height: 10vh;
    display: table;
    vertical-align: middle;
    position: relative;
    text-align: left;
    padding: 0 0 25px;
    overflow: hidden;
    p {
      font-size: 6vh;
      display: table-cell;
      width: 65vw;
      text-align: left;
      color: #FFFFFF;
      font-weight: bold;
      vertical-align: middle;
      text-decoration: none;
    }
    a {
      color: #44c0ff;
      span {
        border-bottom: 1vh solid #44c0ff;
      }

    }
    .counter {
      text-align: right;
      width: 35vw;
      display: table-cell;
    }
  }


</style>