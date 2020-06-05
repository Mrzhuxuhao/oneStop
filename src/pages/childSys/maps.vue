<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="选择年度">
        <el-col :span="4">
          <el-date-picker size="small" type="year" placeholder="选择起始年份" v-model="form.beginYear" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="4">
          <el-date-picker size="small" type="year" placeholder="选择结束年份" v-model="form.endYear" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
    </el-form>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        form:{
          beginYear:'',
          endYear:'',
        },
        chartOptions: {
          chart: {
            type: 'bar',
            options3d: {
              enabled: true,
              alpha: 1,
              beta: 1,
              depth: 50,
              viewDistance: 25
            }
          },
          title: {
            text: '国内各地区供应商数量分布情况'
          },
          subtitle: {
            text: ''
          },
          xAxis: {
            categories: ['北京', '上海', '天津', '内蒙古', '河北'],
            title: {
              text: ''
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: ' (家)',
              align: 'high'
            },
            labels: {
              overflow: 'justify'
            }
          },
          tooltip: {
            valueSuffix: ' 家'
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true,
                allowOverlap: true // 允许数据标签重叠
              }
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            shadow: true
          },
          series: [{
            name: '2016-2020',
            data: [107, 31, 635, 203, 2]
          }]
        }
      };
    },
    mounted() {},
    methods: {
      myCallback() {
        console.log("this is callback function");
      }
    }
  };
</script>

<style>
  .line{
    text-align:center;
    width:20px;
  }
</style>
