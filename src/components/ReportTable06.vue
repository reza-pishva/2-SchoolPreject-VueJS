<template>
  <ReportTable06Banner @ChildData="getData($event)" />
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
    "
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
          <td style="width: 5%; text-align: center">{{ index + 1 }}</td>
          <td style="width: 11%; text-align: center">{{ item.f_name }}</td>
          <td style="width: 16%; text-align: center">{{ item.l_name }}</td>
          <td style="width: 16%; text-align: center">{{ item.code_melli }}</td>
          <td style="width: 15%; text-align: center">
            {{
              item.date_enter.substr(0, 4) +
              "/" +
              item.date_enter.substr(4, 2) +
              "/" +
              item.date_enter.substr(6, 2)
            }}
          </td>
          <td style="width: 11%; text-align: center">{{ item.time_enter }}</td>
          <td style="width: 11%; text-align: center">
            {{ item.enter_exit == 1 ? "ورود" : "خروج" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import ReportTable06Banner from "./ReportTable06Banner.vue";
import LoadingReports from "./LoadingReports.vue";
import AlertBox from "./AlertBox.vue";
export default {
  components: {
    ReportTable06Banner,
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
        .get(event)
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
  },
};
</script>

<style>
td {
  width: 25%;
}
</style>
