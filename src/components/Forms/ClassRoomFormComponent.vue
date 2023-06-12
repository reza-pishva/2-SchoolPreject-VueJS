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
    buttonClass: String,
  },
  setup(props, { emit }) {
    const form = reactive({
      name: "",
      grade_id: "",
      year: "",
    });
    const grades = ref([]);
    function setInput() {
      // form.name = "reza";
      // form.grade_id = 1;
      // form.year = 1402;
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
    function validate() {
      if (form.year === "") {
        // form.titleErrorText = "Title is required";
      } else {
        // form.titleErrorText = "";
      }
      if (form.body === "") {
        // form.bodyErrorText = "Body is required";
      } else {
        // form.bodyErrorText = "";
      }
      if (form.year !== "" && form.name !== "") {
        emit("formData", form);
      }
    }
    getGrades();
    setInput();
    return { validate, grades, form, setInput };
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
