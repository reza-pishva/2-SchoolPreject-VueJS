<template>
  <div>
    <button @click="updateProps">Update Props</button>
    <canvas ref="chartCanvas" />
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import Chart from "chart.js";

export default {
  setup() {
    const chartInstance = ref(null);
    const scores = ref([]);
    const lessons = ref([]);

    const updateProps = () => {
      // Update scores and lessons with new data
      scores.value = [90, 80, 70, 60];
      lessons.value = ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"];
    };

    onMounted(() => {
      // Fetch initial data or perform any other actions on component mount
      updateProps();
      createChart();
    });

    watch([scores, lessons], () => {
      // Perform actions whenever scores or lessons change
      // For example, update the chart with the new data
      // You can access the updated values using scores.value and lessons.value
      updateChart();
    });

    const createChart = () => {
      const ctx = document.getElementById("chartCanvas").getContext("2d");
      chartInstance.value = new Chart(ctx, {
        type: "bar",
        data: {
          labels: lessons.value,
          datasets: [
            {
              label: "Scores",
              data: scores.value,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    };

    const updateChart = () => {
      if (chartInstance.value) {
        chartInstance.value.data.labels = lessons.value;
        chartInstance.value.data.datasets[0].data = scores.value;
        chartInstance.value.update();
      }
    };

    return {
      updateProps,
    };
  },
};
</script>
