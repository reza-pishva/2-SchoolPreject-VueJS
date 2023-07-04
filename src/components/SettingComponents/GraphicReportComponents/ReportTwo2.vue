<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
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
  name: "BarChart",
  components: { Bar },
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
  data() {
    return {
      chartData: {
        labels: this.props.LessonList,
        datasets: [{ data: this.props.ScoresList }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
