<template>
  <Page :items="['中心概况', '现任领导']">
    现任领导
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
  created() {
    this.$store.commit('setActivePath', '/overview/leader')
  }
}
</script>

<style lang="less" scoped></style>
