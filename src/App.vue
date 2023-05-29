<template>
  <HomeComponent />
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
  },
  data() {},
  methods: {},
};
</script>

<style>
@font-face {
  font-family: "Vazir";
  src: local("Vazir"), url(./fonts/Vazir.ttf) format("truetype");
}
</style>
