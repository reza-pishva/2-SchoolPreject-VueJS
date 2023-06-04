<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div class="exam-window">
        <form style="direction: rtl; font-family: Vazir">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      v-model.lazy.trim="form.lesson_id"
                      style="font-size: 12px"
                      type="number"
                      class="form-control"
                      placeholder="نام درس"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.lessonIdErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      v-model.lazy.trim="form.exam_type_id"
                      style="font-size: 12px"
                      type="number"
                      class="form-control"
                      placeholder="نوع امتحان"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.examTypeIdErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      v-model.lazy.trim="form.grade_id"
                      style="font-size: 12px"
                      type="email"
                      class="form-control"
                      placeholder=" نام مقطع تحصیلی:"
                    />
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
                      class="btn btn-primary"
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
      lesson_id: "",
      grade_id: "",
      exam_type_id: "",
      lessonIdErrorText: "",
      gradeIdErrorText: "",
      examTypeIdErrorText: "",
    });
    const loading = ref(false);

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

    return { form, validate, loading };
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
.exam-window {
  background-color: rgb(146, 204, 233);
  margin-left: 30px;
  height: 95%;
  border-radius: 6px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
