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
import UserDeleteFormComponent  from './components/SettingComponents/UserComponents/UserDeleteFormComponent.vue'
import UserEditFormComponent  from './components/SettingComponents/UserComponents/UserEditFormComponent.vue'
import ProfileDeleteFormComponent  from './components/SettingComponents/UserComponents/ProfileDeleteFormComponent.vue'
import ProfileEditFormComponent  from './components/SettingComponents/UserComponents/ProfileEditFormComponent.vue'
import ExamDeleteFormComponent  from './components/SettingComponents/ExamComponents/ExamDeleteFormComponent.vue'
import ExamEditFormComponent  from './components/SettingComponents/ExamComponents/ExamEditFormComponent.vue'
import ProgEditFormComponent  from './components/SettingComponents/ClassProgComponents/ProgEditFormComponent.vue'
import userSearchFormComponent  from './components/SettingComponents/UserToClassComponents/userSearchFormComponent.vue'
import userSearchForScoreFormComponent  from './components/SettingComponents/ScoreToUserComponents/userSearchForScoreFormComponent.vue'
import SearchReportComponent  from './components/SettingComponents/ReportComponents/SearchFormComponent.vue'
import ScoreEditComponent  from './components/SettingComponents/ReportComponents/ScoreEditComponent.vue'

const routes = [
  { path: '/home', component: FirstPageComponent },
  {
      path: '/personels', component: PersonelComponent, children: [
          { path: '/users', component: UsersPageComponent },
          { path: '/user-delete/:id', name: 'deleteUser',component: UserDeleteFormComponent },
          { path: '/user-edit/:id', name: 'editUser',component: UserEditFormComponent },
          { path: '/profiles', component: ProfilePageComponent },
          { path: '/profile-delete/:id', name: 'deleteProfile',component: ProfileDeleteFormComponent },
          { path: '/profile-edit/:id', name: 'editProfile',component: ProfileEditFormComponent },
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
          { path: '/exams-delete/:id', name: 'deleteExam',component: ExamDeleteFormComponent },
          { path: '/exams-edit/:id', name: 'editExam',component: ExamEditFormComponent },
          { path: '/class-prog', component: ClassProgPageComponent },
          { path: '/progs-edit/:id', name: 'editProg',component: ProgEditFormComponent },
          { path: '/user-search', name: 'userSearch',component: userSearchFormComponent },
          { path: '/user-score-search', name: 'userScoreSearch',component: userSearchForScoreFormComponent },
      ]
  },
  { path: '/students', component: StudentComponent },
  { path: '/reports', component: SearchReportComponent },
  { path: '/score-edit',name: 'scoreEdit', component: ScoreEditComponent },

]

const router= createRouter({
  history:createWebHistory(),
  routes
})

export default router;