<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div
        style="
          background-color: rgb(237, 237, 227);
          margin-left: 30px;
          height: 95%;
          border-radius: 6px;
          padding-top: 15px;
          padding-left: 5px;
          padding-right: 5px;
        "
      >
        <ClassRoomForm
          @formData="createClass"
          :button-loading="loading"
          button-text="ایجاد کلاس جدید"
          button-class="btn btn-primary"
          :post="post"
        />
      </div>
    </div>
  </div>
  <div
    class="row"
    style="
      height: 78%;
      overflow-y: scroll;
      margin-top: 35px;
      border: 1px solid white;
      border-radius: 5px;
      background-color: rgb(57, 57, 60);
      opacity: 0.7;
      filter: alpha(opacity=100);
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
            style="text-align: right; font-size: 12px; color: aliceblue"
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
              <router-link
                class="btn btn-success button-table-class"
                :to="{ name: 'editClass', params: { id: item.id } }"
              >
                اصلاح
              </router-link>
            </td>
            <td style="width: 15%">
              <button
                @click="deleteClass(item.id)"
                class="btn btn-danger button-table-class"
              >
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
import { ref, reactive } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
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
    const grades = ref([]);
    const classes = ref([]);
    const post = ref({});
    const route = useRoute();

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
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function getClass() {
      axios
        .get(`http://127.0.0.1:8000/api/school/classroom/${route.params.id}`)
        .then(function (response) {
          console.log(response.data);
          // handle success
          post.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function deleteClass(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        position: "top",
      }).then((result) => {
        getClasses();
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/school/classroom/remove/${id}`)
            .then(function () {
              Swal.fire({
                title: "Thanks!",
                text: `کلاس با کد (${id}) با موفقیت حذف گردید`,
                icon: "success",
                confirmButtonText: "Ok",
                position: "top",
              });

              axios
                .get(
                  "http://127.0.0.1:8000/api/school/classroom/classrooms-view"
                )
                .then(function (response) {
                  // handle success
                  classes.value = response.data;
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    }
    getClass();
    getClasses();

    return { deleteClass, post, grades, classes, createClass, loading };
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
