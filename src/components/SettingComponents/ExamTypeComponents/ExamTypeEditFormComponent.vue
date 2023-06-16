<template>
  <div class="row" style="height: 12%">
    <div class="col">
      <div
        style="
          background-color: rgb(237, 237, 227);
          margin-left: 30px;
          height: 95%;
          border-radius: 6px;
          padding-top: 10px;
          padding-left: 5px;
          padding-right: 5px;
        "
      >
        <ExamTypeForm
          @formData="editExamType"
          :button-loading="loading"
          button-text="اعمال تغییرات"
          button-class="btn btn-success"
          :post="post"
          :examTypeId="form.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import ExamTypeForm from "@/components/Forms/ExamTypeFormComponent.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    ExamTypeForm,
  },
  setup() {
    const form = reactive({
      id: "",
      exam_type: "",
      examTypeErrorText: "",
    });
    const loading = ref(false);
    const examTypes = ref([]);
    var post = reactive({});
    const route = useRoute();

    function editExamType(formData) {
      loading.value = true;
      axios
        .put(
          "http://127.0.0.1:8000/api/school/exam/exam-type/update/" + form.id,
          {
            id: form.id,
            exam_type: formData.exam_type,
          }
        )
        .then(function () {
          loading.value = false;
          form.exam_type = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "نوع آزمون با موفقیت در پایگاه داده اصلاح گردید",
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
    return { post, examTypes, editExamType, loading, form };
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
