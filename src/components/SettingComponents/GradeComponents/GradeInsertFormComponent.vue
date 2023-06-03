<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div class="grade-window">
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
                    <button type="submit" class="btn btn-primary button-class">
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
      grade_name: "",
      gradeNameErrorText: "",
    });
    const loading = ref(false);

    function validate() {
      if (form.grade_name === "") {
        form.gradeNameErrorText = "نام مقطع تحصیلی باید وارد شود";
      } else {
        form.gradeNameErrorText = "";
        loading.value = true;
        createGrade();
      }
    }

    function createGrade() {
      axios
        .post("http://127.0.0.1:8000/api/school/grade/store", {
          grade_name: form.grade_name,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "ذخیره شد",
            text: "مقطع تحصیلی با موفقیت در پایگاه داده ثبت گردید",
            icon: "success",
            confirmButtonText: "Ok",
            position: "top",
          });
        })
        .catch(function (error) {
          console.log(error);
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
  width: 20%;
  height: 35px;
}
.grade-window {
  background-color: rgb(146, 204, 233);
  margin-left: 30px;
  height: 95%;
  border-radius: 6px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
