<template>
  <div class="row" style="height: 40%">
    <div class="col">
      <div class="profile-window">
        <form
          @submit.prevent="validate"
          style="direction: rtl; font-family: Vazir"
        >
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      v-model.lazy.trim="form.email"
                      style="font-size: 12px"
                      type="email"
                      class="form-control"
                      placeholder="پست الکترونیکی"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.emailErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <input
                      v-model.lazy.trim="form.password"
                      style="font-size: 12px"
                      type="password"
                      class="form-control"
                      placeholder="کلمه عبور"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.passwordErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-family: Vazir">
                    <select
                      v-model="form.role"
                      class="form-select"
                      style="font-size: small"
                    >
                      <option value="" selected>نوع کاربر:</option>
                      <option value="1">دانش آموز</option>
                      <option value="2">معلم</option>
                      <option value="3">اداری</option>
                    </select>
                    <div class="form-text text-danger validation-text">
                      {{ form.roleErrorText }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      v-model.lazy.trim="form.f_name"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="نام:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.fnameErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      v-model.lazy.trim="form.l_name"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="نام خانوادگی:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.lnameErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      v-model.lazy.trim="form.father_name"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="نام پدر:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.fatherNameErrorText }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      v-model.lazy.trim="form.national_code"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="کد ملی:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.nationalCodeErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group" style="font-family: Vazir">
                    <select
                      v-model="form.gender"
                      class="form-select"
                      style="font-size: small"
                    >
                      <option value="" selected>جنسیت:</option>
                      <option value="1">زن</option>
                      <option value="2">مرد</option>
                    </select>
                    <div class="form-text text-danger validation-text">
                      {{ form.genderErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <button type="submit" class="btn btn-primary button-class">
                    ثبت
                    <div
                      v-if="loading"
                      class="spinner-border spinner-grow-sm"
                      role="status"
                    ></div>
                  </button>
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
      f_name: "",
      l_name: "",
      father_name: "",
      national_code: "",
      role: "",
      email: "",
      password: "",
      gender: "",
      fnameErrorText: "",
      lnameErrorText: "",
      fatherNameErrorText: "",
      nationalCodeErrorText: "",
      roleErrorText: "",
      emailErrorText: "",
      genderErrorText: "",
    });
    const loading = ref(false);

    function validate() {
      if (form.f_name === "") {
        form.fnameErrorText = "نام کاریر باید وارد گردد";
      } else {
        form.fnameErrorText = "";
      }
      if (form.l_name === "") {
        form.lnameErrorText = "نام خانوادگی کاربر باید وارد شود";
      } else {
        form.lnameErrorText = "";
      }
      if (form.father_name === "") {
        form.fatherNameErrorText = "نام پدر باید وارد شود";
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
.profile-window {
  background-color: rgb(146, 204, 233);
  margin-left: 30px;
  height: 95%;
  border-radius: 6px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
