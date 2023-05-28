<template>
  <div class="row" style="direction: rtl; margin-top: 10px">
    <div class="col-12" style="text-align: center; height: 1200px">
      <TopBaner @ChildData="getDataTop($event)" />

      <div style="width: 100%; height: 30%">
        <div class="row mt-2" style="width: 100%; height: 100%">
          <InfoComponent />
          <CarouselComponent />
        </div>
      </div>
      <div style="width: 100%; height: 20%">
        <div class="row" style="width: 100%; height: 100%">
          <div class="col" style="height: 100%">
            <div
              style="
                width: 100%;
                height: 18%;
                border-radius: 10px;
                background-image: url('title_bg.jpg');
                margin: auto;
                margin-top: 10px;
                margin-right: 8px;
                margin-bottom: 2px;
                text-align: right;
                padding-top: 14px;
                padding-right: 20px;
              "
            >
              <p
                style="
                  font-size: smaller;
                  font-family: Vazir;
                  color: aliceblue;
                  margin-top: -5px;
                "
              >
                تاریخچه مجتمع پارسیان
              </p>
            </div>
            <div
              style="
                width: 100%;
                height: 72%;
                border-radius: 10px;
                background-image: url('title_text.jpg');
                margin: auto;
                margin-right: 8px;
                margin-bottom: 2px;
                margin-top: 10px;
                text-align: center;
                padding-top: 15px;
              "
            >
              <p
                style="
                  font-size: smaller;
                  font-family: Vazir;
                  color: aliceblue;
                  margin-top: -5px;
                  margin-right: 10px;
                  text-align: right;
                  text-indent: 3%;
                "
              >
                این مجتمع در سال 1399 به همت جمعی از فرهنگیان بازنشسته آموزش و
                پرورش تاسیس گردید و در ابتدا فقط در مقطع ابتدایی پذیرای فرزندان
                عزیزان همشهری بود ولی در ادامه مقاطع راهنمایی و متوسطه نیز در
                این مجتمع شروع بکار کردند.ین مجتمع در سال 1399 به همت جمعی از
                فرهنگیان بازنشسته آموزش و پرورش تاسیس گردید و در ابتدا فقط در
                مقطع ابتدایی پذیرای فرزندان عزیزان همشهری بود ولی در ادامه مقاطع
                راهنمایی و متوسطه نیز در این مجتمع شروع بکار کردند.ین مجتمع در
                سال 1399 به همت جمعی از فرهنگیان بازنشسته آموزش و پرورش تاسیس
                گردید و در ابتدا فقط در مقطع ابتدایی پذیرای فرزندان عزیزان
                همشهری بود ولی در ادامه مقاطع راهنمایی و متوسطه نیز در این مجتمع
                شروع بکار کردند.
              </p>
            </div>
          </div>
          <div class="col" style="height: 100%">
            <div
              style="
                width: 100%;
                height: 18%;
                border-radius: 10px;
                background-image: url('title_bg.jpg');
                margin: auto;
                margin-top: 10px;
                margin-right: 8px;
                margin-bottom: 2px;
                text-align: right;
                padding-top: 14px;
                padding-right: 20px;
              "
            >
              <p
                style="
                  font-size: smaller;
                  font-family: Vazir;
                  color: aliceblue;
                  margin-top: -5px;
                "
              >
                دسترسیها
              </p>
            </div>
            <div
              style="
                width: 100%;
                height: 72%;
                border-radius: 10px;
                background-color: darkcyan;
                margin: auto;
                margin-right: 8px;
                margin-bottom: 2px;
                text-align: center;
                padding-top: 15px;
                margin-top: 10px;
                border: 1px solid rgb(14, 53, 126);
                border-radius: 15px;
                opacity: 0.7;
                filter: alpha(opacity=100);
              "
            >
              <div class="row" style="width: 100%; height: 50%">
                <div class="col-3">
                  <div
                    style="
                      width: 100%;
                      height: 80%;
                      border-radius: 10px;
                      background-color: rgb(8, 36, 64);
                      margin: auto;
                      margin-right: 8px;
                      margin-bottom: 2px;
                      text-align: center;
                      padding-top: 25px;
                    "
                  >
                    <p
                      style="
                        font-size: smaller;
                        font-family: Vazir;
                        color: aliceblue;
                        margin-top: -5px;
                      "
                    >
                      برنامه کلاسی
                    </p>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    style="
                      width: 100%;
                      height: 80%;
                      border-radius: 10px;
                      background-color: rgb(8, 36, 64);
                      margin: auto;
                      margin-right: 8px;
                      margin-bottom: 2px;
                      text-align: center;
                      padding-top: 25px;
                    "
                  >
                    <p
                      style="
                        font-size: smaller;
                        font-family: Vazir;
                        color: aliceblue;
                        margin-top: -5px;
                      "
                    >
                      محتوای آموزشی
                    </p>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    style="
                      width: 100%;
                      height: 80%;
                      border-radius: 10px;
                      background-color: rgb(8, 36, 64);
                      margin: auto;
                      margin-right: 8px;
                      margin-bottom: 2px;
                      text-align: center;
                      padding-top: 25px;
                    "
                  >
                    <p
                      style="
                        font-size: smaller;
                        font-family: Vazir;
                        color: aliceblue;
                        margin-top: -5px;
                      "
                    >
                      یادداشت معلم
                    </p>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    style="
                      width: 100%;
                      height: 80%;
                      border-radius: 10px;
                      background-color: rgb(8, 36, 64);
                      margin: auto;
                      margin-right: 8px;
                      margin-bottom: 2px;
                      text-align: center;
                      padding-top: 25px;
                    "
                  >
                    <p
                      style="
                        font-size: smaller;
                        font-family: Vazir;
                        color: aliceblue;
                        margin-top: -5px;
                      "
                    >
                      تاریخ امنحانات
                    </p>
                  </div>
                </div>
              </div>
              <div class="row" style="width: 100%; height: 50%">
                <div class="col-3">
                  <div
                    style="
                      width: 100%;
                      height: 80%;
                      border-radius: 10px;
                      background-color: rgb(8, 36, 64);
                      margin: auto;
                      margin-right: 8px;
                      margin-bottom: 2px;
                      text-align: center;
                      padding-top: 25px;
                    "
                  >
                    <p
                      style="
                        font-size: smaller;
                        font-family: Vazir;
                        color: aliceblue;
                        margin-top: -5px;
                      "
                    >
                      یادداشت معاون
                    </p>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    style="
                      width: 100%;
                      height: 80%;
                      border-radius: 10px;
                      background-color: rgb(8, 36, 64);
                      margin: auto;
                      margin-right: 8px;
                      margin-bottom: 2px;
                      text-align: center;
                      padding-top: 25px;
                    "
                  >
                    <p
                      style="
                        font-size: smaller;
                        font-family: Vazir;
                        color: aliceblue;
                        margin-top: -5px;
                      "
                    >
                      آمار
                    </p>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    style="
                      width: 100%;
                      height: 80%;
                      border-radius: 10px;
                      background-color: rgb(8, 36, 64);
                      margin: auto;
                      margin-right: 8px;
                      margin-bottom: 2px;
                      text-align: center;
                      padding-top: 25px;
                    "
                  >
                    <p
                      style="
                        font-size: smaller;
                        font-family: Vazir;
                        color: aliceblue;
                        margin-top: -5px;
                      "
                    >
                      یادداشت مدیر
                    </p>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    style="
                      width: 100%;
                      height: 80%;
                      border-radius: 10px;
                      background-color: rgb(8, 36, 64);
                      margin: auto;
                      margin-right: 8px;
                      margin-bottom: 2px;
                      text-align: center;
                      padding-top: 25px;
                    "
                  >
                    <p
                      style="
                        font-size: smaller;
                        font-family: Vazir;
                        color: aliceblue;
                        margin-top: -5px;
                      "
                    >
                      برنامه کلاسی
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 100%; height: 25%">
        <div class="row" style="width: 100%; height: 100%">
          <div class="col" style="height: 100%"></div>
        </div>
      </div>
      <div style="width: 100%; height: 10%">
        <div class="row" style="width: 100%; height: 100%">
          <div class="col" style="height: 100%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoComponent from "./components/FirstPageComponents/InfoComponent.vue";
