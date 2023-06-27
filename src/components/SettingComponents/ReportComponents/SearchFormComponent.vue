<template>
  <div class="row" style="height: 170px; direction: rtl">
    <div class="col-5">
      <div style="width: 85%; margin-top: 5px; margin-right: 12px">
        <SearchForm
          @formData="searchUser"
          :button-loading="loading"
          button-text="جستجو"
          button-class="btn btn-primary"
          :users="selectedIds"
        />
      </div>
    </div>
    <div class="col-7">
      <div class="row" style="height: 170px; direction: rtl">
        <div class="col" style="padding-top: 30px">
          <ReportFormComponent2 :LessonList="lessons" />
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
  <div class="row" style="direction: rtl">
    <StudentsList @Lesson="sendLessons" :formData2="users" />
  </div>
  <div class="col"></div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import SearchForm from "@/components/Forms/ScoreToUserFormComponent1.vue";
import StudentsList from "@/components/SettingComponents/ReportComponents/StudentsListComponent.vue";
import ReportFormComponent2 from "@/components/SettingComponents/ReportComponents/ReportFormComponent2.vue";

export default {
  components: {
    SearchForm,
    StudentsList,
    ReportFormComponent2,
  },
  setup() {
    const loading = ref(false);
    const users = ref([]);
    const lessons = ref([]);
    const spinner = ref(true);
    const selectedIds = ref([]);
    const exams = ref([]);
    const grade_id = ref("");
    const selectedRowIndex = ref("");
    const userId = ref("");

    const l_name = ref("");
    const f_name = ref("");

    function selectRow(index, gradeId, fName, lName, user_id) {
      selectedRowIndex.value = index;
      f_name.value = fName;
      l_name.value = lName;
      grade_id.value = gradeId;
      userId.value = user_id;

      axios
        .get(
          `http://127.0.0.1:8000/api/school/exam/exam-view/${grade_id.value}`
        )
        .then(function (response) {
          // handle success

          spinner.value = false;
          exams.value = response.data;
          console.log(exams.value);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    selectRow();

    function searchUser(formData) {
      spinner.value = true;
      selectedIds.value = [];
      loading.value = true;
      axios
        .post("http://127.0.0.1:8000/api/school/user/users-view-search", {
          f_name: formData.f_name,
          l_name: formData.l_name,
          national_code: formData.national_code,
          year: formData.year,
          class_id: formData.class_id,
          grade_id: formData.grade_id,
        })

        .then(function (response) {
          users.value = response.data;
          console.log(users.value);
          spinner.value = false;
          loading.value = false;
        })
        .catch(function (error) {
          loading.value = false;
          console.log(error);
        });
    }
    function afterAddingClass(formData2) {
      selectedIds.value = formData2;
      getUsers();
    }
    function getUsers() {
      axios
        .get("http://127.0.0.1:8000/api/school/user/users-view")
        .then(function (response) {
          // handle success
          spinner.value = false;
          users.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();

    function sendLessons(Lesson) {
      lessons.value = Lesson;
      console.log("111111111111111111");
      console.log(Lesson);
      console.log("222222222222222222");
    }

    return {
      users,
      // spinner,
      searchUser,
      sendLessons,
      // loading,
      // selectedIds,
      afterAddingClass,
      lessons,
      // selectRow,
      // exams,
      // grade_id,
      // selectedRowIndex,
      // f_name,
      // l_name,
      // userId,
    };
  },
};
</script>

<style>
div.reza3:hover {
  opacity: 1;
  filter: alpha(opacity=100);
  outline: 2px solid white;
  outline-offset: 1px;
  cursor: pointer;
  color: hsla(58, 90%, 51%, 0.934);
  font-weight: bold;
}
div.reza3 {
  opacity: 0.7;
  filter: alpha(opacity=100);
  color: hsl(0, 0%, 97%);
}
</style>
