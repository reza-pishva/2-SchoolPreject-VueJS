<template>
  <form
    @submit.prevent="validate"
    style="direction: rtl; font-family: Vazir; font-size: 12px"
  >
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="form-group" style="font-family: Vazir; font-size: 12px">
              <select
                v-model="form.class_id"
                class="form-select"
                style="font-size: 12px"
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
                {{ form.classIdErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-family: Vazir; font-size: 12px">
              <select
                v-model="form.lesson_id"
                class="form-select"
                style="font-size: 12px"
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
                {{ form.lessonIdErrorText }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-family: Vazir">
              <select
                v-model="form.DayOfWeek"
                class="form-select"
                style="font-size: small"
              >
                <option selected value="">انتخاب روز هفته:</option>
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
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group" style="font-size: xx-small; width: 70%">
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
            <div class="form-group" style="font-size: xx-small; width: 70%">
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
            <div class="form-group" style="font-size: x-small; width: 70%">
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
    progId: String,
  },
  setup(props, { emit }) {
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

    const classes = ref([]);
    const lessons = ref([]);
    const progInfo = ref([]);

    console.log(props.progId);
    function getProg() {
      axios
        .get(
          "http://127.0.0.1:8000/api/school/class-program/program/" +
            props.progId
        )
        .then(function (response) {
          // handle success

          progInfo.value = response.data;
          form.class_id = progInfo.value.class_id;
          form.lesson_id = progInfo.value.lesson_id;
          form.time_start = progInfo.value.time_start;
          form.time_end = progInfo.value.time_end;
          form.DayOfWeek = progInfo.value.dayOfWeek;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getProg();

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
        .get("http://127.0.0.1:8000/api/school/classroom/classrooms")
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
      if (form.DayOfWeek === "") {
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
        form.DayOfWeek !== ""
      ) {
        emit("formData", form);
      }

      function getProg() {
        console.log(props.progId);
        axios
          .get(
            "http://127.0.0.1:8000/api/school/class-program/program/" +
              props.progId
          )
          .then(function (response) {
            // handle success

            progInfo.value = response.data;
            form.class_id = progInfo.value.class_id;
            form.lesson_id = progInfo.value.lesson_id;
            form.time_start = progInfo.value.time_start;
            form.time_end = progInfo.value.time_end;
            form.DayOfWeek = progInfo.value.dayOfWeek;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }
      getProg();
    }
    return { form, validate, classes, lessons };
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
