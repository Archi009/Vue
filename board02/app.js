//단일 파일 컴포넌트
//부모 컴포넌트
//components 폴더에 자식 컴포넌트
import myHeader from "./components/header.js";
// import myBoardList from "./components/myBoardList.js";
// import myBoardRead from "./components/myBoardRead.js";
// import myBoardWrite from "./components/myBoardWrite.js";
//router로 옮겨서 사용
import router from "./router/router.js";

//$를 붙여서 변수명을 쓰면 객체의 같은 변수명의 데이터를 가져온다.
let template = `
<div>
<my-header v-bind:parentData.sync="this.$data"></my-header>
<router-view></router-view>
</div>`;

new Vue({
  el: "#app",
  //#app아래에 위의 template를 넣어줘야,
  template: template,
  data: {
    dataArray: {}, // 파일에서 읽은 데이터
  },
  components: {
    //공통으로 사용할 기능을 headerComponent로 이동
    "my-header": myHeader,
  },
  methods: {
    //data를 주고 받을 수 있도록 데이터 관련 함수
    getParentData: function () {
      return this.dataArray["board"];
    },
    setParentData: function (dataList) {
      this.dataArray["board"] = dataList;
    },
  },
  router,
});
