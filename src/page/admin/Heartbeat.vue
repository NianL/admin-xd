<template>
  <div class="admin-heartbeat" v-loading="loading">
    <div>
      <p>APP心跳：是指在APP设备上预览图纸时，设备和服务器之间需要定时发送心跳包，以确保当前用户还在使用APP。</p>
      <p>心跳间隔：仅支持以分为单位，最短1分钟、最长60分钟。</p>
    </div>
    <div>
      <table cellspacing="20" cellpadding="0" border="0">
        <tr>
          <td>
            <div class="el-input el-input--small">
              <input
                class="el-input__inner"
                maxlength="5"
                style="width:200px;"
                type="number"
                placeholder="请输入数字"
                v-model.number="data.heartBeat"
              >
              <span>&nbsp;分钟</span>
            </div>
          </td>
        </tr>
      </table>
      <el-button size="small" type="primary" @click="setData()">保存设置</el-button>
    </div>
  </div>
</template>

<script>
import $Http from "@/script/DataAccess";

export default {
  name: "AdminHeartbeat",
  data() {
    return {
      data: {
        heartBeat: ""
      },
      loading: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      $Http.GetHeartBeat().then(res => {
        let data = res.data;
        if (data.status.code == 1) {
          if (data.data.heartBeat != "")
            this.data.heartBeat = data.data.heartBeat;
        }
        this.loading = false;
      });
    },
    setData() {
      if (isNaN(this.data.heartBeat) || this.data.heartBeat == "") {
        this.$root.m_alert("请输入一个数值");
        return;
      }

      this.loading = true;
      $Http
        .SetHeartBeat({
          heartBeat: this.data.heartBeat
        })
        .then(res => {
          let data = res.data;
          if (data.status.code == 1) {
            this.$message.success("保存成功");
          } else {
            this.$message.error(data.status.msg);
          }
          this.loading = false;
        });
    }
  }
};
</script>