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
        <ProfileForm
          @formData="editProfile"
          :button-loading="loading"
          button-text="اعمال تغییرات"
          button-class="btn btn-success"
          :post="post"
          :profileId="form.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import ProfileForm from "@/components/Forms/ProfileFormComponent.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    ProfileForm,
  },
  setup() {
    const form = reactive({
      f_name: "",
      l_name: "",
      father_name: "",
      email: "",
      password: "",
      gender: "",
      national_code: "",
      role: "",
      fNameErrorText: "",
      lNameErrorText: "",
      fatherNameErrorText: "",
      emailErrorText: "",
      passwordErrorText: "",
      genderErrorText: "",
      nationalCodeErrorText: "",
      roleErrorText: "",
    });
    const loading = ref(false);
    const profiles = ref([]);
    var post = reactive({});
    const route = useRoute();

    function editProfile(formData) {
      loading.value = true;
      axios
        .put("http://127.0.0.1:8000/api/school/profile/update/" + form.id, {
          father_job: formData.father_job,
          father_phone_number: formData.father_phone_number,
          mother_job: formData.mother_job,
          mother_phone_number: formData.mother_phone_number,
          consideration: formData.consideration,
          birthday: formData.birthday,
          address: formData.address,
          user_id: formData.user_id,
          major: formData.major,
        })
        .then(function () {
          loading.value = false;
          Swal.fire({
            title: "ذخیره شد",
            text: "پروفایل کاربر با موفقیت در پایگاه داده اصلاح گردید",
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
    return { post, profiles, editProfile, loading, form };
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
