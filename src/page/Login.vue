<template>
  <div class="login">
    <el-dialog
      :title="title"
      :visible="true"
      :modal="false"
      :show-close="false"
      width="600px"
      top="25vh"
      center
    >
      <table border="0" cellspacing="0" cellpadding="10" style=" margin: 0 auto;">
        <tr>
          <td style="text-align:right;">用户名：</td>
          <td>
            <el-input
              v-model.trim="userName"
              placeholder
              style="width:316px;"
              @keyup.enter.native="login()"
            ></el-input>
          </td>
        </tr>
        <tr>
          <td style="text-align:right;">手机验证码：</td>
          <td>
            <el-input placeholder style="width:200px;" @keyup.enter.native="login()"></el-input>
            <el-button>获取验证码</el-button>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <el-button type="primary" @click="login()">立即登录</el-button>
          </td>
        </tr>
      </table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "login",
  props: ["title"],
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    login() {
      if (this.userName == "admin" || this.userName == "auditor") {
        localStorage.setItem("userLogin", this.userName);
        this.$emit("call", this.userName);
      } else {
        this.$root.m_alert("用户名错误!");
      }
    }
  }
};
</script>