<template>
    <header>
      <a href='/'>🙀 🤖 <span>Голосуй на ODN.PW и выиграй</span> 🏆</a>
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
    a {
      font-size: 6vh;
      display: table-cell;
      width: 60vw;
      text-align: left;
      color: #44c0ff;
      font-weight: bold;
      vertical-align: middle;
      text-decoration: none;
      span {
        border-bottom: 1vh solid #44c0ff;
      }
    }
    .counter {
      text-align: right;
      width: 40vw;
      display: table-cell;
    }
  }


</style>