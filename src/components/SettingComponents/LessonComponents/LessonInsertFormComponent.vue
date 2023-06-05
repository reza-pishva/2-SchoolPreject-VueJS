<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div class="lesson-window">
        <form
          @submit.prevent="validate"
          style="direction: rtl; font-family: Vazir"
        >
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      v-model.lazy.trim="form.lesson_name"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="نام درس:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.lessonNameErrorText }}
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
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <button
                      style="font-size: 12px"
                      type="submit"
                      class="btn btn-primary button-class"
                    >
                      ثبت
                      <div
                        v-if="loading"
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
      </div>
    </div>
  </div>
  <div class="row" style="height: 88%">
    <div class="col"></div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  setup() {
    const form = reactive({
      lesson_name: "",
      grade_id: "",
      lessonNameErrorText: "",
      gradeIdErrorText: "",
    });
    const loading = ref(false);
    const grades = ref([]);

    function validate() {
      if (form.lesson_name === "") {
        form.lessonNameErrorText = "نام درس باید وارد شود";
      } else {
        form.lessonNameErrorText = "";
      }
      if (form.grade_id === "") {
        form.gradeIdErrorText = "نام مقطع تحصیلی باید وارد شود";
      } else {
        form.gradeIdErrorText = "";
      }
      if (form.grade_id !== "" && form.lesson_name !== "") {
        loading.value = true;
        createLesson();
      }
    }

    function createLesson() {
      axios
        .post("http://127.0.0.1:8000/api/school/lesson/store", {
          grade_id: form.grade_id,
          lesson_name: form.lesson_name,
        })
        .then(function () {
          loading.value = false;
          form.lesson_name = "";
          form.grade_id = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "نام درس با موفقیت در پایگاه داده ثبت گردید",
            icon: "success",
            confirmButtonText: "Ok",
            position: "top",
          });
        })
        .catch(function (error) {
          loading.value = false;

          console.log(error);
          Swal.fire({
            title: "پیغام خطا",
            text: "مشکلاتی در مورد ثبت اطلاعات در پایگاه داده مشاهده گردیده",
            icon: "error",
            confirmButtonText: "Ok",
            position: "top",
          });
        });
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
    return { grades, form, validate, loading };
  },
};
</script>

<style>
.swal2-content {
  font-size: 14px;
  font-family: Vazir;
}
.swal2-title {
  font-size: 16px;
  font-family: Vazir;
}
.validation-text {
  font-size: 12px;
  font-family: Vazir;
  margin-top: 1px;
}
.button-class {
  font-size: 12px;
  width: 35%;
  height: 35px;
}
.lesson-window {
  background-color: rgb(146, 204, 233);
  margin-left: 30px;
  height: 95%;
  border-radius: 6px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
