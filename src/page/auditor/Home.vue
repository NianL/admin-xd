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
      <charts-request :data="chartsData"/>
    </div>
    <div style="padding-bottom:5px;">
      <b>终端熔断告警列表：</b>
    </div>
    <div>
      <fusing-warning/>
    </div>
  </div>
</template>

<script>
import ChartsRequest from "@/components/ChartsRequest";
import FusingWarning from "@/components/FusingWarning";

export default {
  name: "AuditorHome",
  components: {
    chartsRequest: ChartsRequest,
    fusingWarning: FusingWarning
  },
  data() {
    return {
      searchParams: {},
      chartsData: [
        {
          name: "正常预览",
          y: 800
        },
        {
          name: "被熔断",
          y: 200
        },
        {
          name: "未授权",
          y: 100
        },
        {
          name: "未找到的图纸文件",
          y: 300
        },
        {
          name: "其他异常",
          y: 100
        }
      ]
    };
  }
};
</script>