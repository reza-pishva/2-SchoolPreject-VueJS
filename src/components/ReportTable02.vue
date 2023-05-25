<template>
  <div
    class="container"
    style="margin: auto; height: 275px; overflow: scroll; width: 55%"
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
          <th>تاریخ</th>
          <th>ساعت</th>
          <th>نوع تردد</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data1.results" :key="index">
          <td style="width: 5%">{{ index + 1 }}</td>
          <td style="width: 12%">{{ item.f_name }}</td>
          <td style="width: 20%">{{ item.l_name }}</td>
          <td style="width: 18%">{{ item.code_melli }}</td>
          <td style="width: 18%">
            {{
              item.date_enter.substr(0, 4) +
              "/" +
              item.date_enter.substr(4, 2) +
              "/" +
              item.date_enter.substr(6, 2)
            }}
          </td>
          <td style="width: 10%">{{ item.time_enter }}</td>
          <td style="width: 12%">
            {{ item.enter_exit == 1 ? "ورود" : "خروج" }}
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
        .get("http://172.28.232.27:8000/vue-total-individuals")
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
};
</script>

<style>
td {
  width: 25%;
}
</style>
