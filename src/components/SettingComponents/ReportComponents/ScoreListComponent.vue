<template>
  <div
    style="
      width: 95%;
      height: 300px;
      overflow: scroll;
      border: 1px solid beige;
      border-radius: 5px;
    "
  >
    <div style="width: 90%" v-if="spinner">
      <div
        class="spinner-border text-danger"
        role="status"
        style="width: 100px; height: 100px; margin-top: 100px"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <table
      v-else
      class="table table-bordered"
      id="ScoreTable"
      style="
        font-family: Vazir;
        font-size: smaller;
        text-align: center;
        margin-top: 0px;
        margin-right: 15px;
        direction: rtl;
        width: 95%;
      "
    >
      <thead>
        <tr
          class="sticky"
          style="
            background-color: rgb(83, 112, 166);
            color: rgb(254, 254, 255);
            font-size: 12px;
          "
        >
          <th>--</th>
          <th>نام درس</th>
          <th>نوع امتحان</th>
          <th>مقطع تحصیلی</th>
          <th>تاریخ</th>
          <th>نمره</th>
          <th>--</th>
          <th>--</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in scores"
          :key="index"
          :id="item.id"
          style="text-align: right; font-size: 12px; color: aliceblue"
          v-bind:class="{ 'selected-row': index === selectedRowIndex }"
        >
          <td style="width: 5%; padding-top: 13px">
            <a
              v-on:click="
                selectRow(
                  index,
                  item.grade_id,
                  item.f_name,
                  item.l_name,
                  item.user_id
                )
              "
              href="#"
              ><img
                style="width: 20px; height: 20px; border-radius: 5px"
                src="../../../../public/select.jpg"
            /></a>
          </td>

          <td style="width: 13%; padding-top: 10px">
            {{ item.lesson_name }}
          </td>
          <td style="width: 16%; padding-top: 10px">
            {{ item.exam_type }}
          </td>
          <td style="width: 18%; padding-top: 10px">
            {{ item.grade_name }}
          </td>
          <td style="width: 20%; padding-top: 15px">
            {{ item.updated_at }}
          </td>
          <td style="width: 10%; padding-top: 15px; text-align: center">
            {{ item.score }}
          </td>
          <td style="width: 9%">
            <button
              style="height: 30px; font-size: 12px; font-family: Vazir"
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#EditModal"
              @click="
                fillingExams(item.exam_id, item.score, item.user_id, item.id)
              "
            >
              اصلاح
            </button>
          </td>
          <td style="width: 9%">
            <button
              style="height: 30px; font-size: 12px; font-family: Vazir"
              data-toggle="modal"
              data-target="#ِDeleteModal"
              @click="deleteScore(item.id, index)"
              class="btn btn-danger button-table-class"
            >
              حذف
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div
    class="modal fade"
    id="EditModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div
          class="row"
          style="
            background-color: darkblue;
            width: 100%;
            height: 35px;
            margin: auto;
          "
        >
          <div class="col-2">
            <button
              style="color: aliceblue"
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-2">
            <p
              style="
                font-size: 14px;
                font-family: Vazir;
                color: aliceblue;
                margin-top: 10px;
                margin-right: -30px;
              "
            >
              اصلاح نمره
            </p>
          </div>
          <div class="col-8"></div>
        </div>
        <div class="modal-body">
          <div class="row mt-2">
            <form>
              <div class="row" style="text-align: center; margin: auto">
                <div
                  class="col-7 form-group"
                  style="
                    font-family: Vazir;
                    font-size: 12px;
                    width: 50%;
                    margin-right: 70px;
                  "
                >
                  <select
                    v-model="form.exam_id"
                    class="form-select"
                    style="font-size: 12px; height: 30px"
                  >
                    <option selected value="">انتخاب درس:</option>
                    <option
                      v-for="(item, index) in exams2"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.lesson_name }}--{{ item.exam_type }}
                    </option>
                  </select>
                </div>
                <div class="col-5 form-group">
                  <input
                    style="width: 50%; height: 30px; margin-right: 70px"
                    v-model="form.score"
                    type="number"
                    class="form-control"
                    placeholder="نمره امتحان"
                  />
                </div>
              </div>

              <button
                data-dismiss="modal"
                type="button"
                class="btn btn-success"
                style="height: 30px"
                @click="updateScore"
              >
                <p style="font-size: 12px; font-family: Vazir">اصلاح</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, watch } from "vue";
