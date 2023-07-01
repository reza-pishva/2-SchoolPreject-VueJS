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
              {{ letGraphicShow }}
              <StudentList @graphicShow="graphicReport" :formData2="users" />
            </div>
          </div>
        </div>
        <div class="col-7 bg-light pt-5" style="height: 400px">
          <Report1 :letShow="letGraphicShow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Report1 from "./Report1.vue";
import StudentList from "./StudentsListComponent.vue";
import { ref } from "vue";
import axios from "axios";
export default {
  // props: {
  //   buttonLoading: Boolean,
  //   buttonText: String,
  //   buttonClass: String,
  //   formData2: Array,
  // },
  components: {
    Report1,
    StudentList,
  },
  setup() {
    const classes = ref([]);
    const users = ref([]);
    const class_id = ref("");
    const letGraphicShow = ref(false);

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
    // const form = reactive({
    //   f_name: "",
    //   l_name: "",
    //   national_code: "",
    //   year: "",
    //   class_id: "",
    //   grade_id: "",
    //   spinner: true,
    // });

    // const users = ref([]);
    // const classes1 = ref([]);
    // const grades = ref([]);

    // function getClasses() {
    //   axios
    //     .get("http://127.0.0.1:8000/api/school/classroom/classrooms")
    //     .then(function (response) {
    //       // handle success
    //       classes1.value = response.data;
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     });
    // }
    // getClasses();
    // function getGrades() {
    //   axios
    //     .get("http://127.0.0.1:8000/api/school/grade/grades")
    //     .then(function (response) {
    //       // handle success
    //       grades.value = response.data;
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     });
    // }
    // getGrades();

    // function validate1() {
    //   emit("formData", form);
    //   form.spinner = false;
    // }
    function graphicReport(graphicShow) {
      letGraphicShow.value = graphicShow;
    }
    return {
      // grades,
      classes,
      class_id,
      searchList,
      users,
      letGraphicShow,
      graphicReport,
      // validate1,
    };
  },
};
</script>
