<template>
  <div>通知公告</div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setActivePath', '/news/notification')
  }
}
</script>

<style lang="less" scoped></style>
