<template>
  {{ ScoresList }} {{ LessonList }}
  <div v-if="letShow">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import { ref } from "vue";
// import axios from "axios";

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
    letShow: Boolean,
    f_name1: String,
    l_name1: String,
    LessonList: Array,
    ScoresList: Array,
  },
  setup(props) {
    const chartData = ref({
      labels: props.LessonList,
      datasets: [{ data: props.ScoresList, backgroundColor: "blue" }],
    });
    const chartOptions = ref({
      responsive: true,
    });

    return {
      chartData,
      chartOptions,
    };
  },
};
</script>
