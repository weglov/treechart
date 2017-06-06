<template>
<div>
  <div class='toprps' v-if='users.length'>🔥 TOP 5:</div>
  <ul class='toprps-list' v-if='users.length'>
    <li v-for="(item, index) in users">
      <div class="item-number">{{ index + 1 }}.</div>
      <div class="item-email">{{ item.email }}</div>
      <div class="item-rps">{{ item.rps }}</div>
    </li>
  </ul>
  <div class='totalrps'>
    <div class="fire"></div>
    <h3>⛑ CURRENT RPS 🙈</h3>
    <div class='totalrpsvolue'>{{ total }}</div>
  </div>
</div>
</template>

<script>
import config from '../config/';
import _ from 'lodash';


export default {
  data() {
    return {
      users: [],
      total: 0,
      oldtotal: 0,
    }
  },
  created () {
    this.startPolling()
  },
  methods: {
    fetchData(first) {
      this.$http({ url: `${config.baseUrl}top`, method: 'GET' })
        .then((response) => {
          if (this.users.length) {
            let total = 0;
            this.users = _.map(response.body.top, (v, k) => {
              let rps;
              total = total + v.count;

              const a = _.find(this.users, { email: v.email });
              if (a) {
                rps = _.floor((v.count - a.count) / 60)
                return _.assign(v, { rps });
              }

              return _.assign(v, { rps: 0 });
            });

            if (this.oldtotal === 0) {
              this.oldtotal = total;
            } else {
              console.log(total - this.oldtotal);
              if (this.oldtotal !== total) {
                this.total = _.floor((total - this.oldtotal) / 60);
              }

              this.oldtotal = total;
            }
          } else {
            this.users = response.body.top;
          }
        })
    },
    startPolling() {
      this.fetchData(true);
      setInterval(() => this.fetchData(), config.rerender);
    }
  }
};
</script>

<style lang='scss'>
  .totalrps {
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 4vh;
    width: 20vw;
    text-align: center;
    padding-left: 12vw;
    background: #000;
    padding: 35px 2vw 0 6vw;
  }
  .fire {
    background: url('../assets/giphy2.gif') no-repeat center;
    height: 11vw;
    opacity: .5;
    background-size: cover;
    position: absolute;
    width: 10vw;
    z-index: -1;
        bottom: 0;
        left: 3vw;
  }
  .totalrpsvolue {
    font-size: 10vh;
    color: red;
    padding: 1vh;
    font-weight: bold;
    text-shadow: 0px 4px 10px #000;
  }
  .toprps {
    font-weight: bold;
    font-size: 5vh;
    margin-top: 3vh;
  }
  .toprps-list {
    display: block;
    padding: 2vh 3vw;
    li {
      display: table;
      border-bottom: 2px solid #515151;
      width: 100%;
      text-align: left;
      padding: 1vh 0;
      margin: 0;
      div {
        display: table-cell;
        text-align: left;
      }
      .item-number {
        font-weight: bold;
        color: yellow;
        width: 2vw;
      }
      .item-email {
        width: 10vw;
        overflow: hidden;
      }
      .item-rps {
        color: red;
        font-weight: bold;
      }
    }
  }
</style>