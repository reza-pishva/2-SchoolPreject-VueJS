<template>
  <div
    class="col-8 pt-4"
    style="
      height: 100%;
      border-radius: 15px;
      background-image: url('report_bg.webp');
    "
  >
    <div id="demo" class="carousel slide" data-ride="carousel">
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
</template>

<script>
export default {
  data() {},
  methods: {},
};
</script>

<style></style>
