<template>
  <div class="auditor-analyze">
    <el-tabs v-model="currentTab" type="card">
      <el-tab-pane label="按图纸统计" name="1"></el-tab-pane>
      <el-tab-pane label="按终端统计" name="2"></el-tab-pane>
      <el-tab-pane label="按工号统计" name="3"></el-tab-pane>
    </el-tabs>
    <div class="main-tool-bar">
      <span class="span">访问权限：
        <el-date-picker
          size="small "
          v-model="searchParams.time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </span>
      <el-button size="small">查看分析</el-button>
    </div>
    <charts-browse :data="chartsData"/>
    <div>
      <el-table border stripe size="mini" :data="dataList" v-loading="loading">
        <el-table-column label="序号" width="80">
          <template slot-scope="scope">
            <div v-text="scope.$index+1"></div>
          </template>
        </el-table-column>
        <el-table-column prop="x" label="图纸名"></el-table-column>
        <el-table-column prop="x" label="预览次数"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import ChartsBrowse from "@/components/ChartsBrowse";

export default {
  name: "AuditorAnalyze",
  components: {
    chartsBrowse: ChartsBrowse
  },
  data() {
    return {
      currentTab: "1",
      searchParams: {},
      chartsData: [
        ["压铆螺母JS_1", 24],
        ["压铆螺母JS_2", 23],
        ["压铆螺母JS_3", 21],
        ["压铆螺母JS_4", 16],
        ["压铆螺母JS_5", 16],
        ["压铆螺母JS_6", 15],
        ["压铆螺母JS_7", 14],
        ["压铆螺母JS_8", 13],
        ["压铆螺母JS_9", 13]
      ],
      loading: false,
      dataList: []
    };
  },
  watch: {
    currentTab() {
      this.getData();
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      if (!this.loading) {
        this.loading = true;

        // DataAccess.({

        // }).then( res => {
        //     var data = res.data;
        //     if (data.status.code == 1) {
        //         this.dataList = data.data.dataList;
        //         this.total = parseInt(data.data.total);
        //     } else {
        //         this.$message.error(data.status.msg);
        //     }
        //     this.loading = false;
        // }).catch( ()=> {
        //     this.$message.error("error");
        //     this.loading = false;
        // });
        setTimeout(() => {
          this.dataList = [];
          for (var i = 0; i < 10; i++) this.dataList.push({});
          this.loading = false;
        }, 500);
      }
    }
  }
};
</script>

<style>
.auditor-analyze .el-tabs__header {
  margin-bottom: 0px;
}
</style>