<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div class="grade-window">
        <ExamTypeForm
          @formData="createExamType"
          :button-loading="loading"
          button-text="ایجاد نوع آزمون"
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
            <th>کد نوع آزمون</th>
            <th>عنوان نوع آزمون</th>
            <th>--</th>
            <th>--</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in examTypes"
            :key="index"
            style="text-align: right; font-size: 12px; color: aliceblue"
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
            <td style="width: 65%; padding-top: 25px">{{ item.exam_type }}</td>
            <td style="width: 10%; padding-top: 15px">
              <router-link
                class="btn btn-success button-table-class"
                :to="{ name: 'editExamType', params: { id: item.id } }"
              >
                اصلاح
              </router-link>
            </td>
            <td style="width: 10%; padding-top: 15px">
              <button
                @click="deleteExamType(item.id)"
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
import ExamTypeForm from "@/components/Forms/ExamTypeFormComponent.vue";

export default {
  components: {
    ExamTypeForm,
  },
  setup() {
    const form = reactive({
      exam_type: "",
      examTypeErrorText: "",
    });
    const loading = ref(false);
    const examTypes = ref([]);
    const post = ref({});
    const route = useRoute();

    function createExamType(formData) {
      loading.value = true;
      axios
        .post("http://127.0.0.1:8000/api/school/exam/exam-type/store", {
          exam_type: formData.exam_type,
        })
        .then(function () {
          getExamTypes();
          loading.value = false;
          form.exam_type = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "نوع آزمون با موفقیت در پایگاه داده ثبت گردید",
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
    function getExamTypes() {
      axios
        .get("http://127.0.0.1:8000/api/school/exam/exam-types")
        .then(function (response) {
          // handle success
          examTypes.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function getExamType() {
      axios
        .get(
          `http://127.0.0.1:8000/api/school/exam/exam-type/${route.params.id}`
        )
        .then(function (response) {
          // handle success
          post.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function deleteExamType(id) {
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
        getExamTypes();
        if (result.isConfirmed) {
          axios
            .delete(
              `http://127.0.0.1:8000/api/school/exam/exam-type/remove/${id}`
            )
            .then(function () {
              Swal.fire({
                title: "Thanks!",
                text: `مقطع تحصیلی با کد (${id}) با موفقیت حذف گردید`,
                icon: "success",
                confirmButtonText: "Ok",
                position: "top",
              });

              axios
                .get("http://127.0.0.1:8000/api/school/exam/exam-types")
                .then(function (response) {
                  // handle success
                  examTypes.value = response.data;
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
    getExamType();
    getExamTypes();

    return { deleteExamType, post, examTypes, createExamType, loading };
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
</style>
