<template>
  <h1>Users</h1>
</template>

<script>
import axios from "axios";

export default {
  setup() {
    function getUsers() {
      axios
        .get("http://127.0.0.1:8000/api/school/user/users")
        .then(function (response) {
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getUsers();
  },
};
</script>

<style></style>
