<template>
  <div>
    <canvas ref="chart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    scoresList: {
      type: Array,
      required: true,
    },
    lessonList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      },
      chartOptions: {
        scales: {
          xAxes: [
            {
              ticks: {
                max: 0,
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    updateChartData() {
      this.chartData.labels = this.scoresList.map((score) => score.name);
      this.chartData.datasets[0].data = this.scoresList.map(
        (score) => score.score
      );
      this.chartOptions.scales.xAxes[0].ticks.max = this.lessonList.length;

      // Call the update() method provided by the vue-chartjs library to update the chart
      this.$data._chart.update();
    },
  },
  // watch: {
  //   scoresList(newScoresList) {
  //     this.updateChartData();
  //   },
  //   lessonList(newLessonList) {
  //     this.updateChartData();
  //   },
  // },
  mounted() {
    this.updateChartData();

    // Render the chart using the renderChart() method provided by the vue-chartjs library
    this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>
