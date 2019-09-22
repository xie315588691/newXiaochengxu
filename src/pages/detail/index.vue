<template>
  <div class="detailContainer">
    <div class="detail-header">
      <img :src="detailObj.detail_img" alt class="detail-banner" />
      <img
        :src="isPlay?'/static/images/music/music-start.png':'/static/images/music/music-stop.png'"
        alt
        class="detail-music"
        @click="handleMusicPlay"
      />
    </div>

    <div class="detail-author">
      <img :src="detailObj.avatar" alt />
      <span>{{detailObj.author}} 发布于 {{detailObj.date}}</span>
    </div>
    <h2>{{detailObj.title}}</h2>
    <div class="detail-share">
      <img
        :src="isSelect?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'"
        altc
        @click="toggleSelect"
      />
      <img src="/static/images/icon/share.png" @tap="handleShowClick" alt />
    </div>
    <button class="detail-forward" open-type="share">转发此文章</button>
    <div>{{detailObj.detail_content}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import isPlyObj from "../../data/isPlay.js";

export default {
  data() {
    return {
      msg: "detail",
      index: null,
      detailObj: {},
      isSelect: false,
      isPlay: false
    };
  },

  beforeMount() {
    // console.log(this.$mp);
    this.index = this.$mp.query.index;
    let oldStorage = wx.getStorageSync("isSelected") || {};
    if (!oldStorage) {
      wx.setStorage({
        key: "isSelected",
        data: {}
      });
    } else {
      this.isSelect = oldStorage[this.index] ? true : false;
    }
    isPlyObj.index == this.index && isPlyObj.isPlay
      ? (this.isPlay = true)
      : (this.isPlay = false);
    wx.onBackgroundAudioPlay(() => {
      this.isPlay = true;
    });
    wx.onBackgroundAudioPause(() => {
      this.isPlay = false;
    });

    console.log(oldStorage);
  },
  computed: {
    ...mapState(["listTmp"])
  },
  methods: {
    toggleSelect() {
      this.isSelect = !this.isSelect;
      let title = this.isSelect ? "收藏成功" : "取消收藏";
      let oldStorage = wx.getStorageSync("isSelected") || {};
      oldStorage[this.index] = this.isSelect;
      wx.showToast({
        title,
        icon: "success"
      });
      wx.setStorage({
        key: "isSelected",
        data: oldStorage
      });
    },
    handleMusicPlay() {
      this.isPlay = !this.isPlay;
      const { dataUrl, title } = this.detailObj.music;
      if (this.isPlay) {
        wx.playBackgroundAudio({
          dataUrl,
          title
        });
      } else {
        wx.pauseBackgroundAudio();
      }
    },
    handleShowClick() {
      wx.showActionSheet({
        itemList: ["A", "B", "C"]
      });
  
    }
  },
  mounted() {
    this.detailObj = this.listTmp[this.index];
  }
};
</script>

<style scoped>
.detailContainer .detail-banner {
  height: 400rpx;
  width: 100%;
}

.detail-header {
  height: 400rpx;
  width: 100%;
  position: relative;
}
.detail-header .detail-music {
  width: 60rpx;
  height: 60rpx;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.detail-author {
  display: flex;
  vertical-align: middle;
  font-size: 32rpx;
  line-height: 70rpx;
}
.detail-author img {
  width: 70rpx;
  height: 70rpx;
  vertical-align: middle;
}
.detailContainer h2 {
  font-size: 36rpx;
  font-weight: 700;
  text-align: center;
}
.detail-share {
  display: flex;
  justify-content: flex-end;
  padding-right: 20rpx;
}
.detail-share img {
  width: 80rpx;
  height: 80rpx;
}
.detail-forward {
  width: 220rpx;
  font-size: 28rpx;
}
</style>
