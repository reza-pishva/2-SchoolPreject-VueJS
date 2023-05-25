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
        <div style="width: 18%; font-size: 14px">
          <date-picker @click="this.d2 = 1" v-model="date2"></date-picker>
        </div>
        <div style="width: 20%" v-if="code_melli2 == true">
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
            :to="dest"
            >مشاهده</router-link
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
    };
  },
  props: ["dest", "code_melli2"],
  methods: {
    sendData() {
      this.date1 = this.date1.split("/");
      this.date1 = this.date1[0] + this.date1[1] + this.date1[2];
      this.date2 = this.date2.split("/");
      this.date2 = this.date2[0] + this.date2[1] + this.date2[2];
      this.$emit("ChildData", this.date1 + "/" + this.date2);
    },
  },
  components: { DatePicker },
};
</script>
