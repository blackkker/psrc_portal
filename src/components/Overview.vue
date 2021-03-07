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
          path: '/overview/introduction',
          name: '中心简介'
        },
        {
          path: '/overview/council',
          name: '理事会'
        },
        {
          path: '/overview/leader',
          name: '现任领导'
        },
        {
          path: '/overview/teacher',
          name: '教师队伍'
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
