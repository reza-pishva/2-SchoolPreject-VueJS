<template>
  <div class="row" style="width: 100%; margin: auto; direction: rtl">
    <div style="width: 100%; height: 100px">
      <div class="row">
        <div
          style="
            height: 40px;
            width: 85%;
            background-color: rgb(81, 74, 93);
            margin: auto;
            border-radius: 5px;
          "
        >
          <p
            style="
              font-size: 14px;
              font-family: Vazir;
              color: aliceblue;
              margin-top: 10px;
            "
          >
            تخصیص نمره به کاربرانتخابی
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form
            @submit.prevent="validate2"
            style="direction: rtl; font-family: Vazir; margin-top: 10px"
          >
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col-6">
                    <div
                      class="form-group"
                      style="
                        font-family: Vazir;
                        font-size: 12px;
                        width: 100%;
                        margin-right: 70px;
                      "
                    >
                      <select
                        v-model="form.class_id2"
                        class="form-select"
                        style="font-size: 12px"
                      >
                        <option selected value="">انتخاب درس:</option>
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
                  <div class="col-6">
                    <button
                      @click="addScoreToUser"
                      class="btn btn-info button-class"
                      style="height: 28px; margin-top: 2px"
                    >
                      ثبت نمره
                      <div
                        v-if="buttonLoading2"
                        class="spinner-border spinner-grow-sm"
                        role="status"
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    buttonClass: String,
    dataList: Array,
  },
  setup(props, { emit }) {
    const form = reactive({
      f_name: "",
      l_name: "",
      national_code: "",
      year: "",
      class_id: "",
      class_id2: "",
      grade_id: "",
    });

    const users = ref([]);
    const classes1 = ref([]);
    const classes2 = ref([]);
    const grades = ref([]);
    const lessons = ref([]);

    function addScoreToUser() {
      Swal.fire({
        title: "تخصیص کلاس به افراد انتخابی",
        text: "کلاس انتخابی به افرادی که در لیست پایین انتخاب شده اند تخصیص داده شود؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "بله ، تخصیص داده شود",
        position: "top",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`http://127.0.0.1:8000/api/school/user/add-class`, {
              data: [props.dataList, form.class_id2],
            })
            .then(function () {
              form.class_id2 = "";
              emit("formData2", []);
              Swal.fire({
                title: "Thanks!",
                text: `به افراد با کدهای ${props.dataList} انتخابی کلاس مورد نظر تخصیص داده شد`,
                icon: "success",
                confirmButtonText: "Ok",
                position: "top",
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    }
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

    function getLessons() {
      axios
        .get(`http://127.0.0.1:8000/api/school/lesson/lessons-view`)
        .then(function (response) {
          console.log(response.data);
          // handle success
          lessons.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getLessons();
    function getGrades() {
      axios
        .get("http://127.0.0.1:8000/api/school/grade/grades")
        .then(function (response) {
          // handle success
          grades.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getGrades();

    function validate1() {
      emit("formData", form);
    }
    function validate2() {
      // emit("formData", form);
    }
    return {
      addScoreToUser,
      grades,
      classes1,
      classes2,
      users,
      form,
      validate1,
      validate2,
      lessons,
    };
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
