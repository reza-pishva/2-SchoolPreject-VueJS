<template>
  <div class="row" style="direction: rtl; margin-top: 20px">
    <div class="col-12" style="text-align: center; height: 900px">
      <div style="width: 100%; height: 40%">
        <div class="row mt-2" style="width: 100%; height: 100%">
          <InfoComponent />
          <CarouselComponent />
        </div>
      </div>
      <div style="width: 100%; height: 30%">
        <div class="row" style="width: 100%; height: 100%">
          <HistoryComponent />
          <FacilityComponent />
        </div>
      </div>
      <div style="width: 100%; height: 20%">
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
import InfoComponent from "./FirstPageComponents/InfoComponent.vue";
import CarouselComponent from "./FirstPageComponents/CarouselComponent.vue";
import HistoryComponent from "./FirstPageComponents/HistoryComponent.vue";
import FacilityComponent from "./FirstPageComponents/FacilityComponent.vue";

export default {
  name: "App",
  components: {
    InfoComponent,
    CarouselComponent,
    HistoryComponent,
    FacilityComponent,
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
  src: local("Vazir"), url(../fonts/Vazir.ttf) format("truetype");
}
</style>
