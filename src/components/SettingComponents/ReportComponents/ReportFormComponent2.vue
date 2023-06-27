<template>
  {{ LessonList[2] }}
  <div class="row" style="width: 100%; margin: auto; direction: rtl">
    <div style="width: 100%; height: 100px">
      <div class="row">
        <div
          style="
            height: 35px;
            width: 85%;
            background-color: rgb(61, 65, 189);
            margin: auto;
            border-radius: 5px;
          "
        >
          <p
            style="
              font-size: 12px;
              font-family: Vazir;
              color: aliceblue;
              margin-top: 10px;
            "
          >
            انتخاب درس جهت مشاهده لیست نمرات
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form
            @submit.prevent="validate2"
            style="direction: rtl; font-family: Vazir; margin-top: 10px"
          >
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col-6">
                    <div
                      class="form-group"
                      style="
                        font-family: Vazir;
                        font-size: 12px;
                        width: 100%;
                        margin-right: 70px;
                      "
                    >
                      <select
                        v-model="form.class_id2"
                        class="form-select"
                        style="font-size: 12px; margin-right: -40px"
                      >
                        <option selected value="">انتخاب درس:</option>
                        <option
                          v-for="(item, index) in LessonList[0]"
                          :key="index"
                          :value="item.id"
                        >
                          {{ item.grade_id }} . {{ item.lesson_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6">
                    <button
                      @click="scoreList"
                      class="btn btn-info button-class"
                      style="
                        height: 28px;
                        margin-top: 2px;
                        margin-right: -45px;
                        width: 60%;
                      "
                    >
                      مشاهده نمرات
                      <div
                        v-if="buttonLoading2"
                        class="spinner-border spinner-grow-sm"
                        role="status"
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";
// import Swal from "sweetalert2";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    buttonClass: String,
    LessonList: Array,
    UserId: String,
    GradeId: String,
  },
  setup(props, { emit }) {
    const form = reactive({
      f_name: "",
      l_name: "",
      national_code: "",
      year: "",
      class_id: "",
      class_id2: "",
      grade_id: "",
    });

    const users = ref([]);
    const classes1 = ref([]);
    const classes2 = ref([]);
    const grades = ref([]);

    function scoreList() {
      axios
        .post(`http://127.0.0.1:8000/api/school/user/add-class`)
        .then(function () {
          form.class_id2 = "";
          emit("formData2", []);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function getUsers() {
      axios
        .get("http://127.0.0.1:8000/api/school/user/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();

    function getClasses() {
      axios
        .get("http://127.0.0.1:8000/api/school/classroom/classrooms")
        .then(function (response) {
          // handle success
          classes1.value = response.data;
          classes2.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getClasses();
    function getGrades() {
      axios
        .get("http://127.0.0.1:8000/api/school/grade/grades")
        .then(function (response) {
          // handle success
          grades.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getGrades();

    function validate1() {
      emit("formData", form);
    }
    function validate2() {
      // emit("formData", form);
    }
    return {
      scoreList,
      grades,
      classes1,
      classes2,
      users,
      form,
      validate1,
      validate2,
    };
  },
};
</script>

<style>
.button-class {
  font-size: 12px;
  width: 45%;
  height: 35px;
}
</style>
