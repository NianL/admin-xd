<template>
  <div class="auditor-home">
    <div>
      <b>预览图纸的请求统计：</b>
    </div>
    <div class="main-tool-bar">
      <span class="span">请求时间：
        <el-date-picker
          size="small"
          v-model="searchParams.time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </span>
      <span class="span">图纸名：
        <el-input size="small" placeholder="请输入内容"></el-input>
      </span>
      <span class="span">硬件码：
        <el-input size="small" placeholder="请输入内容"></el-input>
      </span>
      <span class="span">工号：
        <el-input size="small" placeholder="请输入内容"></el-input>
      </span>
      <el-button size="small">保存统计条件</el-button>
    </div>
    <div>
      饼状图
    </div>
    <div>
      <b>终端熔断告警列表：</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuditorHome",
  data() {
    return {
      searchParams: {}
    };
  }
};
</script>