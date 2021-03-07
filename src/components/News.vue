<template>
  <ListView :menuList="menuList">
    <template slot="content">
      <router-view></router-view>
    </template>
  </ListView>
</template>

<script>
import ListView from '../views/ListView.vue'

export default {
  data() {
    return {
      menuList: [
        {
          path: '/news/general',
          name: '通知公告'
        },
        {
          path: '/news/notification',
          name: '通知公告'
        },
        {
          path: '/news/research',
          name: '通知公告'
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
