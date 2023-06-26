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
            تخصیص نمره به کاربر انتخابی
          </p>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col" style="color: aliceblue">
          {{ f_name }} {{ l_name }}
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form
            @submit.prevent="validate1"
            style="direction: rtl; font-family: Vazir; margin-top: 10px"
          >
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col">
                    <div
                      class="form-group"
                      style="
                        font-family: Vazir;
                        font-size: 12px;
                        width: 60%;
                        margin-right: 70px;
                      "
                    >
                      <select
                        v-model="form.exam_id"
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
                    </div>
                  </div>
                </div>
                <div class="row" style="margin-top: -8px; margin-right: 60px">
                  <div class="col-4">
                    <input
                      v-model.lazy.trim="form.score"
                      style="font-size: 12px; width: 110%"
                      class="form-control"
                      type="number"
                      placeholder="نمره درس"
                    />
                  </div>
                  <div class="col-4">
                    <button
                      @click="addScoreToUser"
                      class="btn btn-info button-class"
                      style="
                        height: 28px;
                        margin-top: 2px;
                        width: 80%;
                        margin-right: -35px;
                      "
                    >
                      ثبت نمره
                      <div
                        v-if="buttonLoading2"
                        class="spinner-border spinner-grow-sm"
                        role="status"
                      ></div>
                    </button>
                  </div>

                  <div class="col-4"></div>
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
  setup(props) {
    const form = reactive({
      user_id: "",
      score: "",
      exam_id: "",
    });

    // const users = ref([]);
    // const grades = ref([]);
    // const lessons = ref([]);
    const toast1 = ref(false);

    function addScoreToUser() {
      form.user_id = props.userId;
      axios
        .post("http://127.0.0.1:8000/api/school/user-exam/store", {
          user_id: form.user_id,
          exam_id: form.exam_id,
          score: form.score,
          date_shamsi: "12345678",
        })
        .then(function () {
          toast1.value = true;
          form.user_id = "";
          form.exam_id = "";
          form.score = "";
          form.date_shamsi = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    function validate1() {}

    return {
      // grades,
      // users,
      form,
      addScoreToUser,
      // lessons,
      validate1,
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
