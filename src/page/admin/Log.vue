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
            <el-radio v-model="radio" label="1">开启日志转发</el-radio>
            <el-radio v-model="radio" label="2">关闭日志转发</el-radio>
          </td>
        </tr>
        <tr>
          <td>服务器IP：</td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
          <td>（例：192.168.1.1）</td>
        </tr>
        <tr>
          <td>端口号：</td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
          <td>（请输入1~65535之前的数值）</td>
        </tr>
      </table>

      <el-button size="small" type="primary" style="margin-left:20px;">保存设置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLog",
  data() {
    return {
      radio: "1"
    };
  }
};
</script>