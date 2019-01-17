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
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
          },
          title: {
            text: ""
          },
          tooltip: {
            pointFormat: "{series.name}<b>{point.percentage:.1f}%</b>"
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: "pointer",
              dataLabels: {
                enabled: true,
                format: "<b>{point.name}</b>: {point.percentage:.1f} %"
              },
              showInLegend: true
            }
          },
          series: [
            {
              name: "",
              colorByPoint: true,
              data: this.data
            }
          ]
        });
      }
    }
  }
};
</script>