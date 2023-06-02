<template>
  <div class="row" style="height: 20%">
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
                      placeholder="نوع امتحان:"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group" style="font-size: x-small">
                    <button type="submit" class="btn btn-primary">ثبت</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="row" style="height: 80%">
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
