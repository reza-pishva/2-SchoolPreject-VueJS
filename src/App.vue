<template>
  <div
    class="row"
    style="
      direction: rtl;
      margin-top: 10px;
      background-image: url('menu_bg.png');
    "
  >
    <div class="col-12" style="text-align: center; height: 1200px">
      <TopBaner @ChildData="getDataTop($event)" />

      <div class="bg-primary" style="width: 100%; height: 30%">
        <div class="row" style="width: 100%; height: 100%">
          <div class="col-3 bg-danger" style="height: 100%"></div>
          <div class="col-9 bg-success" style="height: 100%">
            <div id="demo" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

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
      <div class="bg-primary" style="width: 100%; height: 20%">
        <div class="row" style="width: 100%; height: 100%">
          <div class="col bg-warning" style="height: 100%"></div>
          <div class="col bg-dark" style="height: 100%"></div>
        </div>
      </div>
      <div class="bg-primary" style="width: 100%; height: 25%">
        <div class="row" style="width: 100%; height: 100%">
          <div class="col bg-success" style="height: 100%"></div>
        </div>
      </div>
      <div class="bg-primary" style="width: 100%; height: 10%">
        <div class="row" style="width: 100%; height: 100%">
          <div class="col bg-danger" style="height: 100%"></div>
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
