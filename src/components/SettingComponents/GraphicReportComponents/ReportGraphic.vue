<template>
  <div class="row mt-4" style="direction: rtl">
    <div class="col-2 bg-danger" style="height: 400px">
      <div class="row">
        <div
          style="
            height: 40px;
            border-radius: 5px;
            width: 80%;
            background-color: blue;
            margin: auto;
          "
        >
          <p
            style="
              font-size: 14px;
              font-family: Vazir;
              color: aliceblue;
              margin-top: 9px;
            "
          >
            گزارشهای گرافیکی
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col bg-warning" style="height: 40px"></div>
        <div class="col bg-primary" style="height: 40px"></div>
      </div>
      <div class="row mt-1">
        <div class="col bg-primary" style="height: 40px"></div>
        <div class="col bg-warning" style="height: 40px"></div>
      </div>
      <div class="row mt-1">
        <div class="col bg-warning" style="height: 40px"></div>
        <div class="col bg-primary" style="height: 40px"></div>
      </div>
      <div class="row mt-1">
        <div class="col bg-primary" style="height: 40px"></div>
        <div class="col bg-warning" style="height: 40px"></div>
      </div>
      <div class="row mt-1">
        <div class="col bg-warning" style="height: 40px"></div>
        <div class="col bg-primary" style="height: 40px"></div>
      </div>
    </div>
    <div class="col-10">
      <div class="row">
        <div class="col-5" style="height: 400px">
          <div class="row" style="height: 10%; font-family: Vazir">
            <div class="col">
              <select
                v-model="class_id"
                class="form-select"
                style="font-size: 12px"
              >
                <option selected value="">انتخاب کلاس:</option>
                <option
                  v-for="(item, index) in classes"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-primary button-class"
                style="width: 50%; height: 30px; margin-top: 1px"
                @click="searchList"
              >
                جستجو
                <div
                  v-if="buttonLoading"
                  class="spinner-border spinner-grow-sm"
                  role="status"
                ></div>
              </button>
            </div>
          </div>
          <div class="row" style="height: 10%">
            <div class="col bg-info"></div>
            <div class="col bg-info"></div>
          </div>
          <div class="row" style="height: 80%">
            <div class="col">
              <StudentList @graphicShow="graphicReport" :formData2="users" />
            </div>
          </div>
        </div>
        <div class="col-7 bg-light pt-5" style="height: 400px">
          <ReportOne2 :LessonList="lessons" :ScoresList="scores" />
          <!-- <ReportOne2 /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReportOne2 from "./ReportOne.vue";
import StudentList from "./StudentsListComponent.vue";
import { ref } from "vue";
import axios from "axios";
export default {
  components: {
    ReportOne2,
    StudentList,
  },
  setup() {
    const classes = ref([]);
    const scores = ref([]);
    const lessons = ref([]);
    const lesson_ids = ref([]);
    const users = ref([]);
    const class_id = ref("");
    const letGraphicShow = ref(false);
    const f_name = ref("");
    const l_name = ref("");
    const grade_id = ref("");
    const user_id = ref("");

    function getClasses() {
      axios
        .get("http://127.0.0.1:8000/api/school/classroom/classrooms")
        .then(function (response) {
          // handle success
          classes.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getClasses();
    function searchList() {
      axios
        .get(
          `http://127.0.0.1:8000/api/school/user/users-view-by-class-id/${class_id.value}`
        )
        .then(function (response) {
          // handle success
          users.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function graphicReport(graphicShow) {
      letGraphicShow.value = graphicShow[0];
      f_name.value = graphicShow[1];
      l_name.value = graphicShow[2];
      grade_id.value = graphicShow[3];
      user_id.value = graphicShow[4];
      axios
        .get(
          `http://127.0.0.1:8000/api/school/lesson/lessons/${grade_id.value}`
        )
        .then(function (response) {
          lessons.value = response.data.map((item) => item.lesson_name);
        })
        .catch(function (error) {
          console.log(error);
        });

      axios
        .get(
          `http://127.0.0.1:8000/api/school/exam-user/user/${grade_id.value}/${user_id.value}`
        )
        .then(function (response) {
          scores.value = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return {
      lessons,
      lesson_ids,
      classes,
      class_id,
      searchList,
      users,
      letGraphicShow,
      graphicReport,
      f_name,
      l_name,
      grade_id,
      scores,
      user_id,
    };
  },
};
</script>
