<template>
  <div>
    <footer>
      <div class='logo logo-enter'>Ingrammicrocloud</div>
    </footer>
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

  footer {
    height: 3vh;
    display: table;
    width: 100%;
    position: absolute;
    bottom: 25px;
    right: 25px;
    opacity: .7;
  }

  .logo-enter {
    display: block;
    margin: 0 auto;
    background-position: right center;
    height: 3vh;
    width: 50%;
    display: table-cell;
  }
</style>
