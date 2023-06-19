<template>
  <div class="customer">
    <h1>Customerです</h1>
    <p>{{ totalTvCount }} テレビがあります</p>
    <p v-show="happyStaff">スタフのみんな元気！！</p>
    <button :disabled="!totalTvCount" @click="buyTv">Buy TV</button>
    <button :disabled="totalTvCount < 2" @click="buyTwoTvs">Buy Two TVs</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "CustomerComponent",
  computed: {
    ...mapState(["totalTvCount"]),
    ...mapGetters(["happyStaff"]),
  },
  methods: {
    ...mapActions(["removeTv"]),
    buyTv() {
      this.removeTv();
    },
    buyTwoTvs() {
      this.removeTv(2);
    },
  },
};
</script>
