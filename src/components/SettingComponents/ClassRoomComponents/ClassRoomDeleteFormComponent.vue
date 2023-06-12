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
          @class_id="deleteClass"
          :button-loading="loading"
          button-text="حذف"
          button-class="btn btn-danger"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import { useRoute } from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";
import ClassRoomForm from "@/components/Forms/ClassRoomFormComponent.vue";

export default {
  components: {
    ClassRoomForm,
  },
  setup() {
    const loading = ref(false);
    // const route = useRoute();

    function deleteClass(class_id) {
      // console.log(class_id);
      axios
        .delete(`http://127.0.0.1:8000/api/school/classroom/remove/${class_id}`)
        .then(function () {
          Swal.fire({
            title: "Thanks!",
            text: `کلاس با کد (${class_id}) با موفقیت حذف گردید`,
            icon: "warning",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
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

    return { deleteClass, loading };
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
