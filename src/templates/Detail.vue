<template>
  <Page :items="['中心概况', '教师队伍']">
    教师队伍
    <template slot="content">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-image :src="teacher.avatarUrl" fit="scale-down"></el-image>
        </el-col>
        <el-col :span="18">
          <div class="call">
            <h3>{{ teacher.name }}</h3>
            <span class="el-icon--right">{{ teacher.level }}</span>
          </div>
          <span>
            <strong>学位：</strong>
            {{ teacher.degree }}
          </span>
          <span>
            <strong>任职：</strong>
            {{ teacher.position }}
          </span>
          <span>
            <strong>研究方向：</strong>
            {{ teacher.research }}
          </span>
          <span>
            <strong>联系方式：</strong>
            {{ teacher.contact }}
          </span>
        </el-col>
      </el-row>
      <div class="block">
        个人简介
        <span>{{ teacher.intro }}</span>
      </div>
      <div class="block">
        科研情况
        <span>{{ teacher.researchStatus }}</span>
      </div>
      <div class="block">
        教学情况
        <span>{{ teacher.teachingStatus }}</span>
      </div>
      <div class="block">
        获奖情况
        <span>{{ teacher.rewardStatus }}</span>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from './Page.vue'

export default {
  props: ['id'],
  components: { Page },
  data() {
    return {
      teacher: {}
    }
  },
  methods: {
    async getTeacher() {
      // const { data: res } = await this.$http.get('')
      // console.log(res)
      this.teacher = {
        avatarUrl: '',
        name: '教师1',
        level: '教授',
        degree: '博士',
        position: '',
        research: '信息安全',
        contact: 'js@uestc.edu.cn',
        intro: '这是一段个人简介',
        researchStatus: '这是一段科研情况',
        teachingStatus: '这是一段教学情况',
        rewardStatus: '这是一段获奖情况'
      }
    }
  },
  created() {
    this.$store.commit('setActivePath', '/overview/teacher')
    this.getTeacher()
  }
}
</script>

<style lang="less" scoped>
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

.block {
  color: #3b71b1;
  margin-top: 10px;

  span {
    color: #303133;
  }
}
</style>
