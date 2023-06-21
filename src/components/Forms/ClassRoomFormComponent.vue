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
                v-model.lazy.trim="form.name"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="نام کلاس درس:"
              />
              <div class="form-text text-danger">
                {{ form.nameErrorText }}
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
                <option selected value="">انتخاب مقطع تحصیلی:</option>
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
            >
              <input
                v-model.lazy.trim="form.year"
                style="font-size: 12px"
                type="number"
                class="form-control"
                placeholder="سال تحصیلی:"
              />
              <div class="form-text text-danger">
                {{ form.yearErrorText }}
              </div>
            </div>
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
    const classInfo = ref([]);

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

    function getClass() {
      axios
        .get("http://127.0.0.1:8000/api/school/classroom/" + props.classId)
        .then(function (response) {
          // handle success
          classInfo.value = response.data;
          form.name = classInfo.value.name;
          form.year = classInfo.value.year;
          form.grade_id = classInfo.value.grade_id;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    if (props.classId !== undefined) {
      getClass();
    }

    function validate() {
      if (form.year === "") {
        form.yearErrorText = "سال تحصیلی پر نشده";
      } else {
        form.yearErrorText = "";
      }
      if (form.name === "") {
        form.nameErrorText = "نام کلاس باید مقدار داشته باشد";
      } else {
        form.nameErrorText = "";
      }
      if (form.grade_id === "") {
        form.gradeIdErrorText = "مقطع تحصیلی بدون مقدارست";
      } else {
        form.gradeIdErrorText = "";
      }
      if (form.year !== "" && form.name !== "" && form.grade_id !== "") {
        emit("formData", form);
      }
    }
    return { grades, form, validate };
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
