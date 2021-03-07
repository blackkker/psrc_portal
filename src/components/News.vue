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
    Module
  }
}
</script>

<style lang="less" scoped></style>
