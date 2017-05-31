<template>
  <div class='modal' v-if='modal'>
    <p>Алоха 😺,</p>
    <p>Какой язык разработки лучший 💪? Выбирай! 🔥</p>
    <p>Самый активный 🥇 получит 🏆. Мы свяжемся с тобой по почте.</p>
    <p>Голосовать можно <b>ЛЮБОЕ</b> число раз 😜.</p>
    <p>API для 🤖 на <a href='http://odn.pw/api'>odn.pw/api</a>.</p>
    <p>Следи за результатами на 📺 стенда Ingram Micro Odin.</p>
    <button class='modal-button' v-on:click='start()'>Поехали  🚀</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: true,
    }
  },
  methods: {
    start() {
      this.modal = false;
    },
  },
}
</script>

<style lang='scss'>
  .modal-button {
    display: block;
    font-size: 4vh;
    padding: 2vh 5vw;
    background: #0054c5;
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    margin: 3vh auto 0;
  }
  .modal {
    position: absolute;
    background: #ffffff;
    border: 3vh solid #0054c5;
    color: #000;
    font-size: 3vh;
    width: 94vw;
    z-index: 200;
    top: 0px;
    left: 0;
    text-align: left;
    padding: 5vh;
    box-shadow: 0px 0 150vh 8px #000;
    margin: 3vh 3vw;
    li {
      display: block;
    }
  }
</style>