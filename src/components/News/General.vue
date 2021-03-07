<template>
  <div>
    <Page :items="['新闻中心', '综合新闻']">
      综合新闻
      <template slot="content"></template>
    </Page>
    <ArticleList></ArticleList>
  </div>
</template>

<script>
import Page from '../../templates/Page.vue'
import ArticleList from '../../templates/ArticleList.vue'

export default {
  components: { Page, ArticleList },
  data() {
    return {
      articleList: [
        {
          title: '罗老师yyds',
          time: '2021/3/7',
          src: 'www.baidu.com'
        },
        {
          title: 'lxcnb',
          time: '2021/3/7',
          src: 'www.baidu.com'
        }
      ]
    }
  },
  created() {
    this.$store.commit('setActivePath', '/news/general')
  }
}
</script>

<style lang="less" scoped></style>
