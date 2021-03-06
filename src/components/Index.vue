<template>
  <el-container>
    <el-header>
      <div>
        <el-image
          src="https://sias.uestc.edu.cn/images/sias_logo.png"
          fit="scale-down"
          @click.native="$router.push('/home')"
        ></el-image>
        <el-input placeholder="搜索" suffix-icon="el-icon-search"></el-input>
      </div>
    </el-header>
    <el-main>
      <el-menu
        :default-active="$store.state.activePath"
        mode="horizontal"
        router
        unique-opened
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">中心概况</template>
          <el-menu-item index="/overview/introduction">中心简介</el-menu-item>
          <el-menu-item index="/overview/council">理事会</el-menu-item>
          <el-menu-item index="/overview/leader">现任领导</el-menu-item>
          <el-menu-item index="/overview/teacher">教师队伍</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">团队介绍</template>
          <el-menu-item index="/team/security">信息安全研究中心</el-menu-item>
          <el-menu-item index="/team/intelligence">人工智能研究中心</el-menu-item>
          <el-menu-item index="/team/bigdata">大数据研究中心</el-menu-item>
          <el-menu-item index="/team/manufacture">智能制造研究中心</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">新闻中心</template>
          <el-menu-item index="/news/general">综合新闻</el-menu-item>
          <el-menu-item index="/news/research">科研进展</el-menu-item>
          <el-menu-item index="/news/notification">通知公告</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">合作交流</template>
          <el-menu-item index="/cooperation/company">企业合作</el-menu-item>
          <el-menu-item index="/cooperation/international">国际交流</el-menu-item>
        </el-submenu>
      </el-menu>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <div style="font-size: smaller">© 2021 公共安全研究中心 版权所有</div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less">
.el-header {
  color: #fff;
  background-color: #0e4f8f;
  height: 120px !important;
  padding-left: 20%;
  padding-right: 20%;

  div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.el-image:hover {
  cursor: pointer;
}

.el-input {
  width: 20%;
}

.el-main {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 20%;
  padding-right: 20%;
}

.el-menu {
  border: none !important;
}

.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-submenu {
  min-width: 20%;
  font-size: 16px;
  padding: 0;
  display: flex;
  justify-content: space-around;
  border-bottom: none !important;
}

.el-submenu__title {
  font-size: 16px;
  padding: 0;
  border-bottom: none !important;
}

.el-submenu__icon-arrow,
.el-icon-arrow-down {
  display: none !important;
}

.el-menu--popup {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0;
}

.el-menu--horizontal .el-menu .el-menu-item {
  font-size: 14px;
  color: #eee !important;
  background-color: rgba(0, 0, 0, 0);
}

.el-menu--horizontal .el-menu .el-menu-item:hover {
  background-color: rgba(14, 79, 143, 0.4);
}

.el-footer {
  color: #fff;
  background-color: #0e4f8f;
  height: 300px !important;
  padding-left: 10%;
  padding-right: 10%;

  div {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
