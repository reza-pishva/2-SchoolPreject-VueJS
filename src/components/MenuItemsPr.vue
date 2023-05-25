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
        padding-top: 17px;
        background-image: url('report_bg.jpg');
      "
    >
      <p style="font-size: 14px; font-family: Vazir; color: white">
        گزارش ورود و خروج افراد
      </p>
    </div>
    <div class="container" style="margin-top: 30px">
      <div class="row menu_effect" :class="{ selectMenuItem: report5 }">
        <router-link
          style="text-decoration: none"
          to="/report-table05"
          @click="
            setReport(
              'محاسبه کارکرد',
              'در این بخش میزان کارکرد کارگران روزمزد در بازه زمانی انتخابی و یا مشاهده کارکرد هر فرد با انتخاب کد ملی او امکان پذیر است',
              5
            )
          "
        >
          <p class="menu_text">محاسبه کارکرد</p>
        </router-link>
      </div>
      <hr style="color: white" />
      <div class="row menu_effect" :class="{ selectMenuItem: report6 }">
        <router-link
          style="text-decoration: none"
          to="/report-table06"
          @click="
            setReport(
              'گزارش ورود و خروج افراد',
              'در این بخش امکان مشاهده ساعت و تاریخ ورود و خروج کلیه افراد و یا یک فرد با دادن کد ملی وجود دارد',
              6
            )
          "
        >
          <p class="menu_text">گزارش ورود و خروج افراد</p>
        </router-link>
      </div>
      <hr style="color: white" />
      <div class="row menu_effect" :class="{ selectMenuItem: report1 }">
        <router-link
          style="text-decoration: none"
          to="/report-table01"
          @click="
            setReport(
              'افراد حاضر در نیروگاه',
              'در این گزارش کلیه افرادی که هم اکنون در نیروگاه حضور دارند مشخص شده است',
              1
            )
          "
        >
          <p class="menu_text">افراد حاضر در نیروگاه</p>
        </router-link>
      </div>
      <hr style="color: white" />
      <!-- <div class="row menu_effect" :class="{ selectMenuItem: report4 }">
        <router-link
          style="text-decoration: none"
          to="/report-table04"
          @click="
            setReport(
              'افرادی که مجوز ندارند',
              'در این بخش اسامی افرادی که هنوز پروسه دریافت مجوز آنها برای ورود به نیروگاه کامل نشده قابل مشاهده است',
              4
            )
          "
        >
          <p class="menu_text">افرادی که مجوز ندارند</p>
        </router-link>
      </div>
      <hr style="color: white" /> -->
      <div class="row menu_effect" :class="{ selectMenuItem: report3 }">
        <router-link
          style="text-decoration: none"
          to="/report-table03"
          @click="
            setReport(
              'افراد دارای مجوز ورود',
              'در این بخش افرادی که فرایند حضورشان در نیروگاه تکمیل گردیده و در حال حاضر امکان ورود به نیروگاه را دارند مشخص شده',
              3
            )
          "
        >
          <p class="menu_text">افراد دارای مجوز ورود</p>
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
      console.log(this.report1);
    },
  },
};
</script>

<style>
/* .router-link-active {
  margin-bottom: 100px;
}
.router-link-exact-active {
  margin-bottom: 100px;
} */
.selectMenuItem {
  background-image: url("../../public/green_bg.jpg");
  border: 2px solid white;
}
a {
  text-decoration: none;
}
</style>
