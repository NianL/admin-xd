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
              style="width:300px;"
              @keyup.enter.native="login()"
              maxlength="20"
            ></el-input>
          </td>
        </tr>
        <tr>
          <td style="text-align:right;">手机验证码：</td>
          <td>
            <el-input
              v-model.trim="mobileCode"
              placeholder
              style="width:135px;margin-right:5px;"
              @keyup.enter.native="login()"
              maxlength="6"
            ></el-input>
            <span>
              <el-button disabled v-show="SMS.time!=0" style="width:155px;">{{SMS.time}}秒后可重新获取</el-button>
            </span>
            <span>
              <el-button
                :disabled="SMS.buttonDisabled"
                v-show="SMS.time==0"
                @click="sendSMS()"
                style="width:155px;"
              >获取验证码</el-button>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <el-button :disabled="!SMS.isSend" type="primary" @click="login()">立即登录</el-button>
          </td>
        </tr>
      </table>
    </el-dialog>
  </div>
</template>

<script>
import $Http from "@/script/DataAccess";

export default {
  name: "login",
  props: ["title"],
  data() {
    return {
      userName: "",
      mobileCode: "",
      SMS: {
        timeOut: null,
        time: 0,
        buttonDisabled: true,
        isSend: false
      }
    };
  },
  watch: {
    userName(n) {
      if (n == "admin" || n == "auditor") {
        this.SMS.buttonDisabled = false;
        this.clearSMSTime();
      } else {
        this.SMS.buttonDisabled = true;
      }
    }
  },
  methods: {
    login() {
      if (this.mobileCode == "") {
        this.$root.m_alert("请输入短信验证码");
        return;
      }

      // $Http
      //   .Login({
      //     username: this.userName,
      //     mobileCode: this.mobileCode
      //   })
      //   .then(res => {});

      this.$emit("call", this.userName);
    },
    sendSMS() {
      // $Http
      //   .SendMessage({
      //     username: this.userName
      //   })
      //   .then(res => {});

      this.SMS.isSend = true;
      this.SMS.time = 60;
      this.SMS.timeOut = setInterval(() => {
        if (this.SMS.time > 0) this.SMS.time -= 1;
        else this.clearSMSTime();
      }, 1000);
    },
    clearSMSTime() {
      this.SMS.time = 0;
      clearInterval(this.SMS.timeOut);
    }
  },
  destroyed() {
    this.clearSMSTime();
  }
};
</script>