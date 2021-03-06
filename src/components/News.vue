<template>
  <div>
    {{ route }}
  </div>
</template>

<script>
export default {
  props: ['route'],
  data() {
    return {}
  },
  created() {
    this.$store.commit('setActivePath', '/news')
  }
}
</script>

<style lang="less" scoped></style>
