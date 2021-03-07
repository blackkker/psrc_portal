<template>
  <SubPage :items="['中心概况', '中心简介']"
    >中心简介
    <template slot="content">
      <Article
        author="作者"
        publisher="发布者"
        date="2021-03-07"
        :read-num="100"
        content="<strong>测试内容</strong>"
        :appendix="appendix"
        :show-info="true"
        >测试标题
      </Article>
    </template>
  </SubPage>
</template>

<script>
import SubPage from '../../templates/SubPage.vue'
import Article from '../../templates/Article.vue'

export default {
  components: { SubPage, Article },
  data() {
    return {
      appendix: [
        { name: '测试文件1.docx', href: 'http://www.baidu.com' },
        { name: '测试文件2.pptx', href: 'http://www.baidu.com' },
        { name: '测试文件3.xlsx', href: 'http://www.baidu.com' },
        { name: '测试文件4.zip', href: 'http://www.baidu.com' }
      ]
    }
  },
  created() {
    this.$store.commit('setActivePath', '/overview/introduction')
  }
}
</script>

<style lang="less" scoped></style>
