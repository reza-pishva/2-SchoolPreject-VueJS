<template>
  <form @submit.prevent="validate" style="direction: rtl; font-family: Vazir">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="form-group" style="font-size: xx-small">
              <select
                v-model="form.lesson_id"
                class="form-select"
                style="font-size: small"
              >
                <option value="">انتخاب درس:</option>
                <option
                  v-for="(item, index) in lessons"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.lesson_name }}
                </option>
              </select>
              <div class="form-text text-danger validation-text">
                {{ form.lessonIdErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-family: Vazir">
              <select
                v-model="form.exam_type_id"
                class="form-select"
                style="font-size: small"
              >
                <option selected value="">انتخاب نوع آزمون:</option>
                <option
                  v-for="(item, index) in examTypes"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.exam_type }}
                </option>
              </select>
              <div class="form-text text-danger validation-text">
                {{ form.examTypeIdErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-family: Vazir">
              <select
                v-model="form.grade_id"
                class="form-select"
                style="font-size: small"
              >
                <option selected value="">انتخاب مقطع تحصیلی:</option>
                <option
                  v-for="(item, index) in grades"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.grade_name }}
                </option>
              </select>
              <div class="form-text text-danger validation-text">
                {{ form.gradeIdErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-size: x-small">
              <button
                style="font-size: 12px"
                type="submit"
                class="btn btn-primary button-class"
              >
                ثبت
                <div
                  v-if="buttonLoading"
                  class="spinner-border spinner-grow-sm"
                  role="status"
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    buttonClass: String,
    post: Object,
    classId: String,
  },
  setup(props, { emit }) {
    const form = reactive({
      name: "",
      nameErrorText: "",
      grade_id: "",
      gradeIdErrorText: "",
      year: "",
      yearErrorText: "",
    });

    const grades = ref([]);
    const examTypes = ref([]);
    const lessons = ref([]);

    function getGrades() {
      axios
        .get("http://127.0.0.1:8000/api/school/grade/grades")
        .then(function (response) {
          // handle success
          grades.value = response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function getExamTypes() {
      axios
        .get("http://127.0.0.1:8000/api/school/exam/exam-types")
        .then(function (response) {
          // handle success
          examTypes.value = response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function getLessons() {
      axios
        .get(`http://127.0.0.1:8000/api/school/lesson/lessons-view`)
        .then(function (response) {
          console.log(response.data);
          // handle success
          lessons.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getGrades();
    getExamTypes();
    getLessons();

    function validate() {
      if (form.lesson_id === "") {
        form.lessonIdErrorText = "نام آزمون باید وارد شود";
      } else {
        form.lessonIdErrorText = "";
      }
      if (form.grade_id === "") {
        form.gradeIdErrorText = "نام مقطع تحصیلی باید وارد شود";
      } else {
        form.gradeIdErrorText = "";
      }
      if (form.exam_type_id === "") {
        form.examTypeIdErrorText = "نوع امتحان باید وارد شود";
      } else {
        form.examTypeIdErrorText = "";
      }
      if (
        form.exam_type_id !== "" &&
        form.lesson_id !== "" &&
        form.grade_id !== ""
      ) {
        emit("formData", form);
      }
    }
    return { lessons, examTypes, grades, form, validate };
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
