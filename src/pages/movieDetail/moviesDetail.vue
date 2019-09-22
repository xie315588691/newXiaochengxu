<template>
  <div>
    <div class="movies-detail" v-if="movieInfo.images">
      <img src="/static/images/index/cart.jpg" alt />
      <p class="movies-title">{{movieInfo.title}}</p>
      <div>
        <p>评分：{{movieInfo.rating.average}}</p>
        <p>导演：{{movieInfo.directors[0].name}}</p>
        <p>主演：{{movieInfo.casts[0].name}} |{{movieInfo.casts[1].name}} |{{movieInfo.casts[2].name}}</p>
      </div>
      <button>我要观剧</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      movieList: [],
      movieInfo: {}
    };
  },
  computed: {
    ...mapState(["moviesArr"])
  },
  beforeMount() {
    this.movieInfo = this.moviesArr[this.$mp.query.index];
  }
};
</script>
<style scoped>
.movies-detail {
  padding: 40rpx 80rpx;
}
.movies-detail img {
  width: 100%;
}
.movies-detail p {
  font-size: 28rpx;
}
.movies-detail .movies-title {
  text-align: center;
  font-size: 32rpx;
  font-weight: 700;
}
.movies-detail button {
  font-size: 32rpx;
  margin-top: 30rpx;
  background-color: green;
}
</style>