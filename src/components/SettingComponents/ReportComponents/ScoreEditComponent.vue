<template>
  <form @submit.prevent="validate" style="direction: rtl; font-family: Vazir">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="form-group" style="font-size: xx-small">
              <input
                v-model.lazy.trim="form.email"
                style="font-size: 12px"
                type="email"
                class="form-control"
                placeholder="پست الکترونیکی"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <input
                v-model.lazy.trim="form.password"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="کلمه عبور"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-family: Vazir">
              <select
                v-model="form.role"
                class="form-select"
                style="font-size: small"
              >
                <option value="" selected>نوع کاربر:</option>
                <option value="1">دانش آموز</option>
                <option value="2">معلم</option>
                <option value="3">اداری</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group" style="font-size: x-small">
              <input
                v-model.lazy.trim="form.f_name"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="نام:"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-size: x-small">
              <input
                v-model.lazy.trim="form.l_name"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="نام خانوادگی:"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group" style="font-size: x-small">
              <input
                v-model.lazy.trim="form.father_name"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="نام پدر:"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="form-group" style="font-size: x-small">
              <input
                v-model.lazy.trim="form.national_code"
                style="font-size: 12px"
                type="text"
                class="form-control"
                placeholder="کد ملی:"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="form-group" style="font-family: Vazir">
              <select
                v-model="form.gender"
                class="form-select"
                style="font-size: small"
              >
                <option value="" selected>جنسیت:</option>
                <option value="1">زن</option>
                <option value="2">مرد</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <button type="submit" class="btn btn-primary button-class">
              ثبت
              <div
                v-if="buttonLoading"
                class="spinner-border spinner-grow-sm"
                role="status"
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style></style>
