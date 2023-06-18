<template>
  <form @submit.prevent="validate" style="direction: rtl; font-family: Vazir">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-2">
            <div class="form-group" style="font-size: xx-small">
              <input
                v-model.lazy.trim="form.user_id"
                style="font-size: 12px"
                type="number"
                class="form-control"
                placeholder="کد کاربری:"
              />
              <div class="form-text text-danger validation-text">
                {{ form.userIdErrorText }}
              </div>
            </div>
          </div>
          <div class="col-5">
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
          <div class="col-5">
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
          <div class="col-6">
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
          <div class="col-6">
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
    profileId: String,
  },
  setup(props, { emit }) {
    const form = reactive({
      father_job: "",
      fatherJobErrorText: "",
      mother_job: "",
      motherJobErrorText: "",
      father_phone_number: "",
      fatherPhoneNumberErrorText: "",
      mother_phone_number: "",
      motherPhoneNumberErrorText: "",
      address: "",
      addressErrorText: "",
      consideration: "",
      considerationErrorText: "",
      birthday: "",
      birthdayErrorText: "",
      major: "",
      majorErrorText: "",
      user_id: "",
    });

    const profiles = ref([]);
    const profileInfo = ref([]);

    function getProfiles() {
      axios
        .get("http://127.0.0.1:8000/api/school/profile/profiles")
        .then(function (response) {
          // handle success
          profiles.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getProfiles();

    function getProfile() {
      axios
        .get("http://127.0.0.1:8000/api/school/profile/" + props.profileId)
        .then(function (response) {
          // handle success

          profileInfo.value = response.data;

          form.father_job = profileInfo.value.father_job;
          form.mother_job = profileInfo.value.mother_job;
          form.father_phone_number = profileInfo.value.father_phone_number;
          form.mother_phone_number = profileInfo.value.mother_phone_number;
          form.address = profileInfo.value.address;
          form.consideration = profileInfo.value.consideration;
          form.birthday = profileInfo.value.birthday;
          form.major = profileInfo.value.major;
          form.user_id = profileInfo.value.user_id;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getProfile();

    function validate() {
      if (form.father_job === "") {
        form.fatherJobErrorText = "شغل پدر پر نشده";
      } else {
        form.fatherJobErrorText = "";
      }
      if (form.mother_job === "") {
        form.motherJobErrorText = "شغل مادر پر نشده";
      } else {
        form.motherJobErrorText = "";
      }
      if (form.father_phone_number === "") {
        form.fatherPhoneNumberErrorText = "شماره همراه پدر پر نشده";
      } else {
        form.fatherPhoneNumberErrorText = "";
      }
      if (form.mother_phone_number === "") {
        form.motherPhoneNumberErrorText = "شماره همراه مادر پر نشده";
      } else {
        form.motherPhoneNumberErrorText = "";
      }
      if (form.birthday === "") {
        form.birthdayErrorText = "تاریخ تولد پر نشده";
      } else {
        form.birthdayErrorText = "";
      }
      if (form.consideration === "") {
        form.considerationErrorText = "ملاحظات پر نشده";
      } else {
        form.considerationErrorText = "";
      }
      if (form.major === "") {
        form.majorErrorText = "رشته تحصیلی پر نشده";
      } else {
        form.majorErrorText = "";
      }
      if (form.address === "") {
        form.addressErrorText = "آدرس پر نشده";
      } else {
        form.addressErrorText = "";
      }
      if (
        form.father_job !== "" &&
        form.mother_job !== "" &&
        form.father_phone_number !== "" &&
        form.mother_phone_number !== "" &&
        form.birthday !== "" &&
        form.address !== "" &&
        form.consideration !== "" &&
        form.major !== ""
      ) {
        emit("formData", form);
      }
    }
    return { profiles, form, validate };
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
