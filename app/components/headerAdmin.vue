<template>
  <div>
    <header>
      <div class='logo logo-enter'>Ingrammicrocloud</div>
      <button class='logout' v-on:click='logout()'>🚶 logout</button>
    </header>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    logout() {
      this.$cookie.delete('email');
      return this.$router.push('/register');
    },
  }
}
</script>

<style lang='scss'>
  .logout {
    padding: 10px 25px;
    font-size: 2vh;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    display: table-cell;
  }

  header {
    height: 3vh;
    display: table;
    width: 100%;
  }

  .logo-enter {
    display: block;
    margin: 0 auto;
    background-position: left center;
    height: 3vh;
    width: 50%;
    display: table-cell;
  }
</style>
