import {createRouter,createWebHistory} from 'vue-router'
import StudentComponent from './components/StudentsComponents/StudentComponent.vue'
import PersonelComponent from './components/PersonelsComponents/PersonelComponent.vue'
import FirstPageComponent from './components/FirstPageComponent.vue'
import UsersPageComponent from './components/SettingComponents/UserComponents/UsersPageComponent.vue'
import ProfilePageComponent from './components/SettingComponents/UserComponents/ProfilePageComponent.vue'
import GradePageComponent from './components/SettingComponents/GradeComponents/GradePageComponent.vue'
import ClassRoomInsertFormComponent from './components/SettingComponents/ClassRoomComponents/ClassRoomInsertFormComponent.vue'
import LessonPageComponent  from './components/SettingComponents/LessonComponents/LessonPageComponent.vue'
import ExamTypePageComponent  from './components/SettingComponents/ExamTypeComponents/ExamTypePageComponent.vue'
import ExamPageComponent  from './components/SettingComponents/ExamComponents/ExamPageComponent.vue'
import ClassProgPageComponent  from './components/SettingComponents/ClassProgComponents/ClassProgPageComponent.vue'
import ClassRoomDeleteFormComponent  from './components/SettingComponents/ClassRoomComponents/ClassRoomDeleteFormComponent.vue'
import ClassRoomEditFormComponent  from './components/SettingComponents/ClassRoomComponents/ClassRoomEditFormComponent.vue'
import GradeDeleteFormComponent  from './components/SettingComponents/GradeComponents/GradeDeleteFormComponent.vue'
import GradeEditFormComponent  from './components/SettingComponents/GradeComponents/GradeEditFormComponent.vue'
import ExamTypeDeleteFormComponent  from './components/SettingComponents/ExamTypeComponents/ExamTypeDeleteFormComponent.vue'
import ExamTypeEditFormComponent  from './components/SettingComponents/ExamTypeComponents/ExamTypeEditFormComponent.vue'
import LessonDeleteFormComponent  from './components/SettingComponents/LessonComponents/LessonDeleteFormComponent.vue'
import LessonEditFormComponent  from './components/SettingComponents/LessonComponents/LessonEditFormComponent.vue'


const routes = [
  { path: '/home', component: FirstPageComponent },
  {
      path: '/personels', component: PersonelComponent, children: [
          { path: '/users', component: UsersPageComponent },
          { path: '/profiles', component: ProfilePageComponent },
          { path: '/grades', component: GradePageComponent },
          { path: '/grades-delete/:id', name: 'deleteGrade',component: GradeDeleteFormComponent },
          { path: '/grades-edit/:id', name: 'editGrade',component: GradeEditFormComponent },
          { path: '/classes', component: ClassRoomInsertFormComponent },
          { path: '/classes-delete/:id', name: 'deleteClass',component: ClassRoomDeleteFormComponent },
          { path: '/classes-edit/:id', name: 'editClass',component: ClassRoomEditFormComponent },
          { path: '/lessons', component: LessonPageComponent },
          { path: '/lessons-delete/:id', name: 'deleteLesson',component: LessonDeleteFormComponent },
          { path: '/lessons-edit/:id', name: 'editLesson',component: LessonEditFormComponent },
          { path: '/exam-types', component: ExamTypePageComponent },
          { path: '/exam-types-delete/:id', name: 'deleteExamType',component: ExamTypeDeleteFormComponent },
          { path: '/exam-types-edit/:id', name: 'editExamType',component: ExamTypeEditFormComponent },
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