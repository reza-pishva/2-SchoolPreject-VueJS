<template>
  <form style="direction: rtl; font-family: Vazir">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="form-group" style="font-family: Vazir">
              <select
                v-model="form.class_id"
                class="form-select"
                style="font-size: small"
              >
                <option value="">انتخاب کلاس:</option>
                <option
                  v-for="(item, index) in classes"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
              <div class="form-text text-danger validation-text">
                {{ form.ClassIdErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-family: Vazir">
              <select
                v-model="form.lesson_id"
                class="form-select"
                style="font-size: small"
              >
                <option value="">انتخاب درس:</option>
                <option
                  v-for="(item, index) in lessons"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.lesson_name }}
                </option>
              </select>
              <div class="form-text text-danger validation-text">
                {{ form.LessonIdErrorText }}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group" style="font-family: Vazir">
              <select
                v-model="form.DayOfWeek"
                class="form-select"
                style="font-size: small"
              >
                <option value="">انتخاب روز هفته:</option>
                <option value="0">شنبه</option>
                <option value="1">یکشنبه</option>
                <option value="2">دوشنبه</option>
                <option value="3">سه شنبه</option>
                <option value="4">چهارشنبه</option>
                <option value="5">پنج شنبه</option>
              </select>
              <div class="form-text text-danger validation-text">
                {{ form.DayOfWeekErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-size: xx-small">
              <input
                v-model="form.time_start"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="ساعت شروع:"
              />
              <div class="form-text text-danger validation-text">
                {{ form.timeStartErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-size: xx-small">
              <input
                v-model="form.time_end"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="ساعت پایان:"
              />
              <div class="form-text text-danger validation-text">
                {{ form.timeEndErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-size: x-small">
              <button
                style="font-size: 12px"
                type="submit"
                :class="buttonClass"
              >
                {{ buttonText }}
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
      class_id: "",
      lesson_id: "",
      dayOfWeek: "",
      time_start: "",
      time_end: "",
      dayOfWeekErrorText: "",
      classIdErrorText: "",
      lessonIdErrorText: "",
      timeStartErrorText: "",
      timeEndErrorText: "",
    });

    const profiles = ref([]);
    const classes = ref([]);
    const grades = ref([]);
    const lessons = ref([]);
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
    function getLessons() {
      axios
        .get("http://127.0.0.1:8000/api/school/lesson/lessons-view")
        .then(function (response) {
          // handle success
          lessons.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function getClasses() {
      axios
        .get("http://127.0.0.1:8000/api/school/classroom/classrooms-view")
        .then(function (response) {
          // handle success
          classes.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getClasses();
    getLessons();
    function validate() {
      if (form.class_id === "") {
        form.classIdErrorText = "نام کلاس پر نشده";
      } else {
        form.classIdErrorText = "";
      }
      if (form.lesson_id === "") {
        form.lessonIdErrorText = " نام درس پر نشده";
      } else {
        form.lessonIdErrorText = "";
      }
      if (form.dayOfWeek === "") {
        form.dayOfWeekErrorText = "روز هفته پر نشده";
      } else {
        form.dayOfWeekErrorText = "";
      }
      if (form.time_start === "") {
        form.timeStartErrorText = "ساعت شروع پر نشده";
      } else {
        form.timeStartErrorText = "";
      }
      if (form.time_end === "") {
        form.timeEndErrorText = "ساعت اتمام پر نشده";
      } else {
        form.timeEndErrorText = "";
      }
      if (
        form.class_id !== "" &&
        form.lesson_id !== "" &&
        form.time_start !== "" &&
        form.time_end !== "" &&
        form.dayOfWeek !== ""
      ) {
        // console.log(form);
        emit("formData", form);
      }
    }
    return { classes, lessons, profiles, form, validate };
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
