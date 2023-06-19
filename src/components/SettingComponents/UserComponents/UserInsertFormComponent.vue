<template>
  <div class="row" style="height: 35%">
    <div class="col">
      <div
        style="
          background-color: rgb(237, 237, 227);
          margin-left: 30px;
          height: 95%;
          border-radius: 6px;
          padding-top: 15px;
          padding-left: 5px;
          padding-right: 5px;
        "
      >
        <UserForm
          @formData="createUser"
          :button-loading="loading"
          button-text="ایجاد کاربر جدید"
          button-class="btn btn-primary"
          :post="post"
        />
      </div>
    </div>
  </div>
  <div
    class="row"
    style="
      height: 65%;
      overflow-y: scroll;
      margin-top: 3px;
      border: 1px solid white;
      border-radius: 5px;
      background-color: rgb(57, 57, 60);
      opacity: 0.7;
      filter: alpha(opacity=100);
    "
  >
    <div class="col" v-if="spinner">
      <div
        class="spinner-border text-danger"
        role="status"
        style="width: 100px; height: 100px; margin-top: 100px"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="col">
      <table
        class="table table-bordered"
        style="
          font-family: Vazir;
          font-size: smaller;
          text-align: center;
          margin-top: 0px;
          margin-left: 40px;
          direction: rtl;
          width: 140%;
        "
      >
        <thead>
          <tr
            class="sticky"
            style="
              background-color: cornflowerblue;
              text-align: center;
              font-size: smaller;
              color: rgb(254, 254, 255);
            "
          >
            <th>--</th>
            <th>کدکاربر</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>نام پدر</th>
            <th>آدرس ایمیل</th>
            <th>نوع کاربر</th>
            <th>جنسیت</th>
            <th>کدملی</th>
            <th>--</th>
            <th>--</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in users"
            :key="index"
            style="text-align: right; font-size: 14px; color: aliceblue"
          >
            <td style="width: 5%; padding-top: 10px">
              <a href="#"
                ><img
                  style="width: 20px; height: 20px; border-radius: 5px"
                  src="../../../../public/select.jpg"
              /></a>
            </td>
            <td style="width: 5%; padding-top: 10px">{{ item.id }}</td>
            <td style="width: 10%; padding-top: 10px">
              {{ item.f_name }}
            </td>
            <td style="width: 10%; padding-top: 10px">
              {{ item.l_name }}
            </td>
            <td style="width: 10%; padding-top: 15px">
              {{ item.father_name }}
            </td>
            <td style="width: 21%; padding-top: 15px">
              {{ item.email }}
            </td>
            <td
              v-if="item.role == 1"
              style="width: 10%; padding-top: 15px; font-size: 12px"
            >
              دانش آموز
            </td>
            <td
              v-if="item.role == 2"
              style="width: 10%; padding-top: 15px; font-size: 12px"
            >
              معلم
            </td>
            <td
              v-if="item.role == 3"
              style="width: 10%; padding-top: 15px; font-size: 12px"
            >
              اداری
            </td>
            <td
              v-if="item.gender == 1"
              style="width: 5%; padding-top: 15px; font-size: 12px"
            >
              زن
            </td>
            <td
              v-if="item.gender == 2"
              style="width: 5%; padding-top: 15px; font-size: 12px"
            >
              مرد
            </td>
            <td style="width: 10%; padding-top: 15px">
              {{ item.national_code }}
            </td>
            <td style="width: 7%; padding-top: 10px">
              <router-link
                class="btn btn-success button-table-class"
                :to="{ name: 'editUser', params: { id: item.id } }"
              >
                اصلاح
              </router-link>
            </td>
            <td style="width: 7%; padding-top: 10px">
              <button
                @click="deleteUser(item.id)"
                class="btn btn-danger button-table-class"
              >
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row" style="height: 10%"></div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import UserForm from "@/components/Forms/UserFormComponent.vue";

export default {
  components: {
    UserForm,
  },
  setup() {
    const form = reactive({
      f_name: "",
      l_name: "",
      father_name: "",
      email: "",
      password: "",
      gender: "",
      national_code: "",
      role: "",
      fNameErrorText: "",
      lNameErrorText: "",
      fatherNameErrorText: "",
      emailErrorText: "",
      passwordErrorText: "",
      genderErrorText: "",
      nationalCodeErrorText: "",
      roleErrorText: "",
    });

    const loading = ref(false);
    const users = ref([]);
    const post = ref({});
    const route = useRoute();
    const spinner = ref(true);

    function createUser(formData) {
      loading.value = true;
      axios
        .post("http://127.0.0.1:8000/api/school/user/store", {
          f_name: formData.f_name,
          l_name: formData.l_name,
          father_name: formData.father_name,
          email: formData.email,
          password: formData.password,
          gender: formData.gender,
          national_code: formData.national_code,
          role: formData.role,
        })
        .then(function () {
          getUsers();
          loading.value = false;
          form.f_name = "";
          form.l_name = "";
          form.father_name = "";
          form.email = "";
          form.role = "";
          form.password = "";
          form.gender = "";
          form.national_code = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "نام کاربر با موفقیت در پایگاه داده ثبت گردید",
            icon: "success",
            confirmButtonText: "Ok",
            position: "top",
          });
        })
        .catch(function (error) {
          loading.value = false;
          console.log(error);
          Swal.fire({
            title: "پیغام خطا",
            text: "مشکلاتی در مورد ثبت اطلاعات در پایگاه داده مشاهده گردیده",
            icon: "error",
            confirmButtonText: "Ok",
            position: "top",
          });
        });
    }
    function getUsers() {
      axios
        .get("http://127.0.0.1:8000/api/school/user/users")
        .then(function (response) {
          // handle success
          spinner.value = false;
          users.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function getUser() {
      axios
        .get(`http://127.0.0.1:8000/api/school/user/${route.params.id}`)
        .then(function (response) {
          console.log(response.data);
          // handle success
          post.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function deleteUser(id) {
      Swal.fire({
        title: "آیا مطمئن هستید؟",
        text: "امکان تغییر نظرتان در آینده وجود نخواهد داشت",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "بله ، حذف شود",
        position: "top",
      }).then((result) => {
        getUsers();
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/school/user/remove/${id}`)
            .then(function () {
              Swal.fire({
                title: "Thanks!",
                text: `کاربر با کد (${id}) با موفقیت حذف گردید`,
                icon: "success",
                confirmButtonText: "Ok",
                position: "top",
              });

              axios
                .get("http://127.0.0.1:8000/api/school/user/users")
                .then(function (response) {
                  // handle success
                  users.value = response.data;
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    }
    getUser();
    getUsers();

    return {
      spinner,
      deleteUser,
      post,
      users,
      createUser,
      loading,
    };
  },
};
</script>

<style>
.swal2-content {
  font-size: 14px;
  font-family: Vazir;
}
.swal2-title {
  font-size: 16px;
  font-family: Vazir;
}
.validation-text {
  font-size: 12px;
  font-family: Vazir;
  margin-top: 1px;
}
.button-table-class {
  font-size: 12px;
  width: 95%;
  height: 30px;
}
</style>
