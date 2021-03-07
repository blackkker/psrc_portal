<template>
  <el-table :data="articleList">
    <el-table-column prop="title" label="标题" width="180"></el-table-column>
    <el-table-column prop="time" label="时间" width="40" />
  </el-table>
  <!-- <p v-for="item in articleList" :key="item.title">
      <a :href="item.src">{{ item.title }}</a>
    </p> -->
</template>
<script>
export default {
  // data() {
  //   return {
  //   }
  props: ['items']
}
</script>
<style lang="less" scoped></style>
