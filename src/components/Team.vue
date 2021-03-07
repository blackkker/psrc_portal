<template>
  <Module :menuList="menuList">
    <template slot="content">
      <router-view></router-view>
    </template>
  </Module>
</template>

<script>
import Module from '../templates/Module.vue'

export default {
  data() {
    return {
      menuList: [
        {
          path: '/team/security',
          name: '信息安全研究中心'
        },
        {
          path: '/team/intelligence',
          name: '人工智能研究中心'
        },
        {
          path: '/team/bigdata',
          name: '大数据研究中心'
        },
        {
          path: '/team/manufacture',
          name: '智能制造研究中心'
        }
      ]
    }
  },
  components: {
    Module
  }
}
</script>

<style lang="less" scoped></style>
