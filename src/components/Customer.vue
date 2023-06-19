<template>
  <div class="customer">
    <h1>Customerです</h1>
    <p>{{ totalTvCount }} テレビがあります</p>
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
};
</script>
