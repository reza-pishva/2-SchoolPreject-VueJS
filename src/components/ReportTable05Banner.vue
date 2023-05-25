<template>
  <div
    style="
      border-radius: 5px;
      background-image: url('report_bg.jpg');
      margin: auto;
      width: 100%;
      margin-right: 2px;
      margin-top: 3px;
    "
  >
    <div class="row" style="height: 70px; width: 100%; margin: auto">
      <div class="row mt-3">
        <div style="width: 10%">
          <p
            style="
              font-size: 14px;
              font-family: Vazir;
              text-align: left;
              color: white;
            "
          >
            از تاریخ
          </p>
        </div>
        <div style="width: 18%; font-size: 14px">
          <date-picker @click="this.d1 = 1" v-model="date1"></date-picker>
        </div>
        <div style="width: 10%">
          <p
            style="
              font-size: 14px;
              font-family: Vazir;
              text-align: left;
              color: white;
            "
          >
            تا تاریخ
          </p>
        </div>
        <div @click="this.d2 = 1" style="width: 18%; font-size: 14px">
          <date-picker v-model="date2"></date-picker>
        </div>
        <div style="width: 20%">
          <input
            @click="clearData"
            ref="code_melli"
            v-model="code_melli"
            style="font-size: 13px; font-family: Vazir; text-align: center"
            type="text"
            class="form-control"
            id="code_melli"
            placeholder="کد ملی فرد مورد نظر"
          />
        </div>
        <div style="width: 10%">
          <router-link
            v-show="d1 + d2 > 1"
            @click="sendData"
            style="font-size: 12px; font-family: Vazir; text-align: center"
            class="btn btn-outline-info"
            to="/report-table05"
            >مشاهده</router-link
          >
        </div>
        <div v-show="print" style="width: 12%">
          <a
            :href="url"
            class="btn btn-success"
            style="width: 100%; height: 60%"
            ><p class="print">چاپ</p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue3-persian-datetime-picker";
export default {
  data() {
    return {
      date1: "",
      date2: "",
      code_melli: "",
      myParameters: [],
      d1: "",
      d2: "",
      url: "",
      print: false,
    };
  },
  //props: ["params"],
  methods: {
    sendData() {
      this.date1 = this.date1.split("/");
      this.date1 = this.date1[0] + this.date1[1] + this.date1[2];
      this.date2 = this.date2.split("/");
      this.date2 = this.date2[0] + this.date2[1] + this.date2[2];

      if (this.code_melli == "") {
        this.code_melli = "کد ملی فرد مورد نظر";
      }
      this.url =
        "http://172.28.232.27:8000/selectindividuals2/" +
        this.date1 +
        "/" +
        this.date2;
      this.print = true;
      this.$emit(
        "ChildData",
        "http://172.28.232.27:8000/vue-individuals-karkard/" +
          this.date1 +
          "/" +
          this.date2 +
          "/" +
          this.code_melli
      );
    },
    clearData() {
      if (this.code_melli == "کد ملی فرد مورد نظر") {
        this.code_melli = "";
      }
    },
  },
  components: { DatePicker },
};
</script>
<style scoped>
.print {
  font-family: Vazir;
  font-size: 13px;
  color: aliceblue;
}
</style>
