<template>
  <div
    class="row"
    style="
      direction: rtl;
      margin-top: 10px;
      /* background-image: url('menu_bg.png'); */
    "
  >
    <div class="col-12" style="text-align: center; height: 1200px">
      <TopBaner @ChildData="getDataTop($event)" />

      <div style="width: 100%; height: 30%">
        <div class="row" style="width: 100%; height: 100%">
          <div class="col-4" style="height: 100%">
            <div
              style="
                width: 90%;
                height: 12%;
                border-radius: 10px;
                background-image: url('title_bg.jpg');
                margin: auto;
                margin-top: 35px;
                margin-right: 35px;
                margin-bottom: 2px;
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
                "
              >
                مجتمع آموزشی پارسیان
              </p>
            </div>
            <div
              style="
                width: 90%;
                height: 15%;
                border-radius: 10px;
                background-image: url('title_text.jpg');
                margin: auto;
                margin-right: 35px;
                margin-bottom: 2px;
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
                "
              >
                آدرس: شیراز کوی وحدت جنب پمپ بنزین شهید مرعشی نجفی
              </p>
            </div>
            <div
              style="
                width: 90%;
                height: 12%;
                border-radius: 10px;
                background-image: url('title_text.jpg');
                margin: auto;
                margin-right: 35px;
                margin-bottom: 2px;
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
                "
              >
                تلفن : 0716252147
              </p>
            </div>
            <div
              style="
                width: 90%;
                height: 12%;
                border-radius: 10px;
                background-image: url('title_text.jpg');
                margin: auto;
                margin-right: 35px;
                margin-bottom: 2px;
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
                "
              >
                آدرس ایمیل : rpishva@gmail.com
              </p>
            </div>
          </div>
          <div class="col-8" style="height: 100%">
            <div id="demo" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <!-- <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul> -->

              <!-- The slideshow -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="12.png" class="carousel_img" />
                </div>
                <div class="carousel-item">
                  <img src="13.jpg" class="carousel_img" />
                </div>
                <div class="carousel-item">
                  <img src="14.jpg" class="carousel_img" />
                </div>
              </div>

              <!-- Left and right controls -->
              <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
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
                background-image: url('title_text.jpg');
                margin: auto;
                margin-right: 8px;
                margin-bottom: 2px;
                text-align: center;
                padding-top: 15px;
              "
            >
              <div
                style="
                  width: 25%;
                  height: 40%;
                  border-radius: 10px;
                  background-image: url('report_bg.jpg');
                  margin: auto;
                  margin-top: 35px;
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
// import MenuItemsEq from "./components/MenuItemsEq.vue";
// import MenuItemsPr from "./components/MenuItemsPr.vue";
import TopBaner from "./components/TopBaner.vue";

export default {
  name: "App",
  components: {
    // MenuItemsEq,
    // MenuItemsPr,
    TopBaner,
  },
  data() {
    return {
      report_title: [],
      Eq: false,
      Pr: true,
    };
  },
  methods: {
    getDataPr(event) {
      this.report_title = event;
      console.log(event);
    },
    getDataEq(event) {
      this.report_title = event;
      console.log(event);
    },
    getDataTop(event) {
      if (event == 2) {
        console.log(event);
        this.Eq = true;
        this.Pr = false;
      }
      if (event == 1) {
        console.log(event);
        this.Eq = false;
        this.Pr = true;
      }
    },
  },
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
