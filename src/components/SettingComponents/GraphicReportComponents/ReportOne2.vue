<template>
  {{ LessonList }}{{ ScoresList }}
  <div>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { Bar } from "chart.js";

export default {
  components: {
    Bar,
  },
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
      labels: props.LessonList,
      datasets: [
        {
          label: "Scores",
          data: props.ScoresList,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });

    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false,
    });

    const updateChartData = () => {
      // console.log(props.LessonList, props.ScoresList);
      chartData.value.datasets[0].data = props.ScoresList;
      chartData.value.labels = props.LessonList;
    };

    watch([props.ScoresList, props.LessonList], () => {
      updateChartData();
    });

    onMounted(() => {
      updateChartData();
    });

    return {
      chartData,
      chartOptions,
    };
  },
};
</script>
