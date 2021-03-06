<template>
  <div>
    <el-carousel :interval="5000">
      <el-carousel-item v-for="item in 5" :key="item">
        <el-image
          src="https://sias.uestc.edu.cn/images/2.jpg"
          fit="scale-down"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$store.commit('setActivePath', '/home')
  }
}
</script>

<style lang="less" scoped></style>