import Swal from "sweetalert2";
import { ref } from "vue";

export default {
  data() {
    return {
      selectedRowIndex: -1,
    };
  },
  methods: {
    selectRow(index) {
      console.log(index);
      this.selectedRowIndex = index;
    },
  },
  props: {
    usersScore: Array,
    spinner: Boolean,
    gradeId: String,
    userId: String,
  },

  setup(props) {
    watch(
      () => props.usersScore,
      (newValue) => {
        scores.value = newValue;
      }
    );
    const form = reactive({
      user_id: "",
      score: "",
      exam_id: "",
      exam_user_id: "",
    });

    const scores = ref([]);
    const exam = ref("");
    const exams = ref([]);
    const exams2 = ref([]);
    const lesson_id = ref("");
    const grade_id = ref("");
    const user_id = ref("");
    function deleteScore(id, index) {
      Swal.fire({
        title: "آیا مطمئن هستید؟",
        text: "امکان تغییر نظرتان در آینده وجود نخواهد داشت",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "بله ، حذف شود",
        position: "top",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/school/exam-user/remove/${id}`)
            .then(function () {
              document.getElementById("ScoreTable").deleteRow(index + 1);
              Swal.fire({
                title: "Thanks!",
                text: `آزمون با کد (${id}) با موفقیت حذف گردید`,
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
    function fillingExams(exam_id, score, user_id, exam_user_id) {
      axios
        .get(`http://127.0.0.1:8000/api/school/exam/exam-view/${props.gradeId}`)
        .then(function (response) {
          // handle success
          exams2.value = response.data;
          form.exam_id = exam_id;
          form.score = score;
          form.user_id = user_id;
          form.exam_user_id = exam_user_id;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function updateScore() {
      axios
        .put(
          `http://127.0.0.1:8000/api/school/exam-user/update/${form.exam_user_id}`,
          {
            score: form.score,
            exam_id: form.exam_id,
          }
        )
        .then(function () {
          Swal.fire({
            title: "ذخیره شد",
            text: "تغییرات شما در پایگاه داده اعمال گردید",
            icon: "success",
            confirmButtonText: "Ok",
            position: "top",
          });
        })
        .catch(function () {
          Swal.fire({
            title: "پیغام خطا",
            text: "مشکلاتی در مورد ثبت اطلاعات در پایگاه داده مشاهده گردیده",
            icon: "error",
            confirmButtonText: "Ok",
            position: "top",
          });
        });

      axios
        .get(`http://127.0.0.1:8000/api/school/exam/exam-view2/${form.exam_id}`)
        .then(function (response) {
          exam.value = response.data;
          user_id.value = props.userId;
          grade_id.value = exam.value[0]["grade_id"];
          lesson_id.value = exam.value[0]["lesson_id"];

          axios
            .get(
              `http://127.0.0.1:8000/api/school/exam-user/exams-view/${user_id.value}/${lesson_id.value}/${grade_id.value}`
            )
            .then(function (response) {
              scores.value = response.data;
              console.log(scores.value);
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return {
      scores,
      exam,
      exams,
      exams2,
      form,
      fillingExams,
      updateScore,
      deleteScore,
      lesson_id,
      grade_id,
      user_id,
    };
  },
};
</script>

<style>
.selected-row {
  background-color: rgb(94, 119, 148);
  color: rgb(234, 241, 19) !important;
  font-size: 12px !important;
}
</style>
