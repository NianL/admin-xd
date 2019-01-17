<template>
  <div class="charts-browse">
    <div :id="componentID" style="min-width:400px;height:400px"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";

export default {
  name: "ChartsBrowse",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      componentID: ""
    };
  },
  watch: {
    data: {
      handler(val, oldVal) {
        this.init();
      },
      deep: true
    }
  },
  created() {
    this.componentID = "container_" + Date.parse(new Date());
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.data.length > 0) {
        Highcharts.chart(this.componentID, {
          credits: {
            enabled: false
          },
          chart: {
            type: "column"
          },
          title: {
            text: ""
          },
          xAxis: {
            type: "category"
          },
          yAxis: {
            min: 0,
            title: {
              text: ""
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            pointFormat: "浏览次数: <b>{point.y} </b>"
          },
          series: [
            {
              name: "",
              data: this.data
            }
          ]
        });
      }
    }
  }
};
</script>