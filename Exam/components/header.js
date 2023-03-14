export default {
  template: `<header>
  <h2>영화 검색 사이트</h2>
  <h2>영화 검색 [오늘 날짜 : {{date}}]</h2>
  <br />
  <input type="date" v-model="mday" max="{{date}}"/><button
    type="button"
    @click="loadData($event)"
  >
    검색
  </button>
</header>`,
  props: ["parentData"],
  data() {
    return {
      mday: "",
      date: "",
    };
  },
  created: function () {
    this.date = this.today();
  },
  methods: {
    loadData: function () {
      // let mday = event;
      console.log(this.mday);
      fetch(
        "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230311"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.boxOfficeResult.dailyBoxOfficeList);
          this.parentData.dataArray = data.boxOfficeResult.dailyBoxOfficeList;
          console.log(this.parentData);
          this.$emit("update:parentData", this.parentData);
          this.$router.push({ name: "movieList" });
        })
        .catch((err) => console.log(err));
    },
    today: function () {
      let today = new Date();

      let year = today.getFullYear();
      console.log("today.getMonth()" + today.getMonth());
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      console.log("today.getDate()" + today.getDate());
      let day = ("0" + today.getDate()).slice(-2);

      return year + " " + month + " " + day;
    },
    divide: function () {
      let dateArray = this.date.split(" ");
      console.log(dateArray);
    },
  },
};
