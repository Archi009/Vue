export default {
  template: `<div>
  <table id="list">
      <tr>
          <td>글제목</td>
          <td><input type="text" style="width:90%; " v-model="title"></td>
      </tr>
      <tr>
          <td colspan="2">
              <textarea style="width:100%;" v-model="content"></textarea>
          </td>
      </tr>     
  </table>
  <router-link tag="button" style="float:right;" v-bind:to="{name:'boardList'}">목록</router-link>
  <button style="float:right;" v-on:click="boardSave">저장</button>
</div>`,
  data: function () {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    boardSave: function () {
      let dataList = this.$parent.getParentData();
      let no = 1;
      // if (this.object.length != 0) {
      //   let index = this.object.length - 1;
      //   no = parseInt(this.object[index].no) + 1;
      // }
      if (dataList.length != 0) {
        //데이터가 총 3건 -> length 3->배열 [3] ->4번째
        let index = dataList.length - 1;
        //index를 활용하여 마지막 게시판 on을 가지고 온 뒤
        //+1 -> 마지막 게시판 번호
        no = parseInt(dataList[index].no) + 1;
      }
      // this.$parent.setParentData("board-save", this.title, this.content);
      let boardInfo = {
        no: no,
        title: this.title,
        content: this.content,
        view: "1",
      };
      dataList.push(boardInfo);
      this.$parent.setParentData(dataList);
      this.$router.push({ name: "boardList" });
    },
  },
};
