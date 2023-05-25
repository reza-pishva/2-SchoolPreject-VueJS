<template>
  <div
    style="
      border-radius: 5px;
      background-image: url('menu_bg.jpg');
      width: 95%;
      height: 95%;
      margin: auto;
      padding-top: 3px;
      margin-top: 5px;
    "
  >
    <div
      class="container"
      style="
        width: 95%;
        height: 60px;
        margin-top: 5px;
        border-radius: 5px;
        text-align: center;
        padding-top: 8px;
        background-image: url('report_bg.jpg');
      "
    >
      <p style="font-size: 14px; font-family: Vazir; color: white">
        گزارش ورود و خروج قطعات و تجهیزات
      </p>
    </div>
    <div class="container" style="margin-top: 30px">
      <div class="row menu_effect" :class="{ selectMenuItem: report5 }">
        <router-link
          style="text-decoration: none"
          to="/report-eq-table03"
          @click="
            setReport(
              'موارد در انتظار خروج',
              'در این بخش قطعاتی که مجوزهای لازم برای خروج از نیروگاه را اخذ کرده اند و خروج آنها از طرف حراست نیروگاه بلامانع است قابل رویت هستند',
              5
            )
          "
        >
          <p class="menu_text">موارد در انتظار خروج</p>
        </router-link>
      </div>
      <hr style="color: white" />
      <div class="row menu_effect" :class="{ selectMenuItem: report6 }">
        <router-link
          style="text-decoration: none"
          to="/report-eq-table04"
          @click="
            setReport(
              'موارد در انتظار ورود',
              'در این بخش قطعاتی که مجوزهای لازم برای ورود به نیروگاه را اخذ کرده اند و ورود آنها از طرف حراست نیروگاه بلامانع است قابل رویت هستند',
              6
            )
          "
        >
          <p class="menu_text">موارد در انتظار ورود</p>
        </router-link>
      </div>
      <hr style="color: white" />
      <div class="row menu_effect" :class="{ selectMenuItem: report1 }">
        <router-link
          style="text-decoration: none"
          to="/report-eq-table05"
          @click="
            setReport(
              'موارد در گردش',
              'در این بخش مواردی که هنوز مجوزهای لازم برای ورود و یا خروج از نیروگاه را نگرفته اند دیده می شود',
              1
            )
          "
        >
          <p class="menu_text">موارد در گردش</p>
        </router-link>
      </div>
      <hr style="color: white" />
      <div class="row menu_effect" :class="{ selectMenuItem: report3 }">
        <router-link
          style="text-decoration: none"
          to="/report-eq-table06"
          @click="
            setReport(
              'موارد تایید نشده',
              'در این بخش درخواستهایی که مورد تایید یکی از مسئولین واقع نشده قابل مشاهده هست',
              3
            )
          "
        >
          <p class="menu_text">موارد تایید نشده</p>
        </router-link>
      </div>
      <hr style="color: white" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      report1: false,
      report2: false,
      report3: false,
      report4: false,
      report5: false,
      report6: false,
    };
  },
  methods: {
    setReport(x, y, z) {
      this.report1 = false;
      this.report2 = false;
      this.report3 = false;
      this.report4 = false;
      this.report5 = false;
      this.report6 = false;
      if (z == 1) {
        this.report1 = true;
      }
      if (z == 2) {
        this.report2 = true;
      }
      if (z == 3) {
        this.report3 = true;
      }
      if (z == 4) {
        this.report4 = true;
      }
      if (z == 5) {
        this.report5 = true;
      }
      if (z == 6) {
        this.report6 = true;
      }
      this.$emit("ChildData", [x, y, z]);
    },
  },
};
</script>

<style>
.selectMenuItem {
  background-image: url("../../public/green_bg.jpg");
  border: 2px solid white;
}
a {
  text-decoration: none;
}
</style>
