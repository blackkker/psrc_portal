<template>
  <Page :items="['中心概况', '中心简介']"
    >中心简介
    <template slot="content">
      <Article url="/introduction" :show-info="true"></Article>
    </template>
  </Page>
</template>

<script>
import Page from '../../templates/Page.vue'
import Article from '../../templates/Article.vue'

export default {
  components: { Page, Article },
  data() {
    return {}
  },
  created() {
    this.$store.commit('setActivePath', '/overview/introduction')
  }
}
</script>

<style lang="less" scoped></style>
