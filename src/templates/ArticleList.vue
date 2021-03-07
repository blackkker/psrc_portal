<template>
  <el-table :data="articleList">
    <el-table-column prop="title"
        label="标题"
        width="180"></el-table-column>
    <el-table-column prop="time"
        label="时间"
        width="40"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      articleList: [
        {
          title: '罗老师yyds',
          time: '2021/3/7'
        },
        {
          title: 'lxcnb',
          time: '2021/3/7'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
