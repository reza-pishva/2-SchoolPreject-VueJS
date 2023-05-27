<template>
  <div
    class="row"
    style="
      direction: rtl;
      margin-top: 10px;
      background-image: url('menu_bg.png');
    "
  >
    <!-- <div class="col-2" style="height: 590px">
      <MenuItemsPr v-if="Pr" @ChildData="getDataPr($event)" />
      <MenuItemsEq v-if="Eq" @ChildData="getDataEq($event)" />
    </div> -->
    <div class="col-12" style="text-align: center; height: 900px">
      <TopBaner @ChildData="getDataTop($event)" />
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
