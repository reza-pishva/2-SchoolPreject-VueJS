<template>
  {{ scores }} {{ lessons }}
  <!-- {{ chartData }}
  {{ chartOptions }} -->
  <div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import { ref, watch, onMounted } from "vue";

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
    const scores = ref([]);
    const lessons = ref([]);

    const chartData = ref({
      labels: props.LessonList,
      datasets: [{ data: props.ScoresList, backgroundColor: "blue" }],
    });
    const chartOptions = ref({
      responsive: true,
    });
    onMounted(() => {
      scores.value = props.ScoresList;
      lessons.value = props.LessonList;
    });
    watch([scores, lessons], () => {
      chartData.value = {
        labels: props.LessonList,
        datasets: [{ data: props.ScoresList, backgroundColor: "blue" }],
      };
      chartOptions.value = {
        responsive: true,
      };
    });

    return {
      scores,
      lessons,
      chartData,
      chartOptions,
    };
  },
};
</script>
