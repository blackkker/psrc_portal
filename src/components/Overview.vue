<template>
  <ListView :menuList="menuList">
    <template slot="content">
      <router-view></router-view>
    </template>
  </ListView>
</template>

<script>
import ListView from '../templates/ListView.vue'

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
    ListView
  }
}
</script>

<style lang="less" scoped></style>
