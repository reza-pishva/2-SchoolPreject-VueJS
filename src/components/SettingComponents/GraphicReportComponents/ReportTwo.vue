<template>
  {{ ScoresList }}{{ LessonList }}
  <div>
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
  setup(props) {
    const chartData = ref({
      labels: ["--", "--"],
      datasets: [
        {
          label: "Scores",
          data: [1, 1],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
    const scores = ref([]);
    const lessons = ref([]);

    onMounted(() => {
      updateChartData();
    });
    watch(
      () => props.ScoresList,
      (newValue) => {
        chartData.value.datasets[0].data = newValue;
        chartData.value.labels = props.LessonList;
      }
    );
    // watch([props.ScoresList, props.LessonList], () => {
    //   console.log("11111111111111111111111111111");
    //   updateChartData();
    // });
    const chartOptions = ref({
      responsive: true,
      // maintainAspectRatio: false,
    });
    const updateChartData = () => {
      chartData.value.datasets[0].data = props.ScoresList;
      chartData.value.labels = props.LessonList;
    };

    return {
      chartData,
      chartOptions,
      scores,
      lessons,
    };
  },
};
</script>
