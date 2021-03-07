<template>
  <Page :items="['团队介绍', '智能制造研究中心']">
    智能制造研究中心
    <template slot="content">
      <Article url = '/Manufacture' :show-info="true"></Article>
    </template>
  </Page>
</template>

<script>
import Page from '../../templates/Page.vue'
import Article from '../../templates/Article.vue'

export default {
  components: { Page, Article }
}
</script>

<style lang="less" scoped></style>
