<template>
  <div>
    <h2>{{ article.title }}</h2>
    <div v-show="showInfo" class="info">
      <span><strong>作者：</strong>{{ article.author }}</span>
      <span><strong>发布者：</strong>{{ article.publisher }}</span>
      <span><strong>发布时间：</strong>{{ article.date }}</span>
      <span><strong>阅读量：</strong>{{ article.readNum }}</span>
    </div>
    <div v-html="article.content" class="content"></div>
    <div v-show="article.appendix && article.appendix.length" class="appendix">
      <div v-for="(item, index) in article.appendix" :key="index">
        <el-link icon="el-icon-download" @click="handleClick(item.href)"
          >附件{{ index + 1 }}：{{ item.name }}</el-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    },
    'show-info': {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      article: null
    }
  },
  methods: {
    handleClick(href) {
      window.open(href, '_blank')
    },
    async getArticle() {
      // const { data: res } = await this.$http.get(this.url)
      // console.log(res)
      this.article = {
        title: '测试标题',
        author: '作者',
        publisher: '发布者',
        date: '2021-03-07',
        readNum: 100,
        content: '<strong>测试内容</strong>',
        appendix: [
          { name: '测试文件1.docx', href: 'http://www.baidu.com' },
          { name: '测试文件2.pptx', href: 'http://www.baidu.com' },
          { name: '测试文件3.xlsx', href: 'http://www.baidu.com' },
          { name: '测试文件4.zip', href: 'http://www.baidu.com' }
        ]
      }
    }
  },
  created() {
    this.getArticle()
  }
}
</script>

<style lang="less" scoped>
h2 {
  text-align: center;
}

.info {
  color: #606266;
  font-size: 14px;
  text-align: end;
  background-color: #f5f5f5;
  padding: 5px;

  span {
    margin-left: 10px;
    margin-right: 10px;
  }
}

.content {
  margin-top: 10px;
  margin-bottom: 10px;
}

.appendix {
  background-color: #f5f5f5;
  padding: 5px;
}
</style>
