//모듈
//export default -> 정의한 내용을 다른 곳에서 불러 쓸 수 있도록 한다.
//해당 모듈 불러 와서 쓸 때에는 import
export default {
  template: `
  <header>
  <h2>간단한 게시판</h2>
      <p>게시판 데이터 json 파일 읽기</p>
      <!-- board.json 파일 읽어오는 부분 -->
      <!-- ajax, fetch 파일 읽고 화면 출력 -->
      <input type="file" v-on:change="loadData($event)" />

      <!-- 화면에 보여지는 게시글 json 파일로 다운로드 -->
      <button v-on:click="saveBoardList">게시판 저장하기</button>
      </header>
  `,
  props: ["parentData"],
  methods: {
    loadData: function (event) {
      // 파일을 읽어들이는 메소드
      let file = event.target.files[0].name;
      if (file) {
        fetch("/board02/data/" + file)
          .then((response) => response.json())
          .then((data) => {
            // this.dataArray = data;
            //dataArray는 부모의 변수이므로
            this.parentData.dataArray = data;
            // if (this.dataArray != null && this.dataArray["board"].length > 0) {
            //   this.listOk = true;
            // }
            // if (
            //   this.parentData.dataArray != null &&
            //   this.parentData.dataArray["board"].length > 0
            // ) {
            //   this.parentData.listOk = true;
            // }
            this.$emit("update:parentData", this.parentData);

            //<router=link to="/boardList">이동</router-link>
            //+
            //click 가지 진행
            //$router.push
            //header의 경우 컴포넌트가 따로 분리돼있기 때문에 데이터를 출력하는 부분<router-view>이 없어 이동과 함께 데이터를 boarderList로 보내준다.
            this.$router.push({ name: "boardList" });
          })
          .catch((err) => console.log(err));
      }
    },
    saveBoardList: function () {
      //게시글을 담고 있는 변수 - object
      let data = this.dataArray;

      if (data.length == 0) {
        alert("저장할 게시판 내용이 없습니다.");
        return;
      }

      if (typeof data === "object") {
        //object 를 json 형태의 문자열로 변화
        data = JSON.stringify(data, undefined, 4);
      }

      //파일 다운 받기 위해서 사용
      //이미지 , 텍스트 다운
      let blob = new Blob([data], { type: "text/json" });
      let a = document.createElement("a");
      //a.download 자동 다운로드 ; 클릭시 아묻따 다운 기능
      //board.json 다운 받을 파일 명
      a.download = "board.json";
      //서버에서 다운 받을 파일 URL(경로)
      a.href = window.URL.createObjectURL(blob);
      //a태그 클릭 이벤트 실행
      a.click();
    },
  },
};