import CarouselComponent from "./components/FirstPageComponents/CarouselComponent.vue";
import TopBaner from "./components/TopBaner.vue";

export default {
  name: "App",
  components: {
    InfoComponent,
    TopBaner,
    CarouselComponent,
  },
  data() {
    return {
      report_title: [],
      Eq: false,
      Pr: true,
    };
  },
  methods: {},
};
</script>

<style>
.menu_text {
  font-family: Vazir;
  color: white;
  font-size: 14px;
  text-align: right;
  margin-top: 1px;
}

.menu_effect:hover {
  height: 35px;
  padding-top: 4px;
  border-radius: 5px;
  opacity: 1;
  filter: alpha(opacity=100);
  outline: 2px solid white;
  outline-offset: 1px;
  cursor: pointer;
  background-color: darkkhaki;
  color: black;
}
.menu_effect {
  height: 35px;
  padding-top: 4px;
  color: white;
  border-radius: 5px;
  opacity: 0.7;
  filter: alpha(opacity=100);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* .kala:hover {
  opacity: 1;
  filter: alpha(opacity=100);
  outline: 2px solid white;
  outline-offset: 1px;
  cursor: pointer;
  border-radius: 5px;
} */
.kala {
  opacity: 0.7;
  filter: alpha(opacity=100);
}

/* .afrad:hover {
  opacity: 1;
  filter: alpha(opacity=100);
  outline: 2px solid white;
  outline-offset: 1px;
  cursor: pointer;
  border-radius: 5px;
} */
.afrad {
  opacity: 0.7;
  filter: alpha(opacity=100);
}
@font-face {
  font-family: "Vazir";
  src: local("Vazir"), url(./fonts/Vazir.ttf) format("truetype");
}
</style>
