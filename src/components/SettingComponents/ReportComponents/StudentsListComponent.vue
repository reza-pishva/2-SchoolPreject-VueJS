<template>
  <div style="width: 40%" v-if="spinner">
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
      width: 36%;
      height: 300px;
      overflow: scroll;
      background-color: rgb(55, 47, 47);
      opacity: 0.6;
      filter: alpha(opacity=100);
      border: 1px solid beige;
      border-radius: 5px;
      margin-right: 25px;
    "
  >
    <table
      class="table table-bordered"
      style="
        font-family: Vazir;
        font-size: smaller;
        text-align: center;
        margin-top: 0px;
        margin-right: 2px;
        direction: rtl;
        width: 100%;
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
          <th>کدکاربر</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>کد ملی</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in formData2"
          :key="index"
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
          <td style="width: 5%; padding-top: 10px">{{ item.user_id }}</td>
          <td style="width: 25%; padding-top: 15px">
            {{ item.f_name }}
          </td>
          <td style="width: 25%; padding-top: 15px">
            {{ item.l_name }}
          </td>
          <td style="width: 25%; padding-top: 15px">
            {{ item.national_code }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  props: {
    formData2: Array,
    // spinner: Boolean,
  },
  setup(props, { emit }) {
    const loading = ref(false);
    const users = ref([]);
    const lessons = ref([]);
    const spinner = ref(true);
    const selectedIds = ref([]);
    // const exams = ref([]);
    const grade_id = ref("");
    const selectedRowIndex = ref("");
    const userId = ref("");

    const l_name = ref("");
    const f_name = ref("");

    function selectRow(index, gradeId, fName, lName, user_id) {
      selectedRowIndex.value = index;
      f_name.value = fName;
      l_name.value = lName;
      grade_id.value = gradeId;
      userId.value = user_id;

      axios
        .get(
          `http://127.0.0.1:8000/api/school/lesson/lessons/${grade_id.value}`
        )
        .then(function (response) {
          spinner.value = false;
          lessons.value = response.data;
          if (user_id !== undefined && gradeId !== undefined) {
            emit("Lesson", [response.data, user_id, gradeId]);
          } else {
            emit("Lesson", [response.data, 0, 0]);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    selectRow();

    // function searchUser(formData) {
    //   console.log(spinner.value);
    //   spinner.value = true;
    //   selectedIds.value = [];
    //   loading.value = true;
    //   axios
    //     .post("http://127.0.0.1:8000/api/school/user/users-view-search", {
    //       f_name: formData.f_name,
    //       l_name: formData.l_name,
    //       national_code: formData.national_code,
    //       year: formData.year,
    //       class_id: formData.class_id,
    //       grade_id: formData.grade_id,
    //     })

    //     .then(function (response) {
    //       users.value = response.data;
    //       spinner.value = false;
    //       loading.value = false;
    //     })
    //     .catch(function (error) {
    //       loading.value = false;
    //       console.log(error);
    //     });
    // }

    return {
      users,
      spinner,
      // searchUser,
      loading,
      selectedIds,
      selectRow,
      grade_id,
      selectedRowIndex,
      f_name,
      l_name,
      userId,
    };
  },
};
</script>

<style>
.swal2-content {
  font-size: 14px;
  font-family: Vazir;
}
.swal2-title {
  font-size: 16px;
  font-family: Vazir;
}
.validation-text {
  font-size: 12px;
  font-family: Vazir;
  margin-top: 1px;
}
.button-table-class {
  font-size: 12px;
  width: 95%;
  height: 30px;
}
.selected-row {
  background-color: rgb(10, 35, 62);
  color: rgb(234, 241, 19) !important;
}
</style>
