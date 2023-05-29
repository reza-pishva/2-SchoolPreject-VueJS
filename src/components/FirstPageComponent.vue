<template>
  <div class="row" style="direction: rtl; margin-top: 10px">
    <div class="col-12" style="text-align: center; height: 1200px">
      <div style="width: 100%; height: 30%">
        <div class="row mt-2" style="width: 100%; height: 100%">
          <InfoComponent />
          <CarouselComponent />
        </div>
      </div>
      <div style="width: 100%; height: 20%">
        <div class="row" style="width: 100%; height: 100%">
          <HistoryComponent />
          <FacilityComponent />
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
  data() {},
  methods: {},
};
</script>

<style></style>
