<template>
  <HomeComponent />
  <router-view></router-view>
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

<style></style>
