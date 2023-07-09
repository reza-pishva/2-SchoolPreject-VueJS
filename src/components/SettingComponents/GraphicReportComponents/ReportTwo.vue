<template>
  {{ ScoresList }}
  <Line
    :options="{
      responsive: true,
    }"
    :data="{
      labels: LessonList,
      datasets: [
        {
          label: 'میانگین نمرات دانش آموز',
          data: ScoresList,
        },
      ],
    }"
  />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { ref } from "vue";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: { Line },
  props: {
    ScoresList: Array,
    LessonList: Array,
  },
  setup() {
    const chartData = ref({
      labels: [],
      datasets: [
        {
          data: [],
        },
      ],
    });

    return {
      chartData,
    };
  },
};
</script>
