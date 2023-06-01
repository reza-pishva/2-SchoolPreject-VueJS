import {createRouter,createWebHistory} from 'vue-router'
import StudentComponent from './components/StudentsComponents/StudentComponent.vue'
import PersonelComponent from './components/PersonelsComponents/PersonelComponent.vue'
import FirstPageComponent from './components/FirstPageComponent.vue'
import UsersPageComponent from './components/UserComponents/UsersPageComponent.vue'
import ProfilePageComponent from './components/UserComponents/ProfilePageComponent.vue'
import GradePageComponent from './components/GradeComponents/GradePageComponent.vue'
import ClassRoomPageComponent from './components/ClassRoomComponents/ClassRoomPageComponent.vue'
import LessonPageComponent  from './components/LessonComponents/LessonPageComponent.vue'

const routes = [
  { path: '/home', component: FirstPageComponent },
  {
      path: '/personels', component: PersonelComponent, children: [
          { path: '/users', component: UsersPageComponent },
          { path: '/profiles', component: ProfilePageComponent },
          { path: '/grades', component: GradePageComponent },
          { path: '/classes', component: ClassRoomPageComponent },
          { path: '/lessons', component: LessonPageComponent },

      ]
  },
  { path: '/students', component: StudentComponent },
]

const router= createRouter({
  history:createWebHistory(),
  routes
})

export default router;