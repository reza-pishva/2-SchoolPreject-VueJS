<template>
  <h1 v-for="(user, index) in users" :key="index">{{ user.f_name }}</h1>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const users = ref([]);

    function getUsers() {
      axios
        .get("http://127.0.0.1:8000/api/school/user/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
          // console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getUsers();
    return { users };
  },
};
</script>

<style></style>
