<template>
  <div class="admin-fusing">
    <div>
      <p>熔断机制：是指对单个客户端访问图纸的频率做控制，超出以下设置时自动熔断，且在未来指定时间内不允许再次访问。</p>
      <p>熔断机制：仅支持以小时为单位，最短1小时、最长24小时。</p>
    </div>
    <div>
      <table cellspacing="20" cellpadding="0" border="0">
        <tr>
          <th style="width:60px;">&nbsp;</th>
          <th style="width:180px;">时间段（单位：小时）</th>
          <th style="width:180px;">预览次数（单位：次）</th>
          <th style="width:180px;">熔断时间（单位：小时）</th>
        </tr>
        <tr>
          <td>规则1：</td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
        </tr>
        <tr>
          <td>规则2：</td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
        </tr>
        <tr>
          <td>规则3：</td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
          <td>
            <el-input size="small" placeholder="请输入内容"></el-input>
          </td>
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
  name: "AdminFusing",
  data() {
    return {
      msg: ""
    };
  }
};
</script>