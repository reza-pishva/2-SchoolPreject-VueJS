<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div
        style="
          background-color: rgb(146, 204, 233);
          margin-left: 30px;
          height: 95%;
          border-radius: 6px;
          padding-top: 10px;
          padding-left: 5px;
          padding-right: 5px;
        "
      >
        <form
          @submit.prevent="validate"
          style="direction: rtl; font-family: Vazir"
        >
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
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      v-model.lazy.trim="form.grade_id"
                      style="font-size: 12px"
                      type="number"
                      class="form-control"
                      placeholder=" نام مقطع تحصیلی:"
                    />
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
      name: "",
      grade_id: "",
      year: "",
      nameErrorText: "",
      gradeIdErrorText: "",
      yearErrorText: "",
    });
    const loading = ref(false);

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
        loading.value = true;
        createClass();
      }
    }

    function createClass() {
      axios
        .post("http://127.0.0.1:8000/api/school/classroom/store", {
          grade_id: form.grade_id,
          year: form.year,
          name: form.name,
        })
        .then(function () {
          loading.value = false;
          form.name = "";
          form.year = "";
          form.grade_id = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "نام کلاس با موفقیت در پایگاه داده ثبت گردید",
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
