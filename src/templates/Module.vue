<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-menu
          :default-active="$store.state.activePath"
          router
          style="border: none"
        >
          <el-menu-item
            v-for="(item, index) in menuList"
            :key="index"
            :index="item.path"
            style="font-size: 16px"
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
  props: ['menuList']
}
</script>

<style lang="less" scoped>
.is-active {
  color: #fff;
  background-color: #3b71b1;
}
</style>
