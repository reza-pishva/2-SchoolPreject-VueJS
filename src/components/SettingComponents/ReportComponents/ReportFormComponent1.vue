<template>
  <div class="row" style="width: 100%; margin: auto; direction: rtl">
    <div
      style="
        width: 100%;
        height: 155px;
        margin-top: 5px;
        border-radius: 5px;
        background-color: dimgrey;
      "
    >
      <form
        @submit.prevent="validate1"
        style="direction: rtl; font-family: Vazir; margin-top: 10px"
      >
        <div class="row mt-3">
          <div class="col">
            <div class="row"></div>
            <div class="row">
              <div class="col">
                <div class="form-group" style="font-size: x-small">
                  <input
                    v-model.lazy.trim="form.f_name"
                    style="font-size: 12px"
                    type="text"
                    class="form-control"
                    placeholder="نام:"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group" style="font-size: x-small">
                  <input
                    v-model.lazy.trim="form.l_name"
                    style="font-size: 12px"
                    type="text"
                    class="form-control"
                    placeholder="نام خانوادگی:"
                  />
                  <div class="form-text text-danger validation-text">
                    {{ form.fnameErrorText }}
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group" style="font-family: Vazir">
                  <select
                    v-model="form.grade_id"
                    class="form-select"
                    style="font-size: 12px"
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
                </div>
              </div>
              <div class="col">
                <div
                  class="form-group"
                  style="font-family: Vazir; font-size: 12px"
                >
                  <select
                    v-model="form.class_id"
                    class="form-select"
                    style="font-size: 12px"
                  >
                    <option selected value="">انتخاب کلاس:</option>
                    <option
                      v-for="(item, index) in classes1"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group" style="font-size: x-small">
                  <input
                    v-model.lazy.trim="form.national_code"
                    style="font-size: 12px"
                    type="text"
                    class="form-control"
                    placeholder="کد ملی:"
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="form-group" style="font-family: Vazir">
                  <select
                    v-model="form.year"
                    class="form-select"
                    style="font-size: 12px; width: 110%"
                  >
                    <option selected value="">سال تحصیلی:</option>
                    <option value="1400">1400-1401</option>
                    <option value="1401">1401-1402</option>
                    <option value="1402">1402-1403</option>
                    <option value="1403">1403-1404</option>
                    <option value="1404">1404-1405</option>
                  </select>
                </div>
              </div>
              <div class="col-4">
                <button
                  type="submit"
                  class="btn btn-primary button-class"
                  style="width: 80%; height: 30px; margin-top: 1px"
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
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";
export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    buttonClass: String,
    dataList: Array,
  },
  setup(props, { emit }) {
    const form = reactive({
      f_name: "",
      l_name: "",
      national_code: "",
      year: "",
      class_id: "",
      grade_id: "",
      spinner: true,
    });

    const users = ref([]);
    const classes1 = ref([]);
    const classes2 = ref([]);
    const grades = ref([]);

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
      console.log("firsttttttttttttttttttttttt");
      emit("formData", form);
    }
    return {
      grades,
      classes1,
      classes2,
      users,
      form,
      validate1,
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
