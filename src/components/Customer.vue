<template>
  <div class="customer">
    <h1>Customerです</h1>
    <p>{{ totalTvCount }} テレビがあります</p>
    <button :disabled="!totalTvCount" @click="buyTv">Buy TV</button>
    <button :disabled="totalTvCount < 2" @click="buyTwoTvs">Buy Two TVs</button>
  </div>
</template>

<script>
export default {
  name: "CustomerComponent",
  computed: {
    totalTvCount() {
      return this.$store.state.totalTvCount;
    },
  },
  methods: {
    buyTv() {
      this.$store.dispatch("removeTv");
    },
    buyTwoTvs() {
      this.$store.dispatch("removeTv", { amount: 2 });
    },
  },
};
</script>
