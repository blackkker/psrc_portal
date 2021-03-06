<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-menu :default-active="$store.state.activePath" router>
          <el-menu-item
            v-for="(item, index) in menus"
            :key="index"
            :index="item.path"
            >{{ item.name }}</el-menu-item
          >
        </el-menu>
      </el-col>
      <el-col :span="18">
        <el-card shadow="none">
          <slot name="content"></slot>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['menus']
}
</script>

<style lang="less" scoped>
.el-menu-item {
  font-size: 16px;
}

.is-active {
  color: #fff;
  background-color: #0e4f8f;
}
</style>
