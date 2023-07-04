<template>
  <!-- {{ chartData }} -->
  <div>
    <!-- <canvas id="my-chart-id" :options="chartOptions" :data="chartData"></canvas> -->
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "ReportTwo",
  components: { Bar },
  props: {
    ScoresList: {
      type: Array,
      // required: true,
    },
    LessonList: {
      type: Array,
      // required: true,
    },
  },
  setup(props) {
    const chartData = ref({
      labels: props.LessonList,
      datasets: [
        {
          label: "Scores",
          data: props.ScoresList,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
    const chartOptions = ref({
      responsive: true,
    });

    onMounted(() => {
      updateChartData();
    });

    watch(
      () => [props.ScoresList, props.LessonList],
      () => {
        console.log(chartOptions.value);
        console.log(chartData.value);
        chartData.value.datasets[0].data = props.ScoresList;
        chartData.value.labels = props.LessonList;
        chartOptions.value.responsive = true;
      }
    );

    const updateChartData = () => {
      chartData.value.datasets[0].data = props.ScoresList;
      chartData.value.labels = props.LessonList;
      chartOptions.value.responsive = true;
      console.log("updateChartData");
    };

    return {
      chartData,
      chartOptions,
    };
  },
};
</script>
