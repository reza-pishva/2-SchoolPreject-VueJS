<template>
  <ReportTableBanner
    code_melli2="false"
    dest="/report-eq-table03"
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
          <th>شماره درخواست</th>
          <th>ورود/خروج</th>
          <th>درخواست کننده</th>
          <th>شرح درخواست</th>
          <th>نوع درخواست</th>
          <th>تاریخ درخواست</th>
          <th>محل ارسال</th>
        </tr>
      </thead>
      <tbody>
        <tr
          style="text-align: center; font-size: smaller"
          v-for="(item, index) in data1.results"
          :key="index"
        >
          <td style="width: 5%">{{ item.id_exit }}</td>
          <td style="width: 8%">
            {{ item.enter_exit == 1 ? "ورود" : "خروج" }}
          </td>
          <td style="width: 10%">{{ item.requester_name }}</td>
          <td style="width: 40%">{{ item.description }}</td>
          <td style="width: 5%">{{ item.goods_type }}</td>
          <td style="width: 5%">
            {{
              item.date_request_shamsi2.substr(0, 4) +
              "/" +
              item.date_request_shamsi2.substr(4, 2) +
              "/" +
              item.date_request_shamsi2.substr(6, 2)
            }}
          </td>
          <td style="width: 27%">{{ item.origin_destination }}</td>
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
        .get("http://172.28.232.27:8000/vue-waiting-for-exit/" + event)
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
