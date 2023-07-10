<template>
  <div
    style="
      background-color: rgba(33, 31, 31, 0.704);
      margin-top: 50px;
      margin-right: -10px;
      width: 98%;
      border-radius: 5px;
    "
  >
    <Bar
      :options="{
        responsive: true,
        ticks: { font: { size: 14, color: 'white' } },
      }"
      :data="{
        labels: LessonList,
        datasets: [
          {
            label: 'میانگین نمرات دانش آموز',
            data: ScoresList,
            backgroundColor: 'rgba(75, 192, 192 , 0.7)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
          },
          {
            label: 'میانگین نمرات دانش آموزان این مقطع تحصیلی',
            data: ScoresList2,
            backgroundColor: 'rgba(194, 49, 41)',
            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderWidth: 1,
          },
        ],
      }"
    />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import { ref } from "vue";
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
  components: { Bar },
  props: {
    ScoresList: Array,
    ScoresList2: Array,
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
