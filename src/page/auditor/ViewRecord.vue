<template>
  <div class="auditor-view-record">
    <div class="main-tool-bar" style="max-width:1300px">
      <span class="span">请求时间：
        <el-date-picker
          size="small "
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
      <span class="span">工号：
        <el-input size="small" placeholder="请输入内容"></el-input>
      </span>
      <span class="span">硬件码：
        <el-input size="small" placeholder="请输入内容"></el-input>
      </span>
      <span class="span">访问状态：
        <el-select size="small" v-model="searchParams.type">
          <el-option label="全部" :value="0"></el-option>
          <el-option label="正常预览" :value="1"></el-option>
          <el-option label="被熔断" :value="2"></el-option>
          <el-option label="未授权" :value="3"></el-option>
          <el-option label="未找到图纸" :value="4"></el-option>
          <el-option label="其他异常" :value="5"></el-option>
        </el-select>
      </span>
      <el-button size="small" @click="resetData()">查询</el-button>
    </div>
    <el-table
      border
      stripe
      size="mini"
      :data="dataList"
      v-loading="paging.loading"
      :height="height-210"
      @selection-change="handleSelectionChange"
    >
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">
          <div v-text="(paging.page-1)*paging.rows+scope.$index+1"></div>
        </template>
      </el-table-column>
      <el-table-column prop="x" label="预览时间"></el-table-column>
      <el-table-column prop="x" label="图纸名"></el-table-column>
      <el-table-column prop="x" label="工号"></el-table-column>
      <el-table-column prop="x" label="设备名"></el-table-column>
      <el-table-column prop="x" label="IP地址"></el-table-column>
      <el-table-column prop="x" label="硬件码"></el-table-column>
      <el-table-column prop="x" label="客户端"></el-table-column>
      <el-table-column prop="x" label="访问状态"></el-table-column>
    </el-table>
    <div style="margin-top: 10px;" v-if="paging.total>0">
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="getData"
        @current-change="getData"
        :current-page.sync="paging.page"
        :page-sizes="[20, 40, 70, 100]"
        :page-size.sync="paging.rows"
        :total="paging.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuditorViewRecord",
  props: {
    height: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      searchParams: {
        time: [],
        type: 0
      },
      paging: {
        page: 1,
        rows: 20,
        loading: false,
        total: 100
      },
      dataList: [],
      blankHeight: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    resetData() {
      this.paging.page = 1;
      this.getData();
    },
    getData() {
      var _this = this;
      if (!this.paging.loading) {
        this.paging.loading = true;

        // DataAccess.({

        // }).then( (res)=> {
        //     var data = res.data;
        //     if (data.status.code == 1) {
        //         _this.dataList = data.data.dataList;
        //         _this.paging.total = parseInt(data.data.total);
        //     } else {
        //         _this.$message.error(data.status.msg);
        //     }
        //     _this.paging.loading = false;
        // }).catch( ()=> {
        //     _this.$message.error("error");
        //     _this.paging.loading = false;
        // });
        setTimeout(()=> {
          _this.dataList = [];
          for (var i = 0; i < _this.paging.rows; i++) _this.dataList.push({});
          _this.paging.loading = false;
        }, 500);
      }
    },
    editPermissions(item) {
      var msg = "";
      if (true) msg = "开通权限后该客户端将可以预览图纸，确定要开通吗？";
      else msg = "禁用权限后该客户端将无法预览图纸，确定要禁用吗？";

      this.$root
        .m_confirm(msg)
        .then(()=> {
          console.log("ok");
          // DataAccess.({
          //     itemID: item.itemID
          // }).then( (res)=> {
          //     var data = res.data;
          //     if (data.status.code == 1) {
          //         _this.$message.success('删除成功!');
          //         if ((_this.paging.total % _this.paging.rows == 1) && _this.paging
          //             .page > 1) _this.paging.page = _this.paging.page - 1;
          //         _this.getData();
          //     } else {
          //         _this.m_alert(data.status.msg);
          //     }
          // }).catch( ()=> {
          //     _this.m_alert("error");
          // });
        })
        .catch(()=> {
          console.log("no");
        });
    },
    handleSelectionChange(val) {
      this.selectionRows = val;
      console.log(this.selectionRows);
    }
  }
};
</script>