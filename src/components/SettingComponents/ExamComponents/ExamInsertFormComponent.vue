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
        <ExamForm
          @formData="createExam"
          :button-loading="loading"
          button-text="ایجاد آزمون جدید"
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
    <div class="col" v-if="!spinner">
      <div
        class="spinner-border text-danger"
        role="status"
        style="width: 100px; height: 100px; margin-top: 100px"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="col">
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
            <th>کد آزمون</th>
            <th>نام آزمون</th>
            <th>نوع آزمون</th>
            <th>نام مقطع تحصیلی</th>
            <th>--</th>
            <th>--</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in exams"
            :key="index"
            style="text-align: right; font-size: 12px; color: aliceblue"
            v-bind:class="{ 'selected-row': index === selectedRowIndex }"
          >
            <td style="width: 5%; padding-top: 13px">
              <a v-on:click="selectRow(index)" href="#"
                ><img
                  style="width: 20px; height: 20px; border-radius: 5px"
                  src="../../../../public/select.jpg"
              /></a>
            </td>
            <td style="width: 5%; padding-top: 15px">{{ item.id }}</td>
            <td style="width: 23%; padding-top: 15px">
              {{ item.lesson_name }}
            </td>
            <td style="width: 24%; padding-top: 15px">
              {{ item.exam_type }}
            </td>
            <td style="width: 23%; padding-top: 15px">{{ item.grade_name }}</td>
            <td style="width: 10%">
              <router-link
                class="btn btn-success button-table-class"
                :to="{ name: 'editExam', params: { id: item.id } }"
              >
                اصلاح
              </router-link>
            </td>
            <td style="width: 10%">
              <button
                @click="deleteExam(item.id)"
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
// import { useRoute } from "vue-router";
import ExamForm from "@/components/Forms/ExamFormComponent.vue";

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
    ExamForm,
  },
  setup() {
    const form = reactive({
      lesson_id: "",
      grade_id: "",
      exam_type_id: "",
      lessonIdErrorText: "",
      gradeIdErrorText: "",
      examTypeIdErrorText: "",
    });
    const loading = ref(false);
    // const lessons = ref([]);
    const exams = ref([]);
    const grades = ref([]);
    // const exam_types = ref([]);
    const post = ref({});
    const spinner = ref(true);
    // const route = useRoute();

    function createExam(formData) {
      loading.value = true;
      axios
        .post("http://127.0.0.1:8000/api/school/exam/store", {
          grade_id: formData.grade_id,
          lesson_id: formData.lesson_id,
          exam_type_id: formData.exam_type_id,
        })
        .then(function () {
          getExams();
          loading.value = false;
          form.exam_type_id = "";
          form.lesson_id = "";
          form.grade_id = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "نام آزمون با موفقیت در پایگاه داده ثبت گردید",
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
    function getExams() {
      axios
        .get("http://127.0.0.1:8000/api/school/exam/exam-view")
        .then(function (response) {
          // handle success
          spinner.value = true;
          exams.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    // function getExam() {
    //   axios
    //     .get(`http://127.0.0.1:8000/api//school/exam/${route.params.id}`)
    //     .then(function (response) {
    //       console.log(response.data);
    //       // handle success
    //       post.value = response.data;
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     });
    // }
    function deleteExam(id) {
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
        getExams();
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/school/exam/remove/${id}`)
            .then(function () {
              Swal.fire({
                title: "Thanks!",
                text: `آزمون با کد (${id}) با موفقیت حذف گردید`,
                icon: "success",
                confirmButtonText: "Ok",
                position: "top",
              });

              axios
                .get("http://127.0.0.1:8000/api/school/exam/exam-view")

                .then(function (response) {
                  // handle success
                  exams.value = response.data;
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
    // getExam();
    getExams();

    return {
      spinner,
      deleteExam,
      post,
      grades,
      exams,
      createExam,
      loading,
    };
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
.selected-row {
  background-color: rgb(94, 119, 148);
  color: rgb(234, 241, 19) !important;
  font-size: 16px !important;
}
</style>
