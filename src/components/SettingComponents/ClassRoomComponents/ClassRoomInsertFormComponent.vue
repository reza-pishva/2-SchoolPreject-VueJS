<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div
        style="
          background-color: rgb(237, 237, 227);
          margin-left: 30px;
          height: 95%;
          border-radius: 6px;
          padding-top: 25px;
          padding-left: 5px;
          padding-right: 5px;
        "
      >
        <ClassRoomForm
          @formData="createClass"
          :button-loading="loading"
          button-text="ایجاد کلاس جدید"
        />
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
                مشاهده
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
import ClassRoomForm from "@/components/Forms/ClassRoomFormComponent.vue";

export default {
  components: {
    ClassRoomForm,
  },
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
    const classes = ref([]);

    function createClass(formData) {
      loading.value = true;
      axios
        .post("http://127.0.0.1:8000/api/school/classroom/store", {
          grade_id: formData.grade_id,
          year: formData.year,
          name: formData.name,
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
    getClasses();

    return { classes, createClass, loading };
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
.button-table-class {
  font-size: 12px;
  width: 95%;
  height: 30px;
}
.grade-window {
  background-color: rgb(237, 237, 227);
  margin-left: 30px;
  height: 95%;
  border-radius: 6px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
