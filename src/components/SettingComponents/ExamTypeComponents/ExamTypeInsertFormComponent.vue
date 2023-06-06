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
  <div class="row" style="height: 78%; overflow-y: scroll; margin-top: 10px">
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
            <th>کد نوع امتحان</th>
            <th>نوع امتحان</th>
            <th>--</th>
            <th>--</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in examTypes"
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
            <td style="width: 10%; padding-top: 25px; text-align: center">
              {{ item.id }}
            </td>
            <td style="width: 40%; padding-top: 25px">{{ item.exam_type }}</td>
            <td style="width: 10%; padding-top: 18px">
              <button type="button" class="btn btn-success button-table-class">
                ویرایش
              </button>
            </td>
            <td style="width: 10%; padding-top: 18px">
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
      exam_type: "",
      examTypeErrorText: "",
    });
    const loading = ref(false);
    const examTypes = ref([]);

    function validate() {
      if (form.exam_type === "") {
        form.examTypeErrorText = "نوع امتحان باید وارد شود";
      } else {
        form.examTypeErrorText = "";
        loading.value = true;
        createExamType();
      }
    }

    function createExamType() {
      axios
        .post("http://127.0.0.1:8000/api/school/exam/exam-type/store", {
          exam_type: form.exam_type,
        })
        .then(function () {
          getExamType();
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
    function getExamType() {
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
    getExamType();

    return { examTypes, form, validate, loading };
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
.exam-type-window {
  background-color: rgb(146, 204, 233);
  margin-left: 30px;
  height: 95%;
  border-radius: 6px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
.table-class {
  font-family: Vazir;
  font-size: smaller;
  text-align: center;
  margin-top: 12px;
  margin-left: 40px;
  direction: rtl;
  width: 95%;
}
</style>
