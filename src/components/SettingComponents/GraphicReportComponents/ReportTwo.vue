<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" />
    <button @click="updateChartData">Update Chart</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { Bar } from "chart.js";

export default {
  components: {
    Bar,
  },
  setup() {
    const chartData = ref({
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sales",
          data: [50, 60, 70, 80, 90],
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
      // Example of updating the chart data
      chartData.value.datasets[0].data = [30, 40, 50, 60, 70];
    };

    return {
      chartData,
      chartOptions,
      updateChartData,
    };
  },
};
</script>
