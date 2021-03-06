<template>
  <div>理事会</div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setActivePath', '/overview/council')
  }
}
</script>

<style lang="less" scoped></style>
