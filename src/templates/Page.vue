<template>
  <div>
    <div class="header">
      <h3>
        <i class="el-icon-document el-icon--left"></i>
        <slot></slot>
      </h3>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in items" :key="index">
          {{ item }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-divider></el-divider>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #3b71b1;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 0;
  }
}

.el-divider {
  margin: 10px 0 10px 0;
}
</style>
