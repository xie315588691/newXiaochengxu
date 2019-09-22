<template>
  <div @tap="toDetal" class="listTempContainer">
    <div class="listTemp-user">
      <img :src="item.avatar" alt />
      <span>{{item.date}}</span>
    </div>
    <p>{{item.title}}</p>
    <div class="tem-img">
      <img :src="item.detail_img" alt />
    </div>
    <p class="temp-main">{{item.detail_content}}</p>
    <div>
      <!-- <img src alt /> -->
      <span>88</span>
      <!-- <img src alt /> -->
      <span>66</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  data() {
    return {
      motto: "template"
    };
  },

  methods: {
    toDetal() {
      wx.navigateTo({
        url: "/pages/detail/main?index=" + this.index
      });
    }
  },

  created() {}
};
</script>

<style scoped>
.listTempContainer {
  padding: 20rpx;
}

.listTemp-user {
  display: flex;
}

.listTemp-user img {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  margin-right: 30rpx;
}

.listTemp-user span {
  line-height: 60rpx;
  font-size: 32rpx;
}

.listTempContainer > p {
  font-weight: 700;
  font-size: 32rpx;
}

.tem-img img {
  width: 100%;
  height: 400rpx;
}

.listTempContainer .temp-main {
  font-size: 28rpx;
  font-weight: 400;
  word-spacing: 20rpx;
  /* letter-spacing: 20rpx; */
}
</style>
