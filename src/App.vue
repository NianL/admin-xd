<template>
  <div id="app">
    <template v-if="adminName=='admin'||adminName=='auditor'">
      <div class="header">
        <h3>{{ systemName }}</h3>
        <div class="operate">
          <span v-show="adminName!=''">{{ adminName }} , 欢迎您！</span>
          <el-button type="text" @click="logout()">退出</el-button>
        </div>
      </div>
      <div class="main">
        <el-scrollbar class="main-left">
          <el-menu
            style="border-right:none;"
            :default-active="$route.name"
            :router="true"
            :collapse-transition="false"
            background-color="#343f55"
            text-color="#fff"
          >
            <template v-for="(item,index) in menuData">
              <template v-if="item.children == null || item.children.length == 0">
                <el-menu-item :index="item.url" @click="clickMenu(item)" :key="index">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </template>
              <template v-else>
                <el-submenu :index="item.url" :key="index">
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                  </template>
                  <el-menu-item
                    :index="chil.url"
                    :key="index"
                    v-for="(chil,index) in item.children"
                    @click="clickMenu(chil)"
                  >
                    <i :class="chil.icon"></i>
                    <span>{{chil.name}}</span>
                  </el-menu-item>
                </el-submenu>
              </template>
            </template>
          </el-menu>
        </el-scrollbar>
        <div class="main-right">
          <router-view class="main-router" :height="windowHeight"/>
        </div>
      </div>
    </template>
    <template v-else>
      <login-page :title="systemName" @call="loginSuccess"/>
    </template>
  </div>
</template>

<script>
import LoginPage from "@/page/Login";

export default {
  name: "App",
  data() {
    return {
      windowHeight: 0,
      adminName: "",
      systemName: "先导图纸云平台后台管理系统",
      menuData: []
    };
  },
  watch: {
    adminName(n, o) {
      if (n == "") {
        this.$router.push({ name: "login" });
      } else if (n == "admin") {
        if (this.$router.name == undefined)
          this.$router.push({ name: "admin-permissions" });
        this.menuData = [
          { name: "图纸访问权限设置", url: "admin-permissions" },
          { name: "终端访问熔断机制", url: "admin-fusing" },
          { name: "APP心跳间隔设置", url: "admin-heartbeat" },
          { name: "日志转发设置", url: "admin-log" },
          { name: "修改登录手机号", url: "admin-mobile" }
        ];
      } else if (n == "auditor") {
        if (this.$router.name == undefined)
          this.$router.push({ name: "auditor-home" });
        this.menuData = [
          { name: "主页", url: "auditor-home" },
          { name: "图纸访问分析", url: "auditor-analyze" },
          {
            name: "图纸预览信息",
            url: "auditor-view",
            children: [
              { name: "图纸访问记录", url: "auditor-view-record" },
              { name: "终端熔断历史警告", url: "auditor-view-warning" }
            ]
          },
          { name: "管理员审计", url: "auditor-audit" }
        ];
      }
    }
  },
  components: {
    loginPage: LoginPage
  },
  created() {
    this.adminName = "";
    document.title = this.systemName;
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
    });
    this.windowHeight = window.innerHeight;
  },
  methods: {
    logout() {
      this.adminName = "";
    },
    clickMenu(item) {
      this.$router.push({ name: item.url });
    },
    loginSuccess(n) {
      this.adminName = n;
    }
  }
};
</script>
