<template>
    <header>
      <div class='logo'>Ingrammicrocloud</div>
      <h1>Сюда нужна фраза Саш <a href='/vote'>голосовать</a></h1>
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
    h1 {
      font-size: 1rem;
      display: table-cell;
      width: 40vw;
      text-align: center;
      vertical-align: middle;
    }
    .counter {
      text-align: right;
      width: 30vw;
      display: table-cell;
    }
  }


</style>