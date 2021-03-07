<template>
  <Page :items="['新闻中心', '科研情况']">
    科研情况
    <template slot="content">
      <ArticleList></ArticleList>
    </template>
  </Page>
</template>

<script>
import Page from '../../templates/Page.vue'
import ArticleList from '../../templates/ArticleList.vue'

export default {
  components: { Page, ArticleList },
  created() {
    this.$store.commit('setActivePath', '/news/research')
  }
}
</script>

<style lang="less" scoped></style>
