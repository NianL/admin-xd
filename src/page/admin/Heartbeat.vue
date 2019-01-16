<template>
  <div class="admin-heartbeat">
    <div>
      <p>APP心跳：是指在APP设备上预览图纸时，设备和服务器之间需要定时发送心跳包，以确保当前用户还在使用APP。</p>
      <p>心跳间隔：仅支持以分为单位，最短1分钟、最长60分钟。</p>
    </div>
    <div>
      <table cellspacing="20" cellpadding="0" border="0">
        <tr>
          <td>
            <el-input size="small" placeholder="请输入内容" style="width:200px;"></el-input>
            <span>&nbsp;分钟</span>
          </td>
        </tr>
      </table>

      <el-button size="small" type="primary" style="margin-left:20px;">保存设置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeartbeat",
  data() {
    return {
      msg: ""
    };
  }
};
</script>