<template>
  <div class="listContainer">
    <swiper indicator-dots="true" autoplay="true" interval="2000">
      <swiper-item>
        <img src="http://www.hzhpgs.com/templets/pc/images/01.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="http://www.hzhpgs.com/templets/pc/images/02.jpg" alt />
      </swiper-item>
    </swiper>
    <div>
      <listTem v-for="(item,index) in listTmp" :key="index" :item="item" :index="index" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import listTem from "../listTemple/index.vue";

export default {
  components: {
    listTem
  },

  beforeMount() {
    this.$store.dispatch("getList");
  },
  methods: {},
  computed: {
    ...mapState(["listTmp"])
  },
  created() {}
};
</script>

<style scoped>
.listContainer swiper {
  width: 100%;
  height: 400rpx;
}

.listContainer swiper img {
  width: 100%;
  height: 100%;
}
</style>
