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
        <ProgForm
          @formData="editProg"
          :button-loading="loading"
          button-text="اعمال تغییرات"
          button-class="btn btn-success"
          :post="post"
          :progId="form.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import ProgForm from "@/components/Forms/ClassProgFormComponent.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    ProgForm,
  },
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    buttonClass: String,
    progId: String,
  },
  setup() {
    const form = reactive({
      class_id: "",
      lesson_id: "",
      DayOfWeek: "",
      time_start: "",
      time_end: "",
      dayOfWeekErrorText: "",
      classIdErrorText: "",
      lessonIdErrorText: "",
      timeStartErrorText: "",
      timeEndErrorText: "",
    });
    const loading = ref(false);
    const progs = ref([]);
    // const progInfo = ref([]);
    // var post = reactive({});
    const route = useRoute();

    // function getProg() {
    //   axios
    //     .get(
    //       "http://127.0.0.1:8000/api/school/class-program/program/" +
    //         props.progId
    //     )
    //     .then(function (response) {
    //       // handle success

    //       progInfo.value = response.data;
    //       form.class_id = progInfo.value.class_id;
    //       form.lesson_id = progInfo.value.lesson_id;
    //       form.time_start = progInfo.value.time_start;
    //       form.time_end = progInfo.value.time_end;
    //       form.DayOfWeek = progInfo.value.dayOfWeek;
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     });
    // }
    // getProg();

    function editProg(formData) {
      console.log("1221122121");
      console.log(formData);
      console.log("2332323232");
      loading.value = true;
      axios
        .put(
          "http://127.0.0.1:8000/api/school/class-program/update/" +
            formData.id,
          {
            id: formData.id,
            lesson_id: formData.lesson_id,
            dayOfWeek: formData.DayOfWeek,
            time_start: formData.time_start,
            time_end: formData.time_end,
            class_id: formData.class_id,
          }
        )
        .then(function () {
          loading.value = false;
          // form.DayOfWeek = "";
          // form.time_start = "";
          // form.time_end = "";
          // form.class_id = "";
          // form.lesson_id = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "برنامه کلاسی با موفقیت در پایگاه داده اصلاح گردید",
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

    function sendId() {
      form.id = route.params.id;
    }
    sendId();

    return { progs, editProg, loading, form };
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
