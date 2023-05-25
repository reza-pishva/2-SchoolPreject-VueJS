<template>
  <PersianDatePicker @ChildData="getData1($event)" />

  <div
    class="container"
    style="
      margin: auto;
      height: 275px;
      background-color: blanchedalmond;
      overflow: scroll;
      width: 55%;
    "
  >
    <table
      class="table table-bordered"
      style="font-family: tahoma; font-size: small; text-align: right"
    >
      <thead>
        <tr>
          <th>ردیف</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>کد ملی</th>
          <th>تاریخ</th>
          <th>کارکرد</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data1.results" :key="index">
          <td style="width: 5%">{{ index + 1 }}</td>
          <td style="width: 15%">{{ item.f_name }}</td>
          <td style="width: 25%">{{ item.l_name }}</td>
          <td style="width: 15%">{{ item.code_melli }}</td>
          <td style="width: 15%">
            {{
              item.date_shamsi.substr(0, 4) +
              "/" +
              item.date_shamsi.substr(4, 2) +
              "/" +
              item.date_shamsi.substr(6, 2)
            }}
          </td>
          <td style="width: 25%">{{ item.karkard }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//params="/report-table05" @ChildData="getData($event)"
import axios from "axios";
import { ref } from "vue";
import PersianDatePicker from "./PersianDatePicker.vue";
export default {
  components: {
    PersianDatePicker,
  },

  setup() {
    const data1 = ref([]);
    const date_start = ref(0);
    const date_end = ref(0);

    function getData1(event) {
      var date1 = event[0].split("/");
      date1 = date1[0] + date1[1] + date1[2];
      var date2 = event[1].split("/");
      date2 = date2[0] + date2[1] + date2[2];
      date_start.value = date1;
      date_end.value = date2;
      // console.log(date_start.value, date_end.value);
    }

    function getData() {
      axios
        .get(
          "http://172.28.232.27:8001/vue-individuals-karkard/14010401/14010410"
        )
        .then(function (response) {
          // handle success
          console.log("good bye");
          data1.value = response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getData();
    return { getData1, date_start, date_end, data1 };
  },
};
</script>

<style>
td {
  width: 25%;
}
</style>
