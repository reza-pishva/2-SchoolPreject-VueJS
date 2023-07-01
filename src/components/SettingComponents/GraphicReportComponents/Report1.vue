<template>
  {{ LessonList }}
  <div v-if="letShow">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import { ref, watch } from "vue";
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
    grade_id1: String,
    LessonList: Array,
  },
  setup(props) {
    watch(
      () => props.LessonList,
      (newValue) => {
        chartData.value.labels = newValue;
        console.log(chartData.value);
      }
    );
    const chartData = ref({
      labels: ["January", "February", "March"],
      datasets: [{ data: [40, 20, 12], backgroundColor: "blue" }],
    });
    const chartOptions = ref({
      responsive: true,
    });
    const lessons = ref([]);
    const grade_id = ref("");

    return {
      chartData,
      chartOptions,
      lessons,
      grade_id,
    };
  },
};
</script>
