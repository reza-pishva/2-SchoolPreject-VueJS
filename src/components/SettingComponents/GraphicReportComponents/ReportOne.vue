<template>
  <div>{{ ScoresList }}{{ LessonList }}</div>

  <div>
    <Bar
      :options="{ responsive: true }"
      :data="{
        labels: LessonList,
        datasets: [
          {
            label: 'نمرات',
            data: ScoresList,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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

    // watch(props.ScoresList, (newScoresList) => {
    //   chartData.value.labels = newScoresList.map((score) => score.name);
    //   chartData.value.datasets[0].data = newScoresList.map(
    //     (score) => score.score
    //   );
    // });

    // watch(props.LessonList, (newLessonList) => {
    //   chartData.value.labels = newLessonList.map((lesson) => lesson.name);
    //   chartData.value.datasets[0].data = newLessonList.map(
    //     (lesson) => lesson.score
    //   );
    // });

    return {
      chartData,
    };
  },
};
</script>
