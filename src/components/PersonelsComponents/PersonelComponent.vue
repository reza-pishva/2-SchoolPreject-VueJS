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
        height: 450px;
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
              height: 30px;
              margin: auto;
              background-color: rgb(78, 72, 93);
              border-radius: 5px;
            "
          >
            <p
              style="
                font-family: Vazir;
                font-size: 12px;
                color: aliceblue;
                padding-top: 6px;
              "
            >
              اطلاعات پایه
            </p>
          </div>
        </div>
      </div>

      <div class="row mt-1">
        <!-- کلاسها -->
        <div class="col">
          <div
            @click="changeColor3"
            :class="btn3"
            style="width: 90%; height: 40px; margin: auto; border-radius: 5px"
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
            @click="changeColor4"
            :class="btn4"
            style="width: 90%; height: 40px; margin: auto; border-radius: 5px"
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
            @click="changeColor5"
            :class="btn5"
            style="width: 90%; height: 40px; margin: auto; border-radius: 5px"
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
            @click="changeColor6"
            :class="btn6"
            style="
              width: 90%;
              height: 40px;
              margin: auto;

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
            @click="changeColor7"
            :class="btn7"
            style="width: 90%; height: 40px; margin: auto; border-radius: 5px"
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
            @click="changeColor8"
            :class="btn8"
            style="width: 90%; height: 40px; margin: auto; border-radius: 5px"
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
      <div class="row mt-2">
        <div class="col">
          <div
            style="
              width: 95%;
              height: 30px;
              margin: auto;
              background-color: rgb(78, 72, 93);
              border-radius: 5px;
            "
          >
            <p
              style="
                font-family: Vazir;
                font-size: 12px;
                color: aliceblue;
                padding-top: 6px;
              "
            >
              تخصیص اطلاعات دانش آموز
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <!-- تکمیل مشخات کاربران -->
        <div class="col">
          <div
            @click="changeColor1"
            :class="btn1"
            style="width: 90%; height: 40px; margin: auto; border-radius: 5px"
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
            @click="changeColor2"
            :class="btn2"
            style="
              width: 90%;
              height: 40px;
              margin: auto;

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
      <div class="row mt-2">
        <!-- تکمیل مشخات کاربران -->
        <div class="col">
          <div
            @click="changeColor9"
            :class="btn9"
            style="
              width: 90%;
              height: 40px;
              margin: auto;

              border-radius: 5px;
            "
          >
            <router-link to="/user-score-search"
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
        <!-- افزودن نام کاربری -->
        <div class="col">
          <div
            @click="changeColor10"
            :class="btn10"
            style="
              width: 90%;
              height: 40px;
              margin: auto;

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
                تخصیص کلاس به دانش آموز
              </p></router-link
            >
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <div
            @click="changeColor11"
            :class="btn11"
            style="
              width: 95%;
              height: 30px;
              margin: auto;
              background-color: rgb(78, 72, 93);
              border-radius: 5px;
            "
          >
            <p
              style="
                font-family: Vazir;
                font-size: 12px;
                color: aliceblue;
                padding-top: 6px;
              "
            >
              گزارش گیری
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <!-- تکمیل مشخات کاربران -->
        <div class="col"></div>
        <!-- افزودن نام کاربری -->
        <div class="col">
          <div
            :class="btn11"
            @click="changeColor11"
            style="width: 90%; height: 40px; margin: auto; border-radius: 5px"
          >
            <router-link to="/reports"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                گزارش گیری
              </p></router-link
            >
          </div>
        </div>
        <!-- افزودن نام کاربری -->
        <div class="col">
          <div
            :class="btn12"
            @click="changeColor12"
            style="width: 90%; height: 40px; margin: auto; border-radius: 5px"
          >
            <router-link to="/report-graphic"
              ><p
                style="
                  font-family: Vazir;
                  font-size: small;
                  color: aliceblue;
                  padding-top: 9px;
                "
              >
                گزارش گرافیکی
              </p></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const btn1 = ref("class1");
    const btn2 = ref("class1");
    const btn3 = ref("class1");
    const btn4 = ref("class1");
    const btn5 = ref("class1");
    const btn6 = ref("class1");
    const btn7 = ref("class1");
    const btn8 = ref("class1");
    const btn9 = ref("class1");
    const btn10 = ref("class1");
    const btn11 = ref("class1");
    const btn12 = ref("class1");

    function changeColor1() {
      btn1.value = "class2";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor2() {
      btn1.value = "class1";
      btn2.value = "class2";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor3() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class2";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor4() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class2";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor5() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class2";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor6() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class2";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor7() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class2";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor8() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class2";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor9() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class2";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor10() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class2";
      btn11.value = "class1";
      btn12.value = "class1";
    }
    function changeColor11() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class2";
      btn12.value = "class1";
    }
    function changeColor12() {
      btn1.value = "class1";
      btn2.value = "class1";
      btn3.value = "class1";
      btn4.value = "class1";
      btn5.value = "class1";
      btn6.value = "class1";
      btn7.value = "class1";
      btn8.value = "class1";
      btn9.value = "class1";
      btn10.value = "class1";
      btn11.value = "class1";
      btn12.value = "class2";
    }

    return {
      btn1,
      btn2,
      btn3,
      btn4,
      btn5,
      btn6,
      btn7,
      btn8,
      btn9,
      btn10,
      btn11,
      btn12,
      changeColor1,
      changeColor2,
      changeColor3,
      changeColor4,
      changeColor5,
      changeColor6,
      changeColor7,
      changeColor8,
      changeColor9,
      changeColor10,
      changeColor11,
      changeColor12,
    };
  },
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
.class1 {
  background-color: darkslateblue;
}
.class2 {
  background-color: rgb(38, 46, 35);
}
</style>
