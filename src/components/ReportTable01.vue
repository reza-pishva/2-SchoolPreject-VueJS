<template>
  <div
    class="container"
    style="margin: auto; height: 275px; overflow: scroll; width: 95%"
  >
    <table
      class="table table-bordered"
      style="font-family: Vazir; font-size: small; text-align: right"
    >
      <thead>
        <tr style="text-align: center; font-size: smaller; color: darkblue">
          <th>ردیف</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>کد ملی</th>
          <th>دلیل حضور</th>
          <th>شرکت(محل اعزام)</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data1.results" :key="index">
          <td style="width: 5%; text-align: center">{{ index + 1 }}</td>
          <td style="width: 13%; text-align: center">{{ item.f_name }}</td>
          <td style="width: 13%; text-align: center">{{ item.l_name }}</td>
          <td style="width: 13%; text-align: center">{{ item.code_melli }}</td>
          <td style="width: 22%; text-align: center">{{ item.title }}</td>
          <td style="width: 24%; text-align: center">{{ item.company }}</td>
          <td style="width: 10%">
            <button
              style="font-size: small"
              class="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="describeRow(item)"
            >
              توضیحات
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const data1 = ref([]);
    function getUsers() {
      axios
        .get("http://172.28.232.27:8000/vue-individuals-presence")
        .then(function (response) {
          // handle success
          data1.value = response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();
    return { data1 };
  },
  methods: {
    describeRow(item) {
      console.log(item);
    },
  },
};
</script>

<style>
td {
  width: 25%;
}
</style>
