<template>
  <div>教师队伍</div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setActivePath', '/overview/teacher')
  }
}
</script>

<style lang="less" scoped></style>
