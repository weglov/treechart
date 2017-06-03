<template>
  <div>
    <header>
      <div class='logo logo-enter'>Ingrammicrocloud</div>
      <h3>{{ title }}</h3>
    </header>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang='scss'>
  h3 {
    font-size: 5vh;
    font-weight: bold;
    margin: 15px;
    display: table-cell;
  }

  header {
    height: 10vh;
    padding: 2vh 0;
    display: table;
    width: 100%;
  }

  .logo-enter {
    display: block;
    margin: 0 auto;
    background-position: left center;
    height: 6vh;
    width: 50%;
    display: table-cell;
  }
</style>
