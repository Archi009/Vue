<template>
  <div>
    <button type="button" @click="getData">gimhae</button>

    <table style="width: 100%; border: 1px solid black">
      <thead>
        <tr>
          <th>이름</th>
          <th>주소</th>
          <th>홈페이지</th>
          <th>사진</th>
          <th>전화번호</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.idx" v-for="item in gimhaeArray">
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>
            <a :href="item.homepage">{{ item.homepage }}</a>
          </td>
          <td><img :src="item.images" style="width: 100px" /></td>
          <td>{{ item.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gimhaeArray: [],
    };
  },
  methods: {
    getData() {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://www.gimhae.go.kr/openapi/tour/tourinfo.do"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.gimhaeArray = data.results;
          console.log(this.gimhaeArray);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
