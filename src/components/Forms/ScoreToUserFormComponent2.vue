<template>
  <!-- {{ exams }} -->
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
      <div class="row mt-2">
        <div class="col" style="color: aliceblue">
          <!-- {{ examList }} -->
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
                          v-for="(item, index) in exams"
                          :key="index"
                          :value="item.id"
                        >
                          {{ item.lesson_name }}--{{ item.exam_type }}
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
//import axios from "axios";
// import Swal from "sweetalert2";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    buttonClass: String,
    userId: String,
    f_name: String,
    l_name: String,
    grade_id: String,
    exams: Array,
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
    const grades = ref([]);
    const lessons = ref([]);
    // const grade_id = ref("");

    function validate1() {
      emit("formData", form);
    }
    // function validate2() {
    //    emit("formData", form);
    // }
    return {
      grades,
      users,
      form,
      validate1,
      // validate2,
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
