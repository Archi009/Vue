import main from "../components/main.js";
import myMovieList from "../components/movieList.js";
import myMovieDetail from "../components/movieDetail.js";

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "main",
      component: main,
    },
    {
      path: "/movieList",
      name: "movieList",
      component: myMovieList,
    },
    {
      path: "/movieDetail",
      name: "movieDetail",
      component: myMovieDetail,
      props: true,
    },
  ],
});
