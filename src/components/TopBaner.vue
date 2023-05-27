<template>
  <div
    style="
      border-radius: 1px;
      background-image: url('top_banner_bg.jpg');
      margin: auto;
      width: 100%;
      height: 13%;
      /* margin-right: -10px;
      margin-top: 6px; */
    "
  >
    <div class="row">
      <div
        class="col-1"
        style="height: 200px; text-align: center; padding-top: 15px"
      >
        <a
          @click="chooseMenu(1)"
          :class="{ selectMenuItem: report1, afrad: !report1 }"
          href="#"
          style="text-decoration: none"
        >
          <img
            src="../../public/main.png"
            style="height: 35%; width: 75%; border-radius: 5px"
          />
        </a>
        <div style="padding-top: 10px">
          <p style="font-family: Vazir; font-size: 13px; color: aliceblue">
            صفحه اصلی
          </p>
        </div>
      </div>
      <div
        class="col-1"
        style="height: 200px; text-align: center; padding-top: 15px"
      >
        <a
          @click="chooseMenu(2)"
          :class="{ selectMenuItem: report2, kala: !report2 }"
          href="#"
          style="text-decoration: none"
          ><img
            src="../../public/student.png"
            style="height: 35%; width: 75%; border-radius: 5px"
          />
        </a>
        <div style="padding-top: 10px">
          <p style="font-family: Vazir; font-size: 13px; color: aliceblue">
            دانش آموز
          </p>
        </div>
      </div>
      <div
        class="col-1"
        style="height: 200px; text-align: center; padding-top: 15px"
      >
        <a
          @click="chooseMenu(2)"
          :class="{ selectMenuItem: report2, kala: !report2 }"
          href="#"
          style="text-decoration: none"
          ><img
            src="../../public/admin.png"
            style="height: 35%; width: 75%; border-radius: 5px"
          />
        </a>
        <div style="padding-top: 10px">
          <p style="font-family: Vazir; font-size: 13px; color: aliceblue">
            کارکنان
          </p>
        </div>
      </div>

      <div class="col-9" style="height: 200px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      report1: false,
      report2: false,
    };
  },
  methods: {
    chooseMenu(x) {
      if (x == 1) {
        this.report1 = true;
        this.report2 = false;
      }
      if (x == 2) {
        this.report2 = true;
        this.report1 = false;
      }
      this.$emit("ChildData", x);
      console.log(this.report1, this.report2);
    },
  },
};
</script>

<style>
.selectMenuItem {
  opacity: 10;
  filter: alpha(opacity=100);
  outline: 1px solid white;
  outline-offset: 1px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
