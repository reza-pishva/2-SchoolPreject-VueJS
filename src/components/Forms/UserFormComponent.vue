<template>
  <form @submit.prevent="validate" style="direction: rtl; font-family: Vazir">
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
                type="text"
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
                v-if="buttonLoading"
                class="spinner-border spinner-grow-sm"
                role="status"
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    buttonClass: String,
    post: Object,
    userId: String,
  },
  setup(props, { emit }) {
    console.log(props);
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

    const users = ref([]);
    const userInfo = ref([]);

    function getUsers() {
      axios
        .get("http://127.0.0.1:8000/api/school/user/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();

    function getUser() {
      axios
        .get("http://127.0.0.1:8000/api/school/user/" + props.userId)
        .then(function (response) {
          // handle success
          userInfo.value = response.data;
          form.f_name = userInfo.value.f_name;
          form.l_name = userInfo.value.l_name;
          form.father_name = userInfo.value.father_name;
          form.national_code = userInfo.value.national_code;
          form.role = userInfo.value.role;
          form.email = userInfo.value.email;
          form.password = userInfo.value.password;
          form.gender = userInfo.value.gender;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUser();

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
        emit("formData", form);
      }
    }
    return { users, form, validate };
  },
};
</script>

<style>
.button-class {
  font-size: 12px;
  width: 45%;
  height: 35px;
}
</style>
