<template>
  <Module :menuList="menuList">
    <template slot="content">
      <ArticleList></ArticleList>
    </template>
  </Module>
</template>

<script>
import Module from '../templates/Module.vue'
import ArticleList from '../templates/ArticleList.vue'
export default {
  components: { ArticleList, Module },
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
  }
}
</script>

<style lang="less" scoped></style>
