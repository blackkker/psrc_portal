<template>
  <Module :menuList="menuList">
    <template slot="content">
      <router-view></router-view>
    </template>
  </Module>
</template>

<script>
import Module from '../templates/Module.vue'
// import ArticleList from '../templates/ArticleList.vue'
export default {
  components: { Module },
  data() {
    return {
      menuList: [
        {
          path: '/news/general',
          name: '综合新闻'
        },
        {
          path: '/news/notification',
          name: '通知公告'
        },
        {
          path: '/news/research',
          name: '科研情况'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
