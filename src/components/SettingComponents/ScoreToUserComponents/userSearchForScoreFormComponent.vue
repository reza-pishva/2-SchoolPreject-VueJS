<template>
  <div class="row" style="height: 35%">
    <div class="col">
      <div>
        <AddScoreForm
          @formData2="afterAddingClass"
          :button-loading="loading"
          button-text="جستجو"
          button-class="btn btn-primary"
          :dataList="selectedIds"
        />
      </div>
    </div>
    <div class="col">
      <div>
        <SearchForm
          @formData="searchUser"
          :button-loading="loading"
          button-text="جستجو"
          button-class="btn btn-primary"
          :dataList="selectedIds"
        />
      </div>
    </div>
  </div>
  <div
    class="row"
    style="
      height: 65%;
      overflow-y: scroll;
      margin-top: 3px;
      border: 1px solid white;
      border-radius: 5px;
      background-color: rgb(57, 57, 60);
      opacity: 0.7;
      filter: alpha(opacity=100);
    "
  >
    <div class="col" v-if="spinner">
      <div
        class="spinner-border text-danger"
        role="status"
        style="width: 100px; height: 100px; margin-top: 100px"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="col">
      <table
        class="table table-bordered"
        style="
          font-family: Vazir;
          font-size: smaller;
          text-align: center;
          margin-top: 0px;
          margin-left: 20px;
          direction: rtl;
          width: 95%;
        "
      >
        <thead>
          <tr
            class="sticky"
            style="background-color: cornflowerblue; color: rgb(254, 254, 255)"
          >
            <th>--</th>
            <th>کدکاربر</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>کد ملی</th>
            <th>کلاس</th>
            <th>سال تحصیلی</th>
            <th>مقطع تحصیلی</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in users"
            :key="index"
            style="text-align: right; font-size: 12px; color: aliceblue"
            v-bind:class="{ 'selected-row': index === selectedRowIndex }"
          >
            <td style="width: 5%; padding-top: 10px">
              <input
                v-model="selectedIds"
                class="form-check-input"
                type="checkbox"
                :value="item.user_id"
                style="width: 20px; height: 20px; margin: auto"
              />
            </td>
            <td style="width: 5%; padding-top: 10px">{{ item.user_id }}</td>
            <td style="width: 15%; padding-top: 10px">
              {{ item.f_name }}
            </td>
            <td style="width: 17%; padding-top: 10px">
              {{ item.l_name }}
            </td>
            <td style="width: 13%; padding-top: 15px">
              {{ item.national_code }}
            </td>
            <td style="width: 17%; padding-top: 15px">
              {{ item.name }}
            </td>
            <td style="width: 10%; padding-top: 15px">
              {{ item.year }}
            </td>
            <td style="width: 18%; padding-top: 15px">
              {{ item.grade_name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row" style="height: 10%"></div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import SearchForm from "@/components/Forms/ScoreToUserFormComponent1.vue";
import AddScoreForm from "@/components/Forms/ScoreToUserFormComponent2.vue";

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
  components: {
    SearchForm,
    AddScoreForm,
  },
  setup() {
    // const form = reactive({
    //   f_name: "",
    //   l_name: "",
    //   national_code: "",
    //   year: "",
    //   class_id: "",
    //   grade_id: "",
    // });

    const loading = ref(false);
    const users = ref([]);
    const spinner = ref(true);
    const selectedIds = ref([]);

    function searchUser(formData) {
      spinner.value = true;
      selectedIds.value = [];
      loading.value = true;
      axios
        .post("http://127.0.0.1:8000/api/school/user/users-view-search", {
          f_name: formData.f_name,
          l_name: formData.l_name,
          national_code: formData.national_code,
          year: formData.year,
          class_id: formData.class_id,
          grade_id: formData.grade_id,
        })

        .then(function (response) {
          users.value = response.data;
          spinner.value = false;
          loading.value = false;
        })
        .catch(function (error) {
          loading.value = false;
          console.log(error);
        });
    }
    function afterAddingClass(formData2) {
      selectedIds.value = formData2;
      getUsers();
    }
    function getUsers() {
      axios
        .get("http://127.0.0.1:8000/api/school/user/users-view")
        .then(function (response) {
          // handle success
          spinner.value = false;
          users.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();

    return {
      users,
      spinner,
      searchUser,
      loading,
      selectedIds,
      afterAddingClass,
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
  background-color: rgb(94, 119, 148);
  color: rgb(234, 241, 19) !important;
  font-size: 16px !important;
}
</style>
