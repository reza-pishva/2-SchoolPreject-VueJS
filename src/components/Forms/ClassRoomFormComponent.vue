<template>
  <form @submit.prevent="validate" style="direction: rtl; font-family: Vazir">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-3">
            <div class="form-group" style="font-size: xx-small">
              <input
                v-model.lazy.trim="form.name"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="نام کلاس درس:"
              />
              <div class="form-text text-danger validation-text">
                {{ form.nameErrorText }}
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="form-group" style="font-family: Vazir">
              <select
                v-model="form.grade_id"
                class="form-select"
                style="font-size: small"
              >
                <option value="">انتخاب مقطع تحصیلی:</option>
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
          <div class="col-2">
            <div class="form-group" style="font-size: xx-small">
              <input
                v-model.lazy.trim="form.year"
                style="font-size: 12px"
                type="number"
                class="form-control"
                placeholder="سال تحصیلی:"
              />
              <div class="form-text text-danger validation-text">
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
import { reactive, ref } from "vue";
import axios from "axios";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object,
    buttonClass: String,
  },
  setup(props, { emit }) {
    const form = reactive({
      name: "",
      grade_id: "",
      year: "",
      nameErrorText: "",
      gradeIdErrorText: "",
      yearErrorText: "",
    });

    const grades = ref([]);

    function setInput() {
      if (props.post !== undefined) {
        form.name = props.post.name;
        form.grade_id = props.post.grade_id;
        form.year = props.post.year;
      }
    }
    setInput();

    function validate() {
      if (form.name === "") {
        form.nameErrorText = "نام کلاس باید وارد شود";
      } else {
        form.nameErrorText = "";
      }
      if (form.year === "") {
        form.yearErrorText = "نام سال تحصیلی باید وارد شود";
      } else {
        form.yearErrorText = "";
      }
      if (form.grade_id === "") {
        form.gradeIdErrorText = "نام مقطع تحصیلی باید وارد شود";
      } else {
        form.gradeIdErrorText = "";
      }

      if (form.grade_id !== "" && form.name !== "" && form.year !== "") {
        emit("formData", form);
      }
    }

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

    getGrades();

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
