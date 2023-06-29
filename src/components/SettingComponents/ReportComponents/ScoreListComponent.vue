<template>
  <div style="width: 90%" v-if="spinner">
    <div
      class="spinner-border text-danger"
      role="status"
      style="width: 100px; height: 100px; margin-top: 100px"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div
    v-else
    style="
      width: 95%;
      height: 300px;
      overflow: scroll;
      border: 1px solid beige;
      border-radius: 5px;
    "
  >
    <table
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
          v-for="(item, index) in usersScore"
          :key="index"
          :id="item.id"
          style="text-align: right; font-size: 12px; color: aliceblue"
          v-bind:class="{ 'selected-row': index === selectedRowIndex }"
        >
          <td style="width: 5%; padding-top: 10px">
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
            <router-link
              class="btn btn-primary button-table-class"
              :to="{ name: 'scoreEdit', params: { id: item.id } }"
            >
              اصلاح
            </router-link>
          </td>
          <td style="width: 9%">
            <button
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
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "vue";

export default {
  props: {
    usersScore: Array,
    spinner: Boolean,
  },
  setup(props) {
    const scores = ref([]);
    function sendProps() {
      scores.value = props.usersScore;
    }
    sendProps();
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

              // axios
              //   .get("http://127.0.0.1:8000/api/school/exam/exam-view")

              //   .then(function (response) {
              //     // handle success
              //     exams.value = response.data;
              //   })
              //   .catch(function (error) {
              //     // handle error
              //     console.log(error);
              //   });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    }
    return {
      deleteScore,
      scores,
    };
  },
};
</script>

<style></style>
