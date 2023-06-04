<template>
  <div class="row" style="height: 50%">
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
                      v-model.lazy.trim="form.father_job"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="شغل پدر:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.fatherJobErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <input
                      v-model.lazy.trim="form.mother_job"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="شغل مادر:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.motherJobErrorText }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      v-model.lazy.trim="form.father_phone_number"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="شماره تلفن پدر:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.fatherPhoneNumberErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      v-model.lazy.trim="form.mother_phone_number"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="شماره تلفن مادر:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.motherPhoneNumberErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <input
                      v-model.lazy.trim="form.birthday"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="تاریخ تولد:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.birthdayErrorText }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      v-model.lazy.trim="form.consideration"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="توضیحات:"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.considerationErrorText }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-7">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      v-model.lazy.trim="form.address"
                      style="font-size: 12px"
                      type="text"
                      class="form-control"
                      placeholder="آدرس"
                    />
                    <div class="form-text text-danger validation-text">
                      {{ form.addressErrorText }}
                    </div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="form-group" style="font-size: x-small">
                    <button
                      style="font-size: 12px"
                      type="submit"
                      class="btn btn-primary button-class"
                    >
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
          </div>
        </form>
        <div class="row">
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="row" style="height: 50%">
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
      user_id: "",
      fatherJobErrorText: "",
      motherJobErrorText: "",
      fatherPhoneNumberErrorText: "",
      motherPhoneNumberErrorText: "",
      addressErrorText: "",
      considerationErrorText: "",
      birthdayErrorText: "",
      userIdErrorText: "",
    });
    const loading = ref(false);

    function validate() {
      if (form.father_job === "") {
        form.fatherJobErrorText = "شغل پدر باید وارد گردد";
      } else {
        form.fatherJobErrorText = "";
      }
      if (form.mother_job === "") {
        form.motherJobErrorText = "شغل مادر باید وارد شود";
      } else {
        form.motherJobErrorText = "";
      }
      if (form.father_phone_number === "") {
        form.fa = "شماره همراه پدر باید وارد شود";
      } else {
        form.fatherPhoneNumberErrorText = "";
      }
      if (form.mother_phone_number === "") {
        form.motherPhoneNumberErrorText = "شماره همراه مادر باید وارد شود";
      } else {
        form.motherPhoneNumberErrorText = "";
      }
      if (form.address === "") {
        form.addressErrorText = "آدرس کاربر باید وارد شود";
      } else {
        form.addressErrorText = "";
      }
      if (form.consideration === "") {
        form.considerationErrorText = "ملاحظات باید وارد شود";
      } else {
        form.considerationErrorText = "";
      }
      if (form.birthday === "") {
        form.birthdayErrorText = "تاریخ تولد کاربر باید وارد شود";
      } else {
        form.birthdayErrorText = "";
      }
      if (form.user_id === "") {
        form.userIdErrorText = "کد کاربر باید وارد شود";
      } else {
        form.userIdErrorText = "";
      }
      if (
        form.father_job !== "" &&
        form.father_phone_number !== "" &&
        form.mother_job !== "" &&
        form.mother_phone_number !== "" &&
        form.address !== "" &&
        form.consideration !== "" &&
        form.user_id !== "" &&
        form.birthday !== ""
      ) {
        loading.value = true;
        createProfile();
      }
    }

    function createProfile() {
      axios
        .post("http://127.0.0.1:8000/api/school/profile/store", {
          father_job: form.father_job,
          father_phone_number: form.father_phone_number,
          mother_job: form.mother_job,
          mother_phone_number: form.mother_phone_number,
          consideration: form.consideration,
          birthday: form.birthday,
          address: form.address,
          user_id: form.user_id,
        })
        .then(function () {
          loading.value = false;

          form.father_job = "";
          form.father_phone_number = "";
          form.mother_job = "";
          form.mother_phone_number = "";
          form.major = "";
          form.birthday = "";
          form.address = "";
          form.user_id = "";
          form.consideration = "";

          Swal.fire({
            title: "ذخیره شد",
            text: "اطلاعات پروفایل با موفقیت در پایگاه داده ثبت گردید",
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
