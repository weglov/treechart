<template>
<div style='text-align: right;'>
  <div class='toprps' v-if='users.length'>🔥 TOP 5:</div>
  <ul class='toprps-list' v-if='users.length'>
    <li v-for="(item, index) in users">
      <div class="item-number">{{ index + 1 }}.</div>
      <div class="item-email">{{ item.email }}</div>
      <div class="item-rps">
        <i-count-up
        v-bind:start='item.old'
        v-bind:end='item.end'
        :duration='60'
        v-bind:options='options'
      ></i-count-up></div>
    </li>
  </ul>
</div>
</template>

<script>
import config from '../config/';
import _ from 'lodash';
import ICountUp from 'vue-countup-v2';


export default {
  components: {
    ICountUp
  },
  data() {
    return {
      users: [],
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: 'rps'
      }
    }
  },
  created () {
    this.startPolling()
  },
  methods: {
    fetchData(first) {
      this.$http({ url: `${config.baseUrl}top`, method: 'GET' })
        .then((response) => {
            let total = 0;
            const new_data = _.map(response.body.top, (v, k) => {
              if (first) {
                return _.assign(v, { old: 0, end: 0 })
              }
              let user;
              const a = _.find(this.users, { email: v.email })
              if (a) {
                if ((v.count - a.count) === 0) {
                  user = a.end;
                } else {
                  user = _.floor((v.count - a.count) / 60);
                }
              }

              return _.assign(v, { old: a.end, end: user || 0 });
            });

            this.users = new_data;
        })
    },
    startPolling() {
      this.fetchData(true);
      setInterval(() => this.fetchData(), config.rerender / 3);
    }
  }
};
</script>

<style lang='scss'>
  .toprps {
    font-weight: bold;
    font-size: 5vh;
    margin-top: 3vh;
    text-align: center;
  }
  .toprps-list {
    display: block;
    padding: 2vh 0 2vh 2vw;
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
        font-size: 2vh;
        font-weight: bold;
        text-align: right;
      }
    }
  }
  @media all and (max-width: 680px) {
    .totalrps {
      width: 100%;
      padding: 2vh 2vw;
    }
  }
</style>