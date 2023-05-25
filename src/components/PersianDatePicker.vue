<template>
  <div class="row bg-success" style="height: 70px; width: 100%; margin: auto">
    <div class="row mt-3">
      <div class="col-1">
        <p style="font-size: 14px; font-family: tahoma; text-align: left">
          از تاریخ
        </p>
      </div>
      <div class="col-2">
        <date-picker v-model="date1"></date-picker>
      </div>
      <div class="col-1">
        <p style="font-size: 14px; font-family: tahoma; text-align: left">
          تا تاریخ
        </p>
      </div>
      <div class="col-2">
        <date-picker v-model="date2"></date-picker>
      </div>
      <div class="col-2">
        <input
          v-model="code_melli"
          style="font-size: 13px; font-family: tahoma; text-align: center"
          type="text"
          class="form-control"
          id="code_melli"
          placeholder="کد ملی فرد مورد نظر"
        />
      </div>
      <div class="col-4">
        <router-link
          @click="sendData"
          style="font-size: 12px; font-family: tahoma; text-align: center"
          class="btn btn-outline-info"
          to="/report-table05"
          >مشاهده</router-link
        >
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
    };
  },
  //props: ["params"],
  methods: {
    sendData() {
      this.date1 = this.date1.split("/");
      this.date1 = this.date1[0] + this.date1[1] + this.date1[2];
      this.date2 = this.date2.split("/");
      this.date2 = this.date2[0] + this.date2[1] + this.date2[2];
      // this.myParameters.push(this.date1);
      // this.myParameters.push(this.date2);
      // this.myParameters.push(this.code_melli);
      this.$emit(
        "ChildData",
        "http://127.0.0.1:8000/vue-individuals-karkard/" +
          this.date1 +
          "/" +
          this.date2
      );
    },
  },
  components: { DatePicker },
};
</script>
