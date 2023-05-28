import {createRouter,createWebHistory} from 'vue-router'
// import ReportTable01 from './components/ReportTable01.vue'
// import ReportTable02 from './components/ReportTable02.vue'
// import ReportTable03 from './components/ReportTable03.vue'
// import ReportTable05 from './components/ReportTable05.vue'
// import ReportTable06 from './components/ReportTable06.vue'
// import ReportEqTable03 from './components/ReportEqTable03.vue'
// import ReportEqTable04 from './components/ReportEqTable04.vue'
// import ReportEqTable05 from './components/ReportEqTable05.vue'
// import ReportEqTable06 from './components/ReportEqTable06.vue'

const routes = [
    // {path:'/report-table01',component:ReportTable01},
    // {path:'/report-table02',component:ReportTable02},
    // {path:'/report-table03',component:ReportTable03},
    // {path:'/report-table05',component:ReportTable05},
    // {path:'/report-table06',component:ReportTable06},
    // {path:'/report-eq-table03',component:ReportEqTable03},
    // {path:'/report-eq-table04',component:ReportEqTable04},
    // {path:'/report-eq-table05',component:ReportEqTable05},
    // {path:'/report-eq-table06',component:ReportEqTable06},
]

const router= createRouter({
  history:createWebHistory(),
  routes
})

export default router;