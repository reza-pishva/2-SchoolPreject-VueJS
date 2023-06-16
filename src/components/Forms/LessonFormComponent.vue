<template>
  <form @submit.prevent="validate" style="direction: rtl; font-family: Vazir">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-3">
            <div
              class="form-group"
              style="font-family: Vazir; font-size: small"
            >
              <input
                v-model.lazy.trim="form.lesson_name"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="نام درس:"
              />
              <div class="form-text text-danger">
                {{ form.lessonNameErrorText }}
              </div>
            </div>
          </div>
          <div class="col-3">
            <div
              class="form-group"
              style="font-family: Vazir; font-size: small"
            >
              <select
                v-model="form.grade_id"
                class="form-select"
                style="font-size: small"
              >
                <option selected value="1000">انتخاب مقطع تحصیلی:</option>
                <option
                  v-for="(item, index) in grades"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.grade_name }}
                </option>
              </select>
              <div class="form-text text-danger">
                {{ form.gradeIdErrorText }}
              </div>
            </div>
          </div>
          <div class="col-2">
            <div
              class="form-group"
              style="font-family: Vazir; font-size: small"
            ></div>
          </div>
          <div class="col-4">
            <div class="form-group" style="font-size: x-small">
              <button
                style="font-size: 12px"
                type="submit"
                :class="buttonClass"
              >
                {{ buttonText }}
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
    lessonId: String,
  },
  setup(props, { emit }) {
    console.log(props);
    const form = reactive({
      lesson_name: "",
      lessonNameErrorText: "",
      grade_id: "",
      gradeIdErrorText: "",
    });

    const lessons = ref([]);
    const grades = ref([]);
    const lessonInfo = ref([]);

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

    function getLesson() {
      axios
        .get("http://127.0.0.1:8000/api/school/lesson/" + props.lessonId)
        .then(function (response) {
          // handle success
          console.log(props.lessonId);
          lessonInfo.value = response.data;
          form.lesson_name = lessonInfo.value.lesson_name;
          form.grade_id = lessonInfo.value.grade_id;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getLesson();

    function validate() {
      if (form.lesson_name === "") {
        form.lessonNameErrorText = "سال تحصیلی پر نشده";
      } else {
        form.lessonNameErrorText = "";
      }
      if (form.grade_id === "") {
        form.gradeIdErrorText = "نام کلاس باید مقدار داشته باشد";
      } else {
        form.gradeIdErrorText = "";
      }
      if (form.lesson_name !== "" && form.grade_id !== "") {
        emit("formData", form);
      }
    }
    return { grades, lessons, form, validate };
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
