<!--  -->
<template>
  <div>
    <div class="home">
      <img src="../assets/imgs/res.png" alt class="imgs">
      <h1 class="home_h1">申请已提交</h1>
    </div>
    <p class="home_p">预计一两个工作日会和您电话联系</p>
    <yd-button size="large" type="primary" shape="circle" class="home_btn">完成</yd-button>
  </div>
</template>

<script>
import * as apis from "@/api/apis.js";
export default {
  data() {
    return {
      ewm: ""
    };
  },

  components: {},

  computed: {},
 
  
};
</script>
<style  scoped>
.home {
  padding: 2.22rem 2.26rem 0 2.28rem;
  box-sizing: border-box;
}
.imgs {
  width: 2.96rem;
  height: 2.96rem;
  background-size: cover;
}
.home_h1 {
  font-size: 0.36rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.5rem;
  text-align: center;
  margin-top: 0.4rem;
}
.home_p {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(164, 164, 164, 1);
  line-height: 0.4rem;
  text-align: center;
}
.home_btn {
  width: 4.64rem !important;
  height: 0.96rem !important;
  background: rgba(241, 89, 81, 1) !important;
  border-radius: 1rem !important;
  margin: 0 auto;
  position: absolute;
  bottom: 2.18rem;
  left: 1.41rem;
  font-size: 0.44rem;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 0.6rem;
}

</style>