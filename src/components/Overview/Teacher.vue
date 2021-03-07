<template>
  <Page :items="['中心概况', '教师队伍']">
    教师队伍
    <template slot="content">
      <el-row
        v-for="line in Math.ceil(teacherList.length / 2)"
        :key="line"
        :gutter="20"
        class="row"
      >
        <el-col
          v-for="(item, index) in teacherList.slice((line - 1) * 2, line * 2)"
          :key="index"
          :span="12"
        >
          <el-row :gutter="10">
            <el-col :span="10">
              <el-image
                :src="item.avatarUrl"
                fit="scale-down"
                @click.native="showDetail(item.href)"
              ></el-image>
            </el-col>
            <el-col :span="14">
              <div class="call">
                <h3>{{ item.name }}</h3>
                <span class="el-icon--right">{{ item.level }}</span>
              </div>
              <span>
                <strong>研究方向：</strong>
                {{ item.research }}
              </span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </template>
  </Page>
</template>

<script>
import Page from '../../templates/Page.vue'

export default {
  components: { Page },
  data() {
    return {
      teacherList: [
        {
          avatarUrl: '',
          name: '教师1',
          level: '教授',
          research: '信息安全',
          href: 'http://localhost:8080/#/overview/detail/1'
        },
        {
          avatarUrl: '',
          name: '教师2',
          level: '副教授',
          research: '人工智能',
          href: 'http://localhost:8080/#/overview/detail/2'
        },
        {
          avatarUrl: '',
          name: '教师3',
          level: '研究员',
          research: '大数据',
          href: 'http://localhost:8080/#/overview/detail/3'
        },
        {
          avatarUrl: '',
          name: '教师4',
          level: '副研究员',
          research: '智能制造',
          href: 'http://localhost:8080/#/overview/detail/4'
        }
      ]
    }
  },
  methods: {
    showDetail(href) {
      window.open(href, '_blank')
    }
  },
  created() {
    this.$store.commit('setActivePath', '/overview/teacher')
  }
}
</script>

<style lang="less" scoped>
.row {
  margin-top: 20px;
}

.call {
  display: flex;
  align-items: center;

  h3 {
    color: #3b71b1;
    font-weight: normal;
    margin: 0;
  }
}

span {
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: block;
}
</style>
