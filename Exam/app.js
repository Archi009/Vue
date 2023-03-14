import myHeader from "./components/header.js";
import router from "./router/router.js";
let template = `
<div>
<my-header v-bind:parentData.sync="this.$data"></my-header>
<router-view></router-view>
</div>`;

new Vue({
  el: "#app",
  template: template,
  data: {
    dataArray: {},
  },
  components: {
    "my-header": myHeader,
  },
  methods: {
    //데이터 조회
    getParentData: function () {
      return this.dataArray;
    },
    //데이터 변경
    setParentData: function (dataList) {
      this.dataArray = dataList;
    },
  },
  router,
});
