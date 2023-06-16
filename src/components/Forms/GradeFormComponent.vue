<template>
  <form
    @submit.prevent="validate"
    style="direction: rtl; font-family: Vazir; margin-top: 5px"
  >
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="form-group" style="font-size: xx-small">
              <input
                v-model.lazy.trim="form.grade_name"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder=" نام مقطع تحصیلی:"
              />
              <div class="form-text text-danger validation-text">
                {{ form.gradeNameErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
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
    gradeId: String,
  },
  setup(props, { emit }) {
    const form = reactive({
      grade_name: "",
      gradeNameErrorText: "",
    });

    // const loading = ref(false);
    const grades = ref([]);
    const gradeInfo = ref([]);

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

    function getGrade() {
      axios
        .get("http://127.0.0.1:8000/api/school/grade/" + props.gradeId)
        .then(function (response) {
          // handle success
          gradeInfo.value = response.data;
          form.grade_name = gradeInfo.value.grade_name;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getGrade();

    function validate() {
      if (form.grade_name === "") {
        form.gradeNameErrorText = "نام مقطع تحصیلی پر نشده";
      } else {
        form.gradeNameErrorText = "";
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
