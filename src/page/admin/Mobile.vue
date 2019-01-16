<template>
  <div class="admin-mobile">
    <div>
      <table cellspacing="20" cellpadding="0" border="0">
        <tr>
          <td>管理员登录手机号：</td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
        </tr>
        <tr>
          <td>审计员登录手机号：</td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
        </tr>
      </table>
      <el-button size="small" type="primary" style="margin-left:20px;">保存设置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminMobile",
  data() {
    return {

    };
  }
};
</script>