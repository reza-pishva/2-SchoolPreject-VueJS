<template>
  <div class="row mt-4" style="direction: rtl">
    <div class="col-3 bg-danger" style="height: 350px">
      <div class="row">
        <div
          style="
            height: 40px;
            border-radius: 5px;
            width: 80%;
            background-color: blue;
            margin: auto;
          "
        >
          <p
            style="
              font-size: 14px;
              font-family: Vazir;
              color: aliceblue;
              margin-top: 9px;
            "
          >
            گزارشهای گرافیکی
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col bg-warning" style="height: 40px"></div>
        <div class="col bg-primary" style="height: 40px"></div>
      </div>
      <div class="row mt-1">
        <div class="col bg-primary" style="height: 40px"></div>
        <div class="col bg-warning" style="height: 40px"></div>
      </div>
      <div class="row mt-1">
        <div class="col bg-warning" style="height: 40px"></div>
        <div class="col bg-primary" style="height: 40px"></div>
      </div>
      <div class="row mt-1">
        <div class="col bg-primary" style="height: 40px"></div>
        <div class="col bg-warning" style="height: 40px"></div>
      </div>
      <div class="row mt-1">
        <div class="col bg-warning" style="height: 40px"></div>
        <div class="col bg-primary" style="height: 40px"></div>
      </div>
    </div>
    <div class="col-9">
      <div class="row">
        <div class="col-5 bg-dark" style="height: 350px"></div>
        <div class="col-7 bg-light pt-5" style="height: 350px">
          <Report1 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Report1 from "./Report1.vue";

export default {
  name: "App",
  components: { Report1 },
};
</script>
