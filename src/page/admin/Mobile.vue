<template>
  <div class="admin-mobile" v-loading="loading">
    <div>
      <template v-for="(item,index) in data">
        <table cellspacing="20" cellpadding="0" border="0" :key="index">
          <tr>
            <th>
              <template v-if="item.type=='1'">管理员信息</template>
              <template v-if="item.type=='2'">审计员信息</template>
            </th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>工号：</td>
            <td>
              <div class="el-input el-input--small">
                <input
                  class="el-input__inner"
                  maxlength="20"
                  style="width:200px;"
                  v-model.trim="item.workNo"
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>手机号：</td>
            <td>
              <div class="el-input el-input--small">
                <input
                  class="el-input__inner"
                  maxlength="11"
                  style="width:200px;"
                  v-model.trim="item.mobile"
                >
              </div>
            </td>
          </tr>
        </table>
      </template>
      <el-button size="small" type="primary" @click="setData()">保存设置</el-button>
    </div>
  </div>
</template>

<script>
import Common from "@/script/Common";
import $Http from "@/script/DataAccess";

export default {
  name: "AdminMobile",
  data() {
    return {
      data: [
        { type: "1", workNo: "", mobile: "" },
        { type: "2", workNo: "", mobile: "" }
      ],
      loading: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      $Http.GetMobileSettings().then(res => {
        let data = res.data;
        if (data.status.code == 1) {
          data = JSON.parse(data.data.mobileSettings);
          if (data.length == 2) this.data = data;
        }
        this.loading = false;
      });
    },
    setData() {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].workNo == "" || this.data[i].mobile == "") {
          this.$root.m_alert("请填写所有信息");
          return;
        }
        if (!Common.isMobile(this.data[i].mobile)) {
          this.$root.m_alert("手机号格式错误");
          return;
        }
      }

      this.loading = true;
      $Http
        .SetMobileSettings({
          mobileSettings: JSON.stringify(this.data)
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