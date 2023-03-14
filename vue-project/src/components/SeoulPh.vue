<template>
  <div>
    <h1 @click="makeList">수도권 미세먼지 농도</h1>
    <table>
      <thead>
        <tr>
          <th>지역</th>
          <th>미세먼지 농도/대기질</th>
          <th>미세먼지 농도/대기질</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.idx" v-for="item in sampleData">
          <td>{{ item.MSRSTE_NM }}</td>
          <td>{{ item.PM10 }}/{{ item.status }}</td>
          <td>{{ item.PM25 }}/{{ item.statusSuper }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sampleData: {},
    };
  },
  methods: {
    makeList() {
      fetch(
        "https://cors-anywhere.herokuapp.com/http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.RealtimeCityAir.row);
          this.sampleData = data.RealtimeCityAir.row;
          console.log(this.sampleData);
          for (let i = 0; i < this.sampleData.length; i++) {
            if (this.sampleData[i].PM10 > 100) {
              this.sampleData[i].status = "나쁨";
            } else {
              this.sampleData[i].status = "좋음";
            }
            if (this.sampleData[i].PM25 > 35) {
              this.sampleData[i].statusSuper = "나쁨";
            } else {
              this.sampleData[i].statusSuper = "좋음";
            }
          }
        });
    },
  },
};
</script>
