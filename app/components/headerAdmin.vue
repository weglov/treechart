<template>
  <div>
    <header>
      <div class='logo logo-enter'>Ingrammicrocloud</div>
    </header>
    <h3>{{ title }}</h3>
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
  }

  header {
    background: #0054c5;
    height: 10vh;
    padding: 2vh 0;
    margin: -25px -25px 25px -25px;
  }

  .logo-enter {
    display: block;
    margin: 0 auto;
    background-position: center center;
    height: 6vh;
    width: 50%;
  }
</style>
