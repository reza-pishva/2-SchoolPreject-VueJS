<template>
  <div class="row" style="height: 45%">
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
        <ProfileForm
          @formData="createProfile"
          :button-loading="loading"
          button-text="ایجاد پروفایل جدید"
          button-class="btn btn-primary"
          :post="post"
        />
      </div>
    </div>
  </div>
  <div
    class="row"
    style="
      height: 55%;
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
          width: 180%;
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
            <th>کد</th>
            <th>رشته تحصیلی</th>
            <th>شغل پدر</th>
            <th>شماره همراه پدر</th>
            <th>شغل مادر</th>
            <th>شماره همراه مادر</th>
            <th>آدرس</th>
            <th>ملاحظات</th>
            <th>--</th>
            <th>--</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in profiles"
            :key="index"
            style="text-align: right; font-size: 12px; color: aliceblue"
          >
            <td style="width: 4%; padding-top: 10px">
              <a href="#"
                ><img
                  style="width: 20px; height: 20px; border-radius: 5px"
                  src="../../../../public/select.jpg"
              /></a>
            </td>
            <td style="width: 3%; padding-top: 10px">{{ item.id }}</td>
            <td style="width: 7%; padding-top: 10px">
              {{ item.major }}
            </td>
            <td style="width: 8%; padding-top: 10px">
              {{ item.father_job }}
            </td>
            <td style="width: 8%; padding-top: 10px">
              {{ item.father_phone_number }}
            </td>
            <td style="width: 8%; padding-top: 15px">
              {{ item.mother_job }}
            </td>
            <td style="width: 8%; padding-top: 15px">
              {{ item.mother_phone_number }}
            </td>
            <td style="width: 20%; padding-top: 15px">
              {{ item.address }}
            </td>
            <td style="width: 24%; padding-top: 15px">
              {{ item.consideration }}
            </td>
            <td style="width: 5%; padding-top: 10px">
              <router-link
                class="btn btn-success button-table-class"
                :to="{ name: 'editProfile', params: { id: item.id } }"
              >
                اصلاح
              </router-link>
            </td>
            <td style="width: 5%; padding-top: 10px">
              <button
                @click="deleteProfile(item.id)"
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
import ProfileForm from "@/components/Forms/ProfileFormComponent.vue";

export default {
  components: {
    ProfileForm,
  },
  setup() {
    const form = reactive({
      father_job: "",
      mother_job: "",
      father_phone_number: "",
      mother_phone_number: "",
      address: "",
      consideration: "",
      birthday: "",
      user_id: "",
      major: "",
      fatherJobErrorText: "",
      motherJobErrorText: "",
      fatherPhoneNumberErrorText: "",
      motherPhoneNumberErrorText: "",
      addressErrorText: "",
      considerationErrorText: "",
      birthdayErrorText: "",
      userIdErrorText: "",
      majorErrorText: "",
    });

    const loading = ref(false);
    const profiles = ref([]);
    const post = ref({});
    const route = useRoute();
    const spinner = ref(true);

    function createProfile(formData) {
      console.log(formData);
      loading.value = true;
      axios
        .post("http://127.0.0.1:8000/api/school/profile/store", {
          father_job: formData.father_job,
          father_phone_number: formData.father_phone_number,
          mother_job: formData.mother_job,
          mother_phone_number: formData.mother_phone_number,
          consideration: formData.consideration,
          birthday: formData.birthday,
          address: formData.address,
          user_id: formData.user_id,
          major: formData.major,
        })
        .then(function () {
          getProfiles();
          loading.value = false;
          form.father_job = "";
          form.father_phone_number = "";
          form.mother_job = "";
          form.mother_phone_number = "";
          form.address = "";
          form.consideration = "";
          form.birthday = "";
          form.major = "";
          Swal.fire({
            title: "ذخیره شد",
            text: "اطلاعات کاربر با موفقیت در پایگاه داده ثبت گردید",
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
    function getProfiles() {
      axios
        .get("http://127.0.0.1:8000/api/school/profile/profiles")
        .then(function (response) {
          // handle success
          spinner.value = false;
          profiles.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function getProfile() {
      axios
        .get(`http://127.0.0.1:8000/api/school/profile/${route.params.id}`)
        .then(function (response) {
          // console.log(response.data);
          // handle success
          post.value = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    function deleteProfile(id) {
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
        getProfiles();
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/school/profile/remove/${id}`)
            .then(function () {
              Swal.fire({
                title: "Thanks!",
                text: `اطلاعات کاربر با کد (${id}) با موفقیت حذف گردید`,
                icon: "success",
                confirmButtonText: "Ok",
                position: "top",
              });

              axios
                .get("http://127.0.0.1:8000/api/school/profile/profiles")
                .then(function (response) {
                  // handle success
                  profiles.value = response.data;
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
    getProfile();
    getProfiles();

    return {
      spinner,
      deleteProfile,
      post,
      profiles,
      createProfile,
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
