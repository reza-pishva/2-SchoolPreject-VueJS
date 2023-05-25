<template>
  <div
    class="row"
    style="
      direction: rtl;
      margin-top: 10px;
      background-image: url('menu_bg.png');
    "
  >
    <div class="col-2" style="height: 590px">
      <MenuItemsPr v-if="Pr" @ChildData="getDataPr($event)" />
      <MenuItemsEq v-if="Eq" @ChildData="getDataEq($event)" />
    </div>
    <div class="col-10" style="height: 590px">
      <TopBaner @ChildData="getDataTop($event)" />
      <div class="row">
        <div class="col-10">
          <div class="row" style="height: 390px">
            <router-view> </router-view>
          </div>
        </div>
        <div class="col-2">
          <div class="row" style="height: 23%; margin-top: -9px">
            <div
              style="
                width: 80%;
                height: 83%;
                border-radius: 10px;
                background-image: url('title_bg.jpg');
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
                "
              >
                عنوان گزارش:
              </p>
              <p
                v-if="report_title[2] < 7"
                style="
                  font-size: smaller;
                  font-family: Vazir;
                  color: aliceblue;
                  margin-top: -15px;
                "
              >
                {{ report_title[0] }}
              </p>
            </div>
          </div>
          <div class="row" style="height: 47%">
            <div
              style="
                width: 80%;
                height: 94%;
                border-radius: 10px;
                background-image: url('title_text.jpg');
                margin: auto;
                margin-right: 8px;
                margin-top: 2px;
              "
            >
              <Transition name="slide-fade">
                <p
                  v-if="report_title[2] < 7"
                  style="
                    margin-top: 15px;
                    font-size: smaller;
                    font-family: Vazir;
                    color: aliceblue;
                    text-align: center;
                  "
                >
                  {{ report_title[1] }}
                </p>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItemsEq from "./components/MenuItemsEq.vue";
import MenuItemsPr from "./components/MenuItemsPr.vue";
import TopBaner from "./components/TopBaner.vue";

export default {
  name: "App",
  components: {
    MenuItemsEq,
    MenuItemsPr,
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
