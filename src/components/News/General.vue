<template>
  <div>综合新闻</div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setActivePath', '/news/general')
  }
}
</script>

<style lang="less" scoped></style>
