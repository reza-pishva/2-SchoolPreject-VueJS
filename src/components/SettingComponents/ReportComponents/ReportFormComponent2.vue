<template>
  <div class="row" style="width: 100%; margin: auto; direction: rtl">
    <div style="width: 100%; height: 100px">
      <div class="row">
        <div
          style="
            height: 35px;
            width: 85%;
            background-color: rgb(61, 65, 189);
            margin: auto;
            border-radius: 5px;
          "
        >
          <p
            style="
              font-size: 12px;
              font-family: Vazir;
              color: aliceblue;
              margin-top: 10px;
            "
          >
            انتخاب درس جهت مشاهده لیست نمرات
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
                        v-model="form.lesson_id"
                        class="form-select"
                        style="font-size: 12px; margin-right: -40px"
                      >
                        <option selected value="">انتخاب درس:</option>
                        <option
                          v-for="(item, index) in LessonList[0]"
                          :key="index"
                          :value="item.id"
                        >
                          {{ item.grade_id }} . {{ item.lesson_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6">
                    <button
                      @click="scoreList"
                      class="btn btn-info button-class"
                      style="
                        height: 28px;
                        margin-top: 2px;
                        margin-right: -45px;
                        width: 60%;
                      "
                    >
                      مشاهده نمرات
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

export default {
  props: {
    LessonList: Array,
  },
  setup(props, { emit }) {
    const form = reactive({
      lesson_id: "",
      grade_id: "",
    });
    const exams = ref([]);

    function scoreList() {
      axios
        .get(
          `http://127.0.0.1:8000/api/school/exam-user/exams-view/${props.LessonList[1]}/${form.lesson_id}/${props.LessonList[2]}`
        )
        .then(function (response) {
          exams.value = response.data;
          emit("ScoreList", exams.value);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function validate1() {
      emit("formData", form);
    }
    return {
      scoreList,
      form,
      validate1,
    };
  },
};
</script>

<style></style>
