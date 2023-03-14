export default {
  template: `<div>
  <h3>제목:{{detail.movieNm}}</h3>
  <div>
    <ul>
      <li>배우: <span v-for="actor in detail.actors">{{actor.peopleNm}}</span></li>
      <li>감독: <span v-for="dir in detail.directors">한글-{{dir.peopleNm}}/영문-{{dir.peopleNmEn}}</span></li>
      <li>장르 <span v-for="genr in detail.genres">{{genr.genreNm}}</span></li>
      <li>상영시간 {{detail.showTm}}</span></li>
    </ul>
  </div>
</div>`,
  props: ["item"],
  data() {
    return {
      detail: {},
    };
  },
  created: function () {
    console.log(this.item.movieCd);
    let num = this.item.movieCd;
    fetch(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=" +
        num
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.movieInfoResult.movieInfo);
        this.detail = data.movieInfoResult.movieInfo;
      });
  },
};
