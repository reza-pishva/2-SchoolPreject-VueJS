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
    <Line
      :options="{
        responsive: true,
      }"
      :data="{
        labels: ExamList,
        datasets: [
          {
            label: 'تغییرات نمرات دانش آموز',
            // backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            borderColor: 'rgba(232,240,74,1)',
            data: ScoresList1,
          },
          {
            label: 'تغییرات میانگین نمرات کلیه دانش آموزان',
            // backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            borderColor: 'rgba(82,226,223,1)',
            data: ScoresList2,
          },
        ],
      }"
    />
  </div>
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
    ScoresList1: Array,
    ScoresList2: Array,
    ExamList: Array,
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
