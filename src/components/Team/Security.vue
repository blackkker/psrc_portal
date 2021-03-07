<template>
  <Page :items = "['团队介绍', '信息安全研究中心']">
    信息安全研究中心
    <template slot="content">
      <Article url = '/Security' :show-info="true"></Article>
    </template>
  </Page>
</template>

<script>
import Page from '../../templates/Page.vue'
import Article from '../../templates/Article.vue'

export default {
  components: { Page, Article },
  created() {
    this.$store.commit('setActivePath', '/team/security')
  }
}
</script>

<style lang="less" scoped></style>
