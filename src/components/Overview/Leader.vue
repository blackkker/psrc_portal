<template>
  <div>现任领导</div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setActivePath', '/overview/leader')
  }
}
</script>

<style lang="less" scoped></style>
