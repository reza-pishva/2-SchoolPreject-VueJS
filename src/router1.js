import {createRouter,createWebHistory} from 'vue-router'
import StudentComponent from './components/StudentsComponents/StudentComponent.vue'
import PersonelComponent from './components/PersonelsComponents/PersonelComponent.vue'
// import AdminComponent from './components/AdminComponents/AdminComponent.vue'
import FirstPageComponent from './components/FirstPageComponent1.vue'
import UsersPageComponent from './components/UserComponents/UsersPageComponent.vue'


// const routes = [
//     {path:'/home',component:FirstPageComponent},
//     {path:'/students',component:StudentComponent},
//     {path:'/personels',component:PersonelComponent},
//     {path:'/admin',component:AdminComponent},
//     {path:'/users',component:UsersPageComponent},

// ]

const routes = [
  { path: '/home', component: FirstPageComponent },
  {
      path: '/personels', component: PersonelComponent, children: [
          { path: '/users', component: UsersPageComponent },
      ]
  },
  { path: '/students', component: StudentComponent },
]

const router= createRouter({
  history:createWebHistory(),
  routes
})

export default router;