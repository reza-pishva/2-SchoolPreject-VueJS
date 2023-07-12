<template>
  <div
    style="
      background-color: rgba(255, 255, 255, 0.5);
      margin-top: -20px;
      margin-right: -10px;
      width: 98%;
      height: 430px;
      border-radius: 5px;
    "
  >
    <Radar
      :data="{
        labels: LessonList,
        datasets: [
          {
            label: 'میانگین نمرات دانش آموز',
            backgroundColor: 'rgba(44,113,36,0.5)',
            borderColor: 'rgba(44,113,36,1)',
            pointBackgroundColor: 'rgba(44,113,36,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: ScoresList,
          },
          {
            label: 'میانگین نمرات کلیه دانش آموزان',
            backgroundColor: 'rgba(0,79,157,0.5)',
            borderColor: 'rgba(0,79,157,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: ScoresList2,
          },
        ],
      }"
      :options="{ responsive: true, maintainAspectRatio: false }"
    />
  </div>
</template>

<script lang="js">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'
// import * as chartConfig from './chartConfig.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Radar
  },
  props: {
    ScoresList: Array,
    ScoresList2: Array,
    LessonList: Array,
  },
  data() {
    // return chartConfig
    return{

    }
  }
}
</script>
