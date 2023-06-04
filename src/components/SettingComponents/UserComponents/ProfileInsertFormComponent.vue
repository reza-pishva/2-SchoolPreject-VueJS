<template>
  <div class="row" style="height: 40%">
    <div class="col">
      <div
        style="
          background-color: rgb(146, 204, 233);
          margin-left: 30px;
          height: 95%;
          border-radius: 6px;
          padding-top: 10px;
          padding-left: 5px;
          padding-right: 5px;
        "
      >
        <form style="direction: rtl; font-family: Vazir">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      style="font-size: 12px"
                      type="email"
                      class="form-control"
                      placeholder="شغل پدر:"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <input
                      style="font-size: 12px"
                      type="password"
                      class="form-control"
                      placeholder="شغل مادر:"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="شماره تلفن پدر:"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="شماره تلفن مادر:"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <input
                      style="font-size: 12px"
                      type="password"
                      class="form-control"
                      placeholder="تاریخ تولد:"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="توضیحات:"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-7">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="آدرس"
                    />
                  </div>
                </div>
                <div class="col-5">
                  <div class="form-group" style="font-size: x-small">
                    <button
                      style="font-size: 12px"
                      type="submit"
                      class="btn btn-primary"
                    >
                      ثبت
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="row" style="height: 60%">
    <div class="col"></div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  setup() {
    const form = reactive({
      father_job: "",
      mother_job: "",
      father_phone_number: "",
      mother_phone_number: "",
      address: "",
      consideration: "",
      birthday: "",
      major: "",
      user_id: "",
      fatherJobErrorText: "",
      motherJobErrorText: "",
      fatherPhoneNumberErrorText: "",
      motherPhoneNumberErrorText: "",
      addressErrorText: "",
      considerationErrorText: "",
      birthdayErrorText: "",
      majorErrorText: "",
      userIdErrorText: "",
    });
    const loading = ref(false);

    function validate() {
      if (form.father_job === "") {
        form.fatherJobErrorText = "نام کاریر باید وارد گردد";
      } else {
        form.fatherJobErrorText = "";
      }
      if (form.mother_job === "") {
        form.motherJobErrorText = "نام خانوادگی کاربر باید وارد شود";
      } else {
        form.motherJobErrorText = "";
      }
      if (form.father_phone_number === "") {
        form.fa = "نام پدر باید وارد شود";
      } else {
        form.fatherNameErrorText = "";
      }
      if (form.email === "") {
        form.emailErrorText = "آدرس پست الکترونیکی کاربر باید وارد شود";
      } else {
        form.emailErrorText = "";
      }
      if (form.role === "") {
        form.roleErrorText = "نوع کاربر باید وارد شود";
      } else {
        form.roleErrorText = "";
      }
      if (form.password === "") {
        form.passwordErrorText = "کلمه عبور باید وارد شود";
      } else {
        form.passwordErrorText = "";
      }
      if (form.national_code === "") {
        form.nationalCodeErrorText = "کد ملی باید وارد شود";
      } else {
        form.nationalCodeErrorText = "";
      }
      if (form.gender === "") {
        form.genderErrorText = "جنسیت باید وارد شود";
      } else {
        form.genderErrorText = "";
      }
      if (
        form.f_name !== "" &&
        form.l_name !== "" &&
        form.father_name !== "" &&
        form.email !== "" &&
        form.national_code !== "" &&
        form.role !== "" &&
        form.gender !== "" &&
        form.password !== ""
      ) {
        loading.value = true;
        createUser();
      }
    }

    function createUser() {
      axios
        .post("http://127.0.0.1:8000/api/school/user/store", {
          f_name: form.f_name,
          l_name: form.l_name,
          father_name: form.father_name,
          national_code: form.national_code,
          email: form.email,
          password: form.password,
          gender: form.gender,
          role: form.role,
        })
        .then(function () {
          loading.value = false;

          form.f_name = "";
          form.l_name = "";
          form.father_name = "";
          form.national_code = "";
          form.gender = "";
          form.email = "";
          form.password = "";
          form.role = "";

          Swal.fire({
            title: "ذخیره شد",
            text: "اطلاعات کاربری با موفقیت در پایگاه داده ثبت گردید",
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

    return { form, validate, loading };
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
  width: 30%;
  height: 35px;
}
.user-window {
  background-color: rgb(146, 204, 233);
  margin-left: 30px;
  height: 95%;
  border-radius: 6px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
