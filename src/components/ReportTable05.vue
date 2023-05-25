<template>
  <ReportTable05Banner @ChildData="getData($event)" />
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
    style="margin: auto; height: 275px; overflow: scroll; width: 85%"
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
          <!-- <th>تاریخ</th> -->
          <th>کارکرد</th>
        </tr>
      </thead>
      <tbody>
        <tr
          @click="console.log('hi')"
          style="text-align: center"
          v-for="(item, index) in data1.results"
          :key="index"
        >
          <td style="width: 5%">{{ index + 1 }}</td>
          <td style="width: 20%">{{ item.f_name }}</td>
          <td style="width: 25%">{{ item.l_name }}</td>
          <td style="width: 20%">{{ item.code_melli }}</td>
          <!-- <td style="width: 15%">
            {{
              item.date_shamsi.substr(0, 4) +
              "/" +
              item.date_shamsi.substr(4, 2) +
              "/" +
              item.date_shamsi.substr(6, 2)
            }}
          </td> -->
          <td style="width: 30%">
            {{ Math.floor(item.karkard / 3600) }}:{{
              Math.floor(
                (item.karkard / 3600 - Math.floor(item.karkard / 3600)) * 60
              )
            }}:00
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import ReportTable05Banner from "./ReportTable05Banner.vue";
import LoadingReports from "./LoadingReports.vue";
import AlertBox from "./AlertBox.vue";
export default {
  components: {
    ReportTable05Banner,
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
