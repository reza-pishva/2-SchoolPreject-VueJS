<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div
        style="
          background-color: rgb(146, 204, 233);
          margin-left: 30px;
          height: 95%;
          border-radius: 6px;
          padding-top: 25px;
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
  <div
    class="row"
    style="
      height: 78%;
      overflow-y: scroll;
      margin-top: 30px;
      border: 1px solid white;
      border-radius: 5px;
      background-color: rgb(61, 61, 73);
    "
  >
    <div class="col">
      <table
        class="table table-bordered"
        style="
          font-family: Vazir;
          font-size: smaller;
          text-align: center;
          margin-top: 10px;
          margin-left: 40px;
          direction: rtl;
          width: 95%;
        "
      >
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
            <th>کد کلاس</th>
            <th>نام کلاس</th>
            <th>نام مقطع تحصیلی</th>
            <th>--</th>
            <th>--</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in classes"
            :key="index"
            style="text-align: right; font-size: 14px; color: aliceblue"
          >
            <td style="width: 5%; padding-top: 10px">
              <a href="#"
                ><img
                  style="width: 20px; height: 20px; border-radius: 5px"
                  src="../../../../public/select.jpg"
              /></a>
            </td>
            <td style="width: 15%; padding-top: 10px">{{ item.id }}</td>
            <td style="width: 45%; padding-top: 15px">{{ item.name }}</td>
            <td style="width: 45%; padding-top: 15px">{{ item.grade_name }}</td>
            <td style="width: 15%">
              <button type="button" class="btn btn-success button-table-class">
                ویرایش
              </button>
            </td>
            <td style="width: 15%">
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
      name: "",
      grade_id: "",
      year: "",
      nameErrorText: "",
      gradeIdErrorText: "",
      yearErrorText: "",
    });
    const loading = ref(false);
    const grades = ref([]);
    const classes = ref([]);

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
          getClasses();
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
    function getClasses() {
      axios
        .get("http://127.0.0.1:8000/api/school/classroom/classrooms-view")
        .then(function (response) {
          // handle success
          classes.value = response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getGrades();
    getClasses();

    return { classes, grades, form, validate, loading };
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
