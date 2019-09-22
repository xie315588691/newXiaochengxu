<template>
  <div class="indexPage">
    <img src="/static/images/user.png"/><br/>
    <p>mpvue首页</p>
    <div @click="handeleDetail">{{motto}}</div>


  </div>
</template>

<script>

  export default {
    data() {
      return {
        motto: '欢迎光临',

      }
    },

    methods: {
      handeleDetail(){
        wx.switchTab({
          url:'/pages/counter/main'
        })
      }
    },

    created() {

    }
  }
</script>

<style>
  page{
    background-color: #ff5722;
  }
  .indexPage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .indexPage img {
    margin-top: 100rpx;
    width: 200rpx;
    height: 200rpx;
    border-radius: 50%;
  }
  .indexPage p{
    margin-top: 200rpx;
  }
  .indexPage div{
    height: 80rpx;
    padding: 5rpx 30rpx;
    border: 1rpx solid #fff;
    line-height: 80rpx;
    margin-top: 50rpx;
    text-align: center;
  }
</style>
