<template>
  <div>
    <div
      class="movies-temp"
      @tap="handleToMovieDetailClick(index)"
      v-for="(item,index) in movieList"
      :key="index"
    >
      <div class="movies-left">
        <img src="/static/images/index/cart.jpg" alt />
        <div class="movies-info">
          <p class="movies-title">{{item.title}}</p>
          <p>年份：{{item.year}}</p>
          <p>导演：{{item.directors[0].name}}</p>
        </div>
      </div>
      <p class="movies-grade">{{item.rating.average}}</p>
    </div>
  </div>
</template>
<script>
const MOVIE_URL = "http://t.yushu.im/v2/movie/top250";
export default {
  data() {
    return {
      movieList: []
    };
  },
  beforeMount() {
    this.$http.get(MOVIE_URL).then(resu => {
      console.log(resu);
      if (resu.status == 200) {
        this.movieList = resu.data.subjects;
        // this.$store.dispatch("getList");
        this.$store.dispatch("getMovieList", this.movieList);
      }
    });
  },
  methods: {
    handleToMovieDetailClick(index) {
      wx.navigateTo({
        url: "/pages/movieDetail/main?index=" + index
      });
    }
  }
};
</script>
<style scoped>
.movies-temp {
  display: flex;
  padding: 20rpx 40rpx 20rpx 20rpx;
  justify-content: space-between;
  border-bottom: 1rpx solid #ccc;
}
.movies-temp .movies-grade {
  font-weight: 700;
  color: red;
}
.movies-temp img {
  width: 120rpx;
  height: 120rpx;
  margin-right: 20rpx;
}
.movies-info {
  font-size: 28rpx;
}
.movies-info .movies-title {
  font-size: 32rpx;
  font-weight: 700;
  width: 440rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.movies-left {
  display: flex;
}
</style>