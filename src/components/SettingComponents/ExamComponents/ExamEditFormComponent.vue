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
          @formData="editExam"
          :button-loading="loading"
          button-text="اعمال تغییرات"
          button-class="btn btn-success"
          :post="post"
          :examId="form.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import ExamForm from "@/components/Forms/ExamFormComponent.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    ExamForm,
  },
  setup() {
    const form = reactive({
      id: "",
      exam_type_id: "",
      grade_id: "",
      lesson_id: "",
      examTypeIdErrorText: "",
      gradeIdErrorText: "",
      lessonIdErrorText: "",
    });
    const loading = ref(false);
    const exams = ref([]);
    var post = reactive({});
    const route = useRoute();

    function editExam(formData) {
      loading.value = true;
      axios
        .put("http://127.0.0.1:8000/api/school/exam/update/" + form.id, {
          id: formData.id,
          grade_id: formData.grade_id,
          exam_type_id: formData.exam_type_id,
          lesson_id: formData.lesson_id,
        })
        .then(function () {
          loading.value = false;
          // form.name = "";
          // form.year = "";
          // form.grade_id = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "نام آزمون با موفقیت در پایگاه داده اصلاح گردید",
            icon: "success",
            confirmButtonText: "Ok",
            position: "top",
          });
        })
        .catch(function (error) {
          console.log(formData);
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
    function sendId() {
      form.id = route.params.id;
    }
    sendId();
    return { post, exams, editExam, loading, form };
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
