<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div class="grade-window">
        <form
          @submit.prevent="validate"
          style="direction: rtl; font-family: Vazir; margin-top: 15px"
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
                      type="submit"
                      class="btn btn-primary"
                      style="width: 20%; font-family: Vazir; font-size: 14px"
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
  <div class="row" style="height: 70%; margin-top: 30px; overflow-y: scroll">
    <div class="col">
      <table class="table table-bordered table-class">
        <thead>
          <tr
            class="sticky"
            style="
              background-color: cornflowerblue;
              text-align: center;
              font-size: smaller;
              color: rgb(254, 254, 255);
            "
          >
            <th>--</th>
            <th>کد مقطع تحصیلی</th>
            <th>عنوان مقطع تحصیلی</th>
            <th>--</th>
            <th>--</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in grades"
            :key="index"
            style="text-align: right; font-size: 14px; color: aliceblue"
          >
            <td style="width: 5%; padding-top: 25px">
              <a href="#"
                ><img
                  style="width: 20px; height: 20px; border-radius: 5px"
                  src="../../../../public/select.jpg"
              /></a>
            </td>
            <td style="width: 15%; padding-top: 25px; text-align: center">
              {{ item.id }}
            </td>
            <td style="width: 45%; padding-top: 25px">{{ item.grade_name }}</td>
            <td style="width: 15%; padding-top: 18px">
              <button type="button" class="btn btn-success button-table-class">
                ویرایش
              </button>
            </td>
            <td style="width: 15%; padding-top: 18px">
              <button type="button" class="btn btn-danger button-table-class">
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row" style="height: 10%"></div>
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
    const grades = ref([]);

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
          form.grade_name = "";
          getGrades();
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
  width: 15%;
  height: 35px;
}
.button-table-class {
  font-size: 12px;
  width: 95%;
  height: 30px;
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
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
.table-class {
  font-family: Vazir;
  font-size: smaller;
  text-align: center;
  margin-top: -10px;
  margin-left: 40px;
  direction: rtl;
  width: 95%;
}
</style>
