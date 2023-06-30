<template>
  <div class="row" style="height: 170px; direction: rtl">
    <div class="col-5">
      <div style="width: 85%; margin-top: 5px; margin-right: 12px">
        <ReportFormComponent1
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
          <ReportFormComponent2
            @ScoreList="createList"
            :LessonList="lessons"
            :fName="f_name"
            :lName="l_name"
          />
        </div>
        <div class="col">
          <div
            style="
              font-family: Vazir;
              color: aliceblue;
              height: 70px;
              width: 45%;
              padding-top: 13px;
              margin-top: 35px;
              background-color: dimgray;
              border-radius: 10px;
            "
          >
            <div class="row">
              <div class="col"></div>
              <div class="col"></div>
              <div class="col">{{ f_name }}</div>
              <div class="col"></div>
              <div class="col"></div>
            </div>
            <div class="row">
              <div class="col"></div>
              <div class="col">{{ l_name }}</div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div>
          <ScoreListComponent
            :usersScore="scores"
            :spinner="ScoreSpinner"
            :gradeId="grade_id"
            :userId="user_id"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="row" style="direction: rtl">
    <StudentsList
      @Lesson="sendLessons"
      :formData2="users"
      :button-loading="loading"
      :spinner="ListSpinner"
    />
  </div>
  <div class="col"></div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import ReportFormComponent1 from "@/components/SettingComponents/ReportComponents/ReportFormComponent1.vue";
import StudentsList from "@/components/SettingComponents/ReportComponents/StudentsListComponent.vue";
import ReportFormComponent2 from "@/components/SettingComponents/ReportComponents/ReportFormComponent2.vue";
import ScoreListComponent from "@/components/SettingComponents/ReportComponents/ScoreListComponent.vue";

export default {
  components: {
    ReportFormComponent1,
    ReportFormComponent2,
    StudentsList,
    ScoreListComponent,
  },
  setup() {
    const loading = ref(true);
    const ListSpinner = ref(false);
    const ScoreSpinner = ref(false);
    const scores = ref([]);
    const users = ref([]);
    const lessons = ref([]);
    const spinner = ref(true);
    const selectedIds = ref([]);
    const grade_id = ref("");
    const user_id = ref("");
    const l_name = ref("---");
    const f_name = ref("---");

    function searchUser(formData) {
      ListSpinner.value = true;
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
          ListSpinner.value = false;
          users.value = response.data;
          spinner.value = false;
          loading.value = false;
        })
        .catch(function (error) {
          loading.value = false;
          console.log(error);
        });
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
      f_name.value = Lesson[3];
      l_name.value = Lesson[4];
      grade_id.value = Lesson[2];
      user_id.value = Lesson[1];
      lessons.value = Lesson;
    }

    function createList(ScoreList) {
      ScoreSpinner.value = true;
      setInterval(function () {
        ScoreSpinner.value = false;
      }, 1500);

      scores.value = ScoreList;
    }

    return {
      ListSpinner,
      ScoreSpinner,
      users,
      scores,
      searchUser,
      sendLessons,
      createList,
      lessons,
      f_name,
      l_name,
      grade_id,
      user_id,
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
