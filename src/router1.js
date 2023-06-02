import {createRouter,createWebHistory} from 'vue-router'
import StudentComponent from './components/StudentsComponents/StudentComponent.vue'
import PersonelComponent from './components/PersonelsComponents/PersonelComponent.vue'
import FirstPageComponent from './components/FirstPageComponent.vue'
import UsersPageComponent from './components/SettingComponents/UserComponents/UsersPageComponent.vue'
import ProfilePageComponent from './components/SettingComponents/UserComponents/ProfilePageComponent.vue'
import GradePageComponent from './components/SettingComponents/GradeComponents/GradePageComponent.vue'
import ClassRoomPageComponent from './components/SettingComponents/ClassRoomComponents/ClassRoomPageComponent.vue'
import LessonPageComponent  from './components/SettingComponents/LessonComponents/LessonPageComponent.vue'
import ExamTypePageComponent  from './components/SettingComponents/ExamTypeComponents/ExamTypePageComponent.vue'
import ExamPageComponent  from './components/SettingComponents/ExamComponents/ExamPageComponent.vue'
import ClassProgPageComponent  from './components/SettingComponents/ClassProgComponents/ClassProgPageComponent.vue'

const routes = [
  { path: '/home', component: FirstPageComponent },
  {
      path: '/personels', component: PersonelComponent, children: [
          { path: '/users', component: UsersPageComponent },
          { path: '/profiles', component: ProfilePageComponent },
          { path: '/grades', component: GradePageComponent },
          { path: '/classes', component: ClassRoomPageComponent },
          { path: '/lessons', component: LessonPageComponent },
          { path: '/exam-types', component: ExamTypePageComponent },
          { path: '/exams', component: ExamPageComponent },
          { path: '/class-prog', component: ClassProgPageComponent },

      ]
  },
  { path: '/students', component: StudentComponent },
]

const router= createRouter({
  history:createWebHistory(),
  routes
})

export default router;