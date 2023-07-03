<template>
  {{ ScoresList }} {{ LessonList }}
  <div>
    <canvas ref="chartCanvas" />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import Chart from "chart.js";

export default {
  props: {
    ScoresList: {
      type: Array,
      required: true,
    },
    LessonList: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const chartInstance = ref(null);
    const updateChart = () => {
      if (chartInstance.value) {
        chartInstance.value.data.labels = props.LessonList;
        chartInstance.value.data.datasets[0].data = props.ScoresList;
        chartInstance.value.update();
      }
    };

    watch([props.ScoresList, props.LessonList], () => {
      updateChart();
    });

    return {
      chartInstance,
    };
  },
  onMounted() {
    console.log("onMounted--------------------------");
    this.chartInstance = new Chart(this.$refs.chartCanvas, {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "Scores",
            data: [],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
