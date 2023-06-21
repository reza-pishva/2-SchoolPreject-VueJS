<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div class="grade-window">
        <GradeForm
          @formData="createGrade"
          :button-loading="loading"
          button-text="ایجاد مقطع جدید"
          button-class="btn btn-primary"
          :post="post"
        />
      </div>
    </div>
  </div>
  <div
    class="row"
    style="
      height: 70%;
      margin-top: 30px;
      overflow-y: scroll;
      border: 1px solid white;
      border-radius: 5px;
      background-color: rgb(61, 61, 73);
      opacity: 0.7;
      filter: alpha(opacity=100);
    "
  >
    <div v-if="!spinner" class="col">
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
            style="text-align: right; font-size: 12px; color: aliceblue"
            v-bind:class="{ 'selected-row': index === selectedRowIndex }"
          >
            <td style="width: 5%; padding-top: 25px">
              <a v-on:click="selectRow(index)" href="#"
                ><img
                  style="width: 20px; height: 20px; border-radius: 5px"
                  src="../../../../public/select.jpg"
              /></a>
            </td>
            <td style="width: 10%; padding-top: 20px; text-align: center">
              {{ item.id }}
            </td>
            <td style="width: 65%; padding-top: 20px">{{ item.grade_name }}</td>
            <td style="width: 10%; padding-top: 15px">
              <router-link
                class="btn btn-success button-table-class"
                :to="{ name: 'editGrade', params: { id: item.id } }"
              >
                اصلاح
              </router-link>
            </td>
            <td style="width: 10%; padding-top: 15px">
              <button
                @click="deleteGrade(item.id)"
                class="btn btn-danger button-table-class"
              >
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="col">
      <div
        class="spinner-border text-danger"
        role="status"
        style="width: 100px; height: 100px; margin-top: 100px"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <div class="row" style="height: 10%"></div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import GradeForm from "@/components/Forms/GradeFormComponent.vue";

export default {
  data() {
    return {
      selectedRowIndex: -1,
    };
  },
  methods: {
    selectRow(index) {
      console.log(index);
      this.selectedRowIndex = index;
    },
  },
  components: {
    GradeForm,
  },
  setup() {
    const form = reactive({
      grade_name: "",
      gradeNameErrorText: "",
    });
    const loading = ref(false);
    const grades = ref([]);
    const post = ref({});
    const route = useRoute();
    const spinner = ref(true);

    function createGrade(formData) {
      loading.value = true;
      axios
        .post("http://127.0.0.1:8000/api/school/grade/store", {
          grade_name: formData.grade_name,
        })
        .then(function () {
          getGrades();
          loading.value = false;
          form.grade_name = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "نام مقطع تحصیلی با موفقیت در پایگاه داده ثبت گردید",
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
          spinner.value = false;
          grades.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function getGrade() {
      axios
        .get(`http://127.0.0.1:8000/api/school/grade/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function deleteGrade(id) {
      Swal.fire({
        title: "آیا مطمئن هستید؟",
        text: "امکان تغییر نظرتان در آینده وجود نخواهد داشت",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "بله ، حذف شود",
        position: "top",
      }).then((result) => {
        getGrades();
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/school/grade/remove/${id}`)
            .then(function () {
              Swal.fire({
                title: "متشکرم!",
                text: `مقطع تحصیلی با کد (${id}) با موفقیت حذف گردید`,
                icon: "success",
                confirmButtonText: "Ok",
                position: "top",
              });

              axios
                .get("http://127.0.0.1:8000/api/school/grade/grades")
                .then(function (response) {
                  // handle success
                  grades.value = response.data;
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
    getGrade();
    getGrades();

    return { spinner, deleteGrade, post, grades, createGrade, loading };
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
  background-color: rgb(237, 237, 227);
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
.swal2-popup {
  font-size: 14px !important;
  font-family: Vazir;
}
.selected-row {
  background-color: rgb(94, 119, 148);
  color: rgb(234, 241, 19) !important;
  font-size: 16px !important;
}
</style>
