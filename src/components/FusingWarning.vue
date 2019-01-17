<template>
  <div class="fusing-warning">
    <el-table
      border
      stripe
      size="mini"
      :data="dataList"
      v-loading="paging.loading"
    >
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">
          <div v-text="(paging.page-1)*paging.rows+scope.$index+1"></div>
        </template>
      </el-table-column>
      <el-table-column prop="x" label="硬件码"></el-table-column>
      <el-table-column prop="x" label="设备名"></el-table-column>
      <el-table-column prop="x" label="IP"></el-table-column>
      <el-table-column prop="x" label="工号"></el-table-column>
      <el-table-column prop="x" label="熔断时间"></el-table-column>
      <el-table-column prop="x" label="详情"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="hideItem(scope.row)">隐藏</el-button>
        </template>
      </el-table-column>
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
  name: "FusingWarning",
  data() {
    return {
      searchParams: {
        permissions: 0
      },
      paging: {
        page: 1,
        rows: 20,
        loading: false,
        total: 100
      },
      dataList: []
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

        // }).then( res => {
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
        setTimeout(() => {
          _this.dataList = [];
          for (var i = 0; i < _this.paging.rows; i++) _this.dataList.push({});
          _this.paging.loading = false;
        }, 500);
      }
    },
    hideItem(item) {
      var msg =
        "隐藏后只能在【历史报警记录】中查看，且需要管理员在后台重新开通访问权限才能正常访问。您确认要隐藏该记录吗？";

      this.$root
        .m_confirm(msg)
        .then(() => {
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
        .catch(() => {
          console.log("no");
        });
    }
  }
};
</script>
