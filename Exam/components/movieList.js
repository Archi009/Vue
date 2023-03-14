export default {
  template: `<div>
  <table id="list">
      <thead>
      <tr>
          <th style="width:50px;">순위</th>
          <th style="width:50px;">영화제목</th>
          <th style="width:70px;">누적관객수</th>
          <th style="width:70px;">개봉 날짜</th>
          <th style="width:70px;"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in object" v-bind:key="item.rnum">
          <td>{{ item.rank }}</td>
          <router-link tag="td":to="{name:'movieDetail', params:{'item':item}}">{{item.movieNm}}</router-link>
          <td>{{ item.audiAcc }}</td>
          <td>{{ item.openDt }}</td>
          <td><button v-on:click="boardDelete(item.rnum)">삭제</button></td>
      </tr>
      </tbody>
  </table>
  </div>`,
  data: function () {
    return {
      object: [],
    };
  },

  created: function () {
    this.object = this.$parent.getParentData();
    console.log(this.object);
  },
  methods: {
    boardDelete: function (rnum) {
      for (let i = 0; i < this.object.length; i++) {
        if (this.object[i].rnum == rnum) {
          this.object.splice(i, 1);
        }
      }

      this.$parent.setParentData(this.object);
    },
  },
};
