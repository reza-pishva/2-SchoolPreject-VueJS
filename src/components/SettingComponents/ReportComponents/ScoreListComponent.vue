<template>
  <div
    style="
      width: 95%;
      height: 300px;
      overflow: scroll;
      border: 1px solid beige;
      border-radius: 5px;
      /* background-color: dimgray;
      opacity: 0.6;
      filter: alpha(opacity=100); */
    "
  >
    <table
      class="table table-bordered"
      style="
        font-family: Vazir;
        font-size: smaller;
        text-align: center;
        margin-top: 0px;
        margin-right: 15px;
        direction: rtl;
        width: 95%;
      "
    >
      <thead>
        <tr
          class="sticky"
          style="
            background-color: rgb(83, 112, 166);
            color: rgb(254, 254, 255);
            font-size: 12px;
          "
        >
          <th>--</th>
          <th>نام درس</th>
          <th>نوع امتحان</th>
          <th>مقطع تحصیلی</th>
          <th>تاریخ</th>
          <th>نمره</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in usersScore"
          :key="index"
          style="text-align: right; font-size: 12px; color: aliceblue"
          v-bind:class="{ 'selected-row': index === selectedRowIndex }"
        >
          <td style="width: 5%; padding-top: 10px">
            <a
              v-on:click="
                selectRow(
                  index,
                  item.grade_id,
                  item.f_name,
                  item.l_name,
                  item.user_id
                )
              "
              href="#"
              ><img
                style="width: 20px; height: 20px; border-radius: 5px"
                src="../../../../public/select.jpg"
            /></a>
          </td>
          <td style="width: 20%; padding-top: 10px">
            {{ item.lesson_name }}
          </td>
          <td style="width: 20%; padding-top: 10px">
            {{ item.exam_type }}
          </td>
          <td style="width: 20%; padding-top: 10px">
            {{ item.grade_name }}
          </td>
          <td style="width: 20%; padding-top: 15px">
            {{ item.updated_at }}
          </td>
          <td style="width: 15%; padding-top: 15px; text-align: center">
            {{ item.score }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    usersScore: Array,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
