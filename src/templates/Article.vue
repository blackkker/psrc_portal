<template>
  <div>
    <h2><slot></slot></h2>
    <div v-show="showInfo" class="info">
      <span><strong>作者：</strong>{{ author }}</span>
      <span><strong>发布者：</strong>{{ publisher }}</span>
      <span><strong>发布时间：</strong>{{ date }}</span>
      <span><strong>阅读量：</strong>{{ readNum }}</span>
    </div>
    <div v-html="content" class="content"></div>
    <div v-show="appendix" class="appendix">
      <div v-for="(item, index) in appendix" :key="index">
        <el-link icon="el-icon-download" @click="handleClick(item.href)"
          >附件{{ index + 1 }}：{{ item.name }}</el-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'author',
    'publisher',
    'date',
    'read-num',
    'content',
    'appendix',
    'show-info'
  ],
  methods: {
    handleClick(href) {
      window.open(href, '_blank')
    }
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
