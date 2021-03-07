<template>
  <Page :items="['中心概况', '理事会']">
    理事会
    <template slot="content">
      <Article url="/council" :show-info="true"></Article>
    </template>
  </Page>
</template>

<script>
import Page from '../../templates/Page.vue'
import Article from '../../templates/Article.vue'

export default {
  components: { Page, Article },
  created() {
    this.$store.commit('setActivePath', '/overview/council')
  }
}
</script>

<style lang="less" scoped></style>
