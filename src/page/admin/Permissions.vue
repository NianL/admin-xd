<template>
  <div class="admin-permissions">
    <div class="main-tool-bar">
      <span class="span">访问权限：
        <el-select size="small" v-model="searchParams.permissions">
          <el-option label="全部" :value="0"></el-option>
          <el-option label="已开通" :value="1"></el-option>
          <el-option label="未开通" :value="2"></el-option>
          <el-option label="已禁用" :value="3"></el-option>
          <el-option label="被熔断" :value="4"></el-option>
        </el-select>
      </span>
      <el-button size="small" @click="resetData()">查询</el-button>
      <el-button size="small">导出Excel</el-button>
      <el-button size="small">批量开通</el-button>
      <el-button size="small">批量禁用</el-button>
    </div>
    <el-table
      border
      stripe
      size="mini"
      :data="dataList"
      v-loading="paging.loading"
      :height="height-170"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">
          <div v-text="(paging.page-1)*paging.rows+scope.$index+1"></div>
        </template>
      </el-table-column>
      <el-table-column prop="x" label="第一次访问时间" width="200"></el-table-column>
      <el-table-column prop="x" label="第一次访问工号" width="150"></el-table-column>
      <el-table-column prop="x" label="硬件码"></el-table-column>
      <el-table-column prop="x" label="客户端" width="150"></el-table-column>
      <el-table-column prop="x" label="访问权限" width="150"></el-table-column>
      <el-table-column label="备注">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="editNode(scope.row)">添加备注</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="editPermissions(scope.row)">开通权限</el-button>
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
  name: "AdminPermissions",
  props: {
    height: {
      type: Number,
      default: 0
    }
  },
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
  created: function() {
    this.getData();
  },
  methods: {
    resetData: function() {
      this.paging.page = 1;
      this.getData();
    },
    getData: function() {
      var _this = this;
      if (!this.paging.loading) {
        this.paging.loading = true;

        // DataAccess.({

        // }).then(function (res) {
        //     var data = res.data;
        //     if (data.status.code == 1) {
        //         _this.dataList = data.data.dataList;
        //         _this.paging.total = parseInt(data.data.total);
        //     } else {
        //         _this.$message.error(data.status.msg);
        //     }
        //     _this.paging.loading = false;
        // }).catch(function () {
        //     _this.$message.error("error");
        //     _this.paging.loading = false;
        // });
        setTimeout(function() {
          _this.dataList = [];
          for (var i = 0; i < _this.paging.rows; i++) _this.dataList.push({});
          _this.paging.loading = false;
        }, 500);
      }
    },
    editNode: function(item) {
      this.$refs.permissionsEditNote.add(item);
    },
    editPermissions: function(item) {
      var msg = "";
      if (true) msg = "开通权限后该客户端将可以预览图纸，确定要开通吗？";
      else msg = "禁用权限后该客户端将无法预览图纸，确定要禁用吗？";

      this.$root
        .m_confirm(msg)
        .then(function() {
          console.log("ok");
          // DataAccess.({
          //     itemID: item.itemID
          // }).then(function (res) {
          //     var data = res.data;
          //     if (data.status.code == 1) {
          //         _this.$message.success('删除成功!');
          //         if ((_this.paging.total % _this.paging.rows == 1) && _this.paging
          //             .page > 1) _this.paging.page = _this.paging.page - 1;
          //         _this.getData();
          //     } else {
          //         _this.m_alert(data.status.msg);
          //     }
          // }).catch(function () {
          //     _this.m_alert("error");
          // });
        })
        .catch(function() {
          console.log("no");
        });
    },
    handleSelectionChange: function(val) {
      this.selectionRows = val;
      console.log(this.selectionRows);
    }
  }
};
</script>