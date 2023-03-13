import main from "../components/main.js";
import myBoardList from "../components/myBoardList.js";
import myBoardRead from "../components/myBoardRead.js";
import myBoardWrite from "../components/myBoardWrite.js";

//밖으로 내보낼때 Vue ruouter형태로 내보내겠다
export default new VueRouter({
  //hash -> # + 경로 (server로 용청을 보내지 않고 페이지 이동)
  //url # 뒤에 있는 경로를 읽을 수가 없습니다.
  //history -> 주소에서 #을 제외하고 SPA 구현하기 위한 모드
  //
  //mode default 값 : hash
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "main",
      component: main,
    },
    //boardList
    {
      path: "/boardList",
      name: "boardList",
      component: myBoardList,
    },
    {
      //parameter로 어떤 값을 받겠다

      path: "/boardRead/:item",
      name: "boardRead",
      component: myBoardRead,
      //부모로 부터 모든 데이터 받기 허용
      props: true,
    },
    {
      path: "/boardWrite",
      name: "boardWrite",
      component: myBoardWrite,
    },
  ],
});
