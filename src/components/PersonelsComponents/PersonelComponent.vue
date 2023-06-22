<template>
  <div class="row mr-2" style="margin-top: 20px; height: 800px">
    <div class="col-8" style="height: 450px; text-align: center">
      <div
        style="width: 95%; height: 100%; margin-left: 15px; border-radius: 8px"
      >
        <router-view></router-view>
      </div>
    </div>
    <div
      class="col-4"
      style="
        height: 390px;
        background-color: rgb(146, 204, 233);
        border-radius: 8px;
        opacity: 0.7;
        filter: alpha(opacity=100);
      "
    >
      <div class="row mt-3">
        <div class="col">
          <div
            style="
              width: 95%;
              height: 40px;
              margin: auto;
              background-color: rgb(94, 22, 9);
              border-radius: 5px;
            "
          >
            <p
              style="
                font-family: Vazir;
                font-size: small;
                color: aliceblue;
                padding-top: 9px;
              "
            >
              اطلاعات پایه
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <!-- تکمیل مشخات کاربران -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/profiles"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                تکمیل مشخصات کاربران
              </p></router-link
            >
          </div>
        </div>
        <!-- افزودن نام کاربری -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/users"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                افزودن نام کاربری
              </p></router-link
            >
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <!-- کلاسها -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/classes"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                کلاسها
              </p></router-link
            >
          </div>
        </div>

        <!-- مقاطع تحصیلی -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/grades"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                مقاطع تحصیلی
              </p></router-link
            >
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <!-- انواع امتحانات -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/exam-types"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                انواع امتحانات
              </p></router-link
            >
          </div>
        </div>
        <!-- نام دروس -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/lessons"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                نام دروس
              </p></router-link
            >
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <!-- برنامه کلاسی -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/class-prog"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                برنامه کلاسی
              </p></router-link
            >
          </div>
        </div>
        <!-- تعریف امتحان -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/exams"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                تعریف امتحان
              </p></router-link
            >
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <div
            style="
              width: 95%;
              height: 40px;
              margin: auto;
              background-color: rgb(46, 91, 46);
              border-radius: 5px;
            "
          >
            <p
              style="
                font-family: Vazir;
                font-size: small;
                color: aliceblue;
                padding-top: 9px;
              "
            >
              تخصیص اطلاعات دانش آموز
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <!-- افزودن نام کاربری -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/user-search"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                تخصیص نمره به دانش آموز
              </p></router-link
            >
          </div>
        </div>
        <!-- تکمیل مشخات کاربران -->
        <div class="col">
          <div
            style="
              width: 90%;
              height: 40px;
              margin: auto;
              background-color: darkslateblue;
              border-radius: 5px;
            "
          >
            <router-link to="/profiles"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                تخصیص دانش آموز به کلاس
              </p></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {},
};
</script>

<style>
div.reza3:hover {
  opacity: 1;
  filter: alpha(opacity=100);
  outline: 2px solid white;
  outline-offset: 1px;
  cursor: pointer;
  color: hsla(58, 90%, 51%, 0.934);
  font-weight: bold;
}
div.reza3 {
  opacity: 0.7;
  filter: alpha(opacity=100);
  color: hsl(0, 0%, 97%);
}
</style>
