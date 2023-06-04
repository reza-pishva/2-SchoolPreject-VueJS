<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div class="exam-type-window">
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
                      v-model.lazy.trim="form.exam_type"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="نوع امتحان:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.examTypeErrorText }}
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
      exam_type: "",
      examTypeErrorText: "",
    });
    const loading = ref(false);

    function validate() {
      if (form.exam_type === "") {
        form.examTypeErrorText = "نوع امتحان باید وارد شود";
      } else {
        form.examTypeErrorText = "";
        loading.value = true;
        createLesson();
      }
    }

    function createLesson() {
      axios
        .post("http://127.0.0.1:8000/api/school/exam/exam-type/store", {
          exam_type: form.exam_type,
        })
        .then(function () {
          loading.value = false;
          form.exam_type = "";
          Swal.fire({
            title: "ذخیره شد",
            text: " نوع امتحان با موفقیت در پایگاه داده ثبت گردید",
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
  width: 25%;
  height: 35px;
}
.exam-type-window {
  background-color: rgb(146, 204, 233);
  margin-left: 30px;
  height: 95%;
  border-radius: 6px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
