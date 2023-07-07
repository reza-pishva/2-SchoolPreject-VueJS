<template>
  <div>
    {{ chartData }}
  </div>
  <div>{{ ScoresList }}{{ LessonList }}</div>

  <div>
    <Bar :options="{ responsive: true }" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import { ref, watch } from "vue";
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
    LessonList: Array,
  },
  setup(props) {
    const chartData = ref({
      labels: [],
      datasets: [
        {
          data: [],
        },
      ],
    });

    watch(props.ScoresList, (newScoresList) => {
      chartData.value.labels = newScoresList.map((score) => score.name);
      chartData.value.datasets[0].data = newScoresList.map(
        (score) => score.score
      );
    });

    watch(props.LessonList, (newLessonList) => {
      chartData.value.labels = newLessonList.map((lesson) => lesson.name);
      chartData.value.datasets[0].data = newLessonList.map(
        (lesson) => lesson.score
      );
    });

    return {
      chartData,
    };
  },
};
</script>
