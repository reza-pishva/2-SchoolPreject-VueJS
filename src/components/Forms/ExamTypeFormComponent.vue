<template>
  <form
    @submit.prevent="validate"
    style="direction: rtl; font-family: Vazir; margin-top: 5px"
  >
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="form-group" style="font-size: xx-small">
              <input
                v-model.lazy.trim="form.exam_type"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="نوع امتحان:"
              />
              <div class="form-text text-danger validation-text">
                {{ form.examTypeErrorText }}
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
    examTypeId: String,
  },
  setup(props, { emit }) {
    const form = reactive({
      exam_type: "",
      examTypeErrorText: "",
    });

    // const loading = ref(false);
    const examTypes = ref([]);
    const examTypeInfo = ref([]);

    function getExamTypes() {
      axios
        .get("http://127.0.0.1:8000/api/school/exam/exam-types")
        .then(function (response) {
          // handle success
          examTypes.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getExamTypes();

    function getExamType() {
      axios
        .get(
          "http://127.0.0.1:8000/api/school/exam/exam-type/" + props.examTypeId
        )
        .then(function (response) {
          // handle success
          examTypeInfo.value = response.data;
          form.exam_type = examTypeInfo.value.exam_type;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    if (props.examTypeId !== undefined) {
      getExamType();
    }

    function validate() {
      if (form.exam_type === "") {
        form.examTypeErrorText = "نام مقطع تحصیلی پر نشده";
      } else {
        form.examTypeErrorText = "";
        emit("formData", form);
      }
    }
    return { examTypes, form, validate };
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
