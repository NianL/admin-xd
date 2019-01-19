<template>
  <div class="admin-fusing" v-loading="loading">
    <div>
      <p>熔断机制：是指对单个客户端访问图纸的频率做控制，超出以下设置时自动熔断，且在未来指定时间内不允许再次访问。</p>
      <p>熔断机制：仅支持以小时为单位，最短1小时、最长24小时。</p>
    </div>
    <div>
      <table cellspacing="20" cellpadding="0" border="0">
        <tr>
          <th style="width:60px;">&nbsp;</th>
          <th style="width:180px;">时间段（单位：分钟）</th>
          <th style="width:180px;">预览次数（单位：次）</th>
        </tr>
        <template v-for="(item,index) in data">
          <tr :key="index">
            <td>规则{{ item.index }}：</td>
            <td>
              <div class="el-input el-input--small">
                <input
                  class="el-input__inner"
                  maxlength="5"
                  style="width:200px;"
                  type="number"
                  v-model.number="item.time"
                >
              </div>
            </td>
            <td>
              <div class="el-input el-input--small">
                <input
                  class="el-input__inner"
                  maxlength="5"
                  style="width:200px;"
                  type="number"
                  v-model.number="item.count"
                >
              </div>
            </td>
          </tr>
        </template>
      </table>
      <el-button size="small" type="primary" @click="setData()">保存设置</el-button>
    </div>
  </div>
</template>

<script>
import $Http from "@/script/DataAccess";

export default {
  name: "AdminFusing",
  data() {
    return {
      data: [],
      loading: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      $Http.GetFuseRule().then(res => {
        let data = res.data;
        if (data.status.code == 1) {
          data = JSON.parse(data.data.fuseRule);
          let dataIndex = 0;
          for (let i = 1; i < 4; i++) {
            if (data.length > 0) {
              if (i == data[dataIndex].index) {
                this.data.push(data[dataIndex]);
                if (data.length - 1 > dataIndex) dataIndex++;
                continue;
              }
            }
            this.data.push({ index: i, time: "", count: "" });
          }
        }
        this.loading = false;
      });
    },
    setData() {
      let requestData = [];
      for (let i = 0; i < this.data.length; i++) {
        if (
          (this.data[i].time != "" && this.data[i].count == "") ||
          (this.data[i].time == "" && this.data[i].count != "")
        ) {
          this.$root.m_alert("规则" + this.data[i].index + "填写不完整");
          return;
        }
        if (this.data[i].time != "" && this.data[i].count != "") {
          requestData.push(this.data[i]);
        }
      }

      this.loading = true;
      $Http
        .SetFuseRule({
          fuseRule: JSON.stringify(requestData)
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