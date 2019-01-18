<template>
  <div class="admin-log">
    <div>
      <p>日志转发：是指把客户端预览图纸的记录、服务器应用程序异常记录都转发到指定服务器。</p>
      <p>接收服务器：以IP、端口号方式配置。</p>
    </div>
    <div>
      <table cellspacing="20" cellpadding="0" border="0">
        <tr>
          <td colspan="3">
            <el-radio v-model="data.enable" label="1">开启日志转发</el-radio>
            <el-radio v-model="data.enable" label="0">关闭日志转发</el-radio>
          </td>
        </tr>
        <tr>
          <td>服务器IP：</td>
          <td>
            <div class="el-input el-input--small">
              <input
                class="el-input__inner"
                maxlength="20"
                style="width:200px;"
                v-model.trim="data.ip"
              >
            </div>
          </td>
          <td>（例：192.168.1.1）</td>
        </tr>
        <tr>
          <td>端口号：</td>
          <td>
            <div class="el-input el-input--small">
              <input
                class="el-input__inner"
                maxlength="5"
                style="width:200px;"
                v-model.number="data.port"
                @blur="dataPortBlur"
              >
            </div>
          </td>
          <td>（请输入1~65535之间的数值）</td>
        </tr>
      </table>
      <el-button size="small" type="primary" :loading="saveWaiting" @click="setData()">保存设置</el-button>
    </div>
  </div>
</template>

<script>
import $Http from "@/script/dataAccess";

export default {
  name: "AdminLog",
  data() {
    return {
      data: {
        enable: "",
        ip: "",
        port: ""
      },
      saveWaiting: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      $Http.GetLogTransSettings().then(res => {
        let data = res.data;
        if (data.status.code == 1) {
          this.data = JSON.parse(data.data.transSettings);
        }
      });
    },
    setData() {
      if (this.data.ip == "") {
        this.$root.m_alert("请输入IP地址");
        return;
      }
      if (this.data.port == "") {
        this.$root.m_alert("请输入端口号");
        return;
      }

      this.saveWaiting = true;
      $Http
        .SetLogTransSettings({
          transSettings: JSON.stringify(this.data)
        })
        .then(res => {
          let data = res.data;
          if (data.status.code == 1) {
            this.$message.success("保存成功");
          } else {
            this.$message.error(data.status.msg);
          }
          this.saveWaiting = false;
        });
    },
    dataPortBlur() {
      if (
        this.data.port < 1 ||
        this.data.port > 65535 ||
        (this.data.port != "" && isNaN(this.data.port))
      ) {
        this.data.port = 1;
      }
    }
  }
};
</script>