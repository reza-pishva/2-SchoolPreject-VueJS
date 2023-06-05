<template>
  <div class="row" style="height: 20%">
    <div class="col">
      <div class="prog-window">
        <form style="direction: rtl; font-family: Vazir">
          <div class="row">
            <div class="col">
              <div class="row">
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
                  <div class="form-group" style="font-family: Vazir">
                    <select
                      v-model="form.grade_id"
                      class="form-select"
                      style="font-size: small"
                    >
                      <option value="">انتخاب درس:</option>
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
                  <div class="form-group" style="font-family: Vazir">
                    <select
                      v-model="form.grade_id"
                      class="form-select"
                      style="font-size: small"
                    >
                      <option value="">انتخاب کلاس:</option>
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
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-family: Vazir">
                    <select
                      v-model="form.grade_id"
                      class="form-select"
                      style="font-size: small"
                    >
                      <option value="">انتخاب روز هفته:</option>
                      <option value="0">شنبه</option>
                      <option value="1">یکشنبه</option>
                      <option value="2">دوشنبه</option>
                      <option value="3">سه شنبه</option>
                      <option value="4">چهارشنبه</option>
                      <option value="5">پنج شنبه</option>
                    </select>
                    <div class="form-text text-danger validation-text">
                      {{ form.gradeIdErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="ساعت شروع:"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="ساعت پایان:"
                    />
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
  <div class="row" style="height: 80%">
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
      lesson_id: "",
      grade_id: "",
      exam_type_id: "",
      lessonIdErrorText: "",
      gradeIdErrorText: "",
      examTypeIdErrorText: "",
    });
    const loading = ref(false);
    const grades = ref([]);
    const examTypes = ref([]);

    function validate() {
      if (form.lesson_id === "") {
        form.lessonIdErrorText = "نام درس باید وارد شود";
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
        loading.value = true;
        creatExam();
      }
    }

    function creatExam() {
      axios
        .post("http://127.0.0.1:8000/api/school/exam/store", {
          grade_id: form.grade_id,
          lesson_id: form.lesson_id,
          exam_type_id: form.exam_type_id,
        })
        .then(function () {
          loading.value = false;
          form.lesson_id = "";
          form.exam_type_id = "";
          form.grade_id = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "نام امتحان با موفقیت در پایگاه داده ثبت گردید",
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
    getGrades();
    getExamTypes();

    return { examTypes, grades, form, validate, loading };
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
  width: 40%;
  height: 35px;
}
.prog-window {
  background-color: rgb(146, 204, 233);
  margin-left: 30px;
  height: 95%;
  border-radius: 6px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
