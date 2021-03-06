<template>
  <div>中心简介</div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setActivePath', '/overview/introduction')
  }
}
</script>

<style lang="less" scoped></style>
