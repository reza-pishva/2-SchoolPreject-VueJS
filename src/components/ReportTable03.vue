<template>
  <ReportTableBanner
    code_melli="false"
    dest="/report-table03"
    @ChildData="getData($event)"
  />
  <div
    v-show="loading"
    class="container"
    style="text-align: center; height: 275px; width: 95%"
  >
    <LoadingReports />
  </div>
  <div v-show="alertShow" v-if="!loading">
    <AlertBox />
  </div>

  <div
    v-show="!loading"
    v-if="!alertShow"
    class="container"
    style="
      margin: auto;
      height: 275px;
      overflow: scroll;
      width: 95%;
      margin-right: 5px;
    "
  >
    <table
      class="table table-bordered"
      style="font-family: Vazir; font-size: smaller; text-align: center"
    >
      <thead>
        <tr style="text-align: center; font-size: smaller; color: darkblue">
          <th>ردیف</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>کد ملی</th>
          <th>تاریخ ورود</th>
          <th>تاریخ خروج</th>
          <th>علت حضور</th>
          <th>شرکت</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr
          style="text-align: center; font-size: smaller"
          v-for="(item, index) in data1.results"
          :key="index"
        >
          <td style="width: 5%">{{ index + 1 }}</td>
          <td style="width: 5%">{{ item.f_name }}</td>
          <td style="width: 14%">{{ item.l_name }}</td>
          <td style="width: 10%">{{ item.code_melli }}</td>
          <td style="width: 10%">
            {{
              item.date_shamsi_enter.substr(0, 4) +
              "/" +
              item.date_shamsi_enter.substr(4, 2) +
              "/" +
              item.date_shamsi_enter.substr(6, 2)
            }}
          </td>
          <td style="width: 10%">
            {{
              item.date_shamsi_exit.substr(0, 4) +
              "/" +
              item.date_shamsi_exit.substr(4, 2) +
              "/" +
              item.date_shamsi_exit.substr(6, 2)
            }}
          </td>
          <td style="width: 16%">{{ item.title }}</td>
          <td style="width: 20%">{{ item.company }}</td>
          <td style="width: 10%">
            <button
              style="font-size: small"
              class="btn btn-outline-primary"
              @click="deleteRow(item)"
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
import ReportTableBanner from "./ReportTableBanner.vue";
import LoadingReports from "./LoadingReports.vue";
import AlertBox from "./AlertBox.vue";
export default {
  components: {
    ReportTableBanner,
    LoadingReports,
    AlertBox,
  },
  data() {
    return {
      data1: [],
      loading: false,
      alertShow: false,
    };
  },
  methods: {
    getData(event) {
      this.loading = true;
      axios
        .get(
          "http://172.28.232.27:8000/vue-individuals-with-permission/" + event
        )
        .then((response) => {
          this.alertShow = false;
          this.data1 = response.data;
          console.log(response.data.results.length);
          if (response.data.results.length == 0) {
            this.loading = false;
            this.alertShow = true;
          }
          this.loading = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    deleteRow(item) {
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
