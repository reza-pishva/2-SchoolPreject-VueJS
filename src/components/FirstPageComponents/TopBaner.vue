<template>
  <div
    class="row sticky"
    style="
      border-radius: 5px;
      /* background-image: url('report_bg.webp'); */
      margin: auto;
      width: 100%;
      height: 135px;
      margin-right: 20px;
    "
  >
    <div class="col-4 mt-2">
      <img
        src="../../../public/idealparsi.png"
        style="height: 75%; width: 25%; border-radius: 5px; margin-left: -100px"
      />
    </div>
    <div class="col-5"></div>
    <div
      class="col-3"
      style="
        padding-top: 10px;
        background-image: url('report_bg.webp');
        height: 95%;
        border-radius: 10px;
      "
    >
      <div class="row">
        <div
          class="col-4"
          style="height: 165px; text-align: center; padding-top: 15px"
        >
          <router-link to="/personels">
            <img
              src="../../../public/admin.png"
              style="height: 40%; width: 75%; border-radius: 5px"
            />
          </router-link>
          <div style="padding-top: 10px">
            <p style="font-family: Vazir; font-size: 13px; color: aliceblue">
              کارکنان
            </p>
          </div>
        </div>
        <div
          class="col-4"
          style="height: 165px; text-align: center; padding-top: 15px"
        >
          <router-link to="/students">
            <img
              src="../../../public/student.jpg"
              style="height: 40%; width: 75%; border-radius: 5px"
            />
          </router-link>
          <div style="padding-top: 10px">
            <p style="font-family: Vazir; font-size: 13px; color: aliceblue">
              دانش آموز
            </p>
          </div>
        </div>
        <div
          class="col-4"
          style="height: 165px; text-align: center; padding-top: 15px"
        >
          <router-link to="/home">
            <img
              src="../../../public/main.png"
              style="height: 40%; width: 75%; border-radius: 5px"
            />
          </router-link>
          <div style="padding-top: 10px">
            <p style="font-family: Vazir; font-size: 13px; color: aliceblue">
              صفحه اصلی
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {},
  methods: {},
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
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
