<template>
  <div class="top">

  <ol>
    <li>🔥 TOP: </li>
    <li v-for="(item, index) in users">
      <div class='medal' v-if='index == 0'>🥇</div>
      <div class='medal' v-if='index == 1'>🥈</div>
      <div class='medal' v-if='index == 2'>🥉</div>
      <div class='name'>{{ item.email }}</div>
    </li>
  </ol>
  </div>
</template>
🥇🥈🥉

<script>
import config from '../config/';

export default {
  data() {
    return {
      users: [],
    }
  },
  created () {
    this.startPolling()
  },
  methods: {
    fetchData(first) {
      this.$http({ url: `${config.baseUrl}userstats`, method: 'GET' })
        .then((response) => {
          console.log(response)
          this.users = response.body.userStats;
        })
    },
    startPolling() {
      this.fetchData();
    }
  }
};

</script>

<style lang='scss'>
.top {
  top: 6vh;
  position: absolute;
  color: #ffb500;
  font-weight: bold;
}
.medal, .name {
  display: inline-block;
}
.name {
  font-size: 2.5vh;
}
</style>