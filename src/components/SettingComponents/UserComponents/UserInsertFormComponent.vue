<template>
  <div class="row" style="height: 40%">
    <div class="col">
      <div
        style="
          background-color: rgb(146, 204, 233);
          margin-left: 30px;
          height: 95%;
          border-radius: 6px;
          padding-top: 10px;
          padding-left: 5px;
          padding-right: 5px;
        "
      >
        <form style="direction: rtl; font-family: Vazir">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: xx-small">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="پست الکترونیکی"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="کلمه عبور"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="نوع کاربر:"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="نام:"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="نام خانوادگی:"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="نام پدر:"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="کد ملی:"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="جنسیت:"
                    />
                  </div>
                </div>
                <div class="col">
                  <button type="submit" class="btn btn-primary">ثبت</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="row" style="height: 60%">
    <div class="col"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {},
  methods: {},
};
</script>

<style></style>
