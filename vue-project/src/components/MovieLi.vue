<template>
  <div>
    <button type="button" @click="getData">영화</button>
    <!-- table>thead>tr>th*5 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      movieList: [],
    };
  },
  methods: {
    getData() {
      fetch(
        "	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.boxOfficeResult.dailyBoxOfficeList);
        });
    },
  },
};
</script>
